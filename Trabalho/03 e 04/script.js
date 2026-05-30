// Exercício 3 - Imposto

function calcularImposto() {

    let ano = parseInt(document.getElementById("ano").value);
    let valor = parseFloat(document.getElementById("valor").value);

    let taxa;

    if (ano >= 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.015;
    }

    let imposto = valor * taxa;

    document.getElementById("resultadoImposto").innerHTML =
        `Imposto a pagar: R$ ${imposto.toFixed(2)}`;
}



// Exercício 4 - Salário

function calcularSalario() {

    let salario = parseFloat(
        document.getElementById("salario").value
    );

    let codigo = parseInt(
        document.getElementById("codigo").value
    );

    let percentual = 0;

    // Verifica o código do cargo
    if (codigo === 101) {

        percentual = 10;

    } else if (codigo === 102) {

        percentual = 20;

    } else if (codigo === 103) {

        percentual = 30;

    } else {

        percentual = 40;
    }

    // Calcula aumento
    let aumento = salario * (percentual / 100);

    // Novo salário
    let novoSalario = salario + aumento;

    // Resultado
    document.getElementById("resultadoSalario").innerHTML = `
        Salário antigo: R$ ${salario.toFixed(2)} <br>
        Percentual de aumento: ${percentual}% <br>
        Valor do aumento: R$ ${aumento.toFixed(2)} <br>
        Novo salário: R$ ${novoSalario.toFixed(2)}
    `;

}
