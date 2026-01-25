// array - used to store multiple values in a single variable
// array can be declared with [] square brackets

// | Category          | Methods                           |
// | ----------------- | --------------------------------- |
// | Add/Remove        | push, pop, shift, unshift, splice |
// | Search            | indexOf, includes, find           |
// | Extract           | slice                             |
// | Convert           | join                              |
// | Sort/Reverse      | sort, reverse                     |
// | Interview Methods | map, filter, reduce, forEach      |

let arr = [1,2,3,4];
// or you can also create as
let array = new Array(1,2,3,4,5,"saran");
console.log(array[array.length-1]);

// changing array values
array[0] = "kumar";
console.log(array);

// adding elements in Array
let colors = ["red","greem"];
colors.push("yellow"); // adds elements in the last
console.log(colors);

colors.unshift("black"); // adds elements in front
console.log(colors);

// poping elements in the array
colors.pop(); // last element gets removed
console.log(colors); // yellow will be removed from the array

colors.shift(); // first element will be removed
console.log(colors);// black will be removed from the array

// finding the index of elements
console.log(colors.indexOf("red")); // returns 0 th position


// checking array contains this element
console.log(colors.includes("red")); // returns true if it finds it

// slicing an array without changing the original Array
let a = [1,2,3,4,5,6];

console.log(a.slice(0,5)); // from start to end+1;

//splice - used to add or remove elements, changes the original array
console.log( "removed elements : ",a.splice(1,2));
console.log(" changed array :" ,a);

// we can also modify elements using splice
a.splice(1,0,99); // changes 99 in index 1
console.log(a);


// join - used to convert an array to a string
let s = ["hello" , "worlds"];
console.log(s.join(" "));// joins with space
console.log(s.join(","));// joins with comma
console.log(s.join("-"));// joins with dash


// revverse an array
console.log(a.reverse());//

// sorting an array
let nums = [1,10,4,5,2,3];

// ascending order sorting nums
console.log(nums.sort((a,b) => a - b)); // in js for nums sorting we have to provide a compare function to sort it

// descending order sorting nums
console.log(nums.sort((a,b) => b - a));






