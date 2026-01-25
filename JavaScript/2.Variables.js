// there are three types variables in javaScript

// | Feature                        | `var`               | `let`       | `const`     |
// | ------------------------------ | ------------------- | ----------- | ----------- |
// | Scope                          | Function Scope      | Block Scope | Block Scope |
// | Hoisted?                       | ✅ Yes               | ✅ Yes       | ✅ Yes       |
// | Initialized during hoisting?   | ✅ Yes (`undefined`) | ❌ No (TDZ)  | ❌ No (TDZ)  |
// | Accessible before declaration? | ✅ Yes (`undefined`) | ❌ Error     | ❌ Error     |
// | Redeclaration allowed?         | ✅ Yes               | ❌ No        | ❌ No        |
// | Reassignment allowed?          | ✅ Yes               | ✅ Yes       | ❌ No        |
// | Must initialize immediately?   | ❌ No                | ❌ No        | ✅ Yes       |


// 1.Let - which can be reassigned and cannit be redeclared

let a = 10;
a=  20; // reassigned
// let a = 20; // cannot redeclared

// let has block scope
let e = 10;
{
    let e = 30;
}
console.log(e);

// 2.const - which cannot be redeclared or reassigned

const b = 30;
// b = 20; cannot be reassigned
// and also cannot be redeclared
console.log(b);

// const also has block scope
const y = 100;
{
    const y = 300;
}
console.log(y);

// but when we create an object or array using const we can easily change the inner elements.
// because the const  var only holds the position of the array or object , so we cannot change the position but we can change the elements

const obj = {
    name :"saran",
    age:12
};

obj.name = "kumar";
console.log(obj); // now the name is changed & same for arrays and all the data structures


// 3.var - which can be both redeclared or reassigned

var c = 10;
c = 20; // we can reassign it also.....
var c = 30; // here you can clearly see that the var c is redeclared
// var keyword does not have a scope so we can declare it anywhere 
// but var has a global scope


{
    console.log(m); // this will return undefined due to hositing which we see in the next file
    var m = 400;
}

console.log(m);




