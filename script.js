//selecting elements
const countdown = document.querySelector('#countdown');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

//click events
start.addEventListener('click', () => startTimer());
pause.addEventListener('click', () => pauseTimer());
reset.addEventListener('click', () => resetTimer());

//variables
let duration = 30 * 60;
let time = duration;
let timerRunning = false;
let timer;

//functions
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimer();
            } else {
                clearInterval(timer);
                timerRunning = false; 
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    time = duration;
    updateTimer();
}

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    if(minutes == 4 && seconds == 59){
        var audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
        audio.volume = 1.0;
        audio.play();
    }
    if(minutes >= 5){
        document.documentElement.style.setProperty('--primary', '#00ff00');
        document.documentElement.style.setProperty('--secondary', '#bfffaa'); 
        document.getElementById("work-rest").innerHTML = "WORK";
    } else {
       document.documentElement.style.setProperty('--primary', '#ffd000');
       document.documentElement.style.setProperty('--secondary', '#ffeb78'); 
       document.getElementById("work-rest").innerHTML = "REST";
    }
}

//Initial call
updateTimer();