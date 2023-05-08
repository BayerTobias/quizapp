let questions = [
  {
    question: "Was ist der längste Fluss der Welt?",
    answer_1: "Der Amazonas",
    answer_2: "Der Nil",
    answer_3: "Der Rhein",
    answer_4: "Der Niger",
    right_answer: 2,
  },
  {
    question: "Was ist die meist gesprochene Sprache in Indien?",
    answer_1: "Hindi",
    answer_2: "Urdu",
    answer_3: "Punjabi",
    answer_4: "Bengali",
    right_answer: 1,
  },
  {
    question: "In welchem dieser Filme spielt Leonardo DiCaprio NICHT mit?",
    answer_1: "The Wolf of Wallstreet",
    answer_2: "12 Years a Slave",
    answer_3: "Aviator",
    answer_4: "The Revenant ",
    right_answer: 2,
  },
  {
    question: "Wie viele Tasten hat ein Klavier?",
    answer_1: "74 Tasten",
    answer_2: "86 Tasten",
    answer_3: "82 Tasten ",
    answer_4: "88 Tasten",
    right_answer: 4,
  },
];

let currentQuestion = 0;
let question = questions[currentQuestion];

function init() {
  if (currentQuestion >= questions.length) {
    document.getElementById("quiz-body").style = "display: none;";
    document.getElementById("end-screen").style = "";
  } else {
    renderQuestion();
    renderFooter();
  }
}

function renderQuestion() {
  document.getElementById("question").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function renderFooter() {
  document.getElementById("max_question").innerHTML = questions.length;
  document.getElementById("current_question").innerHTML = currentQuestion + 1;
}

function answer(answer) {
  let rightAnswer = question["right_answer"];
  let selectedAnswer = answer.slice(-1);
  let idOfRightAnswer = `answer_${rightAnswer}`;
  if (selectedAnswer == rightAnswer) {
    document.getElementById(answer).classList.add("bg-success");
  } else {
    document.getElementById(answer).classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).classList.add("bg-success");
  }
  document.getElementById("next_button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  question = questions[currentQuestion];
  resetAnswerButtons();
  document.getElementById("next_button").disabled = true;
  init();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").classList.remove("bg-success");
  document.getElementById("answer_1").classList.remove("bg-danger");
  document.getElementById("answer_2").classList.remove("bg-success");
  document.getElementById("answer_2").classList.remove("bg-danger");
  document.getElementById("answer_3").classList.remove("bg-success");
  document.getElementById("answer_3").classList.remove("bg-danger");
  document.getElementById("answer_4").classList.remove("bg-success");
  document.getElementById("answer_4").classList.remove("bg-danger");
}
