const questions = [
    {
        question: "Which of the following is used to store multiple values in a single variable in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Array", correct: true },
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Language", correct: false },
            { text: "HyperTool Markup Language", correct: false },
            { text: "HighText Mark Language", correct: false },
        ]
    },
    {
        question: "In programming, which symbol is commonly used for single-line comments in JavaScript?",
        answers: [
            { text: "<!---", correct: false },
            { text: "#", correct: false },
            { text: "//", correct: true },
            { text: "/#", correct: false },
        ]
    },
    {
        question: "In CSS, which property is used to change the text color?",
        answers: [
            { text: "background-color", correct: false },
            { text: "text-align", correct: false },
            { text: "color", correct: true },
            { text: "font-size", correct: false },
        ]
    }
]

const questionElement = document.querySelector("#question");
const buttonsElement = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    resetButton();
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
function showQuestion() {
    let questionData = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + questionData.question;

    questionData.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        buttonsElement.appendChild(button);
    })
}
function resetButton() {
    while (buttonsElement.firstChild) {
        buttonsElement.firstChild.remove();
    }
}
startQuiz();