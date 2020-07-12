const clockSecond = document.querySelector('.second');
const clockMinute = document.querySelector('.minute');
const clockHour = document.querySelector('.hour');

// scale move on every second
setInterval(setTime, 1000);


// set the time by this function
function setTime(){
    const currentDate = new Date(); // get current Date

    // second scale rotating for every second
    const seconds = currentDate.getSeconds(); // get current second
    const secondRatio = seconds/60;
    const secondsDeg = secondRatio*360; // get the actuall degree for rotating
    clockSecond.style.transform = `rotate(${secondsDeg}deg)`;// rotate second's scale

    // minute scale rotating for every minute
    const minutes = currentDate.getMinutes(); // get current minute
    const minuteRatio = minutes/60;
    const minutesDeg = ((secondRatio + minutes)/60)*360; // get the actuall degree for rotating
    clockMinute.style.transform = `rotate(${minutesDeg}deg)`; // rotate minute's scale


    // hout scale rotating for every hour 
    const hours = currentDate.getHours(); // get current hour
    const hourDeg = ((minuteRatio +hours)/12)*360;
    clockHour.style.transform = `rotate(${hourDeg}deg)`; // rotate hour's scale

}