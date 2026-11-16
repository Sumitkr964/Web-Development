// Promises

const prm = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed!");
  }
});
prm
  .then(result => {
    console.log(result); // Operation Successful!
  })
  .catch(error => {
    console.error(error);
  });


// fetch

fetch(`https://randomuser.me/api/`) 
.then( function(data){
    let d = data.json();
    return d;
})
.then(function(dat){
    console.log(dat.results[0].name.first)
})