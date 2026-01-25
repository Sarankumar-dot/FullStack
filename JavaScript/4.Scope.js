// 1.Global scope variables

const age = 20;// global scope variable 

function ag(){
    console.log(age); // this will execute when it is called because the var is global scope 
}
ag();
console.log(age); // this will also execute

// 2.Function scope 
// which means a var declared inside a function can be used inside only after the function is executed then the variable is removed from the memory
const name = "saram";

function refer(){
    const name = "kumar";
    console.log(name);
}

console.log(name);
refer();

// 3.Block scope
// which means the variables are only valid to that block and we cannot use it outside

const b= "this is iron man";

function marvel(){
    const c = "this is captain america";
    if(true){
        const c = "this is cartoon";
        console.log(c);
    }
    console.log(c);
}

console.log(b);
marvel();



// some eg using var keyword

function m(){
    if(true){ // if we change it to false then the var will not be created so that will return undefined
        var a = "saran";
    }

    console.log(a); // here we can use the variable because inside the function we can use it anywhere due to the usage of var
}

// console.log(a);// but here it will give error because it is inside the function scope