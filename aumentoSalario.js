function aumentoSalario(plano, salario) 
{
    switch(plano){
        case 'A':
            return salario + salario * 0.1
            break
        case 'B':
            return salario + salario * 0.15
            break
        case 'C':
            return salario + salario * 0.2
            break
        default:
            return "Plano inválido"
    }

}

console.log(aumentoSalario('A', 1000))
console.log(aumentoSalario('C', 5000))
