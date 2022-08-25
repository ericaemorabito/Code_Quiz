//Selecting elements
var startButton = document.getElementById("start_button");
var saveButton = document.getElementById("save_button");
var highScoresButton = document.getElementById("high_scores_button");
var timeRemaining = document.getElementById("seconds_remaining");
var finalScore = document.getElementById("final_score");
var welcomePage = document.getElementById("welcome_message");
var gameOverPage = document.getElementById("game_over");
var highScoresPage = document.getElementById("high_score_page");
var highScoreTitle = document.getElementById("high_score_title");
var questionPage = document.getElementById("question_page");
var questionElement = document.getElementById("question");
var answerArea = document.getElementById("answer_options")
var time = 60;
var score; 
var index = 0; 
var question;
var newAnswerButton;

//Functions for showing and hiding each page
var hideWelcome = function() {
  welcomePage.setAttribute("data-state", "hidden");
};
var showGameOver = function() {
  gameOverPage.setAttribute("data-state", "visible");
};
var showHighScores = function() {
  highScoresPage.setAttribute("data-state", "visible");
};
var showQuestionPage = function() {
  questionPage.setAttribute("data-state", "visible");
};

const questionList = [
  {
    question: "What is question 1?",
    answers: ["Q1 First answer", "Q1 second answer", "Q1 third answer"],
    correct: [true, false, false]
  }, 
  {
    question: "What is question 2?",
    answers: ["Q2 First answer", "q2 second answer", "q2 third answer"],
    correct: [true, false, false]
  }, 
  {
    question: "What is question 3?",
    answers: ["q3 First answer", "q3 second answer", "q3 third answer"],
    correct: [true, false, false]
  }
];

//Timer
function startTimer() {
  //Count goes down by one second until it reaches 0
  var countdown = setInterval(function () {
    time--;
    timeRemaining.innerHTML = time;

    //Timer stops at 0 seconds OR if all questions are answered
    if (time === 0 || index === questionList.length) {
      clearInterval(countdown);
      questionPage.style.display = 'none' //hides question pages and reveals game over page
      showGameOver();
      score = time; 
      finalScore.innerHTML = score //print score to page
      highScoresButton.disabled = false;
    } 
  }, 1000);
};

// Timer loses 10 seconds
function loseTenSeconds() {
	time = time - 10;
};

//When page loads, high score page is disabled
var init = function(){
  highScoresButton.disabled = true;
};

init();
startQuiz();

// Start Button Clicked - invokes the start Quiz
function startQuiz() {
  startButton.addEventListener('click', function(){ //Start button clicked
  startTimer(); //timer begins
  hideWelcome();
  showQuestionPage();
  nextQuestion();
  renderScores();
})};

var nextQuestion = function() {
  //Populate question
  if (index < questionList.length) { //if index is less than number of question in the list
    var question = questionList[index].question //gets the string stored in question key
    questionElement.textContent = question;// put string into question element
  //Populate answers
    var answers = questionList[index].answers //gets the array of answer options
    answerArea.innerHTML = "";
    var correct = questionList[index].correct
    for (let i  = 0; i < answers.length; i ++){ // create a button for each answer in the area and set content to answer each value in array 
      var newAnswerButton = document.createElement("button"); //create btn
      newAnswerButton.textContent = answers[i]; //btn text = answer choices
      answerArea.appendChild(newAnswerButton); //add btn to answer area
      newAnswerButton.addEventListener('click', function(){
        if (correct[i] === true){
          alert('correct!')
        } else if (correct[i] === false){
          alert('wrong!')
          loseTenSeconds();
        }
        index++; //when answer button clicked, index goes up by one
        nextQuestion(); //nextQuestion populates in
      })
    }
  } 
};

//Save Button - puts initial and score into local storage and calls to render on high scores page
saveButton.addEventListener('click', function(event){
  event.preventDefault();
  var initials = document.getElementById('enter_initials').value;
  localStorage.setItem('initials', initials);
  localStorage.setItem('score', score);
  renderScores();
  alert('Score saved!');
});

function renderScores() {
  initials = localStorage.getItem('initials'); //get's the string's value == string value
  score = localStorage.getItem('score');
  var renderedScore = initials.concat(' ', score); //initials and score together
  var newScoreLine = document.createElement('p'); //create's line for score
  highScoreTitle.appendChild(newScoreLine); //adds new line to highscore title
  newScoreLine.textContent = renderedScore; //sets initials into new score line <p>
};

highScoresButton.addEventListener('click', function(){
  gameOverPage.style.display = 'none'; //hides game over page
  showHighScores();
  });