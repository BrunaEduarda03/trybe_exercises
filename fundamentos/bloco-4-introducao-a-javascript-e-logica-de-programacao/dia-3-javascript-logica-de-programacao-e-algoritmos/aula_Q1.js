/* 1 -Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" 
e retorne no formato: 'A soma total de 1 a 50 é:'*/

function somaTotal() {
  let sum = 0;

  for (let i = 1; i <= 50; i++) {
    sum += i;
  }

  return sum;
}

console.log("A soma total de 1 a 50 é" + somaTotal() + "\n");