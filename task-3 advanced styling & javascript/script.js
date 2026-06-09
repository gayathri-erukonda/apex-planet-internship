/* =====================
   QUIZ DATA
===================== */
const quiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  },
  {
    question: "Which language adds interactivity to websites?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentIndex = 0;
let selectedAnswer = "";

/* =====================
   LOAD QUESTION
===================== */
function loadQuestion() {
  const q = quiz[currentIndex];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      selectedAnswer = option;
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
}

/* =====================
   SUBMIT ANSWER
===================== */
function submitAnswer() {
  const result = document.getElementById("result");

  if (selectedAnswer === "") {
    result.innerText = "Please select an option!";
    result.style.color = "orange";
    return;
  }

  if (selectedAnswer === quiz[currentIndex].answer) {
    result.innerText = "Correct Answer ✔";
    result.style.color = "green";
  } else {
    result.innerText = "Wrong Answer ✖";
    result.style.color = "red";
  }
}

/* =====================
   NEXT QUESTION
===================== */
function nextQuestion() {
  currentIndex++;
  selectedAnswer = "";

  if (currentIndex < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed 🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = "";
  }
}

/* =====================
   JOKES API
===================== */
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " 😂 " + data.punchline;
    })
    .catch(() => {
      document.getElementById("joke").innerText =
        "Why do programmers hate bugs? Because they keep debugging 🐞";
    });
}

/* INITIAL LOAD */
loadQuestion();



    

