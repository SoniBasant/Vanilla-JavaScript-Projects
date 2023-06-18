
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
}

function addition() {
    let result = Number(output.innerText) + 1;
    if (result > 9) {
        result = 0;
    }
    output.innerText = result;
}

// events
sub.addEventListener('click', subtraction);
add.addEventListener('click', addition);
