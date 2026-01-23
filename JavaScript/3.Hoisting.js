// hositing - javaScript moves all the variable declaration to the top before  execution of the  code

// eg

var a;
console.log(a); // gives undefined
a = 10;

// but

function my(){
    b = 10;
    let c = 30;
}
my();
console.log(b); // but this returns the ans 10 due to hoisting
// console.log(c); gives error
