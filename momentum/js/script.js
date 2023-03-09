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

/*-----Background slider-----*/
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

/*----------Weather----------*/
let city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

function setLocalStorageCity() {
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorageCity);
window.addEventListener('keydown', setLocalStorageCity);

function getLocalStorageCity() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = 'Minsk';
    } 
}
window.addEventListener('load', getLocalStorageCity);

let cityName = localStorage.getItem('city');

async function getWeather() {  
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&appid=b80f7136e278c0a485ad4b77b3130b55&units=metric`);
    const res = await fetch(url);
    const data = await res.json(); 
    
    city.textContent = data.name;
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
getWeather();

/*----------Quotes----------*/
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");


async function getQuotes() {  
    const quotes = './assets/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    let i = Math.floor(Math.random() * 10);
    quote.textContent = "\"" + data[i].text + "\"";
    author.textContent = data[i].author;
}
getQuotes();

const changeQuote = document.querySelector(".change-quote");
changeQuote.addEventListener("click", function() {
    getQuotes();
})

/*----------Audio player----------*/
const playBtn = document.querySelector('.play');
const prevTrack = document.querySelector('.play-prev');
const nextTrack = document.querySelector('.play-next');
const audio = new Audio();
let audioDir = './assets/sounds/';
let audioExt = '.mp3';
let isPlay = false;
const tracks = [
    `Aqua Caelestis`,
    `Ennio Morricone`,
    `River Flows In You`,
    `Summer Wind`,
] 
let playList = document.querySelector('.play-list');
let i = 0;

function playAudio() {
  audio.currentTime = 0;
  audio.src = audioDir+tracks[i]+audioExt;
  playList.textContent = tracks[i];
  if (isPlay === false){
    isPlay = true;
    audio.play();
    playBtn.classList.add('pause');
  } else {
    isPlay = false;
    audio.pause();
    playBtn.classList.remove('pause');
  }
}

playBtn.addEventListener("click", function() {
    playAudio();
});

prevTrack.addEventListener("click", function() {
    if (i === 0) {
        i = 3;
    } else {    
        i--;
    }
    isPlay = false;
    audio.pause();
    playAudio();
});

nextTrack.addEventListener("click", function() {
    if (i === 3) {
        i = 0;
    } else {    
        i++;
    }
    isPlay = false;
    audio.pause();
    playAudio();
});

/*----------To do List----------*/
const toDoHeader = document.querySelector('.to-do-header');
toDoHeader.textContent = "To do list:";
let todo = document.querySelector('.todo');

let addMessage = document.querySelector('.to-do-list'),
    addButton = document.querySelector('.add');

let todoList = [];

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function(){
    if (!addMessage.value) return;

    let newToDo = {
        todo: addMessage.value,
        checked: false,
        important: false,
    }

    todoList.push(newToDo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
})

function displayMessages(){
    let displayMessage = '';
    if (todoList.length === 0) todo.innerHTML = '';
    todoList.forEach(function(item, index){
        displayMessage += `
            <li>
                <input type='checkbox' id='item_${index}' ${item.checked ? 'checked':''}>
                <label for='item_${index}' class="${item.important ? 'important' : ''}">${item.todo}</label>
            </li>
        `;
        todo.innerHTML = displayMessage
    });
}


todo.addEventListener('change', function(event){
    let valueLabel = todo.querySelector('[for='+ event.target.getAttribute('id') + ']').innerHTML;

    todoList.forEach(function(item){
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
})

todo.addEventListener('contextmenu', function (event){
    event.preventDefault();
    todoList.forEach(function(item, index){
        if (item.todo === event.target.innerHTML){
            if (event.ctrlKey || event.metaKey){
                todoList.splice(index, 1);
            } else {
                item.important = !item.important;
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});