const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");
const but = document.getElementById("generate");
const condition = document.getElementById("condition");

but.addEventListener("click",findBMI);


function findBMI() {
    const heightInMeters = height.value / 100;
    const weightKg = Number(weight.value);

    // BMI calculation
    const bmi = weightKg / (heightInMeters * heightInMeters);

    console.log("BMI:", bmi.toFixed(2));

    // Show BMI in input placeholder
    result.placeholder = bmi.toFixed(1);

    // BMI category
    if (bmi < 18.5) {
        condition.innerText = "Underweight";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        condition.innerText = "Normal weight";
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        condition.innerText = "Overweight";
    } 
    else {
        condition.innerText = "Obese";
    }
}
