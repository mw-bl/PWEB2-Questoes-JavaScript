function contarVogais() {
    const palavra = prompt("Digite uma palavra:");
    
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (const char of palavra) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    alert(`A palavra "${palavra}" tem ${contador} vogais.`);
}

contarVogais();
