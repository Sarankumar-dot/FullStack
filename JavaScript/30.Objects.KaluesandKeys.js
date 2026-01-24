// the values of method from objects is used to extract the values only from the objects

let obj = {
    name:"saran" , 
    age:21,
    gender:"male"
};

const values = Object.values(obj); // extracts and store the values in an array
console.log(values);

// keys method - gets all teh keys from the objects

const keys = Object.keys(obj); // extracts and store teh keys in an array
console.log(keys);