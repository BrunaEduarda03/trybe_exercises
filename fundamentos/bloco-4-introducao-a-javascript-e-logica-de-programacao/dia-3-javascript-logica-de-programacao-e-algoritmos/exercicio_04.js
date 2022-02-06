/*Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.*/

let maiorPrimo = 0;

for(let primeiroIndex = 0;primeiroIndex <= 50;primeiroIndex +=1)
{
    let ehPrimo = true;
    for(segundoIndex = 2;segundoIndex < primeiroIndex;segundoIndex+=1)
    {
        if(primeiroIndex % segundoIndex === 0){
            ehPrimo = false;
        }
    }
    if(ehPrimo)
        maiorPrimo = primeiroIndex;
}
console.log(maiorPrimo);

