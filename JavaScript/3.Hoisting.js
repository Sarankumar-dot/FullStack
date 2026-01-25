// hositing - javaScript moves all the variable declaration to the top before  execution of the  code
// hoisting means that no matter where functions and variables are declared, they are moved to the top of their scope before code execution.
// hoisting works only with var and function declaration
// hoisting doesn't work with let and const

// | Type                 | Hoisted? | Behavior                      |
// | -------------------- | -------- | ----------------------------- |
// | `var`                | ✅ Yes    | Becomes `undefined`           |
// | `let/const`          | ✅ Yes    | TDZ error if used early       |
// | Function Declaration | ✅ Yes    | Can call before definition    |
// | Function Expression  | ❌ No     | Cannot call before assignment |


// eg using var
console.log(a); // gives undefined because of hoisting
var a = 10;
console.log(a); // gives 10

// what actually happens behind the scenes
// var a; // declaration is hoisted to the top during program execution
// console.log(a); // gives undefined
// a = 10;
console.log(a); // gives 10
// ---------------------------------------------------------------------

// eg using let
// console.log(b); gives error because b is not defined yet
let b = 20;
console.log(b); // gives 20

// eg using const
// console.log(c); gives error because c is not defined yet
const c = 30;
console.log(c); // gives 30



// eg
my(); // gives "hello world" because function declaration is hoisted
function my(){
    console.log("hello world");
}
// ---------------------------------------------------------------------
my1();// gives error because my1 is not defined yet
var a = 10;
function my1(){
    console.log(a); // gives undefined because of hoisting
    var b = 30;
    console.log(b); // gives 30
}   
my1();
// console.log(b); gives error because b is not defined in this scope


// but if we use let or const
function my2(){
    let d = 20;
    const e = 40;
}   
my2();
// console.log(d); gives error
// console.log(e); gives error