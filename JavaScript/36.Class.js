// class in javascript is a template for creating objects
// objects are instance of the class

class Car{
    constructor(name){// constructor is a special method for initializing the object
       this.name = name;// this keyword refers to the current object
    }


    getName(){// method to get the name of the car
        console.log(`the name is ${this.name} good morning`)
    }
}

class bike extends Car{// bike class is inheriting from Car class
    constructor(name){
        super(name);// calling the constructor of the parent class
    }
}

const name = new bike("bmw");
name.getName();
// here bike class is inheriting the properties and methods of Car class using extends keyword
// super keyword is used to call the constructor of the parent class
// we can also add methods to the class using prototype

Car.prototype.engineStart = function (){
    console.log(`${this.name} engine started`);
}

name.engineStart(); // this will print bmw engine started

// we can also create static methods in the class
class Truck{
    constructor(name){
        this.name = name;
    }

    static info(){
        console.log("this is a static method");
    }
}

Truck.info(); // we can call the static methods by using class name
// Truck instance(objects) cannot access static methods
const truck1 = new Truck("volvo");
// truck1.info(); // this will give error

// we can also use getters and setters in the class
class Truck1{
    name; // property declaration // this is optional in javascript    
    constructor(name){
        this.name = name;
    }

    setName(name){  // setter method to set the name
       this.name = name;
    }

    getName(){// getter method to get the name
        return this.name;
    }
}

const t1 = new Truck1("tata");  // creating instance of Truck1 class
console.log(t1.getName());// this will print tata
t1.setName("mahindra");// setting new name using setter
console.log(t1.getName());// this will print mahindra


// we can also create private properties in the class using #
class Person{
    #name; // private property
    constructor(name){
        this.#name = name;
    }
    getName(){ // public method to access private property
        return this.#name;
    }
    setName(name){ // public method to set private property
        this.#name = name;
    }
}

const p1 = new Person("saran");
console.log(p1.getName()); // this will print saran
p1.setName("kumar");
console.log(p1.getName()); // this will print kumar
// p1.#name = "john"; // this will give error as #name is private property
// console.log(p1.#name); // this will give error as #name is private property
// thus we can use getters and setters to access private properties
// this is encapsulation in object oriented programming
// thus classes in javascript provide a way to create objects and implement object oriented programming concepts like inheritance, encapsulation, and polymorphism
