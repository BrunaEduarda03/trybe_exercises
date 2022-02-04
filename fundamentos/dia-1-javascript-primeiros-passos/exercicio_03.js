let num1 = 2,num2 = 8, num3 = 27;
let maiorValor = 0;

if(num1 > num2 && num1>num3)
    maiorValor = num1;
else if(num2 > num1 && num2 > num3)
    maiorValor = num2;
else 
    maiorValor = num3;

console.log("Maior valor: ",maiorValor);
