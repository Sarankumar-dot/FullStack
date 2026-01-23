// array find is method is used to find only one element which satisfies the condition first


// here we are going to find the first element which is greater than 20;

let arr = [1,2,3,10,20,30,40,50];

let ans = arr.find((ele) => {return ele>20});
console.log(ans); // only returns 30 due to find methods condition
