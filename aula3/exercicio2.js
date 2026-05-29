let diaDaSemana = "sexta";

switch (diaDaSemana.toLowerCase()) {
    case "segunda":
        console.log("Início da semana de trabalho!");
        break;
    case "terça":
    case "quarta":
    case "quinta":
        console.log("Dia de foco total nos estudos e projetos.");
        break;
    case "sexta":
        console.log("Sextou! O fim de semana está chegando.");
        break;
    case "sábado":
    case "domingo":
        console.log("Fim de semana! Hora de descansar.");
        break;
    default:
        console.log("Dia inválido. Digite novamente.");
}