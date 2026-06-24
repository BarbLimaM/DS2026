//exerícicio 1
setTimeout(() => {
    console.log("Exercício 1: Olá, mundo! (Após 1.5s)");
}, 1500);


//exercício 2
let contadorEx2 = 0;
const intervaloEx2 = setInterval(() => {
    contadorEx2++;
    console.log("Exercício 2 (Contador):", contadorEx2);
    if (contadorEx2 === 10) {
        clearInterval(intervaloEx2);
    }
}, 1000);


//exercício 3
let idDoIntervalo = null;

function iniciarIntervalo() {
    if (!idDoIntervalo) {
        idDoIntervalo = setInterval(() => {
            console.log("Exercício 3: Intervalo a rodar...");
        }, 2000);
    }
}

function pararIntervalo() {
    if (idDoIntervalo) {
        clearInterval(idDoIntervalo);
        idDoIntervalo = null;
        console.log("Exercício 3: Intervalo parado com sucesso.");
    }
}


//desafio
let segundos = 0;
let minutos = 0;

const cronometro = setInterval(() => {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    
    const minFormatado = minutos < 10 ? "0" + minutos : minutos;
    const segFormatado = segundos < 10 ? "0" + segundos : segundos;
    
    console.log(`Cronómetro Desafio: ${minFormatado}:${segFormatado}`);
    
    if (segundos === 15 && minutos === 0) {
        clearInterval(cronometro);
        console.log("Cronómetro parado automaticamente para demonstração.");
    }
}, 1000);