function desafio(){
    var num1 = Number(prompt('Digite o primeiro numero: '));
    var num2 = Number(prompt('Digite o segundo numero: '));
    var soma = num1 + num2;

    if (num1 == num2){
        alert(`Os numeros ${num1} e ${num2} são iguais. E sua soma é ${soma}`);
    } else {
        if (soma > 10 && soma < 20){
            alert(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
        } else if (soma < 10 && soma < 20){
            alert(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
        } else if (soma > 10 && soma > 20){
            alert(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
        } else {
            alert(' os numeros são iguais');
        }
    }
}
desafio();