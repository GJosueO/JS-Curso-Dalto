// document.querySelector('.carousel');
// document.querySelector('.swiper-button-next');
// document.querySelector('.swiper-button-pre');
// document.querySelector('.swiper-pagination');

var Swiper = new Swiper('.carousel',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    paginaton:{
        el:'.swiper-pagination',
    },
}

)