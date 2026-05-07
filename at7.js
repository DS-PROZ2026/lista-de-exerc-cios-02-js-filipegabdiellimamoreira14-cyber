let frota = [
    { modelo: "Volvo", km: 12000, revisao: 4 },
    { modelo: "Scania", km: 8000, revisao: 8 },
    { modelo: "Mercedes", km: 5000, revisao: 3 }
];

let frotaManutencao = [];

for (let i = 0; i < frota.length; i++) {
    if (frota[i].km > 10000 || frota[i].revisao > 6) {
        frotaManutencao.push(frota[i]);
    }
}

console.log("Veículos que precisam de manutenção:");
console.log(frotaManutencao);
console.log("Total:", frotaManutencao.length);