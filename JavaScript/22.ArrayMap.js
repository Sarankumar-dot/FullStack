// map creates a new array by modifying the existing array by doing anything you want


// finding the square of each number present in an array and adding it to a new array
let nums = [1,2,3,4,5];

let ans = nums.map((element) => element * element)

console.log(ans);

// adding # to string elements

let str = ["apple","orange","micromax","iqoo"];

let a = str.map((element) => element+"#");

console.log(str); // original string does not changed
console.log(a); // only this will be changed

let h = str.map((element) => {return element+"#"});

let g = h.map((ele) => {return ele.replace("#","")});
console.log(g);


// adding discount to prices
let prices = [100,200,500,1,300];
let discount = 10;

let disPrice = prices.map((ele) => {
    if(ele > discount){
        ele = ele - discount;
    }

    return ele;
})

console.log(disPrice);
