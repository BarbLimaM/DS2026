// Exercício 1 - explicação sobre a diferença de escopos:
// No escopo de função (var) a variável é visível em qualquer parte dentro da função onde foi criada.
// No escopo de bloco (let/const) a variável só existe dentro das chaves onde foi declarada.

// Exercício 2 - análise do código:
// O código imprime "undefined" e depois "2" porque o 'var x' dentro da função é puxado para o topo da 
// função, mas sem o seu valor (hoisting).

// Exercício 3 - reescrevendo o código:

function exemploEscopo() {
    if (true) {
        let nome = "Ana";
        console.log("Dentro do bloco:", nome);
    }

}
exemploEscopo();

//Exercício 4 - corrigindo o loop:
// O 'var' não respeita o bloco do 'for'. Ao mudar para 'let', cada repetição ganha o seu 
// próprio valor de i.

console.log("Desafio do loop");
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("Loop corrigido:", i), 100);
}