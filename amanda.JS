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

setInterval(createHeart, 500);

// Atualiza o contador de tempo juntos ⏳
function atualizarContador() {
  const inicio = new Date(2025, 3, 26); // 26 de abril de 2025 (abril = 3)
  const agora = new Date();
  const diff = agora - inicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const texto = `${dias} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos`;

  const elemento = document.getElementById("tempoJuntos");
  if (elemento) elemento.textContent = texto;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function atualizarTempoProximoMes() {
  const inicio = new Date(2025, 3, 26); // 26 de abril de 2025
  const agora = new Date();

  // Quantos meses se passaram desde o início
  const anos = agora.getFullYear() - inicio.getFullYear();
  const mesesPassados = anos * 12 + agora.getMonth() - inicio.getMonth();

  // Próximo "aniversário mensal"
  const proximoMes = new Date(inicio);
  proximoMes.setMonth(inicio.getMonth() + mesesPassados + 1);

  const diff = proximoMes - agora;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const texto = `⏳ Faltam ${dias} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos para completarmos mais um mês juntos 💖`;

  const elemento = document.getElementById("tempoProximoMes");
  if (elemento) elemento.textContent = texto;
}

setInterval(atualizarTempoProximoMes, 1000);
atualizarTempoProximoMes();


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

ativarModoNoturno();
