"use strict";

const array = {
    clima : 'Lluvioso',
    zonas : 'Centro',
    poblacion: '10,000',
    pais:{
        mexico:{
            estado1:'Veracruz',
            pachuca:{
                municipio:'Pachuca soto',
                municipio2:'Tolcayuca',
                municipio3:'Tizayuca',
                municipio4:'Tecama',
            },
            estado3:'Queretaro',
            estado4:'Monterrey'
        },
        pais1:'Canada',
        pais2:'France',
        pais3:'Germany',
        pais4:'USA',
        pais5:'Paris'}
        
} 
//Object.freeze(array);
delete array.pais.mexico.pachuca.municipio4;
array.clima='CALIDO';
array.pais.mexico.pachuca.municipio1='//////////////';
array.diponibilidad ={op1:'Yes',op2:'no yes'};


// const {clima} = array;


const {pais:{mexico:{pachuca:{municipio2}}}} = array;

console.log(array);

console.log(municipio2);
