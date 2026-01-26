// promise is an object that may produce a single value some time in the future:
// either a resolved value or a reason that it's not resolved (e.g., a network error occurred).
// three states of promise
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.

// what is asynchronous operation?

//Asynchronous operations are tasks in JavaScript that do not finish immediately.

// Instead of stopping the program and waiting, JavaScript:

// starts the task

// continues executing other code

// comes back later when the task is finished

const promise = new Promise((resolve , reject) =>{
    setTimeout(() =>{
        let user = {
            name : "saran" , age :21
        }; resolve(user);
    },1000);
})

console.log(promise)// pending
setTimeout(() =>{
    console.log(promise) // fulfilled
},2000);
// promise is used to handle asynchronous operations in JavaScript.


// eg for resolve

const newPromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        let b = true;
        let obj = {name : "saran"};
        if(b == true){
            resolve(obj); // here we can pass any parameters we want eg : resolved or done
        }else{
            reject("no operation is done because no files has arrived");
        }
    },6000)
})

setTimeout(() =>{
    console.log(newPromise);
},7000);



