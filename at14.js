const prompt = require("prompt-sync")();

let consumos = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let consumo = Number(prompt(`Consumo do caminhão ${i + 1}: `));
    consumos.push(consumo);
    soma += consumo;
}

let maior = consumos[0];
let menor = consumos[0];

for (let i = 0; i < consumos.length; i++) {
    if (consumos[i] > maior) {
        maior = consumos[i];
    }

    if (consumos[i] < menor) {
        menor = consumos[i];
    }
}

console.log("Média da frota:", soma / 5);
console.log("Melhor consumo:", maior);
console.log("Pior consumo:", menor);