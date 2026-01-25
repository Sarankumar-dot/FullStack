// suppose you are accessing the empty object with a property then it gives undefined as output
// eg

const obj = {};

console.log(obj.address); // undefined

 // console.log(obj.address.street); // this will cause error

// to avoid these kind of errors you have to use 
// optional chaining operator - ? in the not available object property
console.log(obj.address?.street); // this will definitely print undefined
// which ensures your programs successful running

// | Without `?.` | With `?.`         |
// | ------------ | ----------------- |
// | Throws error | Returns undefined |
// | Unsafe       | Safe              |

// example 2
const user = {
    id : 1,
    name : "Saran",
    address : {
        street : "MG Road",
        city : "Chennai",
        location : {
            place1:"tiruppur" , place2 : "dindigul"
        }
    }
};

console.log(user.address?.street);
console.log(user.address.location?.place3); // returns undefined because place3 is not present in the object
console.log(user.address.location?.place2); // Returns the location


