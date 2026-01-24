// the new keyword - is used to create an instance of a class or object constructor
// it allocates memory for the new object and sets up the prototype chain

function Person(name, age){
    this.name = name;
    this.age = age;

    this.getDetails = function(){ // this is the syntax for create a method function 
        return this.name + " " + this.age;
    }

    this.getName = function() {
        return this.name;
    }

}

// creating a new instance of Person using new keyword
let person1 = new Person("saran", 21); // we are using the function as a class
console.log(person1.getDetails()); // calling the method of the instance
console.log(person1.getName());