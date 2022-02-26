//
var quizDiv = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');
var submitButton = document.getElementById('submit');
var ogButton = document.getElementById('ogBtn');
var questionsDiv = document.getElementById('question')
var answerDiv = document.getElementById('answers')

var quizQIndex = 0;

var quizQs = [
    {
        question:'?',
        answers:[
            'Q',
            'W',
            'E',
        ],
        winner: 'E'
    },
    {
        question:'?',
        answers:[
            'A',
            'B',
            'C',
        ],
        winner: 'C'
    },
];

function displayQ() {
    questionsDiv.textContent = quizQs[quizQIndex].question
}
function displayAnswers() {
    quizQs[quizQIndex].answers.forEach(element => {
        let Button = document.createElement('button')
        Button.textContent = element
        answerDiv.appendChild(Button)
    });
}


function beginGame() {
    console.log('is happening');
    displayQ();
    displayAnswers();
    
}

// function runQuiz(){
    
//     var output = [];    
//     var answersrecall = 
//     [' ',
//         ' '
//     ];

    // quizQs.forEach((currentQ, qNumber) >=
    // {

    //     for(currentQ: answers) {

    //         answers.push(
    //             `<label>
    //             <input type="radio" name="question${qNumber}" value="${letter}">
    //             ${letter} :
    //             ${currentQuestion.answersrecall[letter]}
    //             </label>`
    //         );
    //     }
    //         output.push(
    //             `<div class="question"> ${currentQ.question} </div>
    //             <div class="answers"> ${answersrecall.join('')} </div>`
    //         );
    //     }
    // );
// 

function showResults(){}

// display quiz on clicking ogBtn
// runQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
ogButton.addEventListener('click', beginGame);