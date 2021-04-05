const classificaPontuacao = function (lista) {
    let arr = lista.split(" ")
    let res = []
    let pior = parseInt(arr[0])
    let melhor = parseInt(arr[0])
    let indice = 0
    recorde=0

    for(let i = 1; i < arr.length; i++){
        if(parseInt(arr[i]) < pior ){
            pior = parseInt(arr[i])
            indice = i
        }
        if(parseInt(arr[i]) > melhor){ 
            recorde++
            melhor = parseInt(arr[i])
        }
    }
    res.push(recorde)
    res.push(indice+1)
    return res
}
 console.log(classificaPontuacao("10 20 20 8 25 3 0 30 1"))