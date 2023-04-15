

// DOM Manipulation

// Project:4 Pro Level- Stop watch

/*
Important concepts for project 
1. document.querySelector()
2. document.getElementById()
3. addEventListener('click')
4. if...else
5. .toString()
6. setInterval()
7. innerHTML
8. window.clearInterval()
*/

// variable for buttons

const startStopBtn = document.querySelector('#startStopBtn');

const resetBtn = document.querySelector('#resetBtn');

// variavle for time variable

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zero (making it two digit)

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";


// stop watch function

function stopWatch() {
    seconds++;
    // start adding seconds
    // with the completion of 60 sec, make seconds zero(0) and minute +1

    if(seconds/60 === 1) {
        seconds = 0;
        minutes ++;

        // with the completion of 60 min, make minutes zero and hours +1
        if(minutes/60 === 1) {
            minutes=0;
            hours++
        }
    }

    // make digits in pair
    // add zero at decimal place for seconds if it is single digit, otherwise keep it as it is.
    if(seconds < 10) {
        leadingSeconds ="0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    // add zero at decimal place for minutes if it is single digit, otherwise keep it as it is.
    if(minutes < 10) {
        leadingMinutes ="0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    // add zero at decimal place for hours if it is single digit, otherwise keep it as it is.
    if(hours < 10) {
        leadingHours ="0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    // display final timer with prescibed format of HH:MM:SS
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// start-stop button functioning
startStopBtn.addEventListener('click', function() {
    // if timer stopped then start it also give the button to pause
    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fas fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";
    } else {
        // otherwise stop it and give the button of play
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fas fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";
    }
});

// reset button functioning
// make all parameters as zero.
resetBtn.addEventListener('click', function() {
    // this will clear the timer
    window.clearInterval(timerInterval);
    // after clicking reset, this below line will convert pause button to play button
    document.getElementById('startStopBtn').innerHTML = '<i class="fas fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped";
    // make parameters zero
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
});
