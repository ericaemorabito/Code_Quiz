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
    question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language",
              "Hypertext Marking Language",
              "Hyperspeed Markup Language",
              "Hypertext Marked Language"],
    correct: [true, false, false, false]
  }, 
  {
    question: "What is an anchor tag in HTML?",
    answers: ["tag used to type", 
              "tag used to link a webpage",
              "tag used to link an image",
              "tag used to link Github"],
    correct: [false, true, false, false]
  }, 
  {
    question: "Where are HTML attributes defined?",
    answers: ["within the element",
              "in the element's opening tag",
              "in the element's closing tag",
              "in the element's children's tag"],
    correct: [false, true, false, false]
  },
  {
    question: "What are inline elements in HTML?",
    answers: ["elements that take the full available width",
              "elements that take the full available length", 
              "elements that only take width required to fit into container",
              "elements that take half the available width"],
    correct: [false, false, true, false]
  },
  {
    question: "What is the z-index in CSS?",
    answers: ["a property specifying the stack order of an element",
              "a property specifying the height order of an element", 
              "a property specifying the click order of an element",
              "a property specifying the return order of an element"],
    correct: [true, false, false, false]
  },
  {
    question: "Which CSS property affects the space between characters in a text?",
    answers: ["letter-size",
              "letter-spacing", 
              "letter-space",
              "letter-use"],
    correct: [false, true, false, false]
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

//When page loads, high score button is disabled
var init = function(){
  highScoresButton.disabled = true;
};

init();
startQuiz();

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
        } else if (correct[i] === false){
          alert('You answered incorrectly!')
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