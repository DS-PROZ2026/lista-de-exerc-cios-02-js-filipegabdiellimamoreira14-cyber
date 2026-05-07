const prompt = require("prompt-sync")();

let manutencoes = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
    let custo = Number(prompt(`Custo da manutenção ${i + 1}: `));
    manutencoes.push(custo);

    soma += custo;
}

let maior = manutencoes[0];

for (let i = 0; i < manutencoes.length; i++) {
    if (manutencoes[i] > maior) {
        maior = manutencoes[i];
    }
}

console.log("Custo total:", soma);
console.log("Custo médio:", soma / 4);
console.log("Manutenção mais cara:", maior);