// let word = prompt("enter word :");
// let counter =0;
// while (word !== "stop") {
//     if (word === "yes") counter++;
//     word = prompt("enter word :");

// }
// console.log(counter);
// let sum =0;
// for(let i=1; i<31; i++){
//     if(i%2 ===1){
//         sum +=i;
//     }
// }
// console.log(sum);

// day36

// ATM Simulator
// let balance =1000;
// let transcation = 1;
// while (transcation < 4){
//     let withdraw = +prompt("enter withdraw amount : ");
//     if (balance - withdraw >=0 && transcation < 4){
//         console.log(`balance amount ${balance - withdraw}`)
//         balance = balance - withdraw;
//         transcation++;
//     }
//     else {
//         console.error("insufficient balance !");
//         break;
//     }
// }

// function

function doSomething (){
    console.log(arguments[2]);
}
doSomething("abc",20,"a2z");