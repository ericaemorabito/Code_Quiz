//Declare variables with get element by id 

//Start Button
var startButton = document.getElementById("start_button");
//Save score button
var saveButton = document.getElementById("start_button");
//Time remaining
var timeRemaining = document.getElementById("seconds_remaining");
//Correct answer button
var correctAnswer = document.querySelector(".correct_answer");
// Wrong answer buttons
var wrongAnswer = document.querySelector(".wrong_answer");
//Correct and wrong message
var correctOrWrongMessage = document.querySelector(".correct_wrong_message");
//play Again button
var playAgain = document.getElementById("play_again_button");
//final score on game over page
var finalScore = document.getElementById("final_score");

//Each Page
var welcomePage = document.getElementById("welcome_message");
var questionOnePage = document.getElementById("question_1");
var questionTwoPage = document.getElementById("question_2");
var questionThreePage = document.getElementById("question_3");
var gameOverPage = document.getElementById("game_over");
var highScoresPage = document.getElementById("high_score_page");

//Functions for showing and hiding each page
var hideWelcome = function() {
  welcomePage.setAttribute("data-state", "hidden");
}

var showQ1 = function() {
  questionOnePage.setAttribute("data-state", "visible");
}

var hideQ1 = function() {
  questionOnePage.setAttribute("data-state", "hidden");
}

var showQ2 = function() {
  questionTwoPage.setAttribute("data-state", "visible");
}

var hideQ2 = function() {
  questionTwoPage.setAttribute("date-state", "hidden")
}

var showQ3 = function() {
  questionThreePage.setAttribute("data-state", "visible");
}

var hideQ3 = function() {
  questionThreePage.setAttribute("date-state", "hidden")
}

var showGameOver = function() {
  gameOverPage.setAttribute("data-state", "visible");
}

var showHighScores = function() {
  highScoresPage.setAttribute("data-state", "visible");
}

//Function for displaying wrong message
var displayWrongMessage = function(){
  correctOrWrongMessage.innerHTML = "Wrong";
  correctOrWrongMessage.setAttribute("style", "red");
  
}

//TODO: Correct answer is clicked --DIDN'T WORK WITHIN FUNCTION
var correctAnswerClicked = function() {
  correctAnswer.addEventListener("click");
}

//TODO: Wrong answer is clicked --DIDN'T WORK IN FUNCTION
var wrongAnswerClicked = function(){
  wrongAnswer.addEventListener("click");
}

//Game starts with 30 seconds
var time = 30;

//Starting Quiz when button clicked
function startQuiz() {
  startButton.addEventListener('click', function() {
    startTimer();
    // Hides the welcome page
    hideWelcome();
    // Shows question 1
    showQ1(); })
  
  //correct answer button clicked --WORKS
  correctAnswer.addEventListener('click', function() {
    hideQ1();
    showQ2();})
  
    //TODO:wrong answer button clicked
  wrongAnswer.addEventListener('click', function() {
    hideQ1();
    showQ2();
    displayWrongMessage();
  })

  //TRYING - make everything into their own function to not repeat
  // if (correctAnswerClicked) {
  //   hideQ1();
  //   showQ2();
  // } else if (wrongAnswerClicked) {
  //   hideQ1();
  //   showQ2();
  //   displayWrongMessage(); }
 };


startQuiz();

//Timer
function startTimer() {
  //Count goes down by one second until it reaches 0
  var countdown = setInterval(function () {
    time--;
    timeRemaining.innerHTML = time;

    //Timer stops at 0 seconds
    if (time === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

//TODO: Timer loses 10 seconds
function loseTenSeconds() {
	time = time - 10;
}

//TODO: End Game
//TODO: Show highscores page