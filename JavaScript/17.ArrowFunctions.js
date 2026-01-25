// normal function
function add(a,b){
    return a+b;
}


// arrow function
let addd = (a,b) => (a+b);
console.log(addd(10,20));

// Lexical this
// Normal functions have their own `this` based on how they are called
// Arrow functions do NOT have their own `this`; they inherit it from the outer scope

const user = {
    name : "saran",
    normalFn : function(){
        console.log( "hello" + this.name);// here this refers to user object
    },
    arrowFn : (() =>{
        console.log("hello" + this.name);// here this does not refer to user object because arrow function does not have its own this so it looks for this in outer scope which is global scope where name is not defined
    })
}

user.normalFn(); // returns hello saran
user.arrowFn();// returns hello undefined


// normal function set timeout

const user1 = {
  name: "Saran",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user1.greet(); // returns undefined because setTimeout is a separate function and has its own this 
// but arrow functions does not have their own this so they borrow from their parent 


// arrow function set timeout
const user2 = {
  name: "Saran",
  greet() { // scope of greet function
    setTimeout(() => { // scope of arrow function ends here
      console.log(this.name);// here this refers to user object because arrow function does not have its own this so it looks for this in outer scope which is user object where name is defined
    }, 1000);
  }
};

user2.greet(); // returns name
/* here it is doing opposite because

Arrow functions work in setTimeout because they do NOT have their own this.
Normal functions DO have their own this.
*/

// eg
const user3 = {
  name: "Saran",
  greet() {
    // this === user

    setTimeout(function () {
      // new this ❌ (lost)
    }, 1000);

    setTimeout(() => {
      // this === user ✅ (borrowed) from name
    }, 1000);
  }
};


