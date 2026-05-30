//Exercicio 06

function calcular(){

    let codigoitem = document.querySelector("#codigoitem").value
    let quantidade = document.querySelector("#quantidade").value
    let preco

    if (codigoitem == 102) {
        preco = 11
    }

    if (codigoitem == 256) {
        preco = 8.50
    }

    if (codigoitem == 324) {
        preco = 8
    }

    if (codigoitem == 46) {
        preco = 9
    }

    if (codigoitem == 51) {
        preco = 10
    }

    if (codigoitem == 2006) {
        preco = 4.50
    }

    let total = preco * quantidade

    document.querySelector("#resultado").innerHTML = "Valor : R$" + total

}

let Valor = document.querySelector("#Valor")

Valor.onclick = function(){
    calcular();
}
