// Con el DOM DOCUMENT OPTION MODEL te permite interactuar con las etiquetas html y los diseños de CSS
// EL DOM contiene todo lo que tiene una pagina web




//     html head title
//             Meta
// DOM



//     html body
//          Script 
//          form  input

// Nodo - CUalquier etiqueta del codigo o cuerpo html atributos  de cada etiqueta son como los nodos
// SUBNODOS: 

// Document: El nodo document es el nodo raiz, apartir del cual derivan el resto de nodos

// Element: Nodos que se definen por etiquetas html  una etiqueta p div h1  

// Text: Es el texto de un nodo element es un text node
// Attribute:Attr : Definen nodos, informacion asociada a los nodos elements
// Comentarios y otros: Los comentarios que se generan en un comentario

// Element_node 1
// atrribute_node 2
// Text_Node 3
// CDATA_Section_Node 4
// entity_node 5
// processing_instruction_node 6
// Comment_Node 7
// Document_node 8
// Document_Type_Node 9
// Document_Fragment_Node 10
// Document_Notation_Node 11 





// info = document.querySelector('script');  //Obtiene los elementos especificos
// info2 = document.querySelectorAll('parrafo'); //obtener todos los selectores con los mismos nodos
// info3 = document.getElementsByTagName('parrafo');//obtenr elemento por etiqueta html 
// Document.getElementBYId- seleccion por id
// Document.getElementsByTagName - por
// Document.querySelector()selecciona el primer 
// Document.querySelectorAll()- seleccionar todos los elementos 


// sele = document.getElementsByTagName('p');
// document.write(sele[0])


// sele = document.querySelector('#oracion');
// document.write(sele)


// sele = document.querySelectorAll('#oracion');
// document.write(sele[0])
// Este getElementById es m1as optimo por que se selecciona por

// nos permite selecionar el nodo dependiendo de la funcion del dom 
// y con el document write nos permite saber que tipo de nodo es 

// NO mas de un ID problemas de specificidad
// scripts siempre iran abajo

// Motodos para definir, obtener y eliminar valores de atributos:

// const etiqueta2 = document.getElementById('hola');
// const etiqueta = document.querySelector('.hola');
// const etiqueta3 = document.getElementBYId('#parrafo');
//  etiqueta3.setAttribute('type','date');
// etiqueta2.setAttribute('type','color');

// document.write(etiqueta3);

////////////////////////////////////////////////////////////////////////////
// Añadir un atributo con un valor 
// const r = 'date'
// const inpBuscar = document.querySelector('.rango');

// document.write(inpBuscar);

// if(r == 'color'){
//     inpBuscar.setAttribute('placeholder','color');
// }else if(r == 'file'){
//     inpBuscar.setAttribute("type", 'file');
// }else if(r == 'range'){
//     inpBuscar.setAttribute("class", 'range');
// }else if(r == 'password'){
//     inpBuscar.setAttribute("placeholder", 'password');
// }else if(r == 'date'){
//     inpBuscar.setAttribute("placeholder", 'date');
// }

////////////////////////////////////////////////////////////////////////////
// obtener el valor de los atributos 
// const inpBuscar1 = document.querySelector('.rangou');
// const inpBuscar2 = document.querySelector('.rangod');
// const inpBuscar3 = document.querySelector('.rangot');
// const inpBuscar4 = document.querySelector('.rangoc');
// const inpBuscar5 = document.querySelector('.rangoci');
// const inpBuscar6 = document.querySelector('.rangos');

// // inpBuscar.setAttribute("type", 'file');

// obtener1 = inpBuscar1.getAttribute('type');
// obtener2 = inpBuscar2.getAttribute('type');
// obtener3 = inpBuscar3.getAttribute('type');
// obtener4 = inpBuscar4.getAttribute('type');
// obtener5 = inpBuscar5.getAttribute('type');
// obtener6 = inpBuscar6.getAttribute('type');

// document.write(obtener1 + '<br>');
// document.write(obtener2 + '<br>');
// document.write(obtener3 + '<br>');
// document.write(obtener4 + '<br>');
// document.write(obtener5 + '<br>');
// document.write(obtener6 + '<br>');
/////////////////////////////////////////////////////////////////////////

// // Eliminar atributos 
// const inpBuscar1 = document.querySelector('.rangou');
// const inpBuscar2 = document.querySelector('.rangod');
// const inpBuscar3 = document.querySelector('.rangot');
// const inpBuscar4 = document.querySelector('.rangoc');
// const inpBuscar5 = document.querySelector('.rangoci');
// const inpBuscar6 = document.querySelector('.rangos');

// // inpBuscar.setAttribute("type", 'file');

// obtener1 = inpBuscar1.removeAttribute('type');
// obtener2 = inpBuscar2.removeAttribute('type');
// obtener3 = inpBuscar3.removeAttribute('type');
// obtener4 = inpBuscar4.removeAttribute('type');
// obtener5 = inpBuscar5.removeAttribute('type');
// obtener6 = inpBuscar6.removeAttribute('type');

// document.write(obtener1 + '<br>');
// document.write(obtener2 + '<br>');
// document.write(obtener3 + '<br>');
// document.write(obtener4 + '<br>');
// document.write(obtener5 + '<br>');
// document.write(obtener6 + '<br>');

///////////////////////////////////////////////////////////////////////////////////




