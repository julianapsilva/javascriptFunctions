const calculadora = (num1, operacao, num2) => {
    switch(operacao){
        case "+":
            return num1+num2
            break
        case "-":
            return num1-num2
            break
        case "*":
            return num1*num2
            break
        case "/":
            return num1/num2
            break
        default:
            return "Operacao inválida"

    }
}

console.log(calculadora(5,"*", 6))