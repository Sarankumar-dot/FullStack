// we can use typeof() to find types

console.log(typeof("hello"));
console.log(typeof(0));
console.log(typeof(true));
console.log(typeof(1700000000n));
console.log(typeof({}));
console.log(typeof([]));// because array is a type of object 


// instance of only work works objects

console.log([] instanceof Array);
console.log({} instanceof Object);
console.log("" instanceof String); // returns false because string is primitive datatype


// conversions string to num

let str = "123";
let num = Number(str);
console.log(typeof(num));

// conversions num to string

let n = 111;
let s = String(n);
console.log(typeof(s));

// conversions any kind to boolean

let m = 111;
let bool = Boolean(111);
console.log(bool ,typeof(bool));

let z = "";
let b =Boolean(z);
console.log(b , typeof(b));

// functions like parseInt and parseFloat also can be used

let q = "11.11";
console.log(parseInt(q));
console.log(parseFloat(q));
