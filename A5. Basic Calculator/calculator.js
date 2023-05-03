

// select output of calculator
const output = document.getElementById("output");
// select form to make it by id to stop it submitting everytime you press button
const form = document.getElementById("cal-container");
// select all buttons of operand (digits) and put them in NodeList (array with node items)
const numBtns = document.querySelectorAll("button[data-type=operand]");
// select all buttons of operator (maths commands) and put them in NodeList (array with node items)
const symbolBtns = document.querySelectorAll("button[data-type=operator]");

const equalBtn = document.querySelector("button[data-type=result]");

// function to prevent the form from submitting whenever we click a button
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let is_operator = false;
let equation = [];

// to remove active class from the button we clicked
const remove_active = () => {
  symbolBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

/*
// iterate over the array of buttons of digits using forEach loop
numBtns.forEach((btn) => {
  // add a click event to each button
  btn.addEventListener("click", (e) => {
    remove_active();
    // display operand's value
    if (output.value == "0") {
      output.value = e.target.value;
    } else if (output.value.includes(".")) {
      // if decimal in our output then stop adding further decimal point by replacing it with empty string
      output.value = output.value + "" + e.target.value.replace(".", "");
    } else if (is_operator) {
      // if user already pressed any operator button, 
      // set is_operator to false and restart the value in the output from the new value
      is_operator = false;
      output.value = e.target.value;
    } else {
      // lastly, add more numbers with empty string
      output.value = output.value + "" + e.target.value;
    }
  });
});

// iterate over the array of buttons of operator using forEach loop 
symbolBtns.forEach((btn) => {
  // add a click event to each button
  btn.addEventListener("click", (e) => {
    // remove active class from previously active button
    remove_active();
    // add active class to the button user click
    e.currentTarget.classList.add("active");

  // place value of button in switch and check it for each case
    switch (e.target.value) {
      // if button is %, output will be->
      case "%":
        output.value = parseFloat(output.value) / 100;
        break;

      // if button is invert, output will be multiplyed by (-1) ->
      case "invert":
        output.value = parseFloat(output.value) * -1;
        break;

      // if button is =, push the last value from the output value to our eqation array
      case "=":
        equation.push(output.value);
        // use eval() to evaluate every eqation
        output.value = eval(equation.join(""));
        // then clear the eqation array for further use
        equation = [];
        break;

      
      default:
        // obtain the last item in the array
        let lastItem = equation[equation.length - 1];
        // if button is from top four maths coperator
        if (["/", "*", "+", "-"].includes(lastItem) && is_operator) {
          // delete it from the equation
          equation.pop();
          // add another value
          equation.push(e.target.value);
        } else {
          // if last array is not operator, add the output value and the value of the button
          equation.push(output.value);
          equation.push(e.target.value);
        }
        // set the value of operator to true for everytime we click operator button
        is_operator = true;
        break;
    }
  });
});

*/
numBtns.forEach((btn) => {
  btn.addEventListener('click', (e) =>{
    remove_active();
    
    if(output.value == 0) {
      // to remove initial zero
      output.value = e.target.value;
    } else {
      output.value = output.value + e.target.value;
      console.log(parseFloat(output.value));
    }
  });
});

symbolBtns.forEach((btn) => {
  btn.addEventListener('click', (e) =>{
    remove_active();
    // console.log(e.target.value);
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