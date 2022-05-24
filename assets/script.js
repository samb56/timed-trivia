

// create timer for quiz that begins with start button

var timeText = document.querySelector("#secondsRemaining");
var timeStart = true
var startButton = document.querySelector(".startButton")



function countdown() {
  var remainingTime = 90
  if (timeStart = !true) {
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
}
//start button
startButton.addEventListener("click", function () {
  if (timeStart = true) {
    timeStart = !true;
  } else {
    timeStart = true;
  }


})




  //use guess input


// create rotating questions with clickable answers
// create high score tracker