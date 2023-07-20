// evento click - activa cuando damos click 
var input = document.querySelector('.click')
input.addEventListener('click', (e)=>{
    alert('Click');
    e.stopPropagation();
});

var input = document.querySelector('.dbclick')
input.addEventListener('dblclick', (e)=>{
    alert('dblClick');
    e.stopPropagation();
});
var input = document.querySelector('.mouseOver')
input.addEventListener('mouseover', (e)=>{
    alert('MouseOver');
    e.stopPropagation();
});
var input = document.querySelector('.mouseOut')
input.addEventListener('mouseout', (e)=>{
    alert('mouseOut');
    e.stopPropagation();
});
var input = document.querySelector('.mouseEnter')
input.addEventListener('mouseenter', (e)=>{
    alert('mouseEnter');
    e.stopPropagation();
});
var input = document.querySelector('.mouseLeave')
input.addEventListener('mouseleave', (e)=>{
    alert('mouseLeave');
    e.stopPropagation();
});
var input = document.querySelector('.mouseMove')
input.addEventListener('mousemove', (e)=>{
    alert('mouseMove');
    console.log(e);
    e.stopPropagation();
});