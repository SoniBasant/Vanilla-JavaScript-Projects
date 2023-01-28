
// DOM Manipulation

//Beginner +

// Project 2 Modal

/*
Important JS and CSS concept for project 
1. document.getElementById()
2. addEventListener('click')
3. e.target
4. style.display
5. if
6. radial-gradient
7. transform, translate, transition
8. @keyframes
*/

// variables

let openBtn = document.getElementById('open-btn'); 
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// event listeners
// add different styles for different click event
// display block for open button
openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
});

// display none for close button
closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

// to close the modal container, clicking anywhere at window, don't need to click close button specifically

window.addEventListener('click', function(e){
    // to target the window space
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
