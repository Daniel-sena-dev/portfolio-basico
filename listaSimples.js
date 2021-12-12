function submeter(){
    var texto = document.querySelector('input#atividade')
    var tarefa = String(texto.value)
    var saida = document.querySelector('div#lista')
    

    if (texto.value == ''){
        window.alert('[ERRO] Lista vazia')
        
    } else{
        
        saida.innerHTML += `<div class="divcheck"><input type="checkbox" name="lista" id="lista"> ${tarefa}</div>`
        
    }

}

function resetar(){
    var saida = document.querySelector('div#lista')
    saida.innerHTML = ''
}