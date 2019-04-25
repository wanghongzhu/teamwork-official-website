var index = 0;
$('.job_tab li').click(function () {
    $(this).css('background','#e7615e').siblings().css('background','none');
    index = $(this).index();
    $('.tab_content div').eq(index).css('display','block').siblings().css('display','none');
});

