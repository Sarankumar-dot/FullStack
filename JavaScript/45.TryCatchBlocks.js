// handling error in js is very important

// for eg 

// let res = add(1,2);
// console.log(res); //ReferenceError: add is not defined
// console.log("saran");

// error because we have not written the add() method so this will affect the below codes also
// so error handling is important and done by try catch blocks

// same code using try and catch

try { // try contains a block of code which error may occur
    let res = add(1,2);
    console.log(res);
} catch (e){ // catch catches the error and we can display it
    console.log({name : e.name , message : e.message});
} finally{
    console.log("this will execute everytime regardless of errors")
}

console.log("bye");