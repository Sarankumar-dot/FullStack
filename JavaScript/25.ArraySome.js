// some method is used to check the conditon and returns true or false

// checking the array contains elements > 10 if yes returns true else false

let arr = [1,2,3,4,5,6,11];

let ans = arr.some((el) =>{
    return el>10;
})

console.log(ans); // returns true because there is 11