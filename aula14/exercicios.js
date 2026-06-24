//exercício 1
const numerosBase = [2, 3, 4, 5];
const quadrados = numerosBase.map(n => n * n);
console.log("Exercício 1 (Quadrados):", quadrados);


//exercício 2
const nomesOriginais = ['João', 'Fernanda', 'Carlos', 'Eva'];
const nomesLongos = nomesOriginais.filter(nome => nome.length > 5);
console.log("Exercício 2 (Nomes > 5 letras):", nomesLongos);


//exercício 3
const precos = [10.90, 25.90, 18.90];
const totalPrecos = precos.reduce((acumulador, precoAtual) => acumulador + precoAtual, 0);
console.log("Exercício 3 (Soma de Preços):", totalPrecos);


//desafio
const carrinho = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 89.9 },
    { nome: 'Meias', preco: 9.99 }
];
const totalCarrinho = carrinho.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log("Desafio (Total do Carrinho):", totalCarrinho); 