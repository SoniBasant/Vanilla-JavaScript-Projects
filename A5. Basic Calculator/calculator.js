
// variables
// select output of calculator
const output = document.getElementById("output");
// select form to make it by id to stop it submitting everytime you press button
const form = document.getElementById("cal-container");
// select all buttons of operand (digits) and put them in NodeList (array with node items)
const numBtns = document.querySelectorAll("button[data-type=operand]");
// select all buttons of operator (maths commands) and put them in NodeList (array with node items)
const symbolBtns = document.querySelectorAll("button[data-type=operator]");
// equal button
const equalBtn = document.querySelector("button[data-type=result]");

// function to prevent the form from submitting whenever we click a button
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// to remove active class from the button we clicked
const remove_active = () => {
  symbolBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

// function for numbers
numBtns.forEach((btn) => {
  btn.addEventListener('click', (e) =>{
    remove_active();
    
    if(output.value == 0) {
      // to remove initial zero
      output.value = e.target.value;
    } else {
      output.value = output.value + e.target.value;
    }
  });
});

// function for symbols
symbolBtns.forEach((btn) => {
  btn.addEventListener('click', (e) =>{
    remove_active();
    output.value = output.value + e.target.value;

    switch (e.target.value) {
      // if button is %, output will be->
      case "%":
        output.value = parseFloat(output.value) / 100;
        break;

      // if button is invert, output will be multiplyed by (-1) ->
      case "invert":
        output.value = parseFloat(output.value) * -1;
        break;
    }
    
  });
});

equalBtn.addEventListener('click', () => {

  // first check that mathematical symbols are
  // there OR not
  var plus= output.value.includes("+");
  var minus = output.value.includes("-");
  var multiply = output.value.includes("*");
  var divide = output.value.includes("/");

  if(plus || minus || multiply || divide) {

    // if one of symbol is there, then check which one
    // and give code for each of them
    if (plus) {
      // first find the index of symbol
      var ind = output.value.indexOf("+");
      // seperate both parts of number
      // before symbol
      part1 = output.value.slice(0, ind);
      // after symbol
      part2 = output.value.slice(ind+1);
      // make string as number as calculate
      output.value = parseFloat(part1) + parseFloat(part2);
    } else if(minus) {
      var ind = output.value.indexOf("-");
      part1 = output.value.slice(0, ind);
      part2 = output.value.slice(ind+1);
      output.value = parseFloat(part1) - parseFloat(part2);
    } else if(multiply) {
      var ind = output.value.indexOf("*");
      part1 = output.value.slice(0, ind);
      part2 = output.value.slice(ind+1);
      output.value = parseFloat(part1) * parseFloat(part2);
    } else if(divide) {
      var ind = output.value.indexOf("/");
      part1 = output.value.slice(0, ind);
      part2 = output.value.slice(ind+1);
      output.value = parseFloat(part1) / parseFloat(part2);
    }
  }

})
