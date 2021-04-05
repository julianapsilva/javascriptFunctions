const divisivelPor4 = num =>{
    let s = num.toString()
    let final = s.substring(s.length-2)
    if(s[s.length-1] == 0 && s[s.length-2] == 0)
        return true
    else if(parseInt(final) % 4 == 0)
        return true
    return false
}

const divisivelPor100 = num =>{
    let s = num.toString()
    if(s[s.length-1] == 0 && s[s.length-2] == 0)
        return true
    return false
}

const divisivelPor16 = num =>{
    let s = num.toString()
    let final = s.substring(s.length-4)
    return (parseInt(final) % 16 == 0) ? true : false
}
const divisivelPor25 = num =>{
    let s = num.toString()
    let final = s.substring(s.length-2)
    parseInt(final)

    return (final == 00 || final == 25 || final == 50 || final == 75) ? true : false
}


const bissexto = ano => {
    if(divisivelPor16(ano) && divisivelPor25(ano))
    {
        console.log(`O ano ${ano} é bissexto`)
        return true
    }
     if(divisivelPor100(ano))
    {
        console.log(`O ano ${ano} não é bissexto`)
        return false
    }
    else if(divisivelPor4(ano))
    {
        console.log(`O ano ${ano} é bissexto`)
        return true
    }

    else{
        console.log(`O ano ${ano} não é bissexto`)
        return false
    }
}

bissexto(1200)

