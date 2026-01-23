//  the most used operators are && and || 

let a = 10;
let b = "saran";
let c = null;

console.log(a || b); // returns the first element that is available 
console.log(c || b); // returns only the element which is not null 
console.log(a&&b); // while we are using and with two values then it will always return the second value only


// eg

function name(name){
    console.log(`Hello ,${name || "visitor"}!`);
}

name();
name("saran")
