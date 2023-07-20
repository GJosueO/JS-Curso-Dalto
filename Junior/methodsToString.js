
// let dato = 'Soy programador, La tecnologia es algo que me algo apasiona mucho. Actualmente me encuentro cursando el 9no cuatrimestres de mi formacion academica UNIVERSIDA en UTVAM Tizayuca.';
// let dato2 = 'algo';
// let nombre = 'J o S u E  g O m E z  O m A ñ A';

// Permite saber si nuestro elemento tiene lo que contiene () al inicio de String. arroja valores:  TRUE y FALSE
// let info =   dato.startsWith(dato2);

// permite saber si nuesto nombre esta dentro y al final de nuestra cadena de texto 
// let info = dato.endsWith(nombre);

///////////////////////////////////////////////
// Permite unir una palabra con otra generando una nueva 
// let info = nombre +' ' +dato.concat(dato2 ,' ') ;

////////////////////////////////////////////////
// Permite saber si la palabra que esta dentro de includes esta dentro de toda la cadena de texto: Regresa valores Boleanos TRUE y FLASE
//  let info = dato.includes(dato2);

//Nos lanza la primera  posision de donde inicia el dato encontrado: valor(0-infinito) y si nos regresa -1 si no fue encontrado
// let info = dato.indexOf(dato2);
// nos lanza la ultima posision de donde inicia el dato encontrado 
// let info = dato.lastIndexOf(dato2);
// let dato2 = 'algo';


// ////////////////////////////////////////////////
// let dato = 'Soy programador , La tecnologia es algo que me algo apasiona mucho. Actualmente me encuentro cursando el 9no cuatrimestres de mi formacion academica UNIVERSIDA en UTVAM Tizayuca.';
// let dato2 = 'algo';
// let nombre = 'J o S u E  g O m E z  O m A ñ A';
// ////////////////////////////////////////////////
// permite rellenar la cadena de texto valores.padStart(tamaño,SpecialCaracter);
// padStart();
// Valores al inicio 
// let info = dato2.padStart(100, ".l.");
// valores al final 
// let info = dato2.padEnd(100,".I.");

///////////////////////////////////////////////
// repite los valores en nuestra cadena de texto repeat(2, (no funcia)'')
// let info = dato + dato2.repeat(2);

// La propiedad split permite cortar y crear array  partiendo de un dato como la siguiente manera:
// la cadena se parte en el nuemero de "algo" que hay dentro de la cadena de texto 
// let info = dato.split("algo");
// la divide en espacios de cada palabra de la cadena
// let info = dato.split(" ");
// separa toda la cadena por letras
// let info = dato.split("");
// let info = dato.split("a");
// separa toda la cadena donde hay una a
// de esta manera acederemos a cada valor del array
// document.write(info[1]);
////////////////////////////////////////////////
let dato = 'Soy programador , La tecnologia es algo que me algo apasiona mucho. Actualmente me encuentro cursando el 9no cuatrimestres de mi formacion academica UNIVERSIDA en UTVAM Tizayuca.';
let dato2 = 'algo';
let nombre = 'J o S u E  g O m E z  O m A ñ A';
////////////////////////////////////////////////
// permite cortar el texto desde x a y 
// let info  = nombre.substring(2,5); 
// let info = dato.toLowerCase();
let info = nombre.toUpperCase();

document.write(info);
