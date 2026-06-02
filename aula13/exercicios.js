//exercício 1
function executarDuasVezes(acao) {
    acao();
    acao();
}
executarDuasVezes(() => console.log("Ação executada!"));


//exercício 2
function criarSaudacao(saudacaoTexto) {
    return function(nome) {
        return `${saudacaoTexto}, ${nome}!`;
    };
}
const bomDia = criarSaudacao("Bom dia");
const boaNoite = criarSaudacao("Boa noite");

console.log(bomDia("Carlos"));
console.log(boaNoite("Mariana"));

//exercício 3
function calcular(num1, num2, operacao) {
    return operacao(num1, num2);
}
const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log("Resultado da soma:", calcular(10, 5, somar)); 
console.log("Resultado da multiplicação:", calcular(4, 5, multiplicar)); 


//exercício 4
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
const somarUm = x => x + 1;
const aoQuadrado = x => x * x;

const somarEQuadrado = compose(aoQuadrado, somarUm); 

console.log("Desafio Compose: 3 -> (3 + 1)² =", somarEQuadrado(3));