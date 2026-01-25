// callback means a function is passed as an argument to another function
// Example:
function greet(name){
    console.log("hello" + name)
}

function grade(name){
    console.log("grade" + name);
}

function give(callback){
    callback('name');
}

give(grade)
give(greet)