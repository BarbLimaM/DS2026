//exercício 1
const alunoObj = {
    nome: "Fabrício",
    idade: 23,
    curso: "Engenharia Informática"
};


//exercício 2
const alunoJSON = JSON.stringify(alunoObj);
console.log("Exercício 2 (JSON String):", alunoJSON); 


//exercício 3
const stringJSON = '{"nome":"Letícia","idade":20,"curso":"Design"}';
const objetoConvertido = JSON.parse(stringJSON);
console.log("Exercício 3 (Propriedade Nome):", objetoConvertido.nome);


//desafio
const pedido = {
    produto: "Teclado Mecânico",
    quantidade: 1,
    valor: 350.00
};

async function enviarPedidoSimulado() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });
        
        const dadosRetornados = await resposta.json();
        console.log("Desafio (Resposta da simulação de envio):", dadosRetornados);
    } catch (erro) {
        console.error("Erro na simulação do envio:", erro);
    }
}
enviarPedidoSimulado();