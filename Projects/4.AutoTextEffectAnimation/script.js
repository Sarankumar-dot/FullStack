const containerEl = document.querySelector(".container");


const carrer = ["youtuber","full stack developer","freelancer","student"]

let carrerIndex = 0;
let charIndex = 0;
updateText();
function updateText(){
    charIndex++;
    containerEl.innerHTML = `<h1>Iam a ${carrer[carrerIndex].slice(0,charIndex)}</h1>`;
    

    if(charIndex === carrer[carrerIndex].length){
        carrerIndex++;
        charIndex=0;
    }

    if(carrerIndex === carrer.length){
        carrerIndex = 0;
    }
    setTimeout(updateText,300);

}
