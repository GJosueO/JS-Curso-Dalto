// const mensaje = document.querySelector('.btn-mensaje');
// mensaje.addEventListener('click', (e)=>{
//     alert();
// });
const inputColor = document.getElementById('inputColor');
const inputColorSecond = document.getElementById('inputColor-second');
const colorText = document.getElementById('nombreColor');
const textJ = document.getElementById('textColor');
var color = inputColor.value
console.log(color);

inputColor.addEventListener("input", (e)=> {
  var selectedColor = inputColor.value;
  colorText.style.color = selectedColor;
  e.stopPropagation;
  var colorD = inputColorSecond.value;
  textJ.style.color= colorD;
});
