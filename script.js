//Declare variables with get element by id 

//Start Button
var startButton = document.getElementById("start_button");
//Save score button
var saveButton = document.getElementById("save_button");
//Time remaining
var timeRemaining = document.getElementById("seconds_remaining");
//Correct and wrong message
var correctOrWrongMessage = document.querySelector(".correct_wrong_message");
//play Again button
var playAgain = document.getElementById("play_again_button");
//final score on game over page
var finalScore = document.getElementById("final_score");

//Each Page
var welcomePage = document.getElementById("welcome_message");
var gameOverPage = document.getElementById("game_over");
var highScoresPage = document.getElementById("high_score_page");

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

//TODO: new code below
// Selects the question section element
var questionPage = document.getElementById("question_page");
// Question <p> Element
var questionElement = document.getElementById("question");
//Answer buttons
var answerButtons = document.querySelectorAll(".answer_btn");


// Start Button Clicked - invokes the start Quiz
startButton.addEventListener('click', function(){
  startQuiz()
});

// Shows the question page
var showQuestionPage = function() {
  questionPage.setAttribute("data-state", "visible");
}

// Starting the quiz - starts timer, hides welcome page, shows the question page
function startQuiz() {
  startTimer();
  hideWelcome();
  showQuestionPage();
  };

//TODO: Event listener for each answer button & populates the new questions
for (var i = 0; i < answerButtons.length; i++){ 
  answerButtons[i].addEventListener('click', function(){
    console.log("answer clicked");
    newQuestion();//when answer buttons clicked, choose the next question, choose the next answers,
    displayNewQuestion(); //display new questoin and answers in the HTML
  })
}

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
var answersArray;

//TODO: iterate through questionList array choosing each question string and answers array
var newQuestion = function(){
  for (i=0; i < questionList.length; i++){
    var question = questionList[i].question; //This is the string in each index of questionList.question
    var answersArray = questionList[i].answers //This is the array of strings containing the answer options in current question in questionList array
  }
}
newQuestion();
// console.log(questionList[0].question)
// console.log(questionList[1].question)
// console.log(questionList[0].answers)
// console.log(questionList[1].answers)

//TODO: print chosen question and answers to the HTML
function displayNewQuestion(){
  questionElement.innerHTML = question; //display question in question Element
  answerButtons.innerHTML = answersArray; //TODO: How to put this array of strings into each button
}