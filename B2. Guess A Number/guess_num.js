
// variables
const inputBtn = document.getElementById("inputBtn");
const msg = document.getElementById("msg");
const countLine = document.getElementById("countLine");

const randomNum = (Math.floor(Math.random() * 100) + 1);
let count = 0;

// check input, increase counter and show messages of both
inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkNum();
    count++;
    countLine.innerHTML = `Count: <span>${count}</span>`;
});

function checkNum() {
    // this is inside so that we can get value of num after the click event
    const guessNum = +document.getElementById("inputNum").value;

    // conditions with messages
    if(guessNum === randomNum) {
        // when right guess; message and reset button
        msg.innerHTML = `<p style="color:rgb(58, 196, 58)">That's the answer: ${guessNum}</p>
        <button type="reset" id="reset">Reset</button>`;
        // get reset button
        const reset = document.getElementById("reset");
        // reload page
        reset.addEventListener("click", () => {
            location.reload();
        });
    }
    else if(guessNum <= 0) {
        msg.innerHTML = `<p style="color:rgb(255, 165, 0)">Guess a positive number! Your guess: ${guessNum}</p>`;
    } 
    else if(guessNum > 100) {
        msg.innerHTML = `<p style="color:rgb(255, 165, 0)">Guess a number from 1 to 100 only! Your guess: ${guessNum}</p>`;
    } 
    else if(guessNum < randomNum) {
        msg.innerHTML = `<p style="color:rgb(196, 58, 196)">Go higher! Your guess: ${guessNum}</p>`;
    } 
    else if(guessNum > randomNum) {
        msg.innerHTML = `<p style="color:rgb(58, 196, 196)">Go Lower! Your guess: ${guessNum}</p>`;
    } 
    else {
        msg.innerHTML = `<p style="color:rgb(196, 58, 58)">Invalid Input! Your guess: ${guessNum}</p>`;
    }
}
