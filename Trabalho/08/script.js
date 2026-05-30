function calcular(){

    let nivel = document.querySelector("#nivel").value
    let aulas = Number(document.querySelector("#aulas").value)

    let valorHora = 0
    let salario = 0

    // Definindo valor por hora
    if(nivel == "1"){
        valorHora = 12
    }

    else if(nivel == "2"){
        valorHora = 17
    }

    else if(nivel == "3"){
        valorHora = 25
    }

    // Cálculo do salário
    salario = valorHora * aulas * 4.5

    document.querySelector("#resultado").innerHTML =
    "Salário do professor: R$ " + salario.toFixed(2)
}