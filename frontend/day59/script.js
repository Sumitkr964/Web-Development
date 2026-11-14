// Asynchronous JS

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");           //output - A C B

// Callback
function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

greet("abc", () => {
  console.log("Welcome!");
});
