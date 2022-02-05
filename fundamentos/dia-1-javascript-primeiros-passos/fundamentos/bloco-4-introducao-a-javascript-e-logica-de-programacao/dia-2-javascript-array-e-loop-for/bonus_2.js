//Ordene o array numbers em ordem decrescente e imprima seus valores


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let primeiroIndex = 1;primeiroIndex < numbers.length; primeiroIndex +=1){
    for(let segundoIndex = 0;segundoIndex < primeiroIndex; segundoIndex +=1){
        if(numbers[primeiroIndex] > numbers[segundoIndex]){
            let position = numbers[primeiroIndex];
            numbers[primeiroIndex] = numbers[segundoIndex];
            numbers[segundoIndex] = position;
        }
    }
}

console.log("Ordem Decrescente: " + numbers);
