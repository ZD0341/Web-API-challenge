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
            question: "Questions 1 : ",
            choices: [],
            answer: ""
        },
        {
            question: "Questions 2 : ",
            choices: [],
            answer: ""
        },
        {
            question: "Questions 3 : ",
            choices: [],
            answer: ""
        },
        {
            question: "Questions 4 : ",
            choices: [],
            answer: ""
        },
        {
            question: "Questions 5 :  ",
            choices: [],
            answer: ""
        },
        {
            question: "Questions 6",
            choices: [],
            answer: ""
        },
    ];
    
    /*Functions*/
        //WHEN I click the start button, THEN a timer starts(The setInterval() Method)
    function countdown() {}
    
        //Click the button to start the quiz
    function startQuiz () {}
        //present the questions and answers
    function showQuestion () {}
    
        //WHEN I answer a question,Show if answer is correct or wrong 
    function checkAnswer() {}
        //WHEN all questions are answered or the timer reaches 0, Game is over
    function gameOver() {};
    
    // get current score and initials from local storage
    function getScore () {};
    
    
    // render score to the score board
    function renderScore () {};
    
    // sort score and ranking the highscore list
    function sort () {};
    
  