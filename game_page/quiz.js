let currentQuestionIndex;
const quizquestionField = document.getElementById("quizquestion");
const answerButtons = document.querySelectorAll(".quizbutton");
const quizContainer = document.querySelector(".quizbox");
let user = {
  username: localStorage.getItem("username"),
  questionNum: parseInt(localStorage.getItem("questionNum")),
  bio: localStorage.getItem("bio"),
  chem: localStorage.getItem("chem"),
  phy: localStorage.getItem("phy"),
  compSci: localStorage.getItem("compSci"),

  score: 0,
};

console.log(user);

let username = user.username;
let numOfQuestions = user.questionNum;
let score = user.score;
let questionsAnswered = 0;
let usedQuestionIndices = [];

function finalArray() {
  if (user.bio == "true") {
    finalQuestionArray = finalQuestionArray.concat(biologyQuestions);
  }

  if (user.chem == "true") {
    finalQuestionArray = finalQuestionArray.concat(chemistryQuestions);
  }

  if (user.compSci == "true") {
    finalQuestionArray = finalQuestionArray.concat(computingQuestions);
  }

  if (user.phy == "true") {
    finalQuestionArray = finalQuestionArray.concat(physicsQuestions);
  }

  return finalQuestionArray;
}

const physicsQuestions = [
  {
    question: "What is the SI unit of electric current?",
    possibleAnswers: ["Volt", "Ampere", "Ohm", "Watt"],
    correctAnswer: "Ampere",
  },
  {
    question: "Which of the following is a vector quantity?",
    possibleAnswers: ["Mass", "Speed", "Energy", "Force"],
    correctAnswer: "Force",
  },
  {
    question: "What is the speed of light in a vacuum?",
    possibleAnswers: [
      "3 x 10^6 m/s",
      "3 x 10^8 m/s",
      "3 x 10^10 m/s",
      "3 x 10^12 m/s",
    ],
    correctAnswer: "3 x 10^8 m/s",
  },
  {
    question:
      "Which law states that the current through a conductor is directly proportional to the voltage?",
    possibleAnswers: [
      "Faraday's Law",
      "Ohm's Law",
      "Newton's First Law",
      "Boyle's Law",
    ],
    correctAnswer: "Ohm's Law",
  },
  {
    question: "What is the energy of a photon with frequency f?",
    possibleAnswers: ["hf", "h/f", "hf²", "h²f"],
    correctAnswer: "hf",
  },
  {
    question: "Which particle is not a fundamental particle?",
    possibleAnswers: ["Electron", "Quark", "Proton", "Neutrino"],
    correctAnswer: "Proton",
  },
  {
    question:
      "What is the work done when a force of 10N moves an object 5m in the direction of the force?",
    possibleAnswers: ["2J", "5J", "50J", "0.5J"],
    correctAnswer: "50J",
  },
  {
    question: "Which phenomenon demonstrates the wave nature of light?",
    possibleAnswers: [
      "Photoelectric effect",
      "Compton effect",
      "Interference",
      "Blackbody radiation",
    ],
    correctAnswer: "Interference",
  },
  {
    question:
      "What is the time period of a simple pendulum if its length is quadrupled?",
    possibleAnswers: ["Doubles", "Halves", "Quadruples", "Remains same"],
    correctAnswer: "Doubles",
  },
  {
    question: "Which of these is not a type of radioactive decay?",
    possibleAnswers: ["Alpha", "Beta", "Gamma", "Delta"],
    correctAnswer: "Delta",
  },
];

const chemistryQuestions = [
  {
    question: "What is the general formula for an alkane?",
    possibleAnswers: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
    correctAnswer: "CnH2n+2",
  },
  {
    question: "Which of these elements has the highest electronegativity?",
    possibleAnswers: ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
    correctAnswer: "Fluorine",
  },
  {
    question: "What is the pH of a neutral solution at 25°C?",
    possibleAnswers: ["0", "7", "14", "1"],
    correctAnswer: "7",
  },
  {
    question: "Which type of reaction is characteristic of alkenes?",
    possibleAnswers: ["Substitution", "Addition", "Elimination", "Redox"],
    correctAnswer: "Addition",
  },
  {
    question:
      "What is the shape of a molecule with 3 bonding pairs and 1 lone pair?",
    possibleAnswers: [
      "Tetrahedral",
      "Trigonal planar",
      "Trigonal pyramidal",
      "Bent",
    ],
    correctAnswer: "Trigonal pyramidal",
  },
  {
    question: "Which of these is a strong acid?",
    possibleAnswers: [
      "Ethanoic acid",
      "Carbonic acid",
      "Sulfuric acid",
      "Citric acid",
    ],
    correctAnswer: "Sulfuric acid",
  },
  {
    question: "What is the oxidation state of chromium in K2Cr2O7?",
    possibleAnswers: ["+2", "+3", "+6", "+7"],
    correctAnswer: "+6",
  },
  {
    question: "Which type of isomerism is shown by but-1-ene and but-2-ene?",
    possibleAnswers: [
      "Chain",
      "Position",
      "Functional group",
      "Stereoisomerism",
    ],
    correctAnswer: "Position",
  },
  {
    question:
      "What is the name of the process that breaks down long-chain hydrocarbons into shorter ones?",
    possibleAnswers: [
      "Cracking",
      "Reforming",
      "Polymerization",
      "Hydrogenation",
    ],
    correctAnswer: "Cracking",
  },
  {
    question: "Which of these is a nucleophile?",
    possibleAnswers: ["H+", "NH3", "AlCl3", "BF3"],
    correctAnswer: "NH3",
  },
];

const biologyQuestions = [
  {
    question:
      "Which organelle is the site of aerobic respiration in eukaryotic cells?",
    possibleAnswers: ["Nucleus", "Mitochondrion", "Chloroplast", "Ribosome"],
    correctAnswer: "Mitochondrion",
  },
  {
    question:
      "What is the name of the process by which water moves across a semi-permeable membrane?",
    possibleAnswers: [
      "Diffusion",
      "Active transport",
      "Osmosis",
      "Facilitated diffusion",
    ],
    correctAnswer: "Osmosis",
  },
  {
    question: "Which blood vessels carry blood away from the heart?",
    possibleAnswers: ["Veins", "Arteries", "Capillaries", "Venules"],
    correctAnswer: "Arteries",
  },
  {
    question:
      "What is the name of the enzyme that breaks down starch into maltose?",
    possibleAnswers: ["Protease", "Lipase", "Amylase", "Catalase"],
    correctAnswer: "Amylase",
  },
  {
    question: "Which of these is a function of the liver?",
    possibleAnswers: [
      "Production of insulin",
      "Storage of glycogen",
      "Filtration of blood",
      "Production of bile only",
    ],
    correctAnswer: "Storage of glycogen",
  },
  {
    question:
      "What is the name of the process by which plants lose water vapor through their leaves?",
    possibleAnswers: [
      "Transpiration",
      "Translocation",
      "Respiration",
      "Photosynthesis",
    ],
    correctAnswer: "Transpiration",
  },
  {
    question: "Which of these is a function of the nervous system?",
    possibleAnswers: [
      "Producing hormones",
      "Transporting oxygen",
      "Generating electrical impulses",
      "Producing antibodies",
    ],
    correctAnswer: "Generating electrical impulses",
  },
  {
    question:
      "What is the name of the process by which DNA is copied before cell division?",
    possibleAnswers: ["Translation", "Transcription", "Replication", "Mitosis"],
    correctAnswer: "Replication",
  },
  {
    question: "Which of these is a feature of a prokaryotic cell?",
    possibleAnswers: [
      "Nucleus",
      "Mitochondria",
      "Cell wall made of peptidoglycan",
      "Endoplasmic reticulum",
    ],
    correctAnswer: "Cell wall made of peptidoglycan",
  },
  {
    question:
      "What is the name of the process by which plants convert light energy into chemical energy?",
    possibleAnswers: [
      "Respiration",
      "Transpiration",
      "Photosynthesis",
      "Osmosis",
    ],
    correctAnswer: "Photosynthesis",
  },
];

const computingQuestions = [
  {
    question: "What is the time complexity of a binary search algorithm?",
    possibleAnswers: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which of these is a characteristic of the TCP protocol?",
    possibleAnswers: [
      "Connectionless",
      "Unreliable",
      "No flow control",
      "Connection-oriented",
    ],
    correctAnswer: "Connection-oriented",
  },
  {
    question: "What does SQL stand for?",
    possibleAnswers: [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Language",
      "Standard Query Language",
    ],
    correctAnswer: "Structured Query Language",
  },
  {
    question: "Which data structure uses FIFO (First In First Out) principle?",
    possibleAnswers: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue",
  },
  {
    question: "What is the purpose of an IP address?",
    possibleAnswers: [
      "To identify a website",
      "To identify a device on a network",
      "To encrypt data",
      "To store web pages",
    ],
    correctAnswer: "To identify a device on a network",
  },
  {
    question:
      "Which of these is an example of a high-level programming language?",
    possibleAnswers: ["Assembly", "Machine code", "Python", "Binary"],
    correctAnswer: "Python",
  },
  {
    question: "What is the main purpose of an operating system?",
    possibleAnswers: [
      "To create documents",
      "To manage hardware and software resources",
      "To design websites",
      "To write programs",
    ],
    correctAnswer: "To manage hardware and software resources",
  },
  {
    question: "Which of these is a type of network topology?",
    possibleAnswers: ["Binary", "Linear", "Star", "Circular"],
    correctAnswer: "Star",
  },
  {
    question: "What does HTML stand for?",
    possibleAnswers: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which of these is a valid variable name in most programming languages?",
    possibleAnswers: [
      "2ndVariable",
      "my-variable",
      "my_variable",
      "my variable",
    ],
    correctAnswer: "my_variable",
  },
];

let finalQuestionArray = [];
finalQuestionArray = finalArray();
console.log(finalQuestionArray);

function showNextQuestion() {
  // If we've shown all questions, end the quiz
  if (questionsAnswered >= numOfQuestions) {
    endQuiz();
    return;
  }

  let questionIndex;
  do {
    questionIndex = Math.floor(Math.random() * finalQuestionArray.length);
  } while (usedQuestionIndices.includes(questionIndex));

  usedQuestionIndices.push(questionIndex);

  // Display the question and answers
  quizquestionField.innerHTML = finalQuestionArray[questionIndex].question;
  let i = 0;
  answerButtons.forEach((answerButton) => {
    answerButton.innerHTML =
      finalQuestionArray[questionIndex].possibleAnswers[i];
    answerButton.style.backgroundColor = ""; // Reset button color
    answerButton.disabled = false; // Re-enable buttons
    i++;
  });
  currentQuestionIndex = questionIndex;
  questionsAnswered++;
}

function checkAnswer(event) {
  const selectedBtn = event.target;
  const selectedAns = selectedBtn.innerHTML;
  const correctAns = finalQuestionArray[currentQuestionIndex].correctAnswer;

  answerButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.innerHTML === correctAns) {
      btn.style.backgroundColor = "#4CAF50";
    }
  });

  if (selectedAns === correctAns) {
    score++;
    selectedBtn.style.backgroundColor = "#4CAF50";
  } else {
    selectedBtn.style.backgroundColor = "#f44336";
  }

  // Show next question after a delay
  setTimeout(showNextQuestion, 1500);
}

function startQuiz() {
  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener("click", checkAnswer);
  });

  showNextQuestion();
}

function endQuiz() {
  percentage = Math.round((score / numOfQuestions) * 100);
  quizContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score} out of ${numOfQuestions}</p>
        <p>${percentage}%</p>
        <button id= 'quizReturn' onclick="window.location.href='../index.html'">Back to Home</button>
    `;
}

window.onload = startQuiz;
