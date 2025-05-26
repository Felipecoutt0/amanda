function revealLetter() {
    const letter = document.getElementById('letter');
    letter.classList.toggle('hidden');
  }
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  
    document.querySelector('.hearts-container').appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
  
  setInterval(createHeart, 500);
  function atualizarContador() {
  const inicio = new Date(2025, 3, 26); // 26 de abril de 2025 (abril = mês 3)
  const agora = new Date();
  const diff = agora - inicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const restoHoras = horas % 24;
  const restoMinutos = minutos % 60;
  const restoSegundos = segundos % 60;

  const texto = `${dias} dias, ${restoHoras} horas, ${restoMinutos} minutos e ${restoSegundos} segundos`;

  const elemento = document.getElementById("tempoJuntos");
  if (elemento) {
    elemento.textContent = texto;
  }
}

setInterval(atualizarContador, 1000);
atualizarContador();

function mensagemPorHorario() {
  const agora = new Date();
  const hora = agora.getHours();
  const mensagemEl = document.getElementById("mensagemHora");

  let mensagem = "";

  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia, minha princesa 💕";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde, meu amor, Já almoçou? ";
  } else if (hora >= 18 && hora < 23) {
    mensagem = "Boa noite minha princesa, eu te amo muito❤";
  } else {
    mensagem = "Já era pra estar dormindo... 😴💤";
  }

  if (mensagemEl) {
    mensagemEl.textContent = mensagem;
  }
}

mensagemPorHorario();


function ativarModoNoturno() {
  const hora = new Date().getHours();

  if (hora >= 18 || hora < 5) {
    document.body.classList.add("night-mode");
    criarEstrelas();
  }
}

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



