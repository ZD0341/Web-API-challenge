var welcome = document.querySelector("#introduction");
var startBtn = document.querySelector("#start_button");
var introPage = document.querySelector("#intro_page");

var questionPage = document.querySelector("#question_page");
var askQuestion = document.querySelector("#ask_question");

var reactButtons = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answer_btn1");
var answerBtn2 = document.querySelector("#answer_btn2");
var answerBtn3 = document.querySelector("#answer_btn3");
var answerBtn4 = document.querySelector("#answer_btn4");

var checkLine = document.querySelector("#check_line");
var scoreBoard = document.querySelector("#submit_page");
var finalScore = document.querySelector("#final_score");
var userInitial = document.querySelector("#initial");

var submitBtn = document.querySelector("#submit_btn");
var highScorePage = document.querySelector("#highscore_page");
var scoreRecord = document.querySelector("#score_record");
var scoreCheck = document.querySelector("#score_check");
var finish = document.querySelector("#finish");

var backBtn = document.querySelector("#back_btn");
var clearBtn = document.querySelector("#clear_btn");

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
        answer: "d"
    },
    {
        question: "Questions 6 : What is the correct way to link an external JavaScript file in HTML?",
        choices: ["a. <script href=scriptjs></script>", "b.  <script src=script.js></script>", "c. <script link=script.js></script>", "d. <script file=script.js></script>"],
        answer: "b"
    },
];

var timeLeft = document.getElementById("timer");

var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

function countdown() {

    var timerInterval = setInterval(function () {

        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + " s";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft.textContent = "Time is up!";
            // if time is up, show on score board content instead of "all done!"
            finish.textContent = "Time is up!";
            gameOver();

        } else if (questionCount >= questionSource.length + 1) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function startQuiz() {
    introPage.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);

}
function showQuestion(n) {
    askQuestion.textContent = questionSource[n].question;
    answerBtn1.textContent = questionSource[n].choices[0];
    answerBtn2.textContent = questionSource[n].choices[1];
    answerBtn3.textContent = questionSource[n].choices[2];
    answerBtn4.textContent = questionSource[n].choices[3];
    questionNumber = n;
}

function checkAnswer(event) {
    event.preventDefault();
    //make it display
    checkLine.style.display = "block";
    setTimeout(function () {
        checkLine.style.display = 'none';
    }, 1000);

    // answer check
    if (questionSource[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct!";
        totalScore = totalScore + 1;

    } else {
        secondsLeft = secondsLeft - 10;
        checkLine.textContent = "Wrong! The correct answer is " + questionSource[questionNumber].answer + " .";
    }
    //THEN I am presented with another question
    if (questionNumber < questionSource.length - 1) {
        // call showQuestions to bring in next question when any reactBtn is clicked
        showQuestion(questionNumber + 1);
    } else {
        gameOver();
    }
    questionCount++;
}
function gameOver() {

    questionPage.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    finalScore.textContent = "Your final score is :" + totalScore;
    timeLeft.style.display = "none";
};

function getScore() {
    var currentList = localStorage.getItem("ScoreList");
    if (currentList !== null) {
        freshList = JSON.parse(currentList);
        return freshList;
    } else {
        freshList = [];
    }
    return freshList;
};


function renderScore() {
    scoreRecord.innerHTML = "";
    scoreRecord.style.display = "block";
    var highScores = sort();
    var topFive = highScores.slice(0, 5);
    for (var i = 0; i < topFive.length; i++) {
        var item = topFive[i];
        var li = document.createElement("li");
        li.textContent = item.user + " - " + item.score;
        li.setAttribute("data-index", i);
        scoreRecord.appendChild(li);
    }
};

function sort() {
    var unsortedList = getScore();
    if (getScore == null) {
        return;
    } else {
        unsortedList.sort(function (a, b) {
            return b.score - a.score;
        })
        return unsortedList;
    }
};

function addItem(n) {
    var addedList = getScore();
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

function saveScore() {
    var scoreItem = {
        user: userInitial.value,
        score: totalScore
    }
    addItem(scoreItem);
    renderScore();
}


startBtn.addEventListener("click", startQuiz);

reactButtons.forEach(function (click) {

    click.addEventListener("click", checkAnswer);
});

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "none";
    highScorePage.style.display = "block";
    questionPage.style.display = "none";
    saveScore();
});

scoreCheck.addEventListener("click", function (event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "none";
    highScorePage.style.display = "block";
    questionPage.style.display = "none";
    renderScore();
});


backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "block";
    highScorePage.style.display = "none";
    questionPage.style.display = "none";
    location.reload();
});

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    renderScore();
});