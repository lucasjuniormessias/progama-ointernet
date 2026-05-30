// EXERCÍCIO 1 - TRIÂNGULO

function verificarTriangulo() {

    let x = Number(document.getElementById("lado1").value);
    let y = Number(document.getElementById("lado2").value);
    let z = Number(document.getElementById("lado3").value);

    let resultado = document.getElementById("resultadoTriangulo");

    if (x < y + z && y < x + z && z < x + y) {

        if (x === y && y === z) {
            resultado.innerHTML = "Triângulo Equilátero";
        }
        else if (x === y || x === z || y === z) {
            resultado.innerHTML = "Triângulo Isósceles";
        }
        else {
            resultado.innerHTML = "Triângulo Escaleno";
        }

    } else {
        resultado.innerHTML = "Os valores não formam um triângulo.";
    }
}


// EXERCÍCIO 2 - IMC

function calcularIMC() {

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
    else if (imc <= 24.9) {
        classificacao = "Peso normal";
    }
    else if (imc <= 29.9) {
        classificacao = "Sobrepeso";
    }
    else if (imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    }
    else if (imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    }
    else {
        classificacao = "Obesidade grau 3";
    }

    document.getElementById("resultadoIMC").innerHTML =
        `IMC: ${imc.toFixed(2)} <br> Classificação: ${classificacao}`;
}