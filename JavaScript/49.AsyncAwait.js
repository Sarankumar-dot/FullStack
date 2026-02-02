

// function fetchData(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             let num = 0;
//             if(num > 9){
//                 resolve("the data is fetched successfully");
//             }else{
//                 reject("item rejected");
//             }

//         },2000) // this code block is known as asychronous code
//     })
// }

// function show(){
//     fetchData().then((content) =>{
//         console.log("resolve :" , content)
//     })
//     .catch((e) =>{
//         console.log("reject :", e);
//     }) // here we are handling the asychronous code with then and catch methods
// }

//show();

// instead of using this we can convert the asychronous code to syncronous code (not full synchronous but it looks like synchronous)
// in which we do not need to use then and catch blocks
// for this we are using async and await

// same eg with async and await

function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let num = 0;
            if(num > 9){
                resolve("the data is fetched successfully");
            }else{
                reject("item rejected");
            }

        },2000) // this code block is known as asychronous code
    })
}

// the main usage of async and await because async/await makes asynchronous code look like synchronous code, but it is still asynchronous internally.
// for using await keyword the function must be a async function
async function show(){

    try{
    const ans = await fetchData(); // await makes the compiler to wait till it receives its value
    // after receiving it the below block of codes will gets executed
    console.log(ans);
    // but for handling the errors from the reject we have to use try and catch blocks
    }catch(e){ // here it is same as the then's catch method inside the parameters the rejects value is passed
        console.log(e);

    }
}

show();


