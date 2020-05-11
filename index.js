var you = [
  'What’s your name?',
  'What’s your surname?',
  'What’s  your nickname?',
  'What do you do?',
  'Do you like being a (job)? Why?',
  'What’s your favourite kind of music? Which bands do you like?',
  'What’s your favourite day of the week?  Why?',
  'What do you do in your free time?',
  'How often do you eat out?',
  'What’s your favourite restaurant?',
  'Do you have any brothers or sisters? Talk about them.',
  'Do you have a pet? Talk about it.',
  'What’s your phone number?',
  'What’s your email address?',
  'What’s your favourite month of the year? Why?',
  'What do you usually do on Saturdays?',
  'How often do you go to the cinema?',
  'What’s your favourite kind of movie?',
  'Where do you live? How did you get here?',
  'What’s your favourite food and drink?',
  'When is your birthday?',
  'What do you usually do on your birthday?',
  'What’s your favourite sport? How often do you play it?',
  'How often do you go on holidays? Where do you like going?',
  'What do you do in the evening?',
  'What time do you usually go to bed?',
];

var school = [
  'What school do you go to? Where is it? How do you get there?',
  'What’s your favourite subject? Why do you like it?',
  'What time do you get up on a school day? Who wakes you up?',
  'What time does school start? When does it finish? Are there any breaks?',
  'Is your school far from your home? How long does it take you to get to school?',
  'What time do you go to bed on the eve of a school day? Do you ever stay up late?',
  'Where is your school located? Is it easy to get there?',
  'How many students are there in your school? How many in your class?',
  'What classes don’t you like? Why not?',
  'Have you ever been late for class? If so, why? Was the teacher angry?',
  'What do you do during breaks?',
  'Where do you have lunch? What do you usually eat for lunch?',
  'Have you ever fallen asleep in class? If so, why?',
  'Have you ever been punished at school? Why? What was the punishment?',
  'What subjects are you good at? What subjects are difficult for you?',
  'Do you ever skip class? If so, what do you do?',
  'Give examples of school rules. Have you ever broken any?',
  'What do you like best about your school?',
];

var music = [
  'What’s your favourite kind of music?',
  'Can you play a musical instruments? If so, which one?',
  'How often do you listen to music?',
  'Have you ever been to a concert or live show?',
  'Have you ever sung karaoke? Do you like it?',
  'Do you like to sing? Why (not)?',
  'How many CDs do you have? What’s your favourite?',
  'Do you have an MP3-player? How often do you use it?',
  'Have you ever downloaded music from the Internet? Why?',
  'Do you prefer music in English or in your own language? Why?',
  'Which musician or band would you most like to meet? Why?',
  'Do you ever listen to loud music? When?',
  'Can you dance? What’s your favourite dance?',
  'Do you listen to music on the radio? What’s your favourite radio station?',
  'When you listen to music, do you try to understand the words (lyrics)?',
  'Would you like to be a famous singer? Why?',
  'What’s your favourite singer? Why do you like him or her?',
  'What’s your favourite band? Why do you like it?',
  'Who’s your favourite singer? What’s your favourite band? Why?',
  'What’s the hottest band ( or singer) at the moment? Why are they popular?',
  'Which songs currently top the charts? Which music programmes or channels do you watch?',
  'Have you ever been to a pop concert?',
  'What’s you favourite music video? Describe it.',
  'What kind of music do you like? Do your parents share your taste?',
  'How important is music to you? Could you live without it?',
  'Do you play in a band? If so, explain. If not, would you like to?',
  'Where do you get your music? How often do you buy songs or CDs?',
  'What’s the best band (or singer) ever?',
  'What kind of popular music styles do you know? Make a list with examples.',
  'MP3 player, CD player, cassette player, radio. Which do you use to listen to music?',
  'Do you try to understand the lyrics of the music you listen to?',
  'Do you usually like a song because of the music or the lyrics?',
  'Do you like singing karaoke? Why or why not?',
  "‘Anything that is too stupid to be spoken is sung’ Do you agree?",
  "‘MTV is to music as KFC is to chicken’ Explain. Do you agree?",
  "Has your taste in music changed over the years?",

];

//tips
const temas = {  
  you: you,
  school: school,
  music: music,
};

const selectElement = document.querySelector('#select');
let tema = 'you';

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

selectElement.addEventListener('change', (event) => {
  console.log(event.target.value);
  tema = event.target.value.toLowerCase();
  var elem = document.getElementById('textAsk');
  elem.innerHTML = getRandom(temas[tema]);
});

var square = document.getElementById('square');

square.addEventListener('click', function () {
  var elem = document.getElementById('textAsk');
  elem.innerHTML = getRandom(temas[tema]);
});

