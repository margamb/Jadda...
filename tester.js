const you = [
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
  
  const family = [
    'How many people are there in your family? Who are they?',
    'Do you have any brothers or sisters?', 
    'How many grandparents have you got? How often do you see them?',
    'How do your parents earn a living?(= what are their jobs)',
    'What does your family usually do on Sundays?',
    'Who’s the oldest in you family? Who’s the youngest?',
    'How many cousins do you have? What do you do when you see them?',
    'So you have any great-grandparents? If so, how old are they?',
    'Do you have any family living or working abroad?',
    'Pick a family member. Describe looks (= outside) and character (=inside)',
    'Does your family eat meals together ? What else do you do together?',
    'Who does the housework in your family? (Cooking, cleaning, washing…)',
    'Talk about the relative you like most. Say why you like him or hem.',
    'Would you live with your parents after getting married? Why or why not?',
    'Are there any rules in your family? What are they? Do you think they are fair?',
    'What do your parents look like? Do you take after them? (= look like them)',
    'Is family important to you?',
    'Do you ever hold a family reunion? If so, what happens there?',
  ];
  
  const school = [
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

const temas = {  
    you: you,
    family: family,
    school: school,
};

const selectElement = document.querySelector('#select');
let tema = 'you';

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

selectElement.addEventListener('change', (event) => { 
    console.log(event.target.value); // I can put or not
    var elem = document.getElementById('textAsk');
    elem.innerHTML = getRandom(temas[tema]);

    var square = document.getElementById('square');
});
    
square.addEventListener('click', function () {
    var elem = document.getElementById('textAsk');
    elem.innerHTML = getRandom(temas[tema]);    
});

//  With this way We avoid to put all this code ->
// tema = event.target.value.toLowerCase(); // toLowerCase() method pasar todo a minusculas
// tema = tema.replace(/\s/g, ''); //How to replace white space inside a string in JavaScript