// Variáveis de controle
let currentIndex = 0;
let questionsCorrect = 0;
let tempoTotal = 2400; // Tempo total em segundos (40 minutos)
let cronometroInterval;
let provaEncerrada = false;

// Importe as perguntas do arquivo questions.js
import questions from "./questions.js";

// Função para atualizar o cronômetro
function atualizarCronometro() {
  const cronometroElemento = document.getElementById("cronometro");

  const minutos = Math.floor(tempoTotal / 60);
  const segundos = tempoTotal % 60;
  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
  const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

  cronometroElemento.textContent = `${minutosFormatados}:${segundosFormatados}`;

  if (tempoTotal > 0) {
    tempoTotal--;
  } else if (!provaEncerrada) {
    clearInterval(cronometroInterval);
    encerrarProva();
  }
}

// Função para encerrar a prova e voltar ao menu
function encerrarProva() {
  provaEncerrada = true;
  alert(`Você acertou ${questionsCorrect} de ${questions.length}. Clique em OK para voltar ao menu.`);
  window.location.href = "/Menu.html"; // Redirecionar para a página do menu
}

// Função para carregar a próxima pergunta
function loadQuestion() {
  const question = document.querySelector(".question");
  const answers = document.querySelector(".answers");
  const spnQtd = document.querySelector(".spnQtd");
  const item = questions[currentIndex];

  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  question.innerHTML = item.question;
  answers.innerHTML = "";

  item.answers.forEach((answer) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
      </button>
    `;
    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

// Função para processar a próxima pergunta
function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

// Função para encerrar a prova (opcional)
function finish() {
  clearInterval(cronometroInterval);
  encerrarProva();
}

// Iniciar o cronômetro assim que a página for carregada
window.addEventListener("load", function () {
  cronometroInterval = setInterval(atualizarCronometro, 1000);
  loadQuestion();
});

