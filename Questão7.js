function inverterPalavra(texto) {
    return texto.split("").reverse().join("");
}

const entrada = prompt("Digite uma palavra para inverter:");
const resultado = inverterPalavra(entrada);
alert(`A palavra invertida é: ${resultado}`);
