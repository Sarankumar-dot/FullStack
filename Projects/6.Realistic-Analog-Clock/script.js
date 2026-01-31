const hourElement = document.querySelector(".hour");
const minElement = document.querySelector(".min");
const secElement = document.querySelector(".sec");

updateClock()
function updateClock(){
    const currentDate = new Date();
    console.log(currentDate);

     //setTimeout(updateClock,1000); // use this or else we can use set interval

    const hours = currentDate.getHours();
    const min = currentDate.getMinutes();
    const sec = currentDate.getSeconds();

    const hourDeg = (hours/12) * 360;
    hourElement.style.transform = `rotate(${hourDeg}deg)`;

    const minDeg = (min/60) * 360;
    minElement.style.transform = `rotate(${minDeg}deg)`;

    const secDeg = (sec/60) * 360;
    secElement.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock,1000);