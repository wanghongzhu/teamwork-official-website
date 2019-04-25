$(function (){
    var swiper = new Swiper('.swiper-container1', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true, // 循环模式选项
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        },
    });
    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true, // 循环模式选项
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        },
    });
});