// while
// let numero = 0;
// while(numero < 10){
//     numero++;
//     document.write(numero , "<br>");
// }
// dowhile
// let numero = 0;

// do{
//     numero++;
//     document.write(numero , "<br>");
//     if(numero ==100){
//         break;
//     }
    
// }
// while(numero < 1000)

//for
// for (let i = 0; i <= 7; i++) {
    
//     if(i == 3){
//         continue;
//     }
//     document.write(i);
// }
// forin

// let persona ={nombre:'Adrian',
//             apellido:'Romero',
//             apellido_Dos:'Perez',
//             edad:34,
//             estatura:'Alto',
//             estado:'Casado',
//             hijos: 4 ,
//             sueldo:'$5000'};
// for (i in persona) {
//    document.write(i);
// }
// document.write('<br>')
// for(i of persona){
//     document.write(i)
// }
rene= ['Rene','Juana','Renecio','Monserrat'];
benardo= ['Bernardo', 'Margara','Karina','Berna','Raul'];

juana= ['Juana','Toño','Pepe','Cristina'];
demetrio= ['Demetrio','Irma','Paola','Arlet'];
celso= ['Celso','Margara','Misael','Chucho','Daniela'];
luis= ['Luis','Marcela','Jonatan','Sonia'];

gabina= ['Gabina','Rosendo','Elsa','Leonel','Lupe'];
julieta= ['Julieta','Apolinar','Josue','Sarai','David'];
gloria= [julieta,'Roman', 'Raul', rene, benardo];
micaela = ['Micaela',julieta,gabina,juana,demetrio,luis,celso];

let familia =['Domingo',micaela,'Welio',gloria];
    document.write('<h1> Abuelita Micaela</h1>')
forglobal:
for(let info in familia){
    
    if(info == 2){
        for (info of micaela){
            document.write( '<br>');
            if(info == julieta){
                for(info of julieta)
                document.write(info+' ')
                
            }
            if(info == gabina){
                for(info of gabina)
                document.write(info+' ')
               
            }
            if(info == juana){
                for(info of juana)
                document.write(info+' ')
                
            }
            if(info == demetrio){
                for(info of demetrio)
                document.write(info+' ')
            }
            if(info == luis){
                for(info of luis)
                document.write(info+' ')
            }
            if(info == celso){
                for(info of celso)
                document.write(info+' ')
                
            }
        }
        
       
    }
    
}

document.write('<br> <br>' + '<h1>Abulita Gloria</h1>');


for(info in familia){
    
    if(info == 3){
        for(info of gloria){
            document.write(info+ '<br>');
        }
    }   
}