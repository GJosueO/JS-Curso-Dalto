// const titulo = document.querySelector('.titulo');
// nos muestra el contenido dentro de la caja de cualquier nodo
// let resultado = titulo.textContent;

// devuelve el texto visible de un nodo element 
// let resultado = titulo.innerText;


// devuelve el contenido html de un elemento
    //  let resultado = titulo.innerHTML;

// devuelve el codigo HTML completo del elemento
    // let resultado = titulo.outerHTML;
    // a traves de un alert 


// alert(resultado);
// **************************************************************
// *********************Creacion de elementos********************
// **************************************************************
const contenedor = document.querySelector('.container-div');
// const fragmento = document.createDocumentFragment();
// **********************createElement()************************
    // crea elementos html 
    // const lista = document.createElement('A');
    // crea una clase en nuestro elemento 
    // lista.classList = 'hola';
    // crea un href de nuestro elemento 
    // lista.href = 'https://google.com';
    // *********************createTextElement()**********************
    // crea texto dentro de nuestra etiqueta html 
    // lista.innerHTML = " Este es el texto de un Aaaa"
    
    // nos crea la lista pero se convierte en un objeto 
    // lista.innerHTML = textoL;
// *****************************************************************
// nos crea nuestro texto dentro de nuestro item html o de nuestro contenedor "afecta nuestro child"
// ***********************appendChild()**************************
    // lista.appendChild(textoL);
    // fragmento.appendChild(lista);
//  .appendChild(item) - nos permite crear elementos DESDE NUESTRO CONTENEDOR O ITEM 
// contenedor.appendChild(fragmento);

// Obtencion y modificacion de Childs 

// .firstChild // nos da el elemento primer hijo - cuenta el espacio
// .lastChild // nos da el elemento ultimo hijo - cuenta el espacio
// .fisrtElementChild // nos da el elemento primer hijo- No cuenta el espacio
// .lastElementChild // nos da el elemento ultimo hijo- No cuenta el espacio 
// .childNodes // nos da todos los elementos - Cuenta todos los espacios 
// contenedor.children; // nos da todos los elementos - no cuenta los espacios 

// *******************createDocumentFragment()*******************

// Forma mas rapida y con menor recursos para crear elementos en JavaScript

const elemento = document.createElement('H1');
texto.appendChild( 'Hola Bienvenido A Mi Sitio JGO, Gracias por acceder...');
const etiquetaC = document.createDocumentFragment();
contenedor.appendChild(texto);
 


console.log(texto);


