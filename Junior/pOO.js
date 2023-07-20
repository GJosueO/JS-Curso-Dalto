// Propiedades y metodos en objetos
// Programar objetos
// clases - plantilla para crear objetos
// Metodo cosas que hace el objeto los metodos se crean dentro de la clase
// constuctor es una funcion obligatoria
// Cuando inicializamos y teminamos se dice qeu una clase esta instanciada



// class animal{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy  ${this.especie} tengo ${this.edad} años y soy de color ${color}`


//     }
    // metodo acciones que va hacer el objeto
    // si creamos la funcion dentro de la clase se le dice metodo
    // ajemplo
//////////////////////////////////////////////////
// const saludar =()=>{
//     alert ("saludar");
// }
// //////////////////////////////////////////////////    
//  verInfo(){
//     document.write (this.info)
//  }
// }

// si creamos la funcion fuera de la clase se le dice funcion
// ejemplo;
////////////////////////////////////////////////////////
// const saludar =()=>{
//     alert ("saludar");
// }
///////////////////////////////////////////////////////



// let perro = new animal("Perro", 5 , 'negro');
// let pajaro = new animal("Canario", 10, 'Amarillo');
// let caballo = new animal('Caballo', 8, 'Blanco');
// let conejo = new animal('Conejo', 1, 'Blanco');

// document.write(perro.info);
// document.write(pajaro.info);
// document.write(caballo.info);
// document.write(conejo.info);


// perro.verInfo();
// pajaro.verInfo();
// caballo.verInfo();
// conejo.verInfo();

//Caracteristicas de la POO


// COMPRAR UN CELULAR Y VERIFICAR SI PRENDE O NO

// class InfoPhone{
//     constructor(modelo, tamano, color, camara, ram, marca){
//         this.modelo =  modelo;
//         this.tamano = tamano;
//         this.color = color;
//         this.camara = camara;   
//         this.ram = ram;
//         this.marca = marca;
//          this.botonI = true;
//     }
//     // botonEncender(){
//     //     if (this.botonI == true){
//     //         document.write(' celular Encendido <br>');
//     //         this.botonI = false;

//     //     } 
//     // }
//     // botonApagar(){
//     //     if (this.botonI == false){
//     //         document.write('No sirve ');
//     //         this.botonI = true;
//     //     }
//     // }
//     getInfo(){
//         return `
//             Modelo: ${this.modelo}<br>
//             tamano: ${this.tamano} <br>
//             Color: ${this.color} <br>
//             camara: ${this.camara}<br>
//             ram: ${this.ram}<br>
//             Marca: ${this.marca}<br>
//         `
//     }
// }
// class infoNphone  extends InfoPhone{
//     constructor( modelo, tamano,color, camara, ram, marca, precio, velocidad){
//         super(modelo,tamano, color, camara, ram,marca);
//         this.precio = precio;
//         this.velocidad = velocidad;
    
//     }
//     obNueva(){
//         return this.getInfo() + `
        
//         Precio: ${this.precio}
//         Velocidad: ${this.velocidad}
//         `
//     }
// }
// let infoPhone1 = new infoNphone('Galaxi', '1800px x 30px','negro','full hd','1t','Samsung','20,000','rapido');
// let infoPhone2 = new infoNphone('Iphone', '1800px x 30px','blanco',' hd','1t','Samsung','30,000','lento');





// // infoPhone1.botonEncender();


// document.write(infoPhone1.obNueva() + infoPhone2.obNueva());

//  class Robot{
//     constructor(action, carac, color, tamano, tecnology, alone, activo ){
//          this.action = action;
//          this.carac = carac;
//          this.color = color;
//          this.tamano = tamano;
//          this.tecnology = tecnology;
//          this.alone = alone;
//          this.activo = activo;

//     }
//     Info(){
//         return `
//         Action: <b>${this.action}</b><br>
//         Caracteristicas:  <b>${this.carac}</b><br>
//         Color:  <b>${this.color}</b><br>
//         Tamaño: <b>${this.tamano}</b><br>
//         Tecnology: <b>${this.tecnology}</b><br>
//         Tipo: <b>${this.alone}</b> <br>
//         Estado:  <b>${this.activo}</b> <br>
//         `;
//     }
//  }
//   class RobotNtipo extends Robot{
//     constructor(action, carac, color, tamano, tecnology, alone, activo, autor, empresa){
//         super(action, carac, color, tamano, tecnology, alone, activo)
//         this.autor = autor;
//         this.empresa = empresa;

//     }
//     InfoN(){
//         return this.Info() +`
//         Autor: <b>${this.autor}</b>
//         Empresa:<b>${this.empresa}</b>
        
//         ` 
//     }
//     set celular(nuevo){
//         this.nuevo = nuevo;
//     }
//   }

// const robot1 = new RobotNtipo('Nadar', ' Velocidad','negro','grande','python','Autonomo',true,'Josue','Google');
// const robot2 = new RobotNtipo('Actions', ' Velocidad, fuerza','negro / Blanco','grande','python','Autonomo MultiTask',false,'Willy','Amazon');

//  document.write(robot1.InfoN(), robot2.InfoN()) ;


class Cosas {
    constructor(nombre, descripcion,costo){
        this.nombre = nombre;
        this.descripcion=  descripcion;
        this.costo = costo;
    }
    info(){
        return `
        Nombre: <b>${this.nombre}</b> <br>
        Descripcion: <b>${this.descripcion}</b> <br>
        Costo; <b>${this.costo}</b> <br>
        <br>
        
        
        `;
    }
    set modificar(nombre){
        this.nombre =nombre;
    }
    get getObtener(){
        return this.descripcion;
    }
}


const objeto1 = new Cosas('Borrador','Para pizarra', 20);
const objeto2 = new Cosas('Libreta','Cuadro Chico', 21);
const objeto3 = new Cosas('Libro historia','V. Universidad', 2000);
const objeto4 = new Cosas('Mochila','Hombre', 1000);
const objeto5 = new Cosas('Audifonos','Aiepods', 2500);
const objeto6 = new Cosas('Desodorante','Stefano Hombre', 70);
const objeto7 = new Cosas('Cargador','Tipo c', 300);
const objeto8= new Cosas('Pilas','Recargables', 200);
const objeto9 = new Cosas('Pegatinas','Notes', 15);
const objeto10 = new Cosas('Memoria USB','1T', 300);

objeto1.modificar = "Pizarra De 6 Metros x 5 Metros";


document.write('<h1>Almacen:</h1>'+
    objeto1.info()+
    objeto2.info()+
    objeto3.info()+
    objeto4.info()+
    objeto5.info()+
    objeto6.info()+
    objeto7.info()+
    objeto8.info()+
    objeto9.info()+
    objeto10.info()
);
document.write(objeto6.getObtener);


