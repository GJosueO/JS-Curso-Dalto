class leusemia {
    constructor (sintoma1, sintoma2,sintoma3, sintoma4,sintoma5){
        this.sintoma1 = sintoma1;
        this.sintoma2 = sintoma2;
        this.sintoma3 = sintoma3;
        this.sintoma4 = sintoma4;
        this.sintoma5 = sintoma5;
        this.infor = `Los sintomas de Leusemia son: <br> ${sintoma1}  <br> ${sintoma2} <br> ${sintoma3} <br>${sintoma4} <br>${sintoma5}`
    }

    info =()=>{
        document.write(this.infor);
        
    }


}
class cancerPiel {
    constructor (sintoma1, sintoma2,sintoma3, sintoma4,sintoma5){
        this.sintoma1 = sintoma1;
        this.sintoma2 = sintoma2;
        this.sintoma3 = sintoma3;
        this.sintoma4 = sintoma4;
        this.sintoma5 = sintoma5;
        this.infor = `Los sintomas de Cancer de Piel son: <br> ${sintoma1}  <br> ${sintoma2} <br> ${sintoma3} <br>${sintoma4} <br>${sintoma5}`
    }

    info =()=>{
        document.write(this.infor);
        
    }
    

}

const persona1 = new leusemia('Fiebre', 'fatiga','infecciones','perdida de peso','sangrado nasal');
const persona2 = new cancerPiel('carcinoma de celulas escamosas', 'carcinoma de celulas basales','Bulto ceroso','Ulcera con costra','Lesion Plana');

if(persona1.includes('fiebre')){
    persona1.info();

}

// persona2.info();


// const marvel={
//     spiderMan:{  habilidad1:'trepar y adherirse',habilidad2:'sentido aracnido',habilidad3:'gran luchador',habilidad4:'reflejos y agilidad'},
//     ironMan:{  habilidad1:'intelecto superior',habilidad2:'cientifico e Ingeniero',habilidad3:'fuerza subrehumana',habilidad4:'vuelo supersonico'},
//     capitanAmerica:{  habilidad1:'fuerza mejorada',habilidad2:'curacion acelerada',habilidad3:'curacion acelerada',habilidad4:'envejecimiento retardado'},
//     doctorStrange:{  habilidad1:'maestro de la hechiceria',habilidad2:'uso de artefactos magicos',habilidad3:'intelecto de genio',habilidad4:'medico cirujano'},
//     scarletWitch:{  habilidad1:'fuerza',habilidad2:'magia',habilidad3:'inteligencia',habilidad4:'agilidad'},
//     blackWidow:{  habilidad1:'espia',habilidad2:'experta en combate',habilidad3:'sistema inmune mejorado',habilidad4:'tirador experto'},
//     deadpool:{  habilidad1:'regeneracio y curacion',habilidad2:'longevidad extendida',habilidad3:'asesino maestro',habilidad4:'velocidad sobrehumana'},
//     loki:{  habilidad1:'telepatia',habilidad2:'cambiar formas',habilidad3:'volar',habilidad4:'fuerza velocidad'},
//     thanos:{  habilidad1:'fuerza',habilidad2:'resistencia',habilidad3:'tactico genio ',habilidad4:'inmortal'},
//     blackPanther:{  habilidad1:'Resistencia fuerza',habilidad2:'agilidad',habilidad3:'artes marciales mixtas',habilidad4:'tactico experto'},
//     hulk:{  habilidad1:'intelecto a nivel de genio',habilidad2:'cientifico ',habilidad3:'fuerza',habilidad4:'resistencia'},
//     gamora:{  habilidad1:'fuerza',habilidad2:'agilidad',habilidad3:'velocidad',habilidad4:'asesino experto'},
//     starlord:{  habilidad1:'resistencia',habilidad2:'tactico maestro',habilidad3:'tirador experto',habilidad4:'experto en tecnologia alienigena'},
//     antMan:{  habilidad1:'fuerza',habilidad2:'cambio de tamaño',habilidad3:'mantiene la fuerza de un humano normal',habilidad4:'inteligencia'},
//     thor:{  habilidad1:'volar',habilidad2:'manipular el clima',habilidad3:'manipilar la electricidad',habilidad4:'fuerza rapidez'},
//     captainMarvel:{  habilidad1:'Rapidez fuerza',habilidad2:'vuelo',habilidad3:'proyecion de energia',habilidad4:'aguante superhumanos'},
//     winterSoldier:{  habilidad1:'asesino y espia',habilidad2:'brazo cibernetico',habilidad3:'uso en armas militares',habilidad4:'tirador experto'},
//     falcon:{  habilidad1:'experto entranar aves',habilidad2:'experto en combate',habilidad3:'puede volar usando un traje',habilidad4:'estrategia y tactico experto'},
//     nebula:{  habilidad1:'fuerza agilidad',habilidad2:'regeneracion',habilidad3:'experta tactica',habilidad4:'especialista de armas'},
//     vision:{  habilidad1:'inteligencia',habilidad2:'fuerza',habilidad3:'regeneracion',habilidad4:'control de la densidad'},

// }