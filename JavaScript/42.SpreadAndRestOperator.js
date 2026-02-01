// spread operator is used to expand or spread iterable elements like arrays and objects

let arr1 = [1,2,3];
let arr2 = [...arr1,4,5]; // we are adding all the elements int the arr1 in 2 using ...

console.log(arr2);

// spread operator in objects
let obj1 = {name : "saran" , age:21};
let ob2 = {...obj1,...arr2,class:"college"};
console.log(ob2);

// rest operator is used to collect multiple elements and condense them into a single element like array or object
// rest operator is represented by ...
let [first,second,third,...rest] = [1,2,3,34,5,555];
console.log(first , second , third); // returns the first three elements 
console.log(rest); // returns the rest elements in an array form

// rest operator in objects
const {name,...res} = {name : "saran" , age:21};
console.log(name,res);

// function using rest operator
function sum(...numbers){ // here it collects all values into an array
    return numbers.reduce((acc,value) =>{
        return acc += value;
    })
}

console.log(sum(1,2,3,4,5));

// function without rest operator
function sum2(a,b,c){
    return a + b + c;
}
console.log(sum2(1,2,3));
// console.log(sum2(1,2,3,4,5)); // this will give error as only three arguments are expected

// function with rest operator
function sum3(...nums){
    return nums.reduce((acc,value) =>{
        return acc += value;
    })
}

console.log(sum3(1,2,3,4,5)); // this will work fine as all the arguments are collected in an array

// combining spread and rest operator
function multiply(factor,...nums){
    return nums.map(num => num * factor);
}
console.log(multiply(2,1,2,3,4,5)); // here 2 is the factor and all remaing eleemnts are nums

