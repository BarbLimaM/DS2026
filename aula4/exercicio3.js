const tentativasDoUsuario = ["123", "abc", "senhaincorreta", "1234"]; //lista de senha digitada simulada
let indice = 0;
let senhaDigitada;

console.log("--- Iniciando validação de senha no terminal ---");

do {
    senhaDigitada = tentativasDoUsuario[indice];
    
    let ehSenhaCorreta = (senhaDigitada === "1234");
    
    console.log(`Tentativa ${indice + 1}: Senha informada: "${senhaDigitada}". Resultado: ${ehSenhaCorreta}`);
    
    indice++;
} while (senhaDigitada !== "1234");

console.log("Resultado final: Acesso Concedido.");