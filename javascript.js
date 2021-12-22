//
var quizDiv = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');
var submitButton = document.getElementById('submit');
var ogButton = document.getElementById('ogBtn')

var quizQs = [
    {
        question:'?',
        answers:{},
        winner: 'c'
    }
]

function startGame() {}

function buildQuiz(){}

function showResults(){}

// display quiz on clicking ogBtn
runQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
ogButton.addEventListener('click', beginGame);