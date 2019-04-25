
$('.log_right').addClass('anim7');
var skroll = new Skroll()
    .add(".header", {
        animation: "zoomIn",
        duration: 600
    })
    .add(".anim1", {
        animation: "fadeInUp",
        delay: 120,
        duration: 600,
        wait: 250
    })
    .add(".anim2", {
        animation: "flipInX",
        delay: 120,
        duration: 750
    })
    .add(".anim3", {
        animation: "rotateLeftIn",
        delay: 100,
        duration: 750
    })
    .add(".anim4", {
        animation: "slideInLeft",
        delay: 80,
        duration: 800
    })
    .add(".anim5", {
        animation: "growInLeft",
        delay: 80,
        duration: 500,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .add(".anim6", {
        animation: "growInRight",
        delay: 80,
        duration: 500,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .addAnimation("spinIn", {
        start: function (el) {
            $(el).css({
                transform: "rotate(-360deg) scale(.2,.2)",
                transformOrigin: "50% 50%",
                opacity: 0
            });
        },
        end: function (el) {
            $(el).css({
                transform: "rotate(0deg) scale(1,1)",
                opacity: 1
            })
        }
    })
    .add(".anim7", {
        animation: "spinIn",
        delay: 80,
        duration: 500,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .add(".anim8", {
        animation: "fadeInDown",
        delay: 75,
        duration: 150,
        triggerBottom: .98,
        easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    })
    .init();
$(window).load(function (e) {
    skroll.recalcPosition();
})
setInterval(function () {
    skroll.recalcPosition();
}, 2000);
$('.log_right').mouseenter(function () {
    $(this).find('img').stop().animate({
        'width' : '100%',
        'margin-left': '-50%',
        'margin-top' : '-26%'
    },300);
});
$('.log_right').mouseleave(function () {
    $(this).find('img').stop().animate({
        'width' : '80%',
        'margin-left': '-40%',
        'margin-top' : '-20%'
    },300);
    
});
$('.log_left input').mouseenter(function () {
    $(this).css({
        'cursor': 'pointer',
        'opacity': 0.5
    });
});
$('.log_left input').mouseleave(function () {
    $(this).css({
        'cursor': 'none',
        'opacity': 1
    });
});