const questions = [
    {
        question: "How can a datatype be declared to be a constant type?",
        answers:[
            { text: "const", correct: true},
            { text: "var", correct: false},
            { text: "let", correct: false},
            { text: "constant", correct: false},

                 
            
        ]
    },
    {
        question: "Javascript is an____________language?",
        answers:[
            { text: "Object-Oriented", correct: true},
            { text: "Object-Based", correct: false},
            { text: "Procedural", correct: false},
            { text: "None of the above", correct: false},

                 
            
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using javascript?",
        answers:[
            { text: "document.write()", correct: false},
            { text: "console.log()", correct: true},
            { text: "window.alert()", correct: false},
            { text: "All of the above", correct: false},

                 
            
        ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using javascript?",
        answers:[
            { text: "getElementbyId()", correct: false},
            { text: "getElementByClassName()", correct: false},
            { text: "Both A and B", correct: true},
            { text: "None of the above", correct: false},

                 
            
        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in javascript?",
        answers:[
            { text: "var", correct: false},
            { text: "let", correct: false},
            { text: "Both A and B", correct: true},
            { text: "None of the above", correct: false},

                 
            
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    submitButton.innerHTML = "Submit";
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =  currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;

    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}
function handSubmitButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

submitButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handSubmitButton();
    }else{
        startQuiz();
    }
});


function handNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();