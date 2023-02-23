const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const day = document.querySelector('.date');
const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const hours = date.getHours();
const body = document.querySelector('.body');

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

function getTimeOfDay() {
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


function getRandomNum() {
    return Math.floor(Math.random()*20 + 1);
}
let randomNum = getRandomNum();

function setBG() {
    let bgNum = randomNum.toString().padStart(2, '0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/smanzh/assets/master/images/${timeOfDay}/${bgNum}.webp`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    }  
}
setBG();

const prevSlide = document.querySelector('.slide-prev');
function getPrevSlide () {
    if (randomNum>1) {
        randomNum--;
    } else {
        randomNum = 20;
    }
    setBG();
}
prevSlide.addEventListener("click", function(){
    getPrevSlide();
})

const nextSlide = document.querySelector('.slide-next');
function getNextSlide () {
    if (randomNum<20) {
        randomNum++;
    } else {
        randomNum = 1;
    }
    setBG();
}
nextSlide.addEventListener("click", function(){
    getNextSlide();
})