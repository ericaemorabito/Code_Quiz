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
    console.log("answer clicked")//function here
    newQuestion();//when answer buttons clicked, populate question & buttons with new question & answer options from questions object
  })
}

const questionList = [
  { //index 0
    question: "What is question 1?",
    answers: [
      {option: "Answer A", correct: true},
      {option: "Answer B", correct: false}
    ]
  }, 
  {
    question: "What is question 2?",
    answers: [
      {option: "Answer A", correct: true},
      {option: "Answer B", correct: false}
    ]
  }
]

// logs "What is question 1?"
console.log(questionList[0].question); 

// logs "What is question 2?"
console.log(questionList[1].question);

// logs answer A from question 1
console.log(questionList[0].answers[0].option)
 
// logs answer B from question 2
console.log(questionList[1].answers[1].option)

//logs if Answer B from question 2 is true or false
console.log(questionList[1].answers[1].correct)

//TODO: write a function that specifically populates the question and its answers
function newQuestion() {
  for (i=0; i < questionList.length; i++){
    questionList[i]
    questionElement.innerHTML = questionList[i].question
  }
}

  function newAnswers() {
    for (i=0; i < questionList.answer.length; i++)
    answerButtons.innerHTML = questionList.answer[i].option
  }
