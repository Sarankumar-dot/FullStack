// A function is a named reusable block of code that can accept inputs, perform operations, and return a result

function sayHello(){
    console.log("hello");
}

sayHello();
console.log(sayHello)

let res = sayHello();
console.log(res); // returns undefined because we are note returning any value

// example for returning a value
function hello(name){
    return "hello " + name;
}

let result = hello("saran");
console.log(result); // here a string is returned

// default return value setting

function add(a,b){
    if(a && b){
        return a+b
    }

    return 0;
}

let r = add(1,2);
console.log(r);


