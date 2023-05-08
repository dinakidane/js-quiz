
/**
 * Questions and answers for the quiz
 */
const questions = [
    {
        question: "Who is the current vice president of the United States?",
        answers: [
            { text: "Joe Biden", correct: false },
            { text: "Hillary Clinton", correct: false },
            { text: "Kamala Harris", correct: true },
            { text: "Mike Pence", correct: false },
        ]
    },
    {
        question: "What is the largest organ in the body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Skin", correct: true },
            { text: "Liver", correct: false },
            { text: "Lung", correct: false },
        ]
    },
    {
        question: "Which country has the highest life expectancy?",
        answers: [
            { text: "South Korea", correct: false },
            { text: "China", correct: true },
            { text: "Switzerland", correct: false },
            { text: "Japan", correct: false },
        ]
    },
    {
        question: "What is the capital of Finland?",
        answers: [
            { text: "Helsinki", correct: true },
            { text: "Luxemburg", correct: false },
            { text: "Oslo", correct: false },
            { text: "Stockholm", correct: false },
        ]
    },
    {

        question: "Which country has won the most World Cups?",
        answers: [
            { text: "Argentina", correct: false },
            { text: "Brazil", correct: true },
            { text: "France", correct: false },
            { text: "Italy", correct: false },
        ]
    },
    {

        question: "Where is the strongest human muscle located?",
        answers: [
            { text: "Forearms", correct: false },
            { text: "Calves", correct: false },
            { text: "Triceps", correct: false },
            { text: "Jaw", correct: true },
        ]
    },
    {

        question: "How many colors are used in the South African flag?",
        answers: [
            { text: "Four", correct: false },
            { text: "Eight", correct: false },
            { text: "Six", correct: true },
            { text: "Seven", correct: false },
        ]
    },
    {

        question: "Where did sushi originate?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false },
        ]
    },
    {

        question: "Where is the largest Disney park in the world?",
        answers: [
            { text: "London", correct: false },
            { text: "Orlando", correct: true },
            { text: "Paris", correct: false },
            { text: "Hong Kong", correct: false },
        ]
    },
    {

        question: "What is the national sport of Japan?",
        answers: [
            { text: "Football", correct: false },
            { text: "Swimmming", correct: false },
            { text: "Sumo Wrestling", correct: true },
            { text: "Baseball", correct: false },
        ]
    }

];

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn")
const questionElement = document.getElementById("question");
const optionButtons = document.getElementById("option-buttons");
const nextButton = document.getElementById("next-page-btn");

function homeStart() {
    document.getElementsByClassName("game").style.display = "none";
}


startButton.addEventListener("click", () => {
    document.getElementById("homepage").style.display = "none";
    beginQuiz();
});

let currentQuestionIndex = 0;
let score = 0;

/**
 * The page that gets displayed first
 */

function beginQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


/**
 * Displays the questions
 */

function showQuestion() {
    resetCondition();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        optionButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", userAnswer);
    });

}

restartButton.addEventListener("click", () =>) {
    document.getElementById("homepage");
}

/**
 * Removing previous option buttons
 */

function resetCondition() {
    nextButton.style.display = "none";
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
}

/**
 * Focuses on which answer has been selected and acts accordingly, depending on whether it is true or false
 */

function userAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(optionButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

/**
 * show the score at the end with a message
 */

function revealScore() {
    resetCondition();
    if (score => 7) {
        questionElement.innerHTML = `Well done! You scored a ${score} out of ${questions.length}!`;
    }
    if (score <= 6) {
        questionElement.innerHTML = `You scored a ${score} out of ${questions.length}! Try again!`;
    }

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


/**
 * score points are added when next button is clicked
 */

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        revealScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        beginQuiz();
    }
});

beginQuiz();
