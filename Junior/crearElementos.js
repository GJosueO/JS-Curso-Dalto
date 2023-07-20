// CREACION DE ELEMENTOS HTML CON JS
let container = document.querySelector('.container');

let fragmento = document.createDocumentFragment();
let elementHTML = document.createElement('H1');
let text= document.createTextNode('Creacion de elementos con');
elementHTML.appendChild(text);

let elementB = document.createElement('B');
let textB = document.createTextNode(' JavaScript');


elementB.appendChild(textB);
elementB.style.color = "red";
let spanS = document.createElement('SPAN');
let textS = document.createTextNode(' :)');
spanS.appendChild(textS);
spanS.style.color = 'blueviolet'
// console.log(spanS);
elementHTML.appendChild(elementB); 
elementB.appendChild(spanS)
fragmento.appendChild(elementHTML);
container.appendChild(fragmento);

for(let x = 0; x<=20; x++){

}
