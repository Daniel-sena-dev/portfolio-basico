function calcular(){
    var altura = Number(document.querySelector('input#altura').value)
    var peso = Number(document.querySelector('input#peso').value)
    var saida = document.querySelector('div#res')
    var alturaM = altura / 100
    var IMC = (peso/(Math.pow(alturaM, 2)))
    //alert(peso)

    if (peso <= 0 || altura <= 0){
        window.alert("[ERRO] peso ou altura inválido!, digite novamente")
    } else if (IMC < 18.5){
        saida.innerHTML = `Seu IMC é de <strong>${IMC.toFixed(2)}</strong>, você está abaixo do peso!.`
    } else if (IMC < 24.90){
        saida.innerHTML = `Seu IMC é de <strong>${IMC.toFixed(2)}</strong>, você está com o peso ideal!.`
    } else if (IMC < 29.9){
        saida.innerHTML = `Seu IMC é de <strong>${IMC.toFixed(2)}</strong>, você está com sobrepeso!.`
    } else if (IMC < 34.9){
        saida.innerHTML = `Seu IMC é de <strong>${IMC.toFixed(2)}</strong>, você está com obesidade grau 1.`
    } else if (IMC < 39.9){
        saida.innerHTML = `Seu IMC é de <strong>${IMC.toFixed(2)}</strong>, você está com obesidade grau 2.`
    } else{
        saida.innerHTML = `Seu IMC é de <strong>${IMC.toFixed(2)}</strong>, você está com obesidade grau 3.`
    }
}