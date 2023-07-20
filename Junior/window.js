let DOM = document.querySelector('.DOM');

let item = document.createElement('H1');
let text = document.createTextNode('HOLA DESDE WINDOW');

let ECompleta = document.createDocumentFragment();
item.appendChild(text);
item.style.color = '#fff';
ECompleta.appendChild(item);
DOM.appendChild(ECompleta);
// let a = false;
// if (a) {
//     print();

// }else{
// }
let ir = document.querySelector('.ir');
 ir.onclick =()=>{
    
    item.style.color = 'green';
    window.scrollBy(0,600);
 }

