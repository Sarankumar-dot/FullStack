// flat method
// if we have any nested arrays inside an array then  they will be removed and added as a normal element

let arr = [1,2,3,[4,5],{name:"saran"}];
console.log(arr.flat()); // removes nested arrays only not objects

// by default we do not want to use depth in flat method
// but if m=we have more than one nested array we have to mention the depth

let ans = [1,2,[3,4,5,6,[7,8]]];
console.log(ans.flat(2)); // here depth is provided with 2 because we have two nested loops


// flatMap() is a combination of map() and flat().
// It transforms each element and flattens the result into a single array.

let t = ["hi how are" , "you iam fine"];
let z = t.flatMap((value) =>{
    return value.split(" ");
})

console.log(z);


// splitting single letters by usning flatMap
let f = z.flatMap((value) =>{
    return value.split("");
})

console.log(f);


// findIndex - finds the first index of an element that satisfies a condition

let m = [1,2,3,4,5,6,7];

let y = m.findIndex((ele) =>{
    return ele > 3;
})

console.log(y); // returns 3 rd index 



// every() - is a method that is used to check that every array elements pass the given test or not

// eg - finding every student is passed the exam
// every only returns true or false

let e = [90,49,55,70];

let u = e.every((ele) =>{
    return ele >= 50;
})

console.log(u);

// if you want to find who is failed then use filter or findIndex method



// includes - checks whether an element is present or not in an array or string

let o = ["apple" , "banana"];
console.log(o.includes("banana"));

const name = "saran";
console.log(name.includes("s"));


// sort() - only sorts in lexographical order means checks the first letter of a string 

let p = ["Bob","Alice","Cat","Aaya"];
console.log(p.sort());

// number sorting 
// we cant use sort() method for number sorting because it sorts lexographically 
// then we have to use a comparison function inside sort() to remove this

let l = [100,10,11,7,88];
l.sort((a,b) => {return a-b}); // a - b for ascending order
console.log(l);

l.sort((a,b) => b - a) // b-a for descending order
console.log(l);
