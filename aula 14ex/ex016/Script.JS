function verificar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[EERO] Impossivel contar!'
    }else {
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)
    res.innerHTML = ''
    if (inicio < fim){
        //contagem crescente
        for (var c = inicio; c <= fim; c += passo){
            res.innerHTML += `${c} 👉 `
        }
    }else {
        //contagem decrescente
        for (var c = inicio; c <= fim; c += passo){
            res.innerHTML += `${c} 👉 `
        }
    }
    res.innerHTML += '🏁'
    }
}