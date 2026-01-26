// promise is used to perform asynchronous operations
// eg 

// if you want to find a user in an object
// then

// function getUser(){
//     const user = [{name : "saran" , age: 21},{name : "irfan" , age:"21"},{name : "guest" , age:18}];
//     return user;
// }

// function findUser(name = "guest"){
//     const details = getUser();
//     return details.find((obj) =>{
//         return obj.name === name;
//     })
// }

// console.log(findUser("saran")); // the above code will run perfectly fine but if we add a set time out in the above coed then it becomes like

// function getUser(){
//     let user;
//     setTimeout(() =>{
//         user = [{name : "saran" , age: 21},{name : "irfan" , age:"21"},{name : "guest" , age:18}];
//     },1000)
    
//     return user;
// }

// function findUser(name = "guest"){
//     const details = getUser();
//     return details.find((obj) =>{
//         return obj.name === name;
//     })
// }

// console.log(findUser("saran")); // here this code will give error because the user array is defined after a second
// JavaScript code is syncronous which means it executes continuously so it does not wait 1 sec and it returns an empty array 

// for resolving that we have to use a promisse

function getUser(){

    return new Promise((resolve , reject)=>{
    let user;
    setTimeout(() =>{
        user = [{name : "saran" , age: 21},{name : "irfan" , age:"21"},{name : "guest" , age:18}];
        resolve(user); // if you want to resolve something then you need to use resolve() in that place
        // reject("no data found"); // we can also use reject method to reject the promise
    },1000)
    })
    
}

function findUser(name = "guest"){
    const details = getUser();//returns a promise object
    // in promise we can perform actions using then method
     details.then((value) =>{
        value.find((val) =>{
             if(val.name == name){
                 console.log(val);
             }
        })
    })
}

findUser()