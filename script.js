function inserirPrecoCusto() {
    let precoCusto = Number(prompt("Insira o preço de custo do produto:"))
    return precoCusto
}

function calcularICMS(precoCusto, taxaICMS) {
    let valorICMS = precoCusto * (taxaICMS / 100)
    return valorICMS
}

function calcularPrecoFinal(precoCusto, valorICMS) {
    let precoFinal = precoCusto + valorICMS
    return precoFinal
}

let precoCusto = inserirPrecoCusto()
let taxaICMS = 18
let valorICMS = calcularICMS(precoCusto, taxaICMS)
let precoFinal = calcularPrecoFinal(precoCusto, valorICMS)

alert("Preço de custo: R$ " + precoCusto)
alert("Valor do ICMS: R$ " + valorICMS + " (18% em SP)")
alert("Preço final com ICMS: R$ " + precoFinal)
