// for in loop is used to iterate over an objects properties

const circle = {
    color : "red",
    radius : 10
};

for(const prop in circle){
    console.log(circle[prop]);
}

// for in on arrays

let arr = [1,2,3,4,5];

for(const i in arr){ // here it returns the index of the arrays
    console.log(arr[i]);
}

// for of loops
// for of loop is used to return the values of array 

// we only access the array values 
// for of does not support objects

for(const value of arr){
    console.log(value);
}


let employee = {
    id: 1,
    name: "Saran",
    dept: "CSBS",
    salary: 400000
};

console.log("---- for...of using Object.keys() ----");
for (let key of Object.keys(employee)) {
    console.log(key, ":", employee[key]);
}

console.log("\n---- for...of using Object.values() ----");
for (let value of Object.values(employee)) {
    console.log(value);
}

console.log("\n---- for...of using Object.entries() ----");
for (let [key, value] of Object.entries(employee)) {
    console.log(key, ":", value);
}