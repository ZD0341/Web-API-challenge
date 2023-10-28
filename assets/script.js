// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
var questionSource = [
    {
        question: "Questions 1 : What does HTML stand for?",
        choices: ["a. Hyper Trainer Marking Language",
            "b. Hyper Text Marketing Language",
            "c. Hyper Text Markup Language",
            "d. Hyperlinks and Text Markup Language"],
        answer: "c"
    },
    {
        question: "Questions 2 : Which symbol is used for single-line comments in JavaScript?",
        choices: ["a. //", "b. --", "c. #", "d. /**/"],
        answer: "a"
    },
    {
        question: "Questions 3 : Which tag is used for creating an unordered list in HTML?",
        choices: ["a.<ul>/", "b. <li>", "c. <ol>", "d. <ul>and<li>"],
        answer: "a"
    },
    {
        question: "Questions 4 : What does CSS stand for?",
        choices: ["a. Computer Style Sheets", "b. Creative Style Sheets", "c. Cascading Style Sheets", "d. Colorful Style Sheets"],
        answer: "c"
    },
    {
        question: "Questions 5 :  Which of the following is NOT a JavaScript data type?",
        choices: ["a. String", "b. Boolean", "c. Undefined", "d. Float"],
        answer: ""
    },
    {
        question: "Questions 6 : What is the correct way to link an external JavaScript file in HTML?",
        choices: ["a. <script href=scriptjs></script>", "b.  <script src=script.js></script>", "c. <script link=script.js></script>", "d. <script file=script.js></script>"],
        answer: "b"
    },
];

/*Functions*/
//WHEN I click the start button, THEN a timer starts(The setInterval() Method)
function countdown() { }

//Click the button to start the quiz
function startQuiz() { }
//present the questions and answers
function showQuestion() { }

//WHEN I answer a question,Show if answer is correct or wrong 
function checkAnswer() { }
//WHEN all questions are answered or the timer reaches 0, Game is over
function gameOver() { };

// get current score and initials from local storage
function getScore() { };


// render score to the score board
function renderScore() { };

// sort score and ranking the highscore list
function sort() { };

