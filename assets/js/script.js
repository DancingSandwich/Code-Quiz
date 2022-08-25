var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var wordBlank = document.querySelector(".word-blanks");
var timerCount;

var words =
    ["Arrays in JavaScript can be used to Store ____________",
        "Commonly used Datatypes DO NOT include __________",
        "String values must be enclosed with in ___________ when being assgined to a variable",
        "The condition in an if/else statement is enclosed within __________"];


function renderQuestions() {
    chosenQuestion = words[Math.floor(Math.random() * words.length)];
    wordBlank.textContent = chosenQuestion;
}

function startQuiz() {
    startButton.disabled = true;
    timerCount = 60;
    renderQuestions()
    startTimer();
}
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}


startButton.addEventListener("click", startQuiz);
//init();