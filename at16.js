const prompt = require("prompt-sync")();

let pessoas = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome: ");
    let idade = Number(prompt("Digite a idade: "));

    pessoas.push({
        nome: nome,
        idade: idade
    });

    soma += idade;
}

let media = soma / pessoas.length;

let maisVelha = pessoas[0];

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > maisVelha.idade) {
        maisVelha = pessoas[i];
    }
}

console.log("Média de idade:", media);
console.log("Pessoa mais velha:", maisVelha.nome);