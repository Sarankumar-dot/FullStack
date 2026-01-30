const buttons = document.querySelectorAll("button");
const input = document.getElementById("in");

for(let i =0;i<buttons.length;i++){
    buttons[i].addEventListener("click",(()=>{
        const butValue = buttons[i].textContent;

        if(butValue === "C"){
            clearResult();
        }else if(butValue === "="){
            calculateResult();
        }else if(butValue === "R"){
            removeLast();
        }
        else{
            appendValue(butValue);
        }
    }))
}

function clearResult(){
    input.value = "";
}

function calculateResult(){
    input.value = eval(input.value);
}

function appendValue(buttonVal){
 input.value += buttonVal;
}

function removeLast(){
    input.value = (input.value.slice(0, input.value.length-1));
}