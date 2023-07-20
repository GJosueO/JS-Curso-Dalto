spiderMan = [ 'trepar y adherirse', 'sentido aracnido', 'gran luchador',  'vuelo reflejos y agilidad'];
ironMan = ['intelecto superior',  'cientifico e Ingeniero', 'fuerza subrehumana',  'vuelo supersonico'];
capitanAmerica = ['fuerza mejorada',  'curacion acelerada',  'curacion acelerada', 'envejecimiento retardado'];
doctorStrange = [ 'maestro de la hechiceria',  'uso de artefactos magicos',  'intelecto de genio', 'medico cirujano'];
scarletWitch = [ 'fuerza',  'magia',  'inteligencia', 'agilidad'];
blackWidow = [ 'espia',  'experta en combate',  'sistema inmune mejorado', 'tirador experto'];
deadpool = ['regeneracio y curacion',  'longevidad extendida',  'asesino maestro', 'velocidad sobrehumana'];
loki = ['telepatia',  'cambiar formas',  'volar', 'fuerza velocidad'];
thanos = ['fuerza',  'resistencia',  'tactico genio ', 'inmortal'];
blackPanther = ['Resistencia fuerza',  'agilidad',  'artes marciales mixtas', 'tactico experto'];
hulk = [ 'intelecto a nivel de genio',  'cientifico ',  'fuerza', 'resistencia'];
gamora = [ 'fuerza',  'agilidad',  'velocidad', 'asesino experto'];
starlord = [ 'resistencia',  'tactico maestro',  'tirador experto', 'experto en tecnologia alienigena'];
antMan = [ 'fuerza',  'cambio de tamaño',  'mantiene la fuerza de un humano normal', 'inteligencia'];
thor = [ 'volar',  'manipular el clima',  'manipilar la electricidad', 'fuerza rapidez'];
captainMarvel = [ 'Rapidez fuerza',  'vuelo',  'proyecion de energia', 'aguante superhumanos'];
winterSoldier = [ 'asesino y espia',  'brazo cibernetico',  'uso en armas militares', 'tirador experto'];
falcon = [ 'experto entranar aves',  'experto en combate',  'puede volar usando un traje', 'estrategia y tactico experto'];
nebula = [ 'fuerza agilidad',  'regeneracion',  'experta tactica', 'especialista de armas'];
vision = [ 'inteligencia',  'fuerza',  'regeneracion', 'control de la densidad'];


let a = prompt('Ingresa la Caracteristica 1');
let b = prompt('Ingresa la Caracteristica 2');
let c = prompt('Ingresa la Caracteristica 3');
let d = prompt('Ingresa la Caracteristica 4');
document.write(`
<h2>Las Habilidades son: </h2>
<b>1- ${a}</b><br>
<b>2- ${b}</b><br>
<b>3- ${c}</b><br>
<b>4- ${d}</b><br>
`);
// spiderMan
document.write('<h2>Puntos para SpiderMan:</h2> <p>'+ spiderMan+'</p>');
for (const key in spiderMan) {
    
    num=0;
    if(spiderMan[key].includes(a)){
        
        num++;
    }else if(spiderMan[key].includes(b)){
        num++;
    }else if(spiderMan[key].includes(c)){
        
        num++;
    }else if(spiderMan[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');

// ironMan
document.write('<h2>Puntos para IronMan:</h2> <p>'+ ironMan+'</p>');
for (const key in ironMan) {
    
    num=0;
    if(ironMan[key].includes(a)){
        
        num++;
    }else if(ironMan[key].includes(b)){
        num++;
    }else if(ironMan[key].includes(c)){
        
        num++;
    }else if(ironMan[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');

// capitanAmerica
document.write('<h2>Puntos para capitanAmerica:</h2> <p>'+capitanAmerica+'</p>');
for (const key in capitanAmerica) {
    
    num=0;
    if(capitanAmerica[key].includes(a)){
        
        num++;
    }else if(capitanAmerica[key].includes(b)){
        num++;
    }else if(capitanAmerica[key].includes(c)){
        
        num++;
    }else if(capitanAmerica[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');

// doctorStrange
document.write('<h2>Puntos para doctorStrange:</h2> <p>'+ doctorStrange+'</p>');
for (const key in doctorStrange) {
    
    num=0;
    if(doctorStrange[key].includes(a)){
        
        num++;
    }else if(doctorStrange[key].includes(b)){
        num++;
    }else if(doctorStrange[key].includes(c)){
        
        num++;
    }else if(doctorStrange[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');

// scarletWitch
document.write('<h2>Puntos para scarletWitch:</h2> <p>'+ scarletWitch+'</p>');
for (const key in scarletWitch) {
    
    num=0;
    if(scarletWitch[key].includes(a)){
        
        num++;
    }else if(scarletWitch[key].includes(b)){
        num++;
    }else if(scarletWitch[key].includes(c)){
        
        num++;
    }else if(scarletWitch[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');

// blackPanther

document.write('<h2>Puntos para blackPanther:</h2> <p>'+ blackPanther+'</p>');
for (const key in blackPanther) {
    
    num=0;
    if(blackPanther[key].includes(a)){
        
        num++;
    }else if(blackPanther[key].includes(b)){
        num++;
    }else if(blackPanther[key].includes(c)){
        
        num++;
    }else if(blackPanther[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// deadpool

document.write('<h2>Puntos para deadpool:</h2> <p>'+ deadpool+'</p>');
for (const key in deadpool) {
    
    num=0;
    if(deadpool[key].includes(a)){
        
        num++;
    }else if(deadpool[key].includes(b)){
        num++;
    }else if(deadpool[key].includes(c)){
        
        num++;
    }else if(deadpool[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// loki

document.write('<h2>Puntos para loki:</h2> <p>'+ loki+'</p>');
for (const key in loki) {
    
    num=0;
    if(loki[key].includes(a)){
        
        num++;
    }else if(loki[key].includes(b)){
        num++;
    }else if(loki[key].includes(c)){
        
        num++;
    }else if(loki[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// thanos

document.write('<h2>Puntos para thanos:</h2> <p>'+ thanos+'</p>');
for (const key in thanos) {
    
    num=0;
    if(thanos[key].includes(a)){
        
        num++;
    }else if(thanos[key].includes(b)){
        num++;
    }else if(thanos[key].includes(c)){
        
        num++;
    }else if(thanos[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// blackPanther

document.write('<h2>Puntos para blackPanther:</h2> <p>'+ blackPanther+'</p>');
for (const key in blackPanther) {
    
    num=0;
    if(blackPanther[key].includes(a)){
        
        num++;
    }else if(blackPanther[key].includes(b)){
        num++;
    }else if(blackPanther[key].includes(c)){
        
        num++;
    }else if(blackPanther[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// hulk

document.write('<h2>Puntos para hulk:</h2> <p>'+ hulk+'</p>');
for (const key in hulk) {
    
    num=0;
    if(hulk[key].includes(a)){
        
        num++;
    }else if(hulk[key].includes(b)){
        num++;
    }else if(hulk[key].includes(c)){
        
        num++;
    }else if(hulk[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// gamora

document.write('<h2>Puntos para gamora:</h2> <p>'+ gamora+'</p>');
for (const key in gamora) {
    
    num=0;
    if(gamora[key].includes(a)){
        
        num++;
    }else if(gamora[key].includes(b)){
        num++;
    }else if(gamora[key].includes(c)){
        
        num++;
    }else if(gamora[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// starlord

document.write('<h2>Puntos para starlord:</h2> <p>'+ starlord+'</p>');
for (const key in starlord) {
    
    num=0;
    if(starlord[key].includes(a)){
        
        num++;
    }else if(starlord[key].includes(b)){
        num++;
    }else if(starlord[key].includes(c)){
        
        num++;
    }else if(starlord[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// antMan

document.write('<h2>Puntos para antMan:</h2> <p>'+ antMan+'</p>');
for (const key in antMan) {
    
    num=0;
    if(antMan[key].includes(a)){
        
        num++;
    }else if(antMan[key].includes(b)){
        num++;
    }else if(antMan[key].includes(c)){
        
        num++;
    }else if(antMan[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// thor

document.write('<h2>Puntos para thor:</h2> <p>'+ thor+'</p>');
for (const key in thor) {
    
    num=0;
    if(thor[key].includes(a)){
        
        num++;
    }else if(thor[key].includes(b)){
        num++;
    }else if(thor[key].includes(c)){
        
        num++;
    }else if(thor[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// captainMarvel

document.write('<h2>Puntos para capitanAmerica  (Mujer):</h2> <p>'+ capitanAmerica+'</p>');
for (const key in capitanAmerica) {
    
    num=0;
    if(captainMarvel[key].includes(a)){
        
        num++;
    }else if(captainMarvel[key].includes(b)){
        num++;
    }else if(captainMarvel[key].includes(c)){
        
        num++;
    }else if(captainMarvel[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// winterSoldier

document.write('<h2>Puntos para winterSoldier:</h2> <p>'+ winterSoldier+'</p>');
for (const key in winterSoldier) {
    
    num=0;
    if(winterSoldier[key].includes(a)){
        
        num++;
    }else if(winterSoldier[key].includes(b)){
        num++;
    }else if(winterSoldier[key].includes(c)){
        
        num++;
    }else if(winterSoldier[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// falcon

document.write('<h2>Puntos para falcon:</h2> <p>'+ falcon+'</p>');
for (const key in falcon) {
    
    num=0;
    if(falcon[key].includes(a)){
        
        num++;
    }else if(falcon[key].includes(b)){
        num++;
    }else if(falcon[key].includes(c)){
        
        num++;
    }else if(falcon[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// nebula

document.write('<h2>Puntos para nebula:</h2> <p>'+ nebula+'</p>');
for (const key in nebula) {
    
    num=0;
    if(nebula[key].includes(a)){
        
        num++;
    }else if(nebula[key].includes(b)){
        num++;
    }else if(nebula[key].includes(c)){
        
        num++;
    }else if(nebula[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
// vision

document.write('<h2>Puntos para vision:</h2> <p>'+ vision+'</p>');
for (const key in vision) {
    
    num=0;
    if(vision[key].includes(a)){
        
        num++;
    }else if(vision[key].includes(b)){
        num++;
    }else if(vision[key].includes(c)){
        
        num++;
    }else if(vision[key].includes(d)){
        
        num++;
        
    }
    document.write(key+' Concidencia: '+ num+' <br>');
}
document.write('<br></br>');
