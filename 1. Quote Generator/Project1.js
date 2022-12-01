
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
}, {
    verse:'"For those who see me everywhere and see all things in me, I am never lost, nor are they ever lost to me."',
    chapter: 'Chapter: 06, Verse:30'
}, {
    verse:'"O Arjuna, I regard them to be perfect yogis who see the true equality of all living beings and respond to the joys and sorrows of others as if they were their own."',
    chapter: 'Chapter: 06, Verse: 32'
}, {
    verse: '"The mind is very restless, turbulent, strong and obstinate, O Krishna. It appears to me that it is more difficult to control than the wind."',
    chapter: 'Chapter: 06, Verse: 34'
}, {
    verse: '"Yog is difficult to attain for one whose mind is unbridled. However, those who have learnt to control the mind, and who strive earnestly by proper means, can attain perfection in Yog. This is my opinion."',
    chapter: 'Chapter: 06, Verse: 36'
}, {
    verse: '"The unsuccessful Yogis, upon death, go to the abodes of the virtuous. After dwelling there for many ages, they are agian reborn in the earth plane, into a family of pious and prosperous people."',
    chapter: 'Chapter: 06, Verse: 41'
}, {
    verse: '"The Supreme Parmatma said: O Parth, one who engages on the spiritual path does not meet with destruction either in this world or the world to come. My dear friend, one who strives for Ishwar-realization is never overcome by evil."',
    chapter: 'Chapter: 06, Verse: 40'
}, {
    verse: '"With the accumulated merits of many past births, when these yogis engage in sincere endeavors to make further progress, they become purified from material desires and attain perfection in this life itself."',
    chapter: 'Chapter: 06, Verse: 45'
}, {
    verse: '"A yogi is superior to the tapasvi (ascetic), superior to the jnani(a person of learning) and even superior to the karmi (ritualistic performer). Therefore, O Arjuna, strive to be a yogi."',
    chapter: 'Chapter:06, Verse: 46'
}, {
    verse: '"Amongst thousands of persons, hardly one strives for perfection; and amongst those who have achieved perfection, hardly one knows Me in truth."',
    chapter: 'Chapter:07, Verse: 03'
}];

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
