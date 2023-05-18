$(document).ready(function(){
    const swiper_w_site = new Swiper('.w_site .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            360: {  /* 640px 이상이 되면 적용 */
                slidesPerView: 1,
                spaceBetween: 20, 
            },
            640: {  /* 640px 이상이 되면 적용 */
                slidesPerView: 2,
                spaceBetween: 30, 
            },
            1000: {  /* 640px 이상이 되면 적용 */
            slidesPerView: 3,
            spaceBetween: 40, 
            },
           
        },
    });

    const swiper_design = new Swiper('.designs .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            
            640: {  /* 640px 이상이 되면 적용 */
                slidesPerView: 2,
                spaceBetween: 30, 
            },
            1000: {  /* 640px 이상이 되면 적용 */
            slidesPerView: 3,
            spaceBetween: 40, 
            },
           
        },
    });
    

});//document.ready