// a closure is a function that remembers and can access the variables outside its scope even after the outer function is executed

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



function bankAccount(moneyAvailable){
   return{
     deposit(amount){
        moneyAvailable += amount;
        return moneyAvailable;
     },withdraw(amount){

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


