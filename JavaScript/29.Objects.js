// objects - is used to store data in key-value pairs
// objects - are mutable (can be changed)
// objects - are reference types
// objects - are used to represent real world entities
// objects - can store multiple values in a single variable
// objects - can store different data types

// creating objects
let person1 = {
    fname :"saran",
    sname :"kumar",
    age:21
};

// creating objects in another way
// Object.create(obj) creates a new object that inherits properties from obj using prototype chaining
let person2 = Object.create(person1);
console.log(person2.fname);

// accessing object ELEMENT
console.log(person1.fname);
// or else 
console.log(person1['fname']);

// if we access the values that are not present in the object then it returns undefined
console.log(person1.marks); // returns undefined

// changing object values
person1.fname = "Sarankumar";
person1.sname = "Karthi";
console.log(person1);


// deleting an entire property in objects
// first create a property named gender
person1.gender = "male";
console.log(person1);

// for removing the gender property
delete person1.gender;
console.log(person1);

// checking whether a property is present or not in an object
console.log("fname" in person1); // uses in keyword
console.log("noname" in person1); // returns false due to noname not available in objecsts properties
