
// variables taken from HTML
const minute = document.getElementById('mins');
const second = document.getElementById('secs');
const btn = document.getElementById('btn');
const resetBtn = document.getElementById('resetBtn');
const displayMin = document.getElementById('displayMin');
const displaySec = document.getElementById('displaySec');

// variable, on which setInterval will be assign
let intervalID;

// clear initial zeros "00" when start typing
function clearInput(inputElement) {
    if(inputElement.value === "00") {
        inputElement.value = '';
    }
}

// reset timer> input time and display time
resetBtn.addEventListener('click', () => {
    // make values zero
    minute.value = `00`;
    second.value = `00`;
    displayMin.innerHTML = `00`;
    displaySec.innerHTML = `00`;
    // remove input colors
    minute.classList.remove('valid');
    minute.classList.remove('invalid');
    second.classList.remove('valid');
    second.classList.remove('invalid');
    // clears timer set with setInterval() method
    clearInterval(intervalID);
})


btn.addEventListener('click', ()=> {
    // get values from input
    var min = parseInt(minute.value);
    var sec = parseInt(second.value);

    // check values validity
    if(!isNaN(min) && !isNaN(sec)) {

        if(min > 59 || min < 0 || sec > 60 || sec < 0) {
            // remove valid style if present
            // and add invalid style
            minute.classList.remove('valid');
            minute.classList.add('invalid');
            second.classList.remove('valid');
            second.classList.add('invalid');
        } else {
            // for minute
            // remove invalid style if present
            minute.classList.remove('invalid');
            // add valid style
            minute.classList.add('valid');

            // for second
            // remove invalid style if present
            second.classList.remove('invalid');
            // add valid style
            second.classList.add('valid');

            // give inputs to countdown function 
            startCountdown(min, sec);
        }

    }
        
})

// pad number with leading zero if needed
function padNumber(num) {
    return num.toString().padStart(2, '0');
}

// assign input to display time
function startCountdown(min, sec) {
    // clear setInterval time
    clearInterval(intervalID);

    // to decrease time for countdown
    // convert minutes into seconds and 
    // add seconds we have already
    let totalSeconds = min * 60 + sec;
    // make setInterval function and assign it to
    // already declared variable
    intervalID = setInterval(() => {
        // when time ends, clear time function
        if(totalSeconds <= 0) {
            clearInterval(intervalID);
            return;
        } else {
            // decrease one second on every cycle
            totalSeconds--;
            // calculate remaining time
            // minutes
            const updatedMin = Math.floor(totalSeconds / 60);
            // seconds
            const updatedSec = totalSeconds % 60;
            // display time at their position
            // with padding of zero
            displayMin.innerHTML = padNumber(updatedMin);
            displaySec.innerHTML = padNumber(updatedSec);
        }
    }, 1000);
}