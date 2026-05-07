const prompt = require("prompt-sync")();

let nomes = [];

for (let i = 0; i < 5; i++) {
    nomes.push(prompt("Digite um nome: "));
}

let i = 0;
let encontrou = false;

while (i < nomes.length) {
    if (nomes[i] === "Ricardo") {
        console.log("Usuário encontrado");
        encontrou = true;
        break;
    }

    i++;
}

if (!encontrou) {
    console.log("Não cadastrado");
}