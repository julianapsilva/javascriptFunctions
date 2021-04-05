const divisivelPor3 = num => {
    let s = num.toString()
    let soma = 0
    for(let i = 0; i < s.length; i++)
    {
        soma+= parseInt(s[i])
    }
    
    return (soma % 3 == 0) ? true : false
}

console.log(divisivelPor3(27))