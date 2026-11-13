let Person = class {
  constructor(name) {
    this.name = name;
  }
};

const p = new Person("abc");
console.log(p.name);


let Car = class CarClass {
  constructor(model) {
    this.model = model;
  }
};

const c = new Car("BMW");
console.log(c.model);


// const obj = new Student();  //  ReferenceError

// class Student {
//   constructor() {}
// }


class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
d.bark();



class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    this._name = value;
  }
}

const u = new User("harsh");
console.log(u.name);
u.name = "sharma";
console.log(u.name);


function Animl() {               //before ES6 method
  this.name = "harsh";
}

new Animl();


function Animals(name) {
  this.name = name;
}

Animals.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

const cat = new Animals("Kitty");
cat.speak();