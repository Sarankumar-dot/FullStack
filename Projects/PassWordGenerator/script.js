

const button = document.getElementById("generate");
const alertBox = document.getElementById("alertContainer");
const input = document.getElementById("input");

const copyElement = document.querySelector(".fa-copy");

button.addEventListener("click",function (){
    let password = "";
    let chars = "a1b2c3d4e5f6gh7i8j9k0lmnopqrstuvwxyz";
    for(let i = 0;i<10;i++){
        let randomNum = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNum);
    }
    console.log("password generated",password);
    input.value = password;

    alertBox.innerText = "password generated";
})

copyElement.addEventListener("click" , () =>{
    // to copy first we need to select
   // input.select();

    // for mobile
    input.setSelectionRange(0,9999);

    // copying it

    navigator.clipboard.writeText(input.value);
})