// For in and of y review

let informacion = ['Laptop','procesador intel core 5i', '10,000','64bits','pantalla hd',' tamaño 1800px x 750px'];
// datos va a ser igual a la informacion de nuestro array
//for in muestra el indice de toda nuestra informacion del array
let array ={
    marca: 'Lamborgin',
    colores:{ color1: 'Amarillo',color2:'Negro',color3:'Verde'},
    velocidad:'200k/h',
    puertas:4

}

for(datos in informacion){
    
    console.log(datos,'  ');
}
console.log('<hr>')
for(datos of informacion){
    console.log(datos,'  ')
}
document.write('<hr>')
// for of nos nuestra la informacion completa de nuestro array
const {colores:{color1,color2,color3} }= array;
const { velocidad}= array;

console.log(color1,', ',color2,', ',color3,' ', velocidad,)

console.log('<br>')
let dato = 'Josuefd sdfs a   saf';
console.log(dato.length + '<br>');
console.log(dato.replace('s', ':)'))
console.log('<br>');


for (let l=1; l<=100; l++){
    if(l==1){
        console.log('JG');
        break}
    console.log(l);

    
    
}




class animal{
    constructor(tipo, nhuesos, color,tamano){
        this.tipo = tipo;
        this.nhuesos = nhuesos;
        this.color = color;
        this.tamano = tamano;
    }
    setInfo(){
        document.write(
            this.tipo,this.nhuesos,this.color,this.tamano
            );
        }
        static sonido(){
            document.write('Woooou ', false);
        }
}

let perro = new animal('Carnivoro, ','200, ','negro, ','15m, ');
perro.setInfo();
animal.sonido();

