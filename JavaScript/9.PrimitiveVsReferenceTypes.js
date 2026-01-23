// two types of datatypes
// Primitive data type
    //  string , number , boolean , null, undefined,Symbol,BigInt
    
//Non Primitive datatypes
    //objects , arrays ,function

let a = 10;
b = a;
b = 20;

console.log(a , b)

// reference type
let user1 = {
    name : "john",
    age :10
}

let user2 = user1; 

// here it only points to the reference stored in the memory
// any changes made in user2 will reflect in user 1 also

// eg
user2.name = "saran";
console.log(user1.name); // returs saran due to reference

