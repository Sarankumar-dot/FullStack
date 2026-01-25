let arr = [1,2,3,4];

// destructuring means assign every value to a variable
// in js you can do it like this
const [a,b,c,d] = arr;
console.log(a,b,c,d);


const person = {
    name : "saran" , age : 21
};

const {name :naam , age:agee} = person;
console.log(naam , agee);


// nested destructuring 
// it means assigning values to the nested objects

const obj = {user:{id : 1 , email : "kumarsaran2004@gmail.com"}};
const {user : {id , email : mail}} = obj;
console.log(id , mail);
