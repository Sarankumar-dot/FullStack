// a closure is a function that remembers and can access the variables outside its scope even after the outer function is executed
// lexical scoping
// inner function has access to the variables and parameters of its outer function, even after the outer function has returned
// closure is created when a function is defined inside another function and the inner function references variables from the outer function
// closure allows the inner function to "close over" the variables of the outer function, preserving their state between invocations

function outer(){
    var a = 10;

    function inner(){
        var b =20;
        console.log(a+b);
    }

    return inner;
}

let ans = outer(); // here the outer() function returns the inner function
console.log(outer()); // returns inner() method
ans(); // so now ans() contains inner() function so it runs it



function bankAccount(moneyAvailable){// moneyAvailable is private to bankAccount function
   return{
     deposit(amount){// deposit is a closure that has access to moneyAvailable variable
        moneyAvailable += amount;
        return moneyAvailable;
     },withdraw(amount){// withdraw is also a closure that has access to moneyAvailable variable

        if(amount > moneyAvailable){
            return "enter a valid amount";
        }
        moneyAvailable -= amount;
        return moneyAvailable;
     }
   }
}

let res = bankAccount(1000);
console.log(res); // returns what are the inner functions available
console.log(res.deposit(100)); // returns the money available
console.log(res.withdraw(10000));


