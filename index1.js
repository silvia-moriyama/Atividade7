function soma(numA, numB) {
    return Number(numA) + Number(numB)
}

function subtracao(numA, numB) {
    return Number(numA) - Number(numB)
}

function dividisao(numA, numB) {
    if (numB === 0) {
        return(`Não é possível divisão por 0`)
    } else {
    return Number(numA) / Number(numB)
    }

}

function multiplicacao(numA, numB) {
    return Number(numA) * Number(numB)
}

function calculadora(numA, numB, funcaoCallBack) {
    return funcaoCallBack(valorA, valorB)
}

console.log(calculadora(125,5, soma))
console.log(calculadora(125, 5, subtracao))
console.log(calculadora(125, 5, dividisao))
console.log(calculadora(125, 5, multiplicacao))