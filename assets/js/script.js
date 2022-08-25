var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var timerCount = 60;


function startGame() {
    console.log("I am here");
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}
startButton.addEventListener("click", startGame);