const time = document.querySelector('.time');
const day = document.querySelector('.date');
const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};


function showTime(date) {
    date = new Date();
    const currentTime = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString('en-US', options);
    time.textContent = currentTime;
    day.textContent = currentDate;
    
    setTimeout(showTime, 1000);
}

showTime();