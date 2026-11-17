// Error Handling

// SyntaxError
// if (true {
//     console.log("Hello");
// }

// RuntimeError 
// function demo() {
//   console.log(a);  // ReferenceError: a is not defined
// }
// demo();

// LogicalError
// function multiply(a, b) {
//   return a + b;   // Wrong logic → logical error
// }

// console.log(multiply(5, 3)); // 8 instead of 15


// try {
//   let result = x + 5;   // x is not defined → error
// } catch (error) {
//   console.log("Error occurred:", error);
// }


// try {
//   let obj = undefined;
//   obj.name; // TypeError
// } catch (err) {
//   console.log("Name:", err.name);
//   console.log("Message:", err.message);
//   console.log("Stack:", err.stack);
// }

// finally
// try {
//   console.log("Opening file...");
//   throw new Error("File corrupted");
// } catch (error) {
//   console.log("Error:", error.message);
// } finally {
//   console.log("Closing file...");
// }

// Throwing a simple error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}