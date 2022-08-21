//Declare variables with get element by id 

//Start Button
var startButton = document.getElementById("start_button");
//Save score button
var saveButton = document.getElementById("start_button");
//Time remaining
var timeRemaining = document.getElementById("seconds_remaining");
//Correct answer button
var correctAnswer = document.querySelector(".correct_answer");
//Correct and wrong message
var correctOrWrongMessage = document.querySelector(".correct_wrong_message");
//play Again button
var playAgain = document.getElementById("play_again_button");
//final score on game over page
var finalScore = document.getElementById("final_score");

//Each Page
//Welcome Page
var welcomePage = document.getElementById("welcome_message");
//Question 1
var questionOnePage = document.getElementById("question_1");
//Question 2
var questionTwoPage = document.getElementById("question_2");
//Question 3
var questionThreePage = document.getElementById("question_3");
//Game Over Page
var gameOverPage = document.getElementById("game_over");
//High Score Page
var highScoresPage = document.getElementById("high_score_page");

//Game starts with 60 seconds
var time = 60;

//How page is when it is loaded
function init () {
  //Pages that are hidden
  welcomePage.style.display = 'none';
}
function init();

//Starting Quiz when button clicked
function startQuiz() {
  startButton.addEventListener('click', function() {
    startTimer();
    console.log('testing')
  })
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

//Function Questions Begins

//JavaScript to hide/reveal things
//element.style.display = "none";
//element.style.display = "block";

//Function lose 10 seconds
function loseTenSeconds () {
  //if wrong answer button clicked {
    //timer goes down by 10 seconds
    //if time < 10 then time becomes 0 
    //timer continues to end at 0
  }