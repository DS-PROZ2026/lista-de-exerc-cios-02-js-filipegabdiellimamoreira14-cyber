let estoque = [
    { produto: "Monitor", quantidade: 10 },
    { produto: "Mouse", quantidade: 5 },
    { produto: "Teclado", quantidade: 8 }
];

let total = 0;

for (let i = 0; i < estoque.length; i++) {
    total += estoque[i].quantidade;
}

console.log("Total em estoque:", total);