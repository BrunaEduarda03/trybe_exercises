/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
 imprima a mensagem: "valor maior que 20".Caso não seja, imprima a mensagem: "valor menor ou igual a 20"*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0;
for(let i = 0;i<numbers.length;i+=1)
{
    sum += numbers[i];
}
let average = sum/numbers.length;
if(average > 20)
{
    console.log("Valor maior que 20.\nMedia Aritmética: " + average);
}
else
{
    console.log("Valor menor ou igual a 20.\nMedia Aritmética: " + average);
}