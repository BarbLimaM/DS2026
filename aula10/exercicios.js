function calcular(operacao) {
            let txt1 = document.getElementById('n1').value;
            let txt2 = document.getElementById('n2').value;

            //exercício 2
            if (txt1 === "" || txt2 === "") {
                alert("Preencha os dois números");
                return;
            }

            let a = parseFloat(txt1);
            let b = parseFloat(txt2);
            let resultado = 0;

            //exercício 1
            switch(operacao) {
                case 'soma':
                    resultado = a + b;
                    break;
                case 'sub':
                    resultado = a - b;
                    break;
                case 'mult':
                    resultado = a * b;
                    break;
                case 'div':
                    if (b === 0) {
                        alert("Não é possível dividir por zero.");
                        return;
                    }
                    resultado = a / b;
                    break;
            }

            document.getElementById('resultado').textContent = resultado;
        }