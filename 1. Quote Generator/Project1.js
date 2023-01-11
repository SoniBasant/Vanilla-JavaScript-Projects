
// DOM Manipulation

//Beginner Level

// Project 1

/*
key concept for project 
1. document.querySelector()
2. addEventListener()
3. Math object()
4. innerText
5. array
*/


// variables
let btn = document.querySelector('#new-verse'); // button to change
let verse = document.querySelector('.verse'); // for different verse
let chapter = document.querySelector('.chapter'); // for changing the chapter

// array of verses with person name
const verses = [{
    verse: '"Alas! How strange it is that we have set our mind to perform this great sin with horrifying consequences. Driven by the desire for kingly pleasures, we are intent on killing our own kinsmen."',
    chapter: 'Chapter: 01, Verse: 45'
}, {
    verse: '"The soul is unbreakable and incombustible; it can neither be dampened nor dried. It is everlasting, in all places, unalterable, immutable"',
    chapter: 'Chapter: 02, Verse: 24'
}, {
    verse: '"Death is certain for one who has been born, and rebirth is inevitable for one who has died. Therefore, you should not lament over the inevitable."',
    chapter: 'Chapter: 02, Verse: 27'
}, {
    verse: '"Besides, considering your duty as a warrior, you should not waver. Indeed, for a warrior, there is no better engagement than fighting for upholding of righteousness."',
    chapter: 'Chapter: 02, Verse: 31'
}, {
    verse: '"Seek refuse in divine knowledge and insight, O Arjun, and discard reward-seeking actions that are certainly inferior to works performed with the intellect established in divine knowledge. Miserly are those who seek to enjoy the fruits of their works."',
    chapter: 'Chapter: 02, Verse: 49'
}, {
    verse: '"The wise endowed with equanimity of intellect, abandon attachment to the fruits of actions, which bind one to the cycle of life and death. By working in such consciouness, they attain the state beyond all suffering."',
    chapter: 'Chapter: 02, Verse: 51'
}, {
    verse: '"Bhagwan Shri Krishna said: O Parth, when one discards all selfish desires and cravings of the senses that torment the mind, and becomes satisfied in the realization of the self, such a person is said to be transcendentally situated."',
    chapter: 'Chapter: 02, Verse: 55'
}, {
    verse: '"Anger leads to clouding of judgement, which results in bewilderment of memory. When memory is bewildered, the intellect gets destroyed; and when the intellect is destroyed, one is ruined."',
    chapter: 'Chapter: 02, Verse: 63'
}, {
    verse: '"Just as a strong wind sweeps a boat off its chartered course on the water, even one of the senses on which the mind focuses can lead the intellect astray."',
    chapter: 'Chapter: 02, Verse: 67'
}, {
    verse: '"Just as the ocean remains undisturbed by the incessant flow of waters from rivers merging into it, likewise the sage who is unmoved despite the flow of desrirable objects all around him attains peace, and not the person who strives to satisfy desires."',
    chapter: 'Chapter: 02, Verse: 70'
}, {
    verse: '"O Parth, such is the state of an enlightened soul that having attained it, one is never again deluded. Being established in this consciousness even at the hour of death, one is liberated from the cycle of life and death and reaches the Supreme Abode of God."',
    chapter: 'Chapter: 02, Verse: 72'
}, {
    verse:'"In this world, there is nothing as purifying as divine knowledge. One who has attained purity of mind through prolonged practice of Yog, receives such knowledge within the heart, in due course of time."',
    chapter: 'Chapter: 04, Verse: 38'
}, {
    verse: '"Those who seek the state of Yog should reside in seclusion, constantly engaged in meditation with a controlled mind and body, getting rid of desires and possessions for enjoyment."',
    chapter: 'Chapter: 06, Verse: 10'
}, {
    verse:'"In the joyous state of Yog, called samadhi, one experience supreme boundless divine bliss, and thus situated, one never deviates from the Eternal Truth."',
    chapter: 'Chapter: 06, Verse: 21'
}, {
    verse:'"For those who see me everywhere and see all things in me, I am never lost, nor are they ever lost to me."',
    chapter: 'Chapter: 06, Verse: 30'
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
    chapter: 'Chapter: 06, Verse: 46'
}, {
    verse: '"Amongst thousands of persons, hardly one strives for perfection; and amongst those who have achieved perfection, hardly one knows Me in truth."',
    chapter: 'Chapter: 07, Verse: 03'
}, {
    verse: '"There is nothing higher than Myself, O Dhananjaya. Everything rests in Me, as beeds strung on a thread."',
    chapter: 'Chapter: 07, Verse: 07'
}, {
    verse: '"I am the taste in water, O son of Kunti, and the radiance of the sun and the moon. I am the sacred syllable OM in the vedic mantras; I am the sound in ether, and the ability in humans."',
    chapter: 'Chapter: 07, Verse: 08'
}, {
    verse: '"I am the pure fragrance of the Earth and the brilliance in fire. I am the life-force in all beings and the penance of the ascetics."',
    chapter: 'Chapter: 07, Verse: 09'
}, {
    verse: '"O Arjun, know that I am the eternal seed of all beings. I am the intellect of the intelligent, and the splendor of the glorious."',
    chapter: 'Chapter: 07, Verse: 10'
}, {
    verse: '"Deluded by the three modes od Maya, People in this world are unable to know Me, the imperishable and eternal."',
    chapter: 'Chapter: 07, Verse: 13'
}, {
    verse: '"My divine energy Maya, consisting of the three modes of nature, is very difficult to overcome. But those who surrender unto Me cross over it easily."',
    chapter: 'Chapter: 07, Verse: 14'
}, {
    verse: '"Four kinds of people do not surrender unto Me- those ignorant of knowledge, those who lazily follow their lower nature though capable of knowing Me, those with deluded intellect and those with a demoniac nature."',
    chapter: 'Chapter: 07, Verse: 15'
}, {
    verse: '"O best amongst the Bharatas, Arjun! Four kinds of pious people engage in my devotion- the distressed, the seekers of knowledge, the seekers of worldly possessions and those who are situated in knowledge."',
    chapter: 'Chapter: 07, Verse: 16'
}, {
    verse: '"Amongst these, I consider them to be the highest, who worship Me with knowledge, and are steadfastly and exclusively devoted to Me. I am very dear to them and they are very dear to Me."',
    chapter: 'Chapter: 07, Verse: 17'
}, {
    verse: '"All those who are devoted to Me are indeed noble. But those in knowledge, who are of steadfast mind, whose intellect is merged in Me, and who have made Me alone as their supreme goal, I consider as My very self."',
    chapter: 'Chapter: 07, Verse: 18'
}, {
    verse: '"After many births of spiritual practice, one who is endowed with knowledge surrenders unto Me, knowing Me to be all tha is. Such a great soul is indeed very rare."',
    chapter: 'Chapter: 07, Verse: 19'
}, {
    verse: '"Whatever celestial form a devotee seeks to worship with faith, I steady the faith of such a devotee in that form."',
    chapter: 'Chapter: 07, Verse: 21'
}, {
    verse: '"Endowed with faith, the devotee worships a particular celestial devata and obtains the objects of desire. But in reality, I alone arrange these benefits."',
    chapter: 'Chapter: 07, Verse: 22'
}, {
    verse: '"The less intelligent think that I, the Supreme Paramatama, was formless earlier and have now assumed this personality. They do not understand the imperishable exalted nature of My personal form."',
    chapter: 'Chapter: 07, Verse: 24'
}, {
    verse: '"I am not manifest to everyone, being veiled by My divine Yogmaya energy. Hence, those without knowledge do not know that I am without birth and changeless."',
    chapter: 'Chapter: 07, Verse: 25'
}, {
    verse: '"O Arjun, I know of past, present and future, and I also know all living beings, but no one knows Me."',
    chapter: 'Chapter: 07, Verse: 26'
}, {
    verse: '"O descendant of Bharat, the dualities of desire and aversion arise from illusion. O conqueror of enemies, all living beings in the material realm are deluded by these."',
    chapter: 'Chapter: 07, Verse: 27'
}, {
    verse: '"But persons, whose sins have been destroyed by engaging in pious activities, become free from the illusion of dualities. Such persons worship Me with determination."',
    chapter: 'Chapter: 07, Verse: 28'
}, {
    verse: '"Those who take shelter in Me, striving for liberation from old-age and death, come to know the Brahman, the individual self, and the entire field of karmic action."',
    chapter: 'Chapter: 07, Verse: 29'
}, {
    verse: '"Those who know Me as the governing principle of the adhibhuta (field of matter) and the adhidaiva (the celestial devatas) and as adhiyajna, such enlightened souls are in full consciousness of Me even at the time of death."',
    chapter: 'Chapter: 07, Verse: 30'
}, {
    verse: '"Bhagwan said: The Supreme indestructible entity is called Brahman; one\'s own self is Adhyatma. Actions pertaining to the material personality of living beings and its development are called Karma or fruitive activities."',
    chapter: 'Chapter: 08, Verse: 03'
}, {
    verse: '"O Best of the embodied souls, the physical manifestation that is constantly changing is called Adhibhuta; the univarsal form of God, which presides over the celestial gods in this creation, is called Adhidaiva; I, who dwell in the heart of every living being, am called Adhiyajna, or the Parmatma of all sacrifices."',
    chapter: 'Chapter: 08, Verse: 04'
}, {
    verse: '"Those who relinquish the body while remembering Me at the moment of death will come to Me. There is certainly no doubt about this."',
    chapter: 'Chapter: 08, Verse: 05'
}, {
    verse: '"Whatever one remembers upon giving up the body at the time of death, O son of Kunti, one attains that state, being always absorbed in such contemplation."',
    chapter: 'Chapter: 08, Verse: 06'
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
