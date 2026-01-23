// default parameter means the parameter which gets executed when we dont give an argument

// arguments - values which are passed through the function definition
// parameters - are the values defined inside a function definition

function de(name = "guest"){
   return `Hello ${name}`;
}

console.log(de("saran"));


//rest parameters

function sum(...nums){
   // return nums.reduce((a,b) => a+b,0);
   
}

console.log(sum(1,2,3,4));