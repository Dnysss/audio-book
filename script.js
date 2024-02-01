const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');

const nomeCapitulo = document.getElementById('capitulo');

const audiCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;

let tocando = 0;
let capituloAtual = 1;



function tocarFaixa() {
    audiCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function pausarFaixa() {
    audiCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill')
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
}

function tocarPausar() {
    if (tocando === 0) {
        tocarFaixa();
        tocando = 1;
    } else {
        pausarFaixa();
        tocando = 0;
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
    }

    audiCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    tocando = 1;
    trocarNomeFaixa();
    
}

function faixaAnterior() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1
    }

    audiCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    tocando = 1;
    trocarNomeFaixa(); 
}

botaoPlayPause.addEventListener('click', tocarPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', faixaAnterior);