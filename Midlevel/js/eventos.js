// Los eventos son cualquier cambio que ocurren en el sitio web "desde que el sitio web carga no carga, des de que toque el teclado, desde la primer cosa que seceda en la pagina o el primer cambio que haya"
// scroll, muevo el cursor 
// los evento son utiles cuando asignamos un codigo para el evento asociado a un elemento
// Eventhandler - manejador de eventos 
const eClick = document.querySelector('.btn-mensaje');
// Esto no es recomendable tienen muchos problemas:
// si un elemento no acepta JS o el usuario cancela dentro del sitio web 
// ya no se utiliza mas eventhandlers 
// eClick.onclick = ()=>{
//     alert('hello there!');
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// eventsListeners 
// eClick.addEventListener('click', mensaje);
// *******************************************************
// Esto no se puede hacer con funciones flecha
// const mensaje = ()=>{
    // alert('Hello there! ')
// }
// *******************************************************
// function mensaje(){
//     alert('hello there!');
//    eClick.removeEventListener('click', mensaje);
// } 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// eClick.addEventListener("click", ()=>{
//     alert('Hello there!');
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// eClick.addEventListener("click", (e)=>{
//     // manda todos  los eventos y propiedades de los eventos windows
//     // console.log(this);
//     // nos manda los eventos del elemnto
//     console.log(e);
// });

// Eventos de Mouse
// Eventos de Teclado 
// Eventos de Interfaz 