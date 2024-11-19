function somarNumeros(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

const numeros = [2, 5, 7, 9, 5, 1];
const resultado = somarNumeros(numeros);
console.log("A soma dos números do array é: ", resultado);
