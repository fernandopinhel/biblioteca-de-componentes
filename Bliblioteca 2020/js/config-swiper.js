//Saber mais, documentcao
// https://swiperjs.com/get-started/
// https://github.com/nolimits4web/swiper

var swiper = new Swiper('.swiper-container', {
     slidesPerView: 1,
     spaceBetween: 10,
     // init: false,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     breakpoints: {
       640: {
         slidesPerView: 1,
         spaceBetween: 20,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 40,
       },
       1024: {
         slidesPerView: 3,
         spaceBetween: 50,
       },
     }
   });
