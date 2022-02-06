//maior palavra deste array .

let array = ['java', 'javascript', 'python', 'html', 'css'];
BiggestWord = array[0];
smallestWord = array[0];

for(let i = 0; i < array.length; i+=1){
    if(array[i].length > BiggestWord.length){
        BiggestWord = array[i];}
}
for(let i = 0; i < array.length; i+=1){
    if(array[i].length < smallestWord.length){
        smallestWord = array[i];}
}

console.log("Maior palavra: " + BiggestWord);
console.log("Menor palavra: " + smallestWord);