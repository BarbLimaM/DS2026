//exercícios 1 e 2
const minhaPromessa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Exercício 1 e 2: Promise resolvida com sucesso!");
    }, 3000);
});

minhaPromessa.then((mensagem) => {
    console.log(mensagem);
});


//exercício 3
function esperarTresSegundos() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
}

async function executarComAwait() {
    console.log("Exercício 3: A aguardar a resolução...");
    await esperarTresSegundos();
    console.log("Exercício 3: Resolvido usando async/await!");
}
executarComAwait();


//desafio
function simularRequisicao(sucesso = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sucesso) {
                resolve({ status: 200, dados: "Dados carregados da API" });
            } else {
                reject(new Error("Falha na ligação com o servidor"));
            }
        }, 2000);
    });
}

async function carregarDados() {
    try {
        console.log("Desafio: Carregando dados...");
        const resultado = await simularRequisicao(false);
        console.log("Desafio (Sucesso):", resultado.dados);
    } catch (erro) {
        console.error("Desafio (Erro capturado):", erro.message);
    }
}
carregarDados();