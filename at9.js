let funcionarios = [
    { nome: "Lucas", salario: 2500 },
    { nome: "Fernanda", salario: 4000 },
    { nome: "Ricardo", salario: 3500 }
];

let i = 0;

while (i < funcionarios.length) {
    if (funcionarios[i].salario > 3000) {
        console.log(funcionarios[i].nome);
    }

    i++;
}