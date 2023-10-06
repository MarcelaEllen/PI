const caminhoArquivo = "/scripts/questoes.json";

const perguntasRespostas = []; 
let perguntasCorretas = 0; // Contador de perguntas corretas
const denominador = 20; // total de perguntas
let numeroPergunta = 1; // pergunta atual

async function carregarPerguntas() {
  try {
    const response = await fetch(caminhoArquivo);
    if (!response.ok) {
      throw new Error("Erro ao buscar o arquivo JSON");
    }

    const json = await response.json();

    perguntasRespostas.push(...json.questoes);

    const spnQtd = document.querySelector(".spnQtd");
    const question = document.querySelector(".question");
    const answers = document.querySelector(".answers");

    function mostrarResultado() {
      spnQtd.textContent = `${denominador}/${denominador}`;
      question.textContent = "Avaliação concluída!";
      answers.innerHTML = "";
    
      const resultado = document.createElement("p");
      resultado.textContent = `Você acertou ${perguntasCorretas} de ${denominador} perguntas.`;
      resultado.classList.add("resultado");
    
      const btnVoltarMenu = document.createElement("button");
      btnVoltarMenu.textContent = "FINALIZAR";
      btnVoltarMenu.classList.add("finish-button");
      btnVoltarMenu.addEventListener("click", () => {
        window.location.href = "/resultadofake.html";
      });
    
      answers.appendChild(resultado);
      answers.appendChild(btnVoltarMenu); 
    }
    
    function carregarProximaPergunta() {
      if (perguntasRespostas.length === 0 || numeroPergunta > denominador) {
        mostrarResultado();
        return;
      }

      const perguntaAtual = perguntasRespostas.shift();
      spnQtd.textContent = `${numeroPergunta}/${denominador}`;
      question.textContent = perguntaAtual.question;

      answers.innerHTML = "";

      perguntaAtual.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = `${answer.index}. ${answer.option}`;
        button.classList.add("answer");
        button.addEventListener("click", () => {
          if (answer.correct) {
            perguntasCorretas++;
          }
          numeroPergunta++; 
          carregarProximaPergunta();
        });
        answers.appendChild(button);
      });
    }

    carregarProximaPergunta();
  } catch (err) {
    console.error("Erro ao ler o arquivo", err);
  }
}

carregarPerguntas();
