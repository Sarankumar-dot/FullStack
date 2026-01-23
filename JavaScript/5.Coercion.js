// javaScript automatically converts one datatype into another to perform an operation

let a = 10;
let b = a +"";
console.log(typeof(b)); // here a is automatically converted to string by javaScript

// another example

let c = 10;
let v = c - "7";
console.log(v); // this will return 3 because javaScript subtracts becausethe usage of "-" operator
console.log(typeof(v)); // this will return number

//another example

let m = 10 +"0";
console.log(m);// prints hundred due to string addition
console.log(typeof(m));// string type