document.write('Codigo ejecutado en consola ');
console.warn('%Esto es una Advertencia salga de este sitio.');
console.error('Segundo  Aviso');
console.error('Compilando codigo . . .');
// crea grupos 
console.groupCollapsed('table, assets');
console.table([2,3,124,3,324,54,56,5,7,657,657,3]);
console.assert(2<1);
// fin de grupo 
console.groupEnd();
console.group();
// nombre de nuestro contador
console.count('numero'); 
console.count();
console.count();
console.count();
console.count();
// resetea numero
console.countReset();
console.count();
console.count();

console.groupEnd();

// inicia el cronometro y nos avisa cuanto tardo la ejecucion
console.time();
console.timeLog();
console.timeEnd();


// estilos en la consola

console.log("%c QUEEEEEEEEEEEEEE ","color:red");
console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');

