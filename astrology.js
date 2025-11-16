const zodiacSigns = [
    "Aries"," Taurus"," Gemini","Cancer","Leo","Virgo","Libra"," Scorpio","Sagittarius","Capricorn","Aquarius","Pisces",
];


// Based on Date, size 31
const compliments = [
 "You have such a warm and welcoming energy.",
" Your smile can brighten anyone’s day.",
" You have a beautiful way of expressing yourself.",
" You make people feel comfortable just by being around.",
" Your kindness is truly inspiring.",
" You have an incredible sense of humor.",
" You always find the good in every situation.",
" You’re so thoughtful — it really shows in everything you do.",
" Your confidence is contagious.",
" You have a natural charm that’s impossible to ignore.",
" You make difficult things look easy.",
" You’re such a good listener — people feel heard with you.",
" our creativity is out of this world.",
" You bring positive energy wherever you go.",
" You have an amazing ability to lift others up.",
" You’re one of the most genuine people I’ve met.",
" You always go the extra mile for others.",
" Your laugh could make anyone happy.",
" You’re stronger than you realize.",
" You have an incredible eye for detail.",
" You radiate confidence and grace.",
" You make people believe in themselves.",
" You’re a rare combination of intelligence and humility.",
" You handle challenges with so much grace.",
" You have a great sense of style.",
" You make even ordinary moments special.",
" You bring out the best in people.",
" You have such a calming presence.",
" Your determination is admirable.",
" You’re proof that kindness never goes out of style.",
" The world is genuinely better with you in it.",
];


// size 30
const victimcardcompliments = [
"You always do good for others, even when they don’t see it.",

"You care too much for people who rarely care back the same way.",

"You give your best, even when no one acknowledges your effort.",

"You stay kind, even after being hurt.",

"You forgive people who don’t deserve your patience.",

"You’re always there for others — even when they disappear when you need them.",

"You love deeply, even when people take it for granted.",

"You never complain, but you’ve been through more than most know.",

"You still smile, even when you’re breaking inside.",

'You’re the strong one everyone leans on, but no one checks on.',

"You make others happy, even when you’re not.",

"You understand people more than they try to understand you.",

"You give second chances no one else would give.",

"You stay loyal, even when people doubt you.",
"You always try to fix things you didn’t even break.",

"You love selflessly — that’s rare and beautiful.",

"You carry pain quietly so others can be at peace.",

"You keep showing up, even when you’re tired of being overlooked.",

"You always choose kindness, even when it costs you.",

'You put others first, and they rarely realize how much that means.',

"You see the best in people who’ve shown you their worst.",

"You give your heart without expecting anything in return.",

"You’ve mastered the art of staying strong when you’re alone.",

"You keep believing in people who’ve let you down.",

"You’re too pure for a world that doesn’t value sincerity enough.",

"You give love freely — that’s something most people have forgotten how to do.",

"You have a gentle heart that keeps getting tested but never hardens.",

"You still wish the best for people who hurt you.",

"You’re the kind of person who deserves more appreciation than you get.",

"You’ve been everyone’s safe place — even when you needed one.",

"You always see hope, even after being disappointed again and again.",
];


// size is 30 
const recommendation = [

"Offer water or shade to someone working under the sun.",

"Compliment others genuinely to dissolve ego and attract respect.",

"Donate something useful (like a fan or umbrella) in summer.",

"Feed milk or water to stray animals for emotional peace.",

"Keep a bowl of clean water for birds on your balcony.",

"Visit a river, lake, or seaside — sit quietly and let your emotions settle.",

"Help a student or child with studies.",

"Gift stationery, books, or notebooks to school kids.",

"Speak politely, even when you disagree — it improves Mercury energy.",

"Spread kindness by helping someone feel valued.",

"Donate clothes, perfume, or cosmetics to someone in need.",

"Keep your surroundings clean and fragrant — Venus loves beauty.",

"Feed a red-colored animal (like a brown dog) or offer red lentils to the poor.",

"Do some physical exercise — release anger through action, not words.",

"Protect or defend someone being treated unfairly.",

"Feed yellow food (like bananas or chana dal) to cows or monks.",

"Teach or guide someone without expecting anything in return.",

"Share inspirational knowledge or a good book with a friend.",

"Cook something sweet and share it with neighbors or coworkers.",

"Express gratitude to your mother or any nurturing figure.",

"Feed black dogs, crows, or help laborers — Saturn blesses humility.",

"Visit or assist elderly people — even a phone call matters.",

"Donate footwear or blankets to those in need.",

"Avoid arrogance; help someone anonymously.",

"Guide someone lost or struggling without judging them.",

"Practice daily meditation or breathwork for clarity.",

"Offer food to stray animals or birds every morning.",

"Donate old clothes or unused items — release attachment.",

"Spend 10 minutes in silence each day to cleanse your inner energy.",

"Feed a street dog and spread kindness — the simplest, purest remedy of all. ",

];



// size is 20 
const prediction = [

"Success is just around the corner for you — stay consistent, your glow-up is inevitable.",

'A long-awaited wish will soon unfold in a surprisingly gentle way.',

"The universe is aligning things behind the scenes — trust the timing.",

" Your passion will soon open doors that once felt impossible.",

"Financial stability is coming; patience is planting your prosperity.",

"A meaningful connection will soon enter your life, bringing comfort and peace.",

"You’re stepping into a phase where your hard work finally gets noticed.",

"A creative breakthrough will light up your path in the coming days.",

"People who once misunderstood you will soon admire your strength.",

"You’re attracting opportunities that match your true purpose.",

"An unexpected blessing is on its way — stay open to surprises.",

"Your emotional healing is turning into wisdom and calm confidence.",

"Travel or a big change in environment will bring new inspiration.",

"Someone will soon express genuine appreciation for all you do.",

"A phase of confusion is ending — clarity and direction are coming soon.",

"Your next step will lead to something bigger than you imagine.",

"Recognition and respect are heading your way; your efforts won’t go unnoticed.",

"You’ll soon find balance between what you want and what you deserve — and they’ll finally match.",

"A message or news will shift your plans in a very positive direction.",

"The universe is preparing a moment that will remind you why you never gave up.",
];


const form = document.getElementById('astroForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);


    const text = `Hi ${name} ${surname} , Your Zodiac sign is ${zodiacSigns[month-1]}
    .${compliments[day-1]}. ${victimcardcompliments[year%30]}. ${recommendation[(day*month)%30]} 
    ${prediction[(name.length*surname.length)%20]}`


    document.getElementById('result').textContent = text ; 
})




