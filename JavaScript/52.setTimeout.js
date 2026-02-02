// set timeout is a js function or method which executes the code after a certain amount of time yo uare setting

// it is called a timer functions
//setTimeout(function, timeInMilliseconds);

let ans = setTimeout(()=>{
    console.log("this will run after 2 seconds");
},2000);
// we have to set the handle which is the arrow function and timeout which is the time 

// there is also a method called timer which displays the id of the timout function
console.log(ans); // returns more details // here ans is just an id to the timeout so we cannot call it like a function like ans();