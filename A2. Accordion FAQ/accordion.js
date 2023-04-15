
// DOM Manipulation

//Beginner +

// Project 3 FAQ

/*
Important concepts for project 
1. document.querySelectorAll
2. addEventListener('click')
3. forEach()
4. classList.toggle()
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
