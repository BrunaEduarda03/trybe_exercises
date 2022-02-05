/*2 -Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
Caso a quantidade seja igual a 50, exiba uma mensagem secreta.*/
  
  function contadorDeNumeros() {
    let contador = 0;
  
    for (let i = 2; i <= 150; i++) {
      if (i % 3 === 0) {
        contador++;
      }
    }
  
    if (contador === 50) {
      console.log("mensagem secreta");
    }
  
    return contador;
  }
  
  console.log(contadorDeNumeros() + "\n");