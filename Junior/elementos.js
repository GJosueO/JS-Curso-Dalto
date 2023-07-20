let divSelected = document.getElementById('div-main');
let elementComplete = document.createDocumentFragment();
let a = document.createElement('A');
a.setAttribute('href', 'https://www.google.com');
a.style.color ="green";
let text = document.createTextNode('Hola desde un A ')
 a.appendChild(text);
elementComplete.appendChild(a);
divSelected.appendChild(elementComplete);
console.log(elementComplete);