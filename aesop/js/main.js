$(document).ready(function(){
    const swiper2 = new Swiper('.event .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {    
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1000: {   
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });

});//document.ready