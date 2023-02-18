const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const day = document.querySelector('.date');
const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const hours = date.getHours();

const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;



function showTime(date) {
    date = new Date();
    const currentTime = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString('en-US', options);
    const hours = date.getHours();
    
    function showGreeting(){
        greeting.textContent = greetingText;
    }
    showGreeting();

    time.textContent = currentTime;
    day.textContent = currentDate;
    greeting.textContent = greetingText;
    
    setTimeout(showTime, 1000);
}
showTime();

function getTimeOfDay(hours) {
    if ((hours>=0)&&(hours<6)){
        return "night";
    } else if ((hours>=6)&&(hours<12)){
        return "morning";
    } else if ((hours>=12)&&(hours<18)){
        return "afternoon";
    } else {
       return "evening";
    }
}

let username = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('username', username.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('username')) {
        username.value = localStorage.getItem('username');
    }
}
window.addEventListener('load', getLocalStorage);