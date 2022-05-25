
var quiz = document.querySelector(".quiz")
var questionNumber = document.getElementById("#questionNumber")
var questionText = document.getElementById("#questionText")
var answer1 = document.getElementById("#answer1")
var answer2 = document.getElementById("#answer2")
var answer3 = document.getElementById("#answer3")
var answer4 = document.getElementById("#answer4")
var timeText = document.querySelector("#secondsRemaining");
var startButton = document.querySelector(".startButton")



function countdown() {
  var remainingTime = 90
  var interval = setInterval(function timer() {
    if (remainingTime > 0) {
      remainingTime = --remainingTime;
      console.log(remainingTime);
      timeText.textContent = remainingTime;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

//start button
startButton.addEventListener("click", function () {
  countdown()

})


// starts the first question
startButton.addEventListener("click", function () {
  quiz.style.display = "block";
  answer2.addEventListener("click", function () {
    remainingTime = --remainingTime
  })

})




// create high score tracker