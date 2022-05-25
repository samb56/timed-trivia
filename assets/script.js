
var quiz = document.querySelector(".quiz")
var questionNumber = document.getElementById("questionNumber")
var questionText = document.getElementById("questionText")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var timeText = document.querySelector("#secondsRemaining");
var startButton = document.querySelector(".startButton")
var wrongAnswerText = document.getElementById("wrongAnswerText")
var test = document.querySelector("#test")
var question = document.querySelector("#question")
var answerSelection = document.querySelector("#answerSelection")
var message = document.querySelector("#message")
var scoreText = document.querySelector("#scoreText")
var highScore = document.querySelector("#highScore")
var initialButton = document.querySelector("#initialButton")
var initialsText = document.querySelector("#initialsText")
var scoreboard = document.querySelector("#scoreBoard")
var clearScores = document.querySelector("#clearScores")

var questionArray = [{ question: "data put in local storage must first be converted to what type of data?", answers: ["integers", "string", "boolean", "array"], correctAnswer: "string" }
  , {
  question: "how many values does a boolean data type have?", answers: ["14", "1", "2", "4"], correctAnswer: "2"
}, {
  question: "True or False: javascript does not require semicolons at the end of lines of code", answers: ["true", "false"], correctAnswer: "true"

}, {
  question: "the math.random() function returns a number between what range of numbers?", answers: ["integers between 1 and 99", "integers between 1 and 1,0000,000", "any given number of the infinite choices between 1 and 10", "a number between 0 and 1"], correctAnswer: "a number between 0 and 1"

}, {
  question: "what does the logical operator \" || \" denote?", answers: ["and", "or", "maybe", "or else"], correctAnswer: "or"

}, {
  question: "variables defined with \"let\" can be redeclared", answers: ["true", "false"], correctAnswer: "false"

}, {
  question: "which description matches the operator \"! =\"?", answers: ["absolute value", "values are inverses", "equal to, but loudly", "not equal to"], correctAnswer: "not equal to"

}
]

renderScoreboard()


var remainingTime = 90

function countdown() {

  var interval = setInterval(function timer() {
    if (remainingTime > 0) {
      remainingTime = --remainingTime;
      console.log(remainingTime);
      timeText.textContent = remainingTime;
    } else {
      clearInterval(interval);
      endgame()


    }
  }, 1000);
}

//start button
startButton.addEventListener("click", function () {
  currentQuestion = 0
  remainingTime = 90
  countdown();
  beginQuestion(currentQuestion)
  startButton.style = "display: none;"
  test.style = "display: block;"
  score = 0
  scoreText.textContent = "POINTS = " + score
  highScore.style = "display: none;"

})



var currentQuestion = 0
var score = 0



function beginQuestion(questioni) {
  answerSelection.innerHTML = ""
  message.innerHTML = ""
  scoreText.textContent = "POINTS = " + score

  if (questioni === questionArray.length) {
    remainingTime = 0
    return

  }

  var Q = questionArray[questioni];
  question.textContent = Q.question;
  for (let i = 0; i < Q.answers.length; i++) {

    var newButton = document.createElement("button")
    newButton.textContent = Q.answers[i]
    newButton.onclick = function () {
      if (Q.correctAnswer === Q.answers[i]) {
        currentQuestion += 1;
        score += 1;

        beginQuestion(currentQuestion);

      } else {
        remainingTime -= 5;
        message.textContent = "wrong answer chosen: -5 seconds"
      }

    }
    answerSelection.appendChild(newButton)
  }

}


function endgame() {
  timeText.textContent = "0"
  test.style = "display: none"
  highScore.style = "display: block"
  startButton.style = "display: block"
}

initialButton.addEventListener("click", addScore)



function addScore() {
  var existingScores = localStorage.getItem("highscores");
  if (existingScores) {
    existingScores = JSON.parse(existingScores);
    existingScores[initialsText.value] = score;



  } else {
    existingScores = { [initialsText.value]: score }
  }




  localStorage.setItem("highscores", JSON.stringify(existingScores))
  console.log(existingScores)
  renderScoreboard()

}

function renderScoreboard() {
  var existingScores = localStorage.getItem("highscores")

  scoreboard.textContent = "High Scores: " + existingScores
}

clearScores.addEventListener("click", function () {
  localStorage.removeItem("highscores")
  renderScoreboard()
})




// starts the first question





// create high score tracker