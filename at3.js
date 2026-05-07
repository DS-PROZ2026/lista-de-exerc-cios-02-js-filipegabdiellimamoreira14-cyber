const prompt = require("prompt-sync")();

let mochila = [];

for (let i = 0; i < 6; i++) {
    let item = prompt("Digite o item encontrado: ");

    if (mochila.length < 4) {
        mochila.push(item);
    } else {
        let resposta = prompt("Mochila cheia! Deseja descartar o primeiro item para pegar o novo? (S/N) ");

        if (resposta.toUpperCase() === "S") {
            mochila.shift();
            mochila.push(item);
        }
    }
}

console.log("Mochila final:", mochila);