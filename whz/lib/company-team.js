$(function (){
    var swiper = new Swiper('.swiper-container1', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true, // 循环模式选项
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        grabCursor:true,//开启抓手
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
        delay: 2000,
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
        grabCursor:true,//开启抓手
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        },
    });
    //把本模块变为红色，清除其他模块红色
	var k = $('.xm-top li').children('a').removeClass('xm-top-a-sy');
	$('.xm-top-a-gs .xm-top-a-1').addClass('xm-top-a-sy');
});