// in objects we can use getters and setters to get or set something
// getter and setter are used to make computed properties
let obj = {
    fname : "saran",
    sname : "kumar",
    get fullName(){
        return (`${this.fname} ${this.sname}`);
    },
    set fullName(name){
        let arr = name.split(" ");
        this.fname = arr[0];
        this.sname = arr[1];
    }
}

// the getter and setter can be used as only as the properties of an object
console.log(obj.fullName); // accessing the full name

// setting a new name 
obj.fullName = "mohamed irfan"; // we cannot use the getter and setter as methods we can only assign the values with = , we cannot pass teh values to parameters
console.log(obj);
