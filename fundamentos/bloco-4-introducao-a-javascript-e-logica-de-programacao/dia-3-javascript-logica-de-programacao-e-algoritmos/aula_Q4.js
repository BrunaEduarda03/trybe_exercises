
/*4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
/Bônus: Crie a condição utilizando operador ternário.*/

function maioridade(number){

    let idade = number>18?"maior de idade":"não é maior de idade";
    

    return idade;
}

console.log(maioridade(19));