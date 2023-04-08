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

questionEl.innerHTML= newQuestion.question;

};

var newQuestion = [
    {
    question:'What are the 3 core technologies in web development?',
    answers: [
        { text: 'javascript, CSS, & HTML', correct: true },
        { text: 'HTML & CSS', correct: false },
        { text: 'Node, React, & Express', correct: false },
        { text: 'None of the Above', correct: false}
    ]
}
];

//     question: 'What answer properly describes the for each method?'
//     answers: [
//         { text: 'for each will execute a function for each element in an array', correct: true },
//         { text: 'will not execute the fucntion for each element', correct: false },
//         { text: 'will concatenate each element in the array', correct: false },
//         { text: 'none of the above', correct: false }];

//     question: 'What is javascript?'
// answers: [
//         { text: 'kansgldn', correct: false }
//     { text: 'kansgldn', correct: false }
//     { text: 'kansgldn', correct: true }
//     { text: 'kansgldn', correct: false }

//     question: 'What are the benefits of javascript?'
// answers: [
//             { text: 'versatile', correct: false },
//             { text: 'makes it more dynamic for the user', correct: false },
//             { text: 'can be used for client and server side', correct: false },
//             { text: 'all of the above', correct: true },

//             question: 'Which are commonly used data types?'
// answers: [
//                 { text: 'object', correct: false },
//                 { text: 'string', correct: false },
//                 { text: 'boolean', correct: false },
//                 { text: 'all of the above', correct: true }


//             ]

//   }

// ];

