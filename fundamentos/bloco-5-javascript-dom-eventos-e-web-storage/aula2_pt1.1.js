/*OBS: É importante dizer que, à primeira vista, as propriedades nextSibling e nextElementSibling parecem fazer a mesma coisa, 
mas uma pega o próximo nó do DOM , enquanto a outra pega o próximo elemento, e nem sempre o próximo nó é um elemento. */

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>