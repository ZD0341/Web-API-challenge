var welcome = document.querySelector("#introduction");
var startBtn = document.querySelector("#start_button");
var introPage =document.querySelector("#intro_page");

var questionPage = document.querySelector("#question_page");

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

var questionNumber = 0;


/*Functions*/
//WHEN I click the start button, THEN a timer starts(The setInterval() Method)
function countdown() { 
    var timerInterval = setInterval(function () {

        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + " s";
  
          if (secondsLeft <= 0){
              clearInterval(timerInterval);
              timeLeft.textContent = "Time is up!"; 
              finish.textContent = "Time is up!";
              gameOver();

          } else  if(questionCount >= questionSource.length +1) {
              clearInterval(timerInterval);
              gameOver();
              } 
  }, 1000);
}

//Click the button to start the quiz
function startQuiz() {
    introPage.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    countdown();
        
    showQuestion(questionNumber);
}
//present the questions and answers
function showQuestion() {
    const question = questionSource[currentQuestion];
    questionTitle.textContent = question.question;
    choicesContainer.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.setAttribute("data-index", index);
        choiceButton.addEventListener("click", checkAnswer);
        choicesContainer.appendChild(choiceButton);
    });
}

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

