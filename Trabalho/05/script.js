function calcular(){

    let saldo = Number(document.querySelector("#saldo").value)
    let credito = 0

    if (saldo >= 0 && saldo <= 200){
        credito = 0
    }

    else if (saldo >= 201 && saldo <= 400){
        credito = saldo * 20 / 100
    }

    else if (saldo >= 401 && saldo <= 600){
        credito = saldo * 30 / 100
    }

    else if (saldo > 600){
        credito = saldo * 40 / 100
    }

    document.querySelector("#resultado").innerHTML =
    "Saldo médio: R$ " + saldo.toFixed(2) +
    "<br>Crédito liberado: R$ " + credito.toFixed(2)
}