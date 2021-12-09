function somar(){
    var N1 = document.querySelector('input#numero1')
    var numero1 = Number(N1.value)
    var N2 = document.querySelector('input#numero2')
    var numero2 = Number(N2.value)
    var resultado = numero1 + numero2
    var saida = document.querySelector('div#saida')

    saida.innerHTML = `<p>O resultado da <strong>SOMA</strong> de <strong>${numero1}</strong> e <strong>${numero2}</strong> é igual a <strong>${resultado}</strong>.</p>`
}

function subtracao(){
    var N1 = document.querySelector('input#numero1')
    var numero1 = Number(N1.value)
    var N2 = document.querySelector('input#numero2')
    var numero2 = Number(N2.value)
    var resultado = numero1 - numero2
    var saida = document.querySelector('div#saida')

    saida.innerHTML = `<p>O resultado da <strong>SUBTRAÇÃO</strong> de <strong>${numero1}</strong> e <strong>${numero2}</strong> é igual a <strong>${resultado}</strong>.</p>`
}

function multiplicacao(){
    var N1 = document.querySelector('input#numero1')
    var numero1 = Number(N1.value)
    var N2 = document.querySelector('input#numero2')
    var numero2 = Number(N2.value)
    var resultado = numero1 * numero2
    var saida = document.querySelector('div#saida')

    saida.innerHTML = `<p>O resultado da <strong>MULTIPLICAÇÃO</strong> de <strong>${numero1}</strong> e <strong>${numero2}</strong> é igual a <strong>${resultado}</strong>.</p>`
}

function divisao(){
    var N1 = document.querySelector('input#numero1')
    var numero1 = Number(N1.value)
    var N2 = document.querySelector('input#numero2')
    var numero2 = Number(N2.value)
    var resultado = numero1 / numero2
    var saida = document.querySelector('div#saida')

    saida.innerHTML = `<p>O resultado da <strong>DIVISÃO</strong> de <strong>${numero1}</strong> e <strong>${numero2}</strong> é igual a <strong>${resultado}</strong>.</p>`
}