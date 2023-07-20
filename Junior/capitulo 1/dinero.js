nombre1 = 'Cofla';
nombre2 = 'Roberto';
nombre3 = 'Pedro';

    dinero1 = prompt('Ingrese Dinero: '+ nombre1);
    dinero2 = prompt('Ingrese Dinero: '+ nombre2);
    dinero3 = prompt('Ingrese Dinero: '+ nombre3);
// cofla
    if(dinero1 >= 5 && dinero1 < 10 ){
    document.write('Comprate un Paletito de helado de agua ',nombre1);
}else if(dinero1 >= 10 && dinero1 <16 ){
    document.write('Comprate un Heladito de Crema',nombre1);
}else if(dinero1 >=16 && dinero1 <27){
    document.write('Comprate un Helado de Bombon marca Heladix',nombre1);
}else if(dinero1 >=27 && dinero1 <30){
    document.write('Comprate un elado de bombon maca Heladovich',nombre1);
}else if(dinero1 >=30 && dinero1 <=35){
    document.write('Comprate un Helado de marca helardo',nombre1);
}else if(dinero1 >35){
    compra1 = dinero1 / 35;
   cambio1 = dinero1 % 35;
    document.write(nombre1,`Te puedes comprar: ${compra1} helados de 1/4 kg y tu cambio es: ${cambio1}`)
}else if( dinero1 < 5){
    document.write(nombre1,'No te alcanza para nada pobreton');

}else if(!dinero1 ){
    document.write(nombre1,'No ingrasate nada, Intenta de nuevo gracias');
}
// Roberotooo
if(dinero2 >= 5 && dinero2 < 10 ){
    document.write('Comprate un Paletito de helado de agua ',nombre2);
}else if(dinero2 >= 10 && dinero2 <16 ){
    document.write('Comprate un Heladito de Crema',nombre2);
}else if(dinero2 >=16 && dinero2 <27){
    document.write('Comprate un Helado de Bombon marca Heladix',nombre2);
}else if(dinero2 >=27 && dinero2 <30){
    document.write('Comprate un elado de bombon maca Heladovich',nombre2);
}else if(dinero2 >=30 && dinero2 <=35){
    document.write('Comprate un Helado de marca helardo',nombre2);
}else if(dinero2 >35){
    compra2 = dinero2 / 35;
   cambio2 = dinero2 % 35;
    document.write(nombre2,`Te puedes comprar: ${compra2} helados de 1/4 kg y tu cambio es: ${cambio2}`)
}else if( dinero2 < 5){
    document.write(nombre2,'No te alcanza para nada pobreton');

}else if(!dinero ){
    document.write(nombre2,'No ingrasate nada, Intenta de nuevo gracias');
}

// pedro
if(dinero3 >= 5 && dinero3 < 10 ){
    document.write('Comprate un Paletito de helado de agua ',nombre3);
}else if(dinero3 >= 10 && dinero3 <16 ){
    document.write('Comprate un Heladito de Crema',nombre3);
}else if(diner3 >=16 && dinero3 <27){
    document.write('Comprate un Helado de Bombon marca Heladix',nombre3);
}else if(dinero3 >=27 && diner3 <30){
    document.write('Comprate un elado de bombon maca Heladovich',nombre3);
}else if(dinero3 >=30 && dinero3 <=35){
    document.write('Comprate un Helado de marca helardo',nombre3);
}else if(dinero >35){
    compra3 = dinero3 / 35;
   cambio3 = dinero3 % 35;
    document.write(nombre3,`Te puedes comprar: ${compra3} helados de 1/4 kg y tu cambio es: ${cambio3}`)
}else if( dinero3 < 5){
    document.write(nombre3,'No te alcanza para nada pobreton');

}else if(!dinero3 ){
    document.write(nombre3,'No ingrasate nada, Intenta de nuevo gracias');
}