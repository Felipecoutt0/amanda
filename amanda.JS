// Mostra ou esconde a cartinha 💌
function revealLetter() {
  const letter = document.getElementById('letter');
  letter.classList.toggle('hidden');
}

// Cria um coração flutuante aleatório
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Começa a criar corações a cada 500ms
setInterval(createHeart, 500);

// Data de início do relacionamento
const dataInicio = new Date(2025, 3, 26); // 26 de abril de 2025 (meses começam em 0)

// Atualiza o contador de tempo juntos ⏳
function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  // Calcula meses e anos de forma mais precisa
  let anos = agora.getFullYear() - dataInicio.getFullYear();
  let meses = agora.getMonth() - dataInicio.getMonth();
  let diasRestantes = agora.getDate() - dataInicio.getDate();

  if (diasRestantes < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    diasRestantes = ultimoDiaMesAnterior + diasRestantes;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }
  
  let textoContador = "";
  if (anos > 0) {
      textoContador += `${anos} ano${anos > 1 ? "s" : ""}, `;
  }
  if (meses > 0) {
      textoContador += `${meses} mês${meses > 1 ? "es" : ""}, `;
  }
  
  textoContador += `${dias} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos`;

  const elemento = document.getElementById("tempoJuntos");
  if (elemento) elemento.textContent = textoContador;
}

// Atualiza o temporizador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();

// Atualiza o temporizador para o próximo dia 26
function atualizarTempoProximoMes() {
  const agora = new Date();
  let proximoMesversario = new Date(agora.getFullYear(), agora.getMonth(), 26);

  if (agora.getDate() > 26 || (agora.getDate() === 26 && agora.getHours() >= 0)) {
    proximoMesversario.setMonth(proximoMesversario.getMonth() + 1);
  }

  const diffRestante = proximoMesversario - agora;

  const segundos = Math.floor(diffRestante / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const texto = `⏳ Faltam ${dias} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos para completarmos mais um mês juntos 💖`;

  const elemento = document.getElementById("tempoProximoMes");
  if (elemento) elemento.textContent = texto;
}

// Atualiza o temporizador do próximo mês a cada segundo
setInterval(atualizarTempoProximoMes, 1000);
atualizarTempoProximoMes();

// Verifica se hoje é mesversário e exibe mensagem
function verificarMesversario() {
  const agora = new Date();
  const diaAtual = agora.getDate();
  const elemento = document.getElementById("mensagemMesversario");

  if (diaAtual === dataInicio.getDate()) {
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth() + anos * 12;

    if (meses > 0) {
      elemento.textContent = `🎉 Hoje completamos ${meses} mês${meses > 1 ? "es" : ""} juntos, meu amor! 💕`;
    } else {
      elemento.textContent = "";
    }
  } else {
    elemento.textContent = ""; // Esconde se não for dia 26
  }
}

// Executa a verificação do mesversário a cada 1 minuto
setInterval(verificarMesversario, 60000);
verificarMesversario();

// Mensagem automática por horário
function mensagemPorHorario() {
  const hora = new Date().getHours();
  const mensagemEl = document.getElementById("mensagemHora");

  let mensagem = "";
  if (hora >= 5 && hora < 12) mensagem = "Bom dia, minha princesa 💕";
  else if (hora >= 12 && hora < 18) mensagem = "Boa tarde, meu amor, já almoçou?";
  else if (hora >= 18 && hora < 22) mensagem = "Boa noite minha princesa, eu te amo muito ❤";
  else mensagem = "Já era pra estar dormindo... 😴💤";

  if (mensagemEl) mensagemEl.textContent = mensagem;
}

// Atualiza a mensagem ao carregar a página
mensagemPorHorario();

// Ativa modo noturno automático 🌙
function ativarModoNoturno() {
  const hora = new Date().getHours();
  if (hora >= 18 || hora < 6) {
    document.body.classList.add("night-mode");
    criarEstrelas();
  }
}

// Gera estrelas animadas para o modo noturno
function criarEstrelas() {
  for (let i = 0; i < 100; i++) {
    const estrela = document.createElement("div");
    estrela.classList.add("star");
    estrela.style.top = Math.random() * 100 + "vh";
    estrela.style.left = Math.random() * 100 + "vw";
    estrela.style.animationDuration = (1 + Math.random() * 2) + "s";

    document.body.appendChild(estrela);
  }
}

// Ativa o modo noturno se o horário permitir
ativarModoNoturno();
