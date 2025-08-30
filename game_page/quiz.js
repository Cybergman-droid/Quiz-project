let currentQuestionIndex;
const quizquestionField = document.getElementById('quizquestion');
const answerButtons = document.querySelectorAll('.quizbutton');
const quizContainer = document.querySelector('.quizbox');
let user = {
    username: localStorage.getItem("username"),
    questionNum: parseInt(localStorage.getItem("questionNum")),
    score: 0
};

let username = user.username;
let numOfQuestions = user.questionNum;
let score = user.score;
let questionsAnswered = 0;
let usedQuestionIndices = [];

console.log(username, numOfQuestions, score);

const physicsQuestions = [
    {
        question: 'What is the SI unit of electric current?',
        possibleAnswers: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correctAnswer: 'Ampere',
    },
    {
        question: 'Which of the following is a vector quantity?',
        possibleAnswers: ['Mass', 'Speed', 'Energy', 'Force'],
        correctAnswer: 'Force',
    },
    {
        question: 'What is the speed of light in a vacuum?',
        possibleAnswers: ['3 x 10^6 m/s', '3 x 10^8 m/s', '3 x 10^10 m/s', '3 x 10^12 m/s'],
        correctAnswer: '3 x 10^8 m/s',
    },
    {
        question: 'Which law states that the current through a conductor is directly proportional to the voltage?',
        possibleAnswers: ['Faraday\'s Law', 'Ohm\'s Law', 'Newton\'s First Law', 'Boyle\'s Law'],
        correctAnswer: 'Ohm\'s Law',
    },
    {
        question: 'What is the energy of a photon with frequency f?',
        possibleAnswers: ['hf', 'h/f', 'hf²', 'h²f'],
        correctAnswer: 'hf',
    },
    {
        question: 'Which particle is not a fundamental particle?',
        possibleAnswers: ['Electron', 'Quark', 'Proton', 'Neutrino'],
        correctAnswer: 'Proton',
    },
    {
        question: 'What is the work done when a force of 10N moves an object 5m in the direction of the force?',
        possibleAnswers: ['2J', '5J', '50J', '0.5J'],
        correctAnswer: '50J',
    },
    {
        question: 'Which phenomenon demonstrates the wave nature of light?',
        possibleAnswers: ['Photoelectric effect', 'Compton effect', 'Interference', 'Blackbody radiation'],
        correctAnswer: 'Interference',
    },
    {
        question: 'What is the time period of a simple pendulum if its length is quadrupled?',
        possibleAnswers: ['Doubles', 'Halves', 'Quadruples', 'Remains same'],
        correctAnswer: 'Doubles',
    },
    {
        question: 'Which of these is not a type of radioactive decay?',
        possibleAnswers: ['Alpha', 'Beta', 'Gamma', 'Delta'],
        correctAnswer: 'Delta',
    }
];

function showNextQuestion() {
    // If we've shown all questions, end the quiz
    if (questionsAnswered >= numOfQuestions) {
        endQuiz();
        return;
    }

    // Get a random question that hasn't been used yet
    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * physicsQuestions.length);
    } while (usedQuestionIndices.includes(questionIndex));
    
    usedQuestionIndices.push(questionIndex);
    
    // Display the question and answers
    quizquestionField.innerHTML = physicsQuestions[questionIndex].question;
    let i = 0;
    answerButtons.forEach(answerButton => {
        answerButton.innerHTML = physicsQuestions[questionIndex].possibleAnswers[i];
        answerButton.style.backgroundColor = ''; // Reset button color
        answerButton.disabled = false; // Re-enable buttons
        i++;
    });
    currentQuestionIndex = questionIndex;
    questionsAnswered++;
}

function checkAnswer(event) {
    const selectedBtn = event.target;
    const selectedAns = selectedBtn.innerHTML;
    const correctAns = physicsQuestions[currentQuestionIndex].correctAnswer;

    // Disable all buttons to prevent multiple answers
    answerButtons.forEach(btn => {
        btn.disabled = true;
        // Highlight the correct answer
        if (btn.innerHTML === correctAns) {
            btn.style.backgroundColor = '#4CAF50';
        }
    });

    if (selectedAns === correctAns) {
        score++;
        selectedBtn.style.backgroundColor = '#4CAF50';
    } else {
        selectedBtn.style.backgroundColor = '#f44336';
    }

    // Show next question after a delay
    setTimeout(showNextQuestion, 1500);
}

function startQuiz() {
    answerButtons.forEach(answerButton => {
        answerButton.addEventListener('click', checkAnswer);
    });
    showNextQuestion();
}

function endQuiz() {
    quizContainer.innerHTML = (`
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score} out of ${numOfQuestions}</p>
        <button id= 'quizReturn' onclick="window.location.href='../index.html'">Back to Home</button>
    `);
}


window.onload = startQuiz;


