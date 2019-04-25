$('.xm-top .xm-top-a-gs').mouseenter(function (){
  $('.xm-top .xm-top-div-1').css('display','block');
});
$('.xm-top .xm-top-a-gs').mouseleave(function (){
  $('.xm-top .xm-top-div-1').css('display','none');
});
$('.xm-top .xm-top-a-fw').mouseenter(function (){
  $('.xm-top .xm-top-div-2').css('display','block');
});
$('.xm-top .xm-top-a-fw').mouseleave(function (){
  $('.xm-top .xm-top-div-2').css('display','none');
});
$(window).scroll(function (){
  if ($(window).scrollTop() >= 300){
    $('.xm-top-hui').css('display','block');
  } else {
    $('.xm-top-hui').css('display','none');
  }
});
$('.xm-top-hui').click(function (){
  $(window).scrollTop(0);
});
$('.xm-top-min > .fr').click(function (){
  $('.xm-top-min > .fr > a > i:nth-child(1)').toggleClass('xm-top-shang');
  $('.xm-top-min > .fr > a > i:nth-child(2)').toggleClass('xm-top-xia');
  if ($('.xm-top-min > .fr > a > i:nth-child(1)').hasClass('xm-top-shang')){
    $('.xm-top-min-1').stop().slideDown(500);
  } else {
    $('.xm-top-min-1').stop().slideUp(500);
    $('.xm-top-min-ul-1').prev().find('span').removeClass('xm-top-min-1-right-1').end().end().stop().slideUp(500);
    $('.xm-top-min-ul-2').prev().find('span').removeClass('xm-top-min-1-right-1').end().end().stop().slideUp(500);
  };
});
$('.xm-top-min-gs').click(function (){
  $(this).find('span').toggleClass('xm-top-min-1-right-1');
  if ($(this).find('span').hasClass('xm-top-min-1-right-1')){
    $('.xm-top-min-ul-1').stop().slideDown(500);
    $('.xm-top-min-ul-2').prev().find('span').removeClass('xm-top-min-1-right-1').end().end().stop().slideUp(500);
  } else {
    $('.xm-top-min-ul-1').stop().slideUp(500);
  }
});
$('.xm-top-min-fw').click(function (){
  $(this).find('span').toggleClass('xm-top-min-1-right-1');
  if ($(this).find('span').hasClass('xm-top-min-1-right-1')){
    $('.xm-top-min-ul-2').stop().slideDown(500);
    $('.xm-top-min-ul-1').prev().find('span').removeClass('xm-top-min-1-right-1').end().end().stop().slideUp(500);
  } else {
    $('.xm-top-min-ul-2').stop().slideUp(500);
  }
});