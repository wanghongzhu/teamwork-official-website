
$('.case').mouseenter(function () {
    $(this).css('background','#e7615e');
        $('#first').stop().animate({
            'left': '10%'
        },300);
});
$('.case').mouseleave(function () {
    $(this).css('background','');
    $('#first').stop().animate({
        'left':'0'
    },300);
});
$('.case2').mouseenter(function () {
    $(this).css('background','#e7615e');
        $('#second').stop().animate({
            'left': '10%'
        },300);
});
$('.case2').mouseleave(function () {
    $(this).css('background','');
    $('#second').stop().animate({
        'left':'0'
    },300);
});
