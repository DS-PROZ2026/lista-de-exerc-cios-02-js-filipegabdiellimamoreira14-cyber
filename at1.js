const prompt = require("prompt-sync")();

let listaProibida = ["Carlos", "João", "Marcos"];
let visitantesAutorizados = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome do visitante: ");

    if (listaProibida.includes(nome)) {
        console.log(`ALERTA: Segurança acionada para o visitante ${nome}!`);
    } else {
        visitantesAutorizados.push(nome);
    }
}

console.log("Visitantes autorizados:", visitantesAutorizados);