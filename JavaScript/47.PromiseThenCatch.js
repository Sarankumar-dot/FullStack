let obj = {name : "malick" , sons :15};

const promise = new Promise((resolve , reject) =>{
    setTimeout(() =>{
        let b = false;

    if(b == true){
        resolve(obj);
    }else{
        reject("promise gets rejected due to network issue");
    }
    },2000) 
})

// The value passed in resolve() is automatically received as the argument in .then(). We cannot manually give input to .then(); it depends on what the promise resolves with.

promise.then((value) =>{
    setTimeout(() =>{
        console.log(value); // this prints the object that the resolve got as parameters
    },4000)
    console.log("then called");
}) // catch is used to catch the rejected promise and provide the output
 .catch((reason) =>{
    console.log(reason);
})



