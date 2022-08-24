//Selecting elements
var startButton = document.getElementById("start_button");
var saveButton = document.getElementById("save_button");
var timeRemaining = document.getElementById("seconds_remaining");
var playAgain = document.getElementById("play_again_button");
var finalScore = document.getElementById("final_score");
var welcomePage = document.getElementById("welcome_message");
var gameOverPage = document.getElementById("game_over");
var highScoresPage = document.getElementById("high_score_page");
var questionPage = document.getElementById("question_page");
var questionElement = document.getElementById("question");
var answerArea = document.getElementById("answer_options")

//Functions for showing and hiding each page
var hideWelcome = function() {
  welcomePage.setAttribute("data-state", "hidden");
}
var showGameOver = function() {
  gameOverPage.setAttribute("data-state", "visible");
}
var showHighScores = function() {
  highScoresPage.setAttribute("data-state", "visible");
}
var showQuestionPage = function() {
  questionPage.setAttribute("data-state", "visible");
}

//Game starts with 60 seconds
var time = 60;

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

// Timer loses 10 seconds
function loseTenSeconds() {
	time = time - 10;
}

// Start Button Clicked - invokes the start Quiz
startButton.addEventListener('click', function(){
  startTimer();
  hideWelcome();
  showQuestionPage();
  nextQuestion(); //TODO:
  displayNewQuestion(); //TODO:
});

//TODO: ...
var index = 0; 
var question;
var newAnswerButton;

var nextQuestion = function() {
  //TODO: question not working
  //Populate question
  if (index < questionList.length) { //if index is less than number of question in the list
    var question = questionList[index].question //gets the string stored in question key
    questionElement.textContent = question;// put string into question element

    var answers = questionList[index].answers //gets the array of answer options
    for (let i  = 0; i < answers.length; i ++){ // create a button for each answer in the area and set content to answer text
      var newAnswerButton = document.createElement("button");
      newAnswerButton.textContent = answers[i];
      answerArea.appendChild(newAnswerButton)
    }
  }
}












//TODO: populates the new questions
// for (var i = 0; i < answerButtons.length; i++){ 
//   answerButtons[i].addEventListener('click', function(){
//     console.log("answer clicked");
//     newQuestion();/
//     displayNewQuestion(); 
//   })
// }

const questionList = [
  { //index 0
    question: "What is question 1?",
    answers: ["First answer", "second answer"]
  }, 
  {
    question: "What is question 2?",
    answers: [ "First answer q2" , "Second answer q2"]
  }
]

//TODO: write a function that specifically populates the question and its answers
var question;
var answers;

//TODO: iterate through questionList array choosing each question string and answers array
// var newQuestion = function(){
//   for (i=0; i < questionList.length; i++){
//     var question = questionList[i].question; //This is the string in each index of questionList.question
    // var answers = questionList[i].answers //This is the array of strings containing the answer options in current question in questionList array
//   }
// }