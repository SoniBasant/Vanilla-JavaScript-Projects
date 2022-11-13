
// DOM Manipulation

//Beginner +

// Project 3 FAQ

/*
key concept for project 
1. document.getElementByClassName()
2. addEventListener()
3. for loop
4. this
5. classList.toggle()
*/

// variable for the questions and their respective answers

const questionAnswer = document.querySelectorAll('.content');

// make the loop for each time you clicked a question
questionAnswer.forEach(function(event){
    event.addEventListener('click', function(){
        // change the style of answer from active to not active by toggle
        event.classList.toggle('active');
    });
});