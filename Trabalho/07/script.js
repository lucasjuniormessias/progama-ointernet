//Exercicio 07 
function calcular(){

    let roupa = document.querySelector("#roupa").value
    let valortotal = document.querySelector("#valortotal");
    let desconto
    let preco
    let parcela
    let pagamento = document.querySelector("#pagamento").value

    if (roupa == "Camiseta Oversized"){
        preco = 79.90
    }
    if (roupa == "Calça Jeans"){
        preco = 149.90
    }
    if (roupa == "Moletom"){
        preco = 199.90
    }
    if (roupa == "Jaqueta Jeans"){
        preco = 249.90
    }
    if (roupa == "Bermuda Cargo"){
        preco = 89.90
    }
    if (roupa == "Tênis Casual"){
        preco = 299.90
    }
    if (roupa == "Boné"){
        preco = 59.90
    }
     if (roupa == "Camisa Social"){
        preco = 129.90
    }

    if (pagamento == "a"){
        preco = preco - (preco * 10 / 100)

        document.querySelector("#valortotal").innerHTML =
        "Valor com desconto: R$ " + preco.toFixed(2)
    }

    else if (pagamento == "b"){
        preco = preco - (preco * 15 / 100)

        document.querySelector("#valortotal").innerHTML =
        "Valor com desconto: R$ " + preco.toFixed(2)
    }

    else if (pagamento == "c"){
        parcela = preco / 2

        document.querySelector("#valortotal").innerHTML =
        "2x de R$ " + parcela.toFixed(2)
    }
}