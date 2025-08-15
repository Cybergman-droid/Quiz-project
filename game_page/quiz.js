let currentQuestionIndex;
const quizquestionField = document.getElementById('quizquestion');
const answerButtons = document.querySelectorAll('.quizbutton');
let score = 0

questionNum = 10

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

function showQuestions(event){
    let questionIndex = Math.floor((Math.random() * physicsQuestions.length));
    quizquestionField.innerHTML = physicsQuestions[questionIndex].question
    let i = 0
    answerButtons.forEach(answerButton => {
        answerButton.innerHTML = physicsQuestions[questionIndex].possibleAnswers[i]
        i++
    });
    currentQuestionIndex = questionIndex;
    checkAnswer(event,questionIndex)
};

function checkAnswer(event,questionIndex){
    const selectedBtn = event.target;
    const selectedAns = selectedBtn.innerHTML;
    const correctAns  = physicsQuestions[questionIndex].correctAnswer;

    if (selectedAns === correctAns){
        score++
        console.log(score)
        selectedBtn.style.backgroundColor = '#4CAF50';
    } else {
        selectedBtn.style.backgroundColor = '#f44336';
    };
};

answerButtons.forEach(answerButton => {
    answerButton.addEventListener('click', event => showQuestions(event))});
