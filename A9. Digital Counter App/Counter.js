
// variables
let add = document.getElementById("add");
let sub = document.getElementById("sub");

// functions
function subtraction() {
    let result = Number(output.innerText) - 1;
    if(result < 0) {
        result = 0;
    }
    output.innerText = result;
    console.log(result);
}

function addition() {
    let result = Number(output.innerText) + 1;
    if (result > 10) {
        result = 0;
    }
    output.innerText = result;
    console.log(result);
}

// events
sub.addEventListener('click', subtraction);
add.addEventListener('click', addition);