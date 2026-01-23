// filter method is used to filter elements in the old array as ypu like  and create a new array

let arr = [1,2,44,55,8,10,22];

let ans = arr.filter((ele) => {return ele%2 == 0});
console.log(ans);

// using filter in array of objects

var obj = [{name:"lion",habitat:"forest"},
           {name:"whale",habitat:"ocean"},
           {name:"tiger",habitat:"forest"},
           {name:"dolphin",habitat:"ocean"}
];

// printing habitat == forest
const a = obj.filter((animal)=>{
    return animal.habitat == "forest";
})

console.log(a);

// printing habitat == ocean
const b = obj.filter((animal)=>{
    return animal.habitat == "ocean";
})

console.log(b);

