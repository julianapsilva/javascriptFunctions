const valorPagamento = (cod, quant) =>{
    switch(cod){
        case 100:
            return 3 * quant;
            break;
        case 200:
            return 4 * quant;
            break;
        case 300:
            return 5.5 * quant;
            break;
        case 400:
            return 7.5 * quant;
            break;
        case 500:
            return 3.5 * quant;
            break;
        case 600:
            return 2.8 * quant;
            break;
        default:
            return "Produto não existente!";
} }
console.log(valorPagamento(400,7))