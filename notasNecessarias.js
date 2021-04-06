function notas(valor){
    let resto = valor
    while(resto!=0){
        if(resto >= 100){
            console.log (`${parseInt(resto/100)} notas de 100`)
            resto = resto % ((parseInt(resto/100)) *100)
        }
        else if(resto >= 50){
            console.log (`${parseInt(resto/50)} notas de 50`)
            resto = resto % ((parseInt(resto/50)) *50)
        }
        else if(resto >= 10){
            console.log (`${parseInt(resto/10)} notas de 10`)
            resto = resto % ((parseInt(resto/10)) *10)
        }
        else if(resto >= 5){
            console.log (`${parseInt(resto/5)} notas de 5`)
            resto = resto % ((parseInt(resto/5)) *5)
        }
        else {
            console.log (`${resto} notas de 1`)
            resto %= resto
        }
    }
}

console.log(notas(205))
console.log(notas(18))
console.log(notas(552))