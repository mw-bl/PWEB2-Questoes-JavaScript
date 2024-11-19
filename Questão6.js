function contagemRegressiva() {
    let numero = parseInt(prompt("Digite um número para fazer a contagem regressiva:"));
    
    if (numero > 50) {
        alert("Por favor, não escolha um numero tão grande.");
        return;
    }

    let resultado = "Contagem regressiva:\n";
    while (numero >= 0) {
        resultado += numero + "\n";
        numero--;
    }

    alert(resultado);
}

contagemRegressiva();
