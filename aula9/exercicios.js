    //exercício 1
    const botao = document.querySelector("#meuBotao");
    const paragrafo = document.querySelector("#meuParagrafo");

    if (botao && paragrafo) {
        botao.addEventListener("click", function() {
            paragrafo.textContent = "Texto alterado!";
        });
    }

    //exercício 2
    const input = document.querySelector("#meuInput");
    const resultado = document.querySelector("#resultadoInput");

    if (input && resultado) {
        input.addEventListener("input", function(e) {
            if (e.target.value === "") {
                resultado.textContent = "...";
            } else {
                resultado.textContent = e.target.value;
            }
        });
    }

    //exercício 3
    const imagem = document.querySelector("#minhaImagem");

    if (imagem) {    
        imagem.addEventListener("mouseover", function() {
            imagem.style.border = "5px solid #ff57b3";
        });

        imagem.addEventListener("mouseout", function() {
            imagem.style.border = "none";
        });
    }