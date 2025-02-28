setTimeout(() => {
    console.log('Hello, world!');
}, 3000);

const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const warningMessage = document.getElementById('warning-message');

let seconds = 0;
let intervalId = null;
let isRunning = false; 

function formatTime(sec) {
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) { 
        isRunning = true;
        intervalId = setInterval(() => {
            seconds++;
            timer.textContent = formatTime(seconds);
        }, 1000);
    } else {
        warningMessage.textContent = '⏳ Таймер вже працює.';
        warningMessage.style.display = 'block';
        setTimeout(() => { warningMessage.style.display = 'none'; }, 2000); 
    }
}

function stopTimer() {
    if (isRunning) { 
        clearInterval(intervalId);
        isRunning = false;
    } else { 
        seconds = 0;
        timer.textContent = formatTime(seconds);
    }
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
