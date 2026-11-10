const user = {
  name: "abc",
  age: 20,
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

user.greet();

class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

const car1 = new Car("maruti", 500000);
car1.drive();


class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student("xyz", 22);

