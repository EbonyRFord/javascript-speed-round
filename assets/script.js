var start = document.getElementById('start');
start.addEventListener('click', startTimer);
start.addEventListener('click', startGame);

var questionEl = document.getElementById('questions');
var answerEl = document.getElementById('answers');




function startTimer() {
    var timeLeft = 180;
    setInterval(function () {

        if (timeLeft > 1) {

            start.textContent = timeLeft + ' second(s) remaining';

            timeLeft--;
        } else {

            start.textContent = 'time is up!';
        }
    }, 1000);
};

function startGame() {
    console.log("game started");
var i = 0;
questionEl.innerHTML= newQuestion[i].question;
answerEl.innerHTML=
'<button class="btn1">'+ newQuestion[i].answers[0] +'</button>'
        + '<button class="btn2">'+ newQuestion[i].answers[1] +'</button>'
        + '<button class="btn3">'+ newQuestion[i].answers[2] +'</button>'
        + '<button class="btn4">'+ newQuestion[i].answers[3] +'</button>';
for (i=0; i <newQuestion.length; i++) {
     
        

}




    };

    var newQuestion = [ 
    {
    
    numb: 1,
    question: 'What are the 3 core technologies in web development?',
    correct: 'javascript, CSS, & HTML',
    answers: [
        'javascript, CSS, & HTML', 
        'HTML & CSS',
        'Node, React, & Express',
        'None of the Above',
       
    ]},
{

    numb: 2,
    question: 'What answer properly describes the for each method?',
    correct: 'for each will execute a function for each element in an array',
    answers: [
        'for each will execute a function for each element in an array',
        'will not execute the fucntion for each element',
        'will concatenate each element in the array',
        'none of the above',
    ]},
{
    numb: 3,
    question: 'What is javascript?',
    correct: 'kansgldn',
    answers: [
        'kansgldn',
        'kansgldn',
        'kansgldn',
        'kansgldn',
]},
{
    numb: 4,
    question: 'What are the benefits of javascript?',
    correct: 'all of the above',
    answers: [
            'versatile',
            'makes it more dynamic for the user',
            'can be used for client and server side',
            'all of the above',
]},
{
    numb: 5,
    question: 'Which are commonly used data types?',
    correct: 'all of the above',
    answers: [
            'object',
            'string',
            'boolean',
            'all of the above',


            ]

  }];

