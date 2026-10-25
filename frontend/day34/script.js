// let age = prompt("age batao");
// if(age === null){
//     console.error("you cancelled it");
// }
// else{
//     if(age.trim() === "") {
//         console.log("write something...");

//     }
//     else{
//         age = Number(age);
//         if (isNaN(age)) {
//             console.error("enter a number");
//         }
//         else{
//             console.log(`your age is ${age}`);
//         }
//     }
// }

// if (age >= 18) {
//     console.log("eligble");

// }
// else if(age < 0){
//     console.error("enter correct age");
// }
// else {
//     console.log(" not eligble");
// }


// for (let i=1; i<11; i++) {
//     console.log(`38 X ${i} = ${i*38}`);
// }


// let count =0;
// for(let i=1; i<16; i++) {
//     if(i>8){
//         count++;
//         console.log(i);
//     }
// }
// console.log(`'your total count is ${count}'`);

// let password = "harshbhai";

// let pswd = prompt("enter password : ");
// if(password === pswd) {
//     console.log("access granted");
// }
// else{
//     console.log("wrong password!")
// }

let password = "harshbhai";
let attempts =1;
while (attempts < 4) {
    let pswd = prompt("enter password : ");
    if(password === pswd) {
        console.log("access granted");
        break;
    }
    else{
        // console.log("wrong password!")
        attempts++;
    }
}
if(attempts === 4){
    console.log("account blocked!")

}