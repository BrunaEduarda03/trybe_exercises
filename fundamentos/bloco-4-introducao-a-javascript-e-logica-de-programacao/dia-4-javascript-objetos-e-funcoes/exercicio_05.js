/*defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 
'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.*/

let infoMargarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    
}; 
let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};
for(let properties in infoTioPatinhas){
    if(properties === 'recorrente' && infoMargarida[properties] === 'Sim' 
    && infoTioPatinhas[properties] === 'Sim'){
        console.log('Ambas recorrentes');}
    else{
        console.log(infoMargarida[properties] + ' e ' + infoTioPatinhas[properties]);
    }


}
    


//console.log(info[key]+ ' e ' + infoTioPatinhas['personagem']);
