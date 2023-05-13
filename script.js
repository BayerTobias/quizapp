let currentQuestion = 0;
let category;
let question;
let rightAnswers = 0;

let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_FAIL = new Audio("audio/fail.mp3");

function init() {
  if (gameIsOver()) {
    renderEndScreen();
  } else {
    renderQuestion();
    renderFooter();
    renderProgressBar();
  }
}

function gameIsOver() {
  return currentQuestion >= category.length;
}

function renderQuestion() {
  document.getElementById("question").innerHTML = question["question"];
  renderAnswers();
}

function renderAnswers() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`];
  }
}

function renderFooter() {
  document.getElementById("max_question").innerHTML = category.length;
  document.getElementById("current_question").innerHTML = currentQuestion + 1;
}

function renderEndScreen() {
  document.getElementById("quiz-body").style = "display: none;";
  document.getElementById("end-screen").style = "";
  document.getElementById("right-answers").innerHTML = rightAnswers;
  document.getElementById("end-screen-questions").innerHTML = category.length;
}

function answer(answer) {
  let rightAnswer = question["right_answer"];
  let selectedAnswer = answer.slice(-1);
  let idOfRightAnswer = `answer_${rightAnswer}`;
  if (answerIsRight(selectedAnswer, rightAnswer)) {
    correctAnswer(answer);
  } else {
    wrongAnswer(answer, idOfRightAnswer);
  }
  toggleAnswerLock();
  document.getElementById("next_button").disabled = false;
}

function answerIsRight(selectedAnswer, rightAnswer) {
  return selectedAnswer == rightAnswer;
}

function correctAnswer(answer) {
  AUDIO_SUCCESS.play();
  document.getElementById(answer).classList.add("bg-success");
  rightAnswers++;
}

function wrongAnswer(answer, idOfRightAnswer) {
  AUDIO_FAIL.play();
  document.getElementById(answer).classList.add("bg-danger");
  document.getElementById(idOfRightAnswer).classList.add("bg-success");
}

function nextQuestion() {
  currentQuestion++;
  question = category[currentQuestion];
  resetAnswerButtons();
  document.getElementById("next_button").disabled = true;
  toggleAnswerLock();
  init();
}

function resetAnswerButtons() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`answer_${i}`).classList.remove("bg-success");
    document.getElementById(`answer_${i}`).classList.remove("bg-danger");
  }
}

function renderProgressBar() {
  let percent = (currentQuestion + 1) / category.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%`;
}

function restart() {
  currentQuestion = 0;
  rightAnswers = 0;
  document.getElementById("welcome-page").style = "";
  document.getElementById("quiz-body").style = "display: none;";
  document.getElementById("end-screen").style = "display: none;";
}

function chooseCategory(categorySelection) {
  currentQuestion = 0;
  rightAnswers = 0;
  category = questions[0][categorySelection];
  question = category[currentQuestion];
  document.getElementById("quiz-body").style = "";
  document.getElementById("welcome-page").style = "display: none;";
  document.getElementById("end-screen").style = "display: none;";
  init();
}

function toggleAnswerLock() {
  let cards = document.querySelectorAll(".answer-card");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.classList.toggle("pointer-none");
  }
}
