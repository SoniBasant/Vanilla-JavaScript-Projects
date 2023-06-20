
// variables
const boxes = document.querySelectorAll('.box');
const resetBtn = document.getElementById('resetBtn');
const msg = document.getElementById('message');

// possible combinations
const combination = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
]

// initial values of parameters
let turn = 1;
let arr1 = [];
let arr2 = [];
let matchOver = false;

// main function, execute on every click
boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
        // first check if match is over or not
        // if over then don't respond on click
        if(matchOver) {
            console.log('match over')
            return;
        }

        // to start with X
        // and take input alternatively
        if(turn%2 === 1) {
            // to check if box is alredy filled
            if(box.innerHTML === '') {
                // give input value
                box.innerText = "X";
                // get the place value of box
                // and add it in arr1
                arr1.push(box.getAttribute("data-value"));
                // start comparing arr1 with the combinations
                // only when arr1 have minimun 3 elements
                if(arr1.length >= 3) {
                    // use function checkArr() to compare
                    const matchFound = checkArr(combination, arr1);
                    // use function updateMsg() to update message
                    // of result, as per output from checkArr() function
                    updateMsg(matchFound, 'X');
                }
            }
        } else {
            if(box.innerHTML === '') {
                box.innerText = "O";
                arr2.push(box.getAttribute("data-value"));
                if(arr2.length >= 3) {
                    const matchFound = checkArr(combination, arr2);
                    updateMsg(matchFound, 'O');
                }
            }
        }
        turn++;
        
    });
});

// compare input from the combinations given
function checkArr(mainArr, inputArr) {
    // take each subArray from mainArray and compare it with 
    // input array (arr1 and arr2)
    for(let subArr of mainArr) {
        // check if "every" element of subArray
        // "includes" in inputArray
        if(subArr.every((elem) => inputArr.includes(elem))) {
            // return boolean true
            return true;
        }
    }
    // if no subArray matches with inputArray
    // return boolean false
    return false;
    // these "true" / "false" values will be used 
    // in updateMsg
}

// show message on screen and update matchOver, 
// so that box won't take anymore input
function updateMsg(matchFound, playerType) {
    // if checkArr is "true"
    if(matchFound) {
        msg.innerHTML = `<div style="color:green">Game over! <span style="font-weight:bold"> ${playerType} </span>won :)</div>`;
        matchOver = true;
    } 
    // if no match and box become full
    else if(arr1.length + arr2.length === 9) {
        msg.innerHTML = `<div style="color:#6d6d6d">It's a tie</div>`;
    } 
}

// reset
resetBtn.addEventListener('click', ()=> {
    // reset all parameters
    turn = 1;
    arr1 = [];
    arr2 = [];
    matchOver = false;
    boxes.forEach((box) => {
        box.innerHTML = '';
    })
    msg.innerHTML = 'Result will display here';
})