let nomesVendedores = ["Ana", "Carlos", "Pedro", "Julia", "Marcos"];
let totalVendas = [5000, 2000, 7000, 3000, 1000];

let soma = 0;

for (let i = 0; i < totalVendas.length; i++) {
    soma += totalVendas[i];
}

let media = soma / totalVendas.length;

let maior = totalVendas[0];
let destaque = nomesVendedores[0];

for (let i = 0; i < totalVendas.length; i++) {
    if (totalVendas[i] > maior) {
        maior = totalVendas[i];
        destaque = nomesVendedores[i];
    }
}

console.log("Média:", media);
console.log("Vendedor Destaque:", destaque);

for (let i = 0; i < totalVendas.length; i++) {
    if (totalVendas[i] < media * 0.7) {
        console.log(`${nomesVendedores[i]} está abaixo da meta`);
    }
}