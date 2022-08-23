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
console.log(questionElement)
//Answer buttons
var answerButtons = document.querySelectorAll(".answer_btn");
console.log(answerButtons)

// Start Button Clicked - invokes the start Quiz
startButton.addEventListener('click', function(){
  startQuiz()
});

// Shows the question page
var showQuestionPage = function() {
  questionPage.setAttribute("data-state", "visible");
}

//  Starting the quiz
function startQuiz() {
  console.log("The game has started!")
  startTimer();
  hideWelcome();
  //Show questions
  showQuestionPage();
  if (answerButtons.addEventListener('click')) { //if answer buttons are clicked then populate question with new question & answer
    newQuestion();
  };
  newQuestions(); //TODO:
};

//TODO: write a function that specifically populates the question and its answers, and then invoke that function in the if statement

function newQuestion() {
  for (i=0; i < questionList.length; i++){
    questionElement.innerHTML = questionList[i].question
    for (i=0; i < questionList.answer.length; i++)
    answerButtons.innerHTML = questionList.answer[i].option
  }
}

const questionList = [
  {
    question: "What is question 1?",
    answers: [
      {option: 'A', correct: true}, 
      {option: 'B', correct: false},
    ]
  } ,
  {
    question: "What is question 2?" , 
    answers: [
      {option: 'A', correct: false},
      {option: 'B', correct: true}
    ]
  }
]

console.log(questionList.answer)
