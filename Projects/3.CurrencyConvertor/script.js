const selectOne = document.getElementById("CurrencyFirst");
const inputOne = document.getElementById("worth-first");
const selectTwo = document.getElementById("CurrencySecond");
const inputTwo = document.getElementById("worth-second");

const exchangeRate = document.getElementById("exchange-rate");

updateRate(); 
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/412212c2e4baa718f67f6a60/latest/${selectOne.value}`).then((response) => response.json())
    .then((data) =>{
        const val = data.conversion_rates[selectTwo.value];
        inputTwo.value = inputOne.value * val;
        exchangeRate.innerText = `1 ${selectOne.value} = ${val} ${selectTwo.value}`;
    })

}

selectOne.addEventListener("change",updateRate);
selectTwo.addEventListener("change",updateRate);
inputOne.addEventListener("input",updateRate);