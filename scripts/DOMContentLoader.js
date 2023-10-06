const cronometroElement = document.getElementById("cronometro");

let tempoRestante = 2400; 

function atualizarCronometro() {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;


  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
  const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

  
  cronometroElement.textContent = `${minutosFormatados}:${segundosFormatados}`;

  if (tempoRestante <= 0) {
    clearInterval(intervaloCronometro);
    cronometroElement.textContent = "Tempo esgotado!";
    setTimeout(() => {
      window.location.href = '/index.html';
    }, 2000);
  } else {
    tempoRestante--;
  }
}

atualizarCronometro();


const intervaloCronometro = setInterval(atualizarCronometro, 1000);
