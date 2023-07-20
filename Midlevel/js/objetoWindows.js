// Introduccion de windows - WIdow es el objeto mas grande en la 
// alta gerarqui de JavaScript - el dom depende de window
// Hereda las propiedades de EnventTarget 
// hace referencia a la ventana de nuestro navegador 
// Hay muchas propiedades de window  

// sigue una estructura que es window. + componente 


// open() -  Nos permite abrir una ventana en nuestro navegador, esta se abrira continuemente si se carga la pagina o en un boocle
// let ventanaURL = 'https://www.youtube.com/watch?v=EoS1zYwd3-Q';
//  ventana = window.open(ventanaURL);
 // window.open('https://google.com');  
 
 
 
 
 // close() - Nos permite cerrar la ventana de nuestro navegador
 // ventana.close(); 
//  ventana.close();

// ************************Note:**************************************** 
// si no sirve la funcion close es por el permiso de las paginas, como en google
// closed - NOs permite saber si nuestra ventana se ha cerrado Salida:  TRUE FALSE
//  ventana.closed 
// name -Obtiene el nombre  y establece el nombre del contexto de exploracion de la ventana 


// stop() - nos permite parar el progreso de carga de un sitio web 
// ventana.stop();

// nos permite imprimir nuestra pagina
// print();

// nos permite pedir un dato 
// prompt(); pide un dato en window 

// nos permite confirmar una operacion 
// nos regresa valores bool TRUE FALSE 
// confirm('Quieres cerrar tu pestaña?');

// screen - devuelve una referencia al objeto de pantalla asociado con la ventana
// este es un objeto donde podemos acceder a sus propiedades, el tamaño o el cambio de las propiedades se vera reflejado cuando hacemos al cambio de responsive desing 
// const so = window.screen;
// console.log(so);
// document.write(so.availWidth)
//***************************INICIO*********************************************************** */
// NOOOTAAA: Solo son propiedades de lectura
// window.screenleft, top etc - devueve el numero de tamaño de los bordes del la pantalla y el navegador
// screenLeft - espacio entre pantalla y navegador izquierdo
// document.write(window.screenLeft);
// screenTop - espacio entre limite de pantalla y navegador top y 
// document.write(window.screenTop);
// **************************FIN********************************************************* 
// scrollX - valor de scroll en horizontal 
// console.log(window.scrollX + ' ' + window.scrollY);
// scrollY - valor de scroll en vertical 
// console.log(window.scrollX + ' ' + window.scrollY);
// scroll() -  valores de Y  && X
// console.log(window.scroll(30,10))

// console.log(window.scrollBy(0,2222))

// if(window.screen.height <= 700){
//     console.log('Llegaste a esta resolucion 700');
// }else if(window.screen.height >= 1000){
//     console.log('llegaste a esta resolucion 900');
// }
// *************************************************************


// Objetos BarProp
// nos manda saber que nuestras bars estan activas o no *
// - locationbar
// - menubar 
// - scrollbars
//  - statusbar
//  - toolbar



// location window.location
// pagina de navegacion  propiedades

// const link = window.location.href; - nos permite obtener el link competo de nuestro sitio
// const hostname = window.location.hostname; - obtenemos el nombre de nuestra pagina 
// const patname = window.location.pathname; - permite saber el lugar de la URL de donde estamos navegando 
// const protocol = window.location.protocol; - nos da el protocolo que ocupa nuestro sitio 
// const assign = window.location.assign('http://127.0.0.1:5500/index.html'); - Nos permite cargar un nuevo documento desde nuestro sitio o ya  sea que se carge de nuevo el nuestro 

// document.write(`
//     Las caracteristicas del sitio son: <br>
//     <b>href:</b> ${link}, <br>
//     <b>hostname:</b> ${hostname},  <br>
//     <b>Patname:</b> ${patname},  <br>
//     <b>Protocolo:</b> ${protocol}.    
// `);


