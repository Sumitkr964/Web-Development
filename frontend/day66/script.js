// Introduction to React 

// Basic Understanding
// Array Destructuring
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

const user = {
  name: "ABC",
  age: 20,
  role: "Developer"
};

const { name, age } = user;

console.log(name); // ABC
console.log(age);  // 20

// Spread Operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1,2,3]

const user1 = { name: "Anuj", age: 22 };

const copy = { ...user1 };

console.log(copy);


// Rest Operator (...)
const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // 10
console.log(rest);  // [20,30,40]

const user2 = {
  name: "Anu",
  age: 23,
  role: "Developer"
};

const { name1, ...others } = user2;

console.log(name1);   // Anubhav
console.log(others); // { age: 24, role: "Developer" }


// Import and Export in JavaScript
import area, { PI } from "./test.js";

console.log(PI);
console.log(area(5));