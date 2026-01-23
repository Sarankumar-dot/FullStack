console.log(Boolean(0)); // returns false

console.log(Boolean("string")); // true cuz there is a string present

console.log(Boolean("")); // false because of an empty string


let user = "";

let loggedIn = user || "guest";// this will add the guest to loggeIn if user is empty
console.log(Boolean(loggedIn));



// some of the truthy values are
// non empty string , numbers , empty object , empty array , empty function , Symbol() , new Date()

// "0" , "false" these two looks falsy but they are strings considered to be true

let obj = {};
console.log(Boolean(obj));

let arr = [];
console.log(Boolean(arr));

// some falsy values are 
// 0 , -0 , 0n - BigInt's zero , null , undefined , "" empty string , Nan