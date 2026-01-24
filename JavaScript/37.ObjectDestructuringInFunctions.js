// Object destructuring in function parameters allows you to directly extract object properties and assign default values, making your function safer and cleaner when some properties are missing.


// objects without destructuring
function name(user){
    console.log(` the name is ${user.name} , the age is ${user.age}`);
}

// here while calling the function we have top provide both the name and age if you provide only the age the name will be displayed as undefined
name({age:21}); // output : the name is undefined , the age is 21


// so we need to destructure the objects
// for that we have to add the default value in the method or function

function name1({name = "guest" , age = 18}){
    console.log(` the name is ${name} , the age is ${age}`)
}

name1({age:18}); // output :  the name is guest , the age is 18
// this will return a structured