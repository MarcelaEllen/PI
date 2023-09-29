
function formatarTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
    return `${minutosFormatados}:${segundosFormatados}`;
  }
  
  
  function obterTempoRestante() {
    const tempoRestante = localStorage.getItem("tempoRestante");
    if (tempoRestante === null) {
      
      return 2400;
    }
    return parseInt(tempoRestante);
  }
  
  
  function salvarTempoRestante(tempoRestante) {
    localStorage.setItem("tempoRestante", tempoRestante.toString());
  }
  

  let tempoTotal = obterTempoRestante();
  
  
  function atualizarCronometro() {
    const cronometroElemento = document.getElementById("cronometro");
  
    if (tempoTotal > 0) {
      cronometroElemento.textContent = formatarTempo(tempoTotal);
      tempoTotal--;
      salvarTempoRestante(tempoTotal); 
    } else {
      clearInterval(cronometroInterval);
      cronometroElemento.textContent = "00:00";
      alert("Tempo esgotado!");
      window.location.href = "/index.html";
    }
  }
  
  
  const cronometroInterval = setInterval(atualizarCronometro, 1000);

    window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Tem certeza de que deseja sair desta página? Se sair, seu progresso não será salvo.';
  });