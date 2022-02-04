var quiz = document.getElementById("quiz");
var container = document.getElementById("container");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionEl = document.getElementById("question");
var time = document.getElementById("time");
var startBtn = document.getElementById("startbtn");
var Container2 = document.getElementById("Container2");
var highscoreInputName = document.getElementById("initials");
var initialsForHighScoreDisplayName = document.getElementById("initialsForHighScore"
);
var endGameBtns = document.getElementById("endGameBtns");

var startPageHighscoreBtn = document.getElementById(
"startPageHighscore"
);
var tryAgainBtn = document.getElementById("tryAgainbtn");
var submitScoreBtn = document.getElementById("submitScoreBtn");
var questionCard= document.getElementById("question-card");


let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questionsObj = {
  question0ne:
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings","booleans","alert","numbers",],
      correctAnswer: "alert",
    },
  questionTwo:
    {
      question: "Arrays in JavaScript can be used to store ___",
      choices: ["numbers and strings","other arrays","objects","all the above",], 
      correctAnswer: "all the above",
    },
  questionThree:
    {
      question: "The condition in an if/ else statement is enclosed with ___",
      choices: ["culry brackets","quotes","parentheses","square brackets",],
      correctAnswer: "parentheses",
    },
  };

var SCORE = 100;
const MAX_QUESTIONS = 3;

function startQuestions () {
  quiz.style.display = "none";
  questionCard.style.display = "block";
  renderQuestion();
};


function renderQuestion () {
  var infoArr = Object.values(questionsObj);
  var currentQuestion = infoArr[questionCounter].question;
  questionEl.innerHTML = currentQuestion;

    renderChoices(infoArr)   
};

function renderChoices (arr) {
  var currentChoices = arr[questionCounter].choices;
  currentChoices.forEach((choice) => {
    createBtn = document.createElement("button");
    createBtn.classList.add('btnChoice');
    createBtn.innerHTML = choice;
    questionCard.appendChild(createBtn);

    btnClickEvent();
  });
};

function btnClickEvent() {
  var allButtons = document.querySelectorAll('.btnChoice');
  var btnArr = Array.from(allButtons);
  btnArr.forEach((btn) => {
    btn.addEventListener('click', () => {
      nextQuestion();
    })
  })
};

function nextQuestion() {
  questionCounter++;
  renderQuestion();
}
    

localStorage.setItem("mostRecentScore ", score);
 
timerFunc = () => {
  var sec = 60; 
  var timer = setInterval(function(){
      time.innerHTML='Timer: 00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
          alert('Time is up!');
      }
  }, 500);
}

startBtn.addEventListener ("click",startQuestions);
startBtn.addEventListener ("click",timerFunc);




//TODO:

//resolve the buttons bug
//remove buttons from previous questions
//update final score
//input to add initials and final score
// subtract time from the clock



