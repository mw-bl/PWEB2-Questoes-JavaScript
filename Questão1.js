function mensagem() {
    const nome = prompt("Qual é o seu nome?");
    const idade = parseInt(prompt("Qual é a sua idade?"));

    if (idade >= 18) {
        alert(`Olá, ${nome}! Você já é maior de idade`);
    } else {
        alert(`Olá, ${nome}! Você ainda é menor de idade!`);
    }
}

mensagem();
