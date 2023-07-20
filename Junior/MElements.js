// let contenido = document.querySelector('.container-items');
// let resultado = contenido.outerHTML;
// console.log(resultado);


let divElement = document.querySelector('.container-element');

let item = document.createElement('A');

let texto = document.createTextNode('Envio a Google');

item.appendChild(texto);

item.href = 'https://www.google.com';
item.target = '_blank';
divElement.appendChild(item);
console.log(item);


let itemDos = document.createElement('H1');
let fragment = document.createDocumentFragment();

itemDos.innerHTML = 'Holaaa que haces papu!?';

fragment.appendChild(itemDos);
divElement.appendChild(fragment)

