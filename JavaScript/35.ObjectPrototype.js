// prototype means an object from which other objects inherit properties

// every object in javascript has a prototype
// when we try to access a property of an object javascript first looks for that property in the object itself
// if the property is not found in the object it looks for the property in the prototype of that object
// this process continues until the property is found or the end of the prototype chain is reached

const obj1 = {
    namee:"iron man",
    fighter : function(){
        console.log("swing");
    }
}

const obj2 = {
    name:"saran",
    __proto__ : obj1 // if we use this line we make a connection between these two objects
}

console.log(obj2.name);
obj2.fighter() // this will print fighter method  from object1

console.log(obj2.namee); // this will print the name in the obj1

// we can also create a prototype using Object.create() method
const obj3 = Object.create(obj1); // obj3 prototype is obj1
console.log(obj3.namee); // this will print the name in the obj1
obj3.fighter(); // this will print the fighter method from obj1

// we can also add properties to the prototype object
obj3.age = 21;
console.log(obj3.age); // this will print the age property of obj3

// in javascript functions also have prototypes
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.getDetails = function(){// adding method to the prototype of Person function 
    return this.name + " " + this.age; 
}
let person1 = new Person("saran", 21);
console.log(person1.getDetails()); // this will print the details of person1 using the prototype method