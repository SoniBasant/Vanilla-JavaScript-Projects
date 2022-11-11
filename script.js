
// DOM Manipulation

//Beginner Level

// Project 1

/*
key concept for project 
1. document.querySelector()
2. addEventListener()
3. Math object()
4. innerText
*/


// variables
let btn = document.querySelector('#new-verse'); // button to change
let verse = document.querySelector('.verse'); // for different verse
let chapter = document.querySelector('.chapter'); // for changing the chapter

// array of verses with person name
const verses = [{
    verse: '"Those who seek the state of Yog should reside in seclusion, constantly engaged in meditation with a controlled mind and body, getting rid of desires and possessions for enjoyment."',
    chapter: 'Chapter: 06, Verse: 10'
}, {
    verse:'"In this world, there is nothing as purifying as divine knowledge. One who has attained purity of mind through prolonged practice of Yog, receives such knowledge within the heart, in due course of time."',
    chapter: 'Chapter: 04, Verse: 38'
}, {
    verse:'"In the joyous state of Yog, called samadhi, one experience supreme boundless divine bliss, and thus situated, one never deviates from the Eternal Truth."',
    chapter: 'Chapter: 06, Verse: 21'
}, ];

// functionality for the button
btn.addEventListener('click', function() {
    //random to select any random verse and its speaker
    // use floor to make it an integer with the multiplicaton of verses length
    let random = Math.floor(Math.random() * verses.length);
    // change the verse 
    verse.innerText = verses[random].verse;
    // change the chapter number corresponding to the verse
    chapter.innerText = verses[random].chapter;
});