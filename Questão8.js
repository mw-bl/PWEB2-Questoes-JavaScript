function maiorNumero() {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    const numero3 = parseFloat(prompt("Digite o terceiro número:"));

    const maior = Math.max(numero1, numero2, numero3);

    alert(`O maior número é: ${maior}`);
}

maiorNumero();
