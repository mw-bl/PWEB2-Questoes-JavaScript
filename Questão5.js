function ordenarNumeros() {
    const numero1 = prompt("Digite o primeiro número:");
    const numero2 = prompt("Digite o segundo número:");
    const numero3 = prompt("Digite o terceiro número:");
    
    const numeros = [numero1, numero2, numero3];
    
    numeros.sort((a, b) => a - b);
    
    alert(`Números em ordem crescente: ${numeros.join(", ")}`);
}

ordenarNumeros();
