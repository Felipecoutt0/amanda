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

