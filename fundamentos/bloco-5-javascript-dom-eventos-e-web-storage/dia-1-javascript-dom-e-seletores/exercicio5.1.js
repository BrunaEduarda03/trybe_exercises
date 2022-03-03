/* EXERCICIO 1*/
function changeParagraph() {
let paragraph = document.getElementsByTagName('p')[1];
paragraph.innerText = "Daqui há dois anos eu me vejo como uma programadora melhor e pessoa mais focada";

}
changeParagraph();

/* EXERCICIO 2*/

function changeColorToGreen() {
    let changeYellow = document.getElementsByClassName('main-content')[0];
    changeYellow.style.background = 'rgb(76,164,109)';
}
changeColorToGreen();


/* EXERCICIO 3*/

function changeColorToWhite() {
    let changeRed = document.getElementsByClassName('center-content')[0];
    changeRed.style.background = 'white';
}
changeColorToWhite();

/* EXERCICIO 4*/

function correctTitle() {
    let title = document.getElementsByTagName('h1')[0];
    title.innerText = 'Exercício 5.1 - JavaScript';
}
correctTitle();

/* EXERCICIO 5*/

function paragraphUpperCase() {
    let p = document.getElementsByTagName('p')[0];
    p.innerText = p.innerText.toUpperCase();
}
paragraphUpperCase();

/* EXERCICIO 6*/

function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i+= 1) {
        console.log(paragraphs[i].innerText);
    }
}
showParagraphs(); 