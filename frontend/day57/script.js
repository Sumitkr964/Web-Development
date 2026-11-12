// const obj = {
//   name: "abc",
//   show() {
//     console.log(this.name);
//   }
// };

// obj.show();

// some value of this
console.log(this);  // window (in browser)


function show() {
  console.log(this);  
}
show();  // window


const obj = {
  name: "ABC",
  fnc: function () {
    console.log(this);  // obj
  }
};

obj.fnc();


const obje = {
  name: "ABC",
  show: () => {
    console.log(this);  // window
  }
};

obje.show()


const objec = {
  name: "abc",
  outer() {
    function inner() {
      console.log(this);  // window
    }
    inner();
  }
};

objec.outer();


const object = {
  name: "ABC",
  outer() {
    const inner = () => {
      console.log(this);  // obj
    };
    inner();
  }
};

object.outer();

// call
// function hello() {
//   console.log(`Hello ${this.name}`);
// }

// hello.call({ name: "abc" });

// apply
// function sum(a, b) {
//   console.log(this.name, a + b);
// }

// sum.apply({ name: "Total:" }, [10, 20]);

// bind
// function welcome() {
//   console.log("Welcome", this.user);
// }

// const newFn = welcome.bind({ user: "xyz" });
// newFn();

