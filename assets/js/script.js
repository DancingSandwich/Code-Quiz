var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var wordBlank = document.querySelector(".word-blanks");
var option1 = document.querySelector(".option-1");
var option2 = document.querySelector(".option-2");
var option3 = document.querySelector(".option-3");
var option4 = document.querySelector(".option-4");

var timerCount;

var words =
    ["Arrays in JavaScript can be used to Store ____________",
        "Commonly used Datatypes DO NOT include __________",
        "String values must be enclosed with in ___________ when being assgined to a variable",
        "The condition in an if/else statement is enclosed within __________"
    ];


function renderQuestions() {
    chosenQuestion = words[Math.floor(Math.random() * words.length)];
    wordBlank.textContent = chosenQuestion;
    console.log(chosenQuestion);
    if (chosenQuestion == words[0]) {
        option1.textContent = '1. Numbers and Strings'
        option2.textContent = '2. Other Arrays'
        option3.textContent = '3. Booleans'
        option4.textContent = '4. All of the above'
    }

    if (chosenQuestion == words[1]) {
        option1.textContent = '1. Strings'
        option2.textContent = '2. Booleans'
        option3.textContent = '3. Alerts'
        option4.textContent = '4. Numbers'
    }
    if (chosenQuestion == words[2]) {
        option1.textContent = '1. Commas'
        option2.textContent = '2. Curly Brackets'
        option3.textContent = '3. Quotes'
        option4.textContent = '4. Parenthesis'
    }
    if (chosenQuestion == words[3]) {
        option1.textContent = '1. quotes'
        option2.textContent = '2. curly brakets'
        option3.textContent = '3. parenthesis'
        option4.textContent = '4. square brackets'
    }
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