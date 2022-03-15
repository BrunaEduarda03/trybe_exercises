//1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => (arr.some((Currentname) => Currentname === name )) //currentName = elemento q percorre o array names
  


console.log(hasName(names, 'Ana'))