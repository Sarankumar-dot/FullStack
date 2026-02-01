// if you want to give a single number as a result from an array then you can use reduce methods
//reduces an array to a single value

let arr = [1,2];

let ans = arr.reduce((accumulator,ele) =>{
    return accumulator += ele;
},0) // here zero is the initial value of the accumulator

console.log(ans);