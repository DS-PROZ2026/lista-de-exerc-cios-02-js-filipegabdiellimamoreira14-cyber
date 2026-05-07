const prompt = require("prompt-sync")();

let viagens = [];
let somaPassagens = 0;
let abaixoMil = false;

for (let i = 0; i < 10; i++) {
    let destino = prompt("Digite o destino: ");
    let passagem = Number(prompt("Digite o valor da passagem: "));
    let hospedagem = Number(prompt("Digite o valor da hospedagem: "));

    let total = passagem + hospedagem;

    viagens.push({
        destino: destino,
        passagem: passagem,
        hospedagem: hospedagem,
        total: total
    });

    somaPassagens += passagem;

    if (total < 1000) {
        abaixoMil = true;
    }
}

let maisCaro = viagens[0];

for (let i = 0; i < viagens.length; i++) {
    if (viagens[i].total > maisCaro.total) {
        maisCaro = viagens[i];
    }
}

let media = somaPassagens / viagens.length;

console.log("Média das passagens:", media);
console.log("Destino mais caro:", maisCaro.destino);

if (abaixoMil) {
    console.log("Existe destino abaixo de R$ 1000");
} else {
    console.log("Nenhum destino abaixo de R$ 1000");
}