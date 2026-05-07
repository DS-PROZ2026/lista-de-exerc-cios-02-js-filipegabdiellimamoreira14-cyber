const prompt = require("prompt-sync")();

let sensores = [];
let soma = 0;
let maior = 0;
let alerta = 0;

for (let i = 0; i < 6; i++) {
    let temp = Number(prompt(`Temperatura do sensor ${i + 1}: `));
    sensores.push(temp);

    soma += temp;

    if (temp > maior) {
        maior = temp;
    }

    if (temp > 35) {
        alerta++;
    }
}

console.log("Temperatura média:", soma / 6);
console.log("Máxima registrada:", maior);
console.log("Sensores em alerta:", alerta);