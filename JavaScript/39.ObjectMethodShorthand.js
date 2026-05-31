// in js we can create method in objects by two forms

// 1. old way

let obj = {
    add : function(a,b) { // normal method
        return a+b;
    },
    addd : (a,b) => {return a+b} // arrow function
}

console.log(obj.add(1,2));
console.log(obj.addd(3,4));

// 2 . New way - introduced in new ES6+ // shorthand syntax

let math = {
    add(a,b){
        return a + b;
    },
    mul(a,b){
        return a*b;
    }
}

console.log(math.add(5,5));
console.log(math.mul(5,5));

let sar = {
    div : function(a,b){
        return a/b;
    }
}

console.log(sar.div(1,0));