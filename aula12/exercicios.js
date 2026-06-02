//Exercício 1
function saudacao() {
    return function(nome) {
        console.log(`Olá, ${nome}!`);
    };
}
const saudarComNome = saudacao();
saudarComNome("Riper");


//Exercício 2
function multiplicador(x) {
    return function(numero) {
        return numero * x;
    };
}
const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log("Dobro de 5:", duplicar(5));
console.log("Triplo de 5:", triplicar(5));


//Exercício 3 - explicação sobre closures:
// Closure é quando uma função guarda na memória as variáveis do lugar onde ela foi criada, para poder 
// usar essas variáveis depois.

//Exercício 4 - resultado do código:
//c1() na primeira chamada vai retornar: 1
//c1() na segunda chamada vai retornar: 2
//c2() vai retornar: 1

function criarContador() { 
let i = 0; 
return function() { 
return ++i; 
} 
} 
let c1 = criarContador(); 
let c2 = criarContador(); 
console.log(c1()); //R: 1
console.log(c1()); //R: 2 
console.log(c2()); //R: 1