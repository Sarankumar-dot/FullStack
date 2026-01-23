// suppose if you a variable that contains null and undefined values then you can set them 
// to some other value in the variable

// eg

let res = null;

if(res == null || res == undefined){
    res = "hello";
}
console.log(res);

// it is very time consuming to write the if statements
// so we are using null coalescing operator

let result;

result = result ?? "saran";
console.log(result); // returns saran if the value is null or undefined