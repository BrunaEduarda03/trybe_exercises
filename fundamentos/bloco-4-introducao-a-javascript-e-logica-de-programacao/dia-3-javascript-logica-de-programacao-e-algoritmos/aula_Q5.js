// 5 

/* 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e
 imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.*/
 


function pessoaMaisNova(Carolzita, Murilo, Baêta){

    let idades = [Carolzita, Murilo, Baêta];
    let maior = 0;

    for (const idade of idades) {
        if(idade > maior){
            maior = idade;
        }
    }

    return maior;
}

console.log(pessoaMaisNova(10,11,12));