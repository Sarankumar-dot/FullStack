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


// shallow copy of objects
let person3 = person1; // both person1 and person3 point to the same memory location
console.log(person3);
person3.fname = "kumar"; // changing person3 also changes person1
console.log(person1); // person1 is also changed

// to avoid this we use Object.assign() method
let person4 = Object.assign({}, person1); // creates a shallow copy of person1
console.log(person4);
person4.fname = "Saran"; // changing person4 does not change person1
console.log(person1); // person1 is not changed
console.log(person4); // person4 is changed
// Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// It returns the target object.


// else we can use ... spread operator to create a shallow copy
let person5 = {...person1}; // creates a shallow copy of person1
console.log(person5);
person5.fname = "Kumar"; // changing person5 does not change person1
console.log(person1); // person1 is not changed
console.log(person5); // person5 is changed
// but in spread we cant copy the inner nested objects
// for that we have to use Object.assign() or JSON methods


// nested objects
let emp1 = {
    name : "saran",
    age : 21,   
    address : {
        city : "chennai",
        state : "tamilnadu"
    }
};

console.log(emp1.address.city); // accessing nested object property
// changing nested object property
emp1.address.city = "bangalore";
console.log(emp1.address.city); // changed city
// shallow copy of nested objects using Object.assign()
let emp2 = Object.assign({}, emp1);
console.log(emp2);
emp2.address.city = "mumbai"; // changing nested object property in emp2
console.log(emp1.address.city); // emp1 is also changed due to shallow copy
console.log(emp2.address.city); // emp2 is changed

// to avoid this we use JSON methods for deep copy
let emp3 = JSON.parse(JSON.stringify(emp1)); // creates a deep copy of emp1
console.log(emp3);
emp3.address.city = "delhi"; // changing nested object property in emp3
console.log(emp1.address.city); // emp1 is not changed
console.log(emp3.address.city); // emp3 is changed  
// JSON methods convert the object to a JSON string and then parse it back to an object, creating a new object in memory.
