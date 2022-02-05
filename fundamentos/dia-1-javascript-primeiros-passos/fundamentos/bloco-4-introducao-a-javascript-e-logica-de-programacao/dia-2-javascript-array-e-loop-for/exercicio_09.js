/*Utilizando o array criado no exercício anterior 
imprima o resultado da divisão de cada um dos elementos por 2 */

numbers =[];
for(let i = 0; i <= 25;i+=1){
    numbers.push(i);
}
console.log(numbers);

for(let n = 0; n <= numbers.leght;n+=1){
    console.log(numbers[n]/2);}
