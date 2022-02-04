let lado1 = 45,lado2 = 90,lado3 = 45;
let triangulo = (lado1 + lado2 + lado3);

let angulos_positivos = lado1 > 0 && lado2 > 0 && lado3 > 0;
if(angulos_positivos)
{
    if (triangulo === 180)
        console.log("true");
    else
    console.log("false");
}
else{
    console.log("ERRO:Ângulo inválido");
}
