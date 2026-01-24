let obj = {
    name : "saram",
    class : "final year"
}

// when we use the seal object method it seals the object which we can modify the object data's but we cannot delete or add  new properties
// unlike freeze we can modify values but same as freeze we cannot add or delete properties
Object.seal(obj); // sealing the object

// modifying
obj.name = "kumar";
console.log(obj);

// trying to delete
console.log(delete obj.name); // returns false
console.log(obj);

// adding properties
obj.age = 21;
console.log(obj); // not added