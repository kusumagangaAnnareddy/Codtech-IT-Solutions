const questions = [
    {
        question: "What is the capital of France?",
        options: ["[A]Berlin", "[B]Madrid", "[C]Paris", "[D]Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["[A]Java", "[B]Python", "[C]HTML", "[D]C++"],
        correctAnswer: "HTML"
    },
    
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    shuffleQuestions();
    displayQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        listItem.addEventListener('click', () => checkAnswer(option));
        optionsList.appendChild(listItem);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').textContent = score;
    
    const feedbackElement = document.getElementById('feedback');
    if (score === questions.length) {
        feedbackElement.textContent = "Congratulations! You got all questions right!";
    } else if (score >= Math.floor(questions.length * 0.7)) {
        feedbackElement.textContent = "Good job! You did well.";
    } else {
        feedbackElement.textContent = "Keep practicing. You can do better.";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        endQuiz();
    }
}


window.onload = startQuiz;
