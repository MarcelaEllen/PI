// Função para formatar o tempo em minutos e segundos
function formatarTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
    return `${minutosFormatados}:${segundosFormatados}`;
  }
  
  // Função para obter o tempo restante do armazenamento local ou definir 40 minutos iniciais
  function obterTempoRestante() {
    const tempoRestante = localStorage.getItem("tempoRestante");
    if (tempoRestante === null) {
      // Se não houver tempo restante no armazenamento local, defina-o como 40 minutos (2400 segundos)
      return 2400;
    }
    return parseInt(tempoRestante);
  }
  
  // Função para salvar o tempo restante no armazenamento local
  function salvarTempoRestante(tempoRestante) {
    localStorage.setItem("tempoRestante", tempoRestante.toString());
  }
  
  // Defina o tempo total com base no tempo restante recuperado do armazenamento local
  let tempoTotal = obterTempoRestante();
  
  // Função para atualizar o cronômetro
  function atualizarCronometro() {
    const cronometroElemento = document.getElementById("cronometro");
  
    if (tempoTotal > 0) {
      cronometroElemento.textContent = formatarTempo(tempoTotal);
      tempoTotal--;
      salvarTempoRestante(tempoTotal); // Salvar o tempo restante no armazenamento local
    } else {
      clearInterval(cronometroInterval);
      cronometroElemento.textContent = "00:00";
      alert("Tempo esgotado!");
      window.location.href = "/Menu.html";
    }
  }
  
  // Chame a função atualizarCronometro a cada segundo
  const cronometroInterval = setInterval(atualizarCronometro, 1000);

    window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Tem certeza de que deseja sair desta página? Se sair, seu progresso não será salvo.';
  });