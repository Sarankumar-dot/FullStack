//this keyword - refers to the current object or context in which the code is being executed
// in global context this refers to the global object (window in browsers , global in nodejs)
console.log(this); // in global context this refers to global object
function myFunction(){
    console.log(this); // in function context this refers to global object
}
myFunction();

// in object context this refers to the object itself
let obj = {
    name:"saran",
    age:21,
    getDetails(){
        console.log("prints the current object which is obj : ",this); // in object method this refers to the object itself
        return this.name + " " + this.age; // accessing object properties using this keyword
    }   
};

console.log(obj.getDetails()); // calling the object method

// in class context this refers to the instance of the class
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }   
     getDetails(){
        console.log(this); // in class method this refers to the instance of the class
        return this.name + " " + this.age; // accessing class properties using this keyword
    }
}

let person1 = new Person("saran", 21);
console.log(person1.getDetails()); // calling the class method

// in  general this keyword is used to access properties and methods of the current object or context
// it helps to differentiate between local variables and object properties when they have the same name
// it is also used in event handlers to refer to the element that triggered the event
// arrow functions do not have their own this context they inherit this from the surrounding lexical context

let obj2 = {
    name:"saran",
    age:21,
    getDetails:()=>{
        console.log("returns global scope : ",this);// in arrow function this refers to the surrounding lexical context (global object in this case)
        return this.name + " " + this.age; // here this will not refer to obj2 instead it refers to global object
    }   
};
console.log(obj2.getDetails()); // calling the object method