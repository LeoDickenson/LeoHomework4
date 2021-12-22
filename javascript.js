//
var quizDiv = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');
var submitButton = document.getElementById('submit');
// var ogButton = document.getElementById('ogBtn');

var quizQs = [
    {
        question:'?',
        answers:{
            a: 'A',
            b: 'A',
            c: 'A',
        },
        winner: 'c'
    },
    {
        question:'?',
        answers:{
            a: 'A',
            b: 'A',
            c: 'A',
        },
        winner: 'c'
    },
]

function startGame() {}

function runQuiz(){
    
    var output = [];    
    var answersrecall = 
    [' ',
        ' '
    ];

    quizQs.forEach((currentQ, qNumber) >=
    {

        for(currentQ: answers) {

            answers.push(
                `<label>
                <input type="radio" name="question${qNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answersrecall[letter]}
                </label>`
            );
        }
            output.push(
                `<div class="question"> ${currentQ.question} </div>
                <div class="answers"> ${answersrecall.join('')} </div>`
            );
        }
    );
}

function showResults(){}

// display quiz on clicking ogBtn
runQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
ogButton.addEventListener('click', beginGame);