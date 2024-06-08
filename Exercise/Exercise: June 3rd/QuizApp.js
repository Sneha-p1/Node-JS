const questions = [
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        options: ["To check the data type of a variable", "To create a new variable", "To concatenate strings", "To define a function"],
        answer: 0
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: 1
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: ["var", "variable", "v", "let"],
        correct: 0
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function loadQuestion(index) {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackContainer = document.getElementById('feedback');
    feedbackContainer.innerHTML = '';
    
    if (index < questions.length) {
        questionContainer.innerText = questions[index].question;
        optionsContainer.innerHTML = '';
        
        questions[index].options.forEach((option, i) => {
            const optionElem = document.createElement('div');
            const radioElem = document.createElement('input');
            radioElem.type = 'radio';
            radioElem.name = 'option';
            radioElem.value = i;
            if (userAnswers[index] == i) {
                radioElem.checked = true;
            }
            optionElem.appendChild(radioElem);
            optionElem.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(optionElem);
        });
    } else {
        showResults();
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
        const feedbackContainer = document.getElementById('feedback');
        if (selectedOption.value == questions[currentQuestionIndex].answer) {
            feedbackContainer.innerText = "Correct!";
            score++;
        } else {
            feedbackContainer.innerText = "Incorrect!";
        }
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = score;
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    questions.forEach((q, i) => {
        const questionElem = document.createElement('div');
        questionElem.innerHTML = `
            <p>${q.question}</p>
            <p>Your answer: ${q.options[userAnswers[i]] || 'No answer'}</p>
            <p>Correct answer: ${q.options[q.answer]}</p>
        `;
        reviewContainer.appendChild(questionElem);
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
});

document.getElementById('submit-btn').addEventListener('click', () => {
    checkAnswer();
    showResults();
});

document.getElementById('review-btn').addEventListener('click', () => {
    document.getElementById('review-container').style.display = 'block';
});

window.onload = () => {
    loadQuestion(0);
};