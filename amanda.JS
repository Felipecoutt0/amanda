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
  