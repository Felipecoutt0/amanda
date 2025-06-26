const dataInicio = new Date(2025, 3, 26); // 26 de abril (mês 3)

// Corações flutuantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.querySelector('.hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// Contador de tempo juntos
function atualizarContador() {
    const agora = new Date();
    const dataUltimoMesversario = new Date(agora.getFullYear(), agora.getMonth(), 26);

    // Se ainda não chegou o dia 26 neste mês, usa o mês anterior
    if (agora.getDate() < 26) {
        dataUltimoMesversario.setMonth(dataUltimoMesversario.getMonth() - 1);
    }

    // Calcula anos e meses desde dataInicio
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();

    if (agora.getDate() < dataInicio.getDate()) {
        meses--;
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diffDesdeUltimoMesversario = agora - dataUltimoMesversario;
    const segundosTotais = Math.floor(diffDesdeUltimoMesversario / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const dias = Math.floor(horasTotais / 24);
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    // Monta texto
    let texto = "";
    if (anos > 0) texto += `${anos} ano${anos > 1 ? "s" : ""}, `;
    if (meses > 0) texto += `${meses} mês${meses > 1 ? "es" : ""}, `;
    texto += `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

    document.getElementById("tempoJuntos").textContent = texto;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// Contagem para próximo dia 26
function atualizarTempoProximoMes() {
    const agora = new Date();
    let proximo = new Date(agora.getFullYear(), agora.getMonth(), 26);

    if (agora.getDate() > 26 || (agora.getDate() === 26 && agora.getHours() >= 0)) {
        proximo.setMonth(proximo.getMonth() + 1);
    }

    const diff = proximo - agora;
    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const texto = `⏳ Faltam ${dias} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos para completarmos mais um mês juntos 💖`;
    document.getElementById("tempoProximoMes").textContent = texto;
}
setInterval(atualizarTempoProximoMes, 1000);
atualizarTempoProximoMes();

// Verifica se é dia 26 e mostra mensagem
function verificarMesversario() {
    const agora = new Date();
    if (agora.getDate() === 26) {
        const meses = (agora.getFullYear() - dataInicio.getFullYear()) * 12 + (agora.getMonth() - dataInicio.getMonth());
        // A correção está nesta linha: removido o '+ 1' e ajustada a pluralização
        document.getElementById("mensagemMesversario").textContent = `🎉 Hoje completamos ${meses} mês${meses > 1 || meses === 0 ? "es" : ""} juntos, meu amor! 💕`;
    } else {
        document.getElementById("mensagemMesversario").textContent = "";
    }
}
setInterval(verificarMesversario, 60000);
verificarMesversario();

// Mensagem por horário
function mensagemPorHorario() {
    const hora = new Date().getHours();
    let mensagem = "";
    if (hora >= 5 && hora < 12) mensagem = "Bom dia, minha princesa 💕";
    else if (hora >= 12 && hora < 18) mensagem = "Boa tarde, meu amor, já almoçou?";
    else if (hora >= 18 && hora < 22) mensagem = "Boa noite minha princesa, eu te amo muito ❤";
    else mensagem = "Já era pra estar dormindo... 😴💤";
    document.getElementById("mensagemHora").textContent = mensagem;
}
mensagemPorHorario();

// Modo noturno com estrelas
function ativarModoNoturno() {
    const hora = new Date().getHours();
    if (hora >= 18 || hora < 6) {
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

// Revelar cartinha 💌
function revealLetter() {
    const letter = document.getElementById("letter");
    letter.classList.toggle("hidden");
}
