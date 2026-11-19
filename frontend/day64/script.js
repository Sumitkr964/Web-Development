// Debouncing

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const searchInput = document.getElementById("search");

function fetchResults(query) {
  console.log("API Request for:", query);
}

const debouncedSearch = debounce(fetchResults, 500);

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
}); 


// Throttling

function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const btn = document.getElementById("submit");

const throttledClick = throttle(() => {
  console.log("Button clicked!");
}, 1000);

btn.addEventListener("click", throttledClick);