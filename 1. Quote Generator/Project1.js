
// DOM Manipulation

//Beginner Level

// Project 1

/*
Impoortant concepts for project 
1. document.querySelector()
2. addEventListener('click')
3. Math.random() and Math.floor()
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
    verse: '"Arjun said: O Janardan, if you consider knowledge superior to action, then why do you ask me to wage this terrible war?"',
    chapter: 'Chapter: 03, Verse: 01'
}, {
    verse: '"The God said: O sinless one, the two paths leading to enlightenment were previously explained by Me: the path of knowledge, for those inclined toward contemplation, and the path of work for those inclined toward action."',
    chapter: 'Chapter: 03, Verse: 03'
}, {
    verse: '"The celestial gods, being satisfied by the performance of sacrifice, will grant you all the desired necessities of life. But those who enjoy what is given to them, without making offerings in return, are verily thieves."',
    chapter: 'Chapter: 03, Verse: 12'
}, {
    verse: '"The spiritually-minded, who eat food that is first offered in sacrifice, are released from all kinds of sin. Others, who cook food for their own enjoyment, verily eat only sin."',
    chapter: 'Chapter: 03, Verse: 13'
}, {
    verse: '"Such self-realized souls have nothing to gain or lose either in discharging or renouncing their duties. Nor do they need to depend on other living beings to fulfill their self-interest."',
    chapter: 'Chapter: 03, Verse: 18'
}, {
    verse: '"By performing their prescribed duties, King Janak and others attained perfection. You too should perform your duties to set an example for the good of the world."',
    chapter: 'Chapter: 03, Verse: 20'
}, {
    verse: '"All activities are carried out by the three modes of material nature. But in ignorance, the soul, deluded by false identification with the body, thinks of itself as the doer."',
    chapter: 'Chapter: 03, Verse: 27'
}, {
    verse: '"Those who are deluded by the operation of the guṇas become attached to the results of their actions. But the wise who understand these truths should not unsettle such ignorant people who know very little."',
    chapter: 'Chapter: 03, Verse: 29'
}, {
    verse: '"Performing all works as an offering unto me, constantly meditate on me as the Supreme. Become free from desire and selfishness, and with your mental grief departed, fight!"',
    chapter: 'Chapter: 03, Verse: 30'
}, {
    verse: '"It is far better to perform one\'s natural prescribed duty, though tinged with faults, than to perform another\'s prescribed duty, though perfectly. In fact, it is preferable to die in the discharge of one\'s duty, than to follow the path of another, which is fraught with danger."',
    chapter: 'Chapter: 03, Verse: 35'
}, {
    verse: '"The Supreme Bhagwan Shri Krishna said: It is lust alone, which is born of contact with the mode of passion, and later transformed into anger. Know this as the sinful, all-devouring enemy in the world."',
    chapter: 'Chapter: 03, Verse: 37'
}, {
    verse: '"Therefore, O best of the Bharatas, in the very beginning bring the senses under control and slay this enemy called desire, which is the embodiment of sin and destroys knowledge and realization."',
    chapter: 'Chapter: 03, Verse: 41'
}, {
    verse: '"The senses are superior to the gross body, and superior to the senses is the mind. Beyond the mind is the intellect, and even beyond the intellect is the soul."',
    chapter: 'Chapter: 03, Verse: 42'
}, {
    verse: '"Thus knowing the soul to be superior to the material intellect, O mighty armed Arjun, subdue the lower self (senses, mind, and intellect) by the higher self (strength of the soul), and kill this formidable enemy called lust."',
    chapter: 'Chapter: 03, Verse: 43'
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
}, {
    verse: '"With practice, O Parth, when you constantly engage the mind in remembering Me, the Supreme Divine Personality, without deviating, you will certainly attain Me."',
    chapter: 'Chapter: 08, Verse: 08'
}, {
    verse: '"The one who always remembers this that Parmatma is Omniscient, the most Ancient One, the Controller, subtler than the subtlest, the support of all and the possessor of an inconceivable divine form; He is brighter than the Sun and beyond all darkness of ignorance."',
    chapter: 'Chapter: 08, Verse: 09'
}, {
    verse: '"One who at the time of death, with unmoving mind attained by the practice of Yog, fixes the prāṇ (life-airs) between the eyebrows, and steadily remembers the Divine Parmātmā with great devotion, certainly attains Him."',
    chapter: 'Chapter: 08, Verse: 10'
}, {
    verse: '"Restraining all the gates of the body and fixing the mind in the heart region, and then drawing the life-breath to the head, one should get established in steadfast yogic concentration."',
    chapter: 'Chapter: 08, Verse: 12'
}, {
    verse: '"One who departs from the body while remembering Me, the Supreme Personality, and chanting the syllable \'Om\' will attain the supreme goal."',
    chapter: 'Chapter: 08, Verse: 13'
}, {
    verse: '"O Parth, for those yogis who always think of Me with exclusive devotion, I am easily attainable because of their constant absorption in Me."',
    chapter: 'Chapter: 08, Verse: 14'
}, {
    verse: '"Having attained Me, the great souls are no more subject to rebirth in this world, which is transient and full of misery, because they have attained the highest perfection."',
    chapter: 'Chapter: 08, Verse: 15'
}, {
    verse: '"In all the worlds of this material creation, up to the highest abode of Brahma, you will be subject to rebirth, O Arjun. But on attaining My Abode, O son of Kunti, there is no further rebirth."',
    chapter: 'Chapter: 08, Verse: 16'
}, {
    verse: '"One day of Brahma (kalp) lasts a thousand cycles of the four ages (mahā yug) and his night also extends for the same span of time. The wise who know this understand the reality about day and night."',
    chapter: 'Chapter: 08, Verse: 17'
}, {
    verse: '"At the advent of Brahma\'s day, all living beings emanate from the unmanifest source. And at the fall of his night, all embodied beings again merge into their unmanifest source."',
    chapter: 'Chapter: 08, Verse: 18'
}, {
    verse: '"O Parth! Multitudes of beings repeatedly take birth with the advent of Brahma\'s day, and are reabsorbed on the arrival of the cosmic night, to manifest again automatically on the advent of the next cosmic day."',
    chapter: 'Chapter: 08, Verse: 19'
}, {
    verse: '"Transcendental to this manifest and unmanifest creation, there is yet another unmanifest eternal dimension. That realm does not cease even when all others do."',
    chapter: 'Chapter: 08, Verse: 20'
}, {
    verse: '"That unmanifest dimension is the supreme goal, and upon reaching it, one never returns to this mortal world. That is My Supreme Abode."',
    chapter: 'Chapter: 08, Verse: 21'
}, {
    verse: '"O Parth! The Supreme Divine Personality is greater than all that exists. Although He is all-pervading and all living beings are situated in Him, yet He can be known only through devotion."',
    chapter: 'Chapter: 08, Verse: 22'
}, {
    verse: '"I shall now describe to you the different paths of passing away from this world, O best of the Bharatas, one of which leads to liberation and the other leads to rebirth."',
    chapter: 'Chapter: 08, Verse: 23'
}, {
    verse: '"Those who know the Supreme Brahman and who depart from this world, during the six months of the sun’s northern course, the bright fortnight of the moon and the bright part of the day, attain the supreme destination."',
    chapter: 'Chapter: 08, Verse: 24'
}, {
    verse: '"The practitioners of Vedic rituals, who pass away during the six months of the sun’s southern course, the dark fortnight of the moon, the time of smoke, the night, attain the celestial abodes. After enjoying celestial pleasures, they again return to the earth."',
    chapter: 'Chapter: 08, Verse: 25'
}, {
    verse: '"These two, bright and dark paths, always exist in this world. The way of light leads to liberation and the way of darkness leads to rebirth."',
    chapter: 'Chapter: 08, Verse: 26'
}, {
    verse: '"The Supreme Bhagwan said: Because you are not envious of Me, I shall now impart to you this very confidential knowledge and wisdom, upon knowing which you will be released from the miseries of material existence."',
    chapter: 'Chapter: 09, Verse: 01'
}, {
    verse: '"This knowledge is the king of sciences and the most profound of all secrets. It purifies those who hear it. It is directly realizable, in accordance with dharma, easy to practice, and everlasting in effect."',
    chapter: 'Chapter: 09, Verse: 02'
}, {
    verse: '"People who have no faith in this dharma are unable to attain Me, O conqueror of enemies. They repeatedly come back to this world in the cycle of birth and death."',
    chapter: 'Chapter: 09, Verse: 03'
}, {
    verse: '"This entire cosmic manifestation is pervaded by Me in My unmanifest form. All living beings dwell in Me, but I do not dwell in them."',
    chapter: 'Chapter: 09, Verse: 04'
}, {
    verse: '"And yet, the living beings do not abide in Me. You behold the mystery of My divine energy! Although I am the Creator and Sustainer of all living beings, I am not influenced by them or by material nature."',
    chapter: 'Chapter: 09, Verse: 05'
}, {
    verse: '"You know that as the mighty wind blowing everywhere rests always in the sky, likewise all living beings always rest in Me."',
    chapter: 'Chapter: 09, Verse: 06'
}, {
    verse: '"At the end of one kalp, all living beings merge into My primordial material energy. At the beginning of the next creation, O son of Kunti, I manifest them again."',
    chapter: 'Chapter: 09, Verse: 07'
}, {
    verse: '"Presiding over My material energy, I generate these myriad forms again and again, in accordance with the force of their natures."',
    chapter: 'Chapter: 09, Verse: 08'
}, {
    verse: '"O conqueror of wealth, none of these actions bind Me. I remain like a neutral observer, ever detached from these actions."',
    chapter: 'Chapter: 09, Verse: 09'
}, {
    verse: '"Working under My direction, this material energy brings into being all animate and inanimate forms, O son of Kunti. For this reason, the material world undergoes the changes (of creation, maintenance, and dissolution)."',
    chapter: 'Chapter: 09, Verse: 10'
}, {
    verse: '"When I descend in My personal form deluded persons are unable to recognize Me. They do not know the divinity of My personality, as the Supreme Parmātmā of all beings."',
    chapter: 'Chapter: 09, Verse: 11'
}, {
    verse: '"Bewildered by the material energy, such persons embrace demoniac and atheistic views. In that deluded state, their hopes for welfare are in vain, their fruitive actions are wasted, and their culture of knowledge is baffled."',
    chapter: 'Chapter: 09, Verse: 12'
}, {
    verse: '"But the great souls, who take shelter of My divine energy, O Parth, know Me, Bhagwan Shri Krishna, as the origin of all creation. They engage in My devotion with their minds fixed exclusively on Me."',
    chapter: 'Chapter: 09, Verse: 13'
}, {
    verse: '"Always singing My divine glories, striving with great determination, and humbly bowing down before Me, they constantly worship Me in loving devotion."',
    chapter: 'Chapter: 09, Verse: 14'
}, {
    verse: '"Others, engaging in the yajña of cultivating knowledge, worship Me by many methods. Some see Me as undifferentiated oneness that is non-different from them, while others see Me as separate from them. Still others worship Me in the infinite manifestations of My cosmic form."',
    chapter: 'Chapter: 09, Verse: 15'
}, {
    verse: '"It is I who am the Vedic ritual, I am the sacrifice, and I am the oblation offered to the ancestors. I am the medicinal herb and I am the Vedic mantra. I am the clarified butter, I am the fire and the act of offering."',
    chapter: 'Chapter: 09, Verse: 16'
}, {
    verse: '"Of this universe, I am the Father; I am also the Mother, the Sustainer, and the Grandsire. I am the purifier, the goal of knowledge, the sacred syllable Om. I am the Ṛig Veda, Sāma Veda, and the Yajur Veda."',
    chapter: 'Chapter: 09, Verse: 17'
}, {
    verse: '"I am the Supreme Goal of all living beings, and I am also their Sustainer, Master, Witness, Abode, Shelter, and Friend. I am the Origin, End, and Resting Place of creation; I am the Repository and Eternal Seed."',
    chapter: 'Chapter: 09, Verse: 18'
}, {
    verse: '"I radiate heat as the sun, and I withhold, as well as send forth rain. I am immortality as well as death personified, O Arjun. I am the spirit as well as matter."',
    chapter: 'Chapter: 09, Verse: 19'
}, {
    verse: '"Those well-versed in the three Vedas, after worshipping me through sacrifices, and drinking nectar and purified of sin, they pray for attainment of heaven. Having obtained merits, they enjoy the divine pleasures of the devtās in heaven, the abode of the king of heaven, Indra."',
    chapter: 'Chapter: 09, Verse: 20'
}, {
    verse: '"When they have enjoyed the vast pleasures of heaven, the stock of their merits being exhausted, they return to the earthly plane. Thus, those who follow the Vedic rituals, desiring objects of enjoyment, repeatedly come and go in this world."',
    chapter: 'Chapter: 09, Verse: 21'
}, {
    verse: '"There are those who always think of Me and engage in exclusive devotion to Me. To them, whose minds are always absorbed in Me, I provide what they lack and preserve what they already possess."',
    chapter: 'Chapter: 09, Verse: 22'
}, {
    verse: '"O son of Kunti, even those devotees who faithfully worship other gods also worship Me. But they do so by the wrong method."',
    chapter: 'Chapter: 09, Verse: 23'
}, {
    verse: '"I am the enjoyer and the only Lord of all sacrifices. But those who fail to realize My divine nature must be reborn."',
    chapter: 'Chapter: 09, Verse: 24'
}, {
    verse: '"Worshippers of the celestial gods take birth amongst the celestial gods, worshippers of the ancestors go to the ancestors, worshippers of ghosts take birth amongst such beings, and My devotees come to Me alone."',
    chapter: 'Chapter: 09, Verse: 25'
}, {
    verse: '"If one offers to Me with devotion a leaf, a flower, a fruit, or even water, I delightfully partake of that item offered with love by My devotee in pure consciousness."',
    chapter: 'Chapter: 09, Verse: 26'
}, {
    verse: '"Whatever you do, whatever you eat, whatever you offer as oblation to the sacred fire, whatever you bestow as a gift and whatever austerities you perform, O son of Kunti, do them as an offering to Me."',
    chapter: 'Chapter: 09, Verse: 27'
}, {
    verse: '"By dedicating all your works to Me, you will be freed from the bondage of good and bad results. With your mind attached to Me through renunciation, you will be liberated and will reach Me."',
    chapter: 'Chapter: 09, Verse: 28'
}, {
    verse: '"I am equally disposed to all living beings; I am neither inimical nor partial to anyone. But the devotees who worship Me with love reside in Me and I reside in them."',
    chapter: 'Chapter: 09, Verse: 29'
}, {
    verse: '"Even if the vilest sinners worship Me with exclusive devotion, they are to be considered righteous because they have made the proper resolve."',
    chapter: 'Chapter: 09, Verse: 30'
}, {
    verse: '"Quickly they become virtuous, and attain lasting peace. O son of Kunti, declare it boldly that no devotee of Mine is ever lost."',
    chapter: 'Chapter: 09, Verse: 31'
}, {
    verse: '"O Parth! All those who take refuge in Me, whatever their birth, race, gender, or caste, even those whom society scorns, will attain the supreme destination."',
    chapter: 'Chapter: 09, Verse: 32'
}, {
    verse: '"What then to speak about kings and sages with meritorious deeds? Therefore, having come to this transient and joyless world, you engage in devotion unto Me."',
    chapter: 'Chapter: 09, Verse: 33'
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
