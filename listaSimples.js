function submeter(){
    var tarefa = String(document.querySelector('input#atividade').value)
    var saida = document.querySelector('div#lista')
    

    if (tarefa == ''){
        window.alert('[ERRO] Lista vazia')
        
    } else{
        
        saida.innerHTML += `<div class="divcheck"><input type="checkbox" name="lista" id="lista"> ${tarefa}</div>`
        
    }

}

function resetar(){
    var saida = document.querySelector('div#lista')
    saida.innerHTML = ''

}