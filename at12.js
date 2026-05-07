const prompt = require("prompt-sync")();

let agua = [];
let soma = 0;

for (let i = 0; i < 6; i++) {
    let litros = Number(prompt(`Litros do dia ${i + 1}: `));
    agua.push(litros);
    soma += litros;
}

let maior = agua[0];
let diaMaior = 1;

for (let i = 0; i < agua.length; i++) {
    if (agua[i] > maior) {
        maior = agua[i];
        diaMaior = i + 1;
    }
}

console.log("Consumo total:", soma);
console.log("Média diária:", soma / 6);
console.log(`Maior pico: ${maior} litros no dia ${diaMaior}`);