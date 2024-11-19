function calculadora() {
    const numero1 = parseFloat(prompt("Digite um número:"));
    const numero2 = parseFloat(prompt("Digite outro número:"));
    
    const operacao = prompt("Qual operação deseja realizar? \n\n soma, subtracao, multiplicacao, divisao");
    
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = numero1 + numero2;
            break;
        case "subtracao":
            resultado = numero1 - numero2;
            break;
        case "multiplicacao":
            resultado = numero1 * numero2;
            break;
        case "divisao":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "Erro: Divisão por zero não é permitida.";
            }
            break;
        default:
            resultado = "Erro. Escolha entre soma, subtração, multiplicação ou divisão.";
    }

    alert(`O resultado é: ${resultado}`);
}

calculadora();
