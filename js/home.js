// 背景部分
for (var i = 0, len = $('.star').length; i < len; i++){
  var $width = 2 + Math.random() * 3;
  var $moveLeft = 1 + Math.random() * 98 + '%';
  var $moveTop = 1 + Math.random() * 98 + '%';
  var $opacity = 0.1 + Math.random() * 0.7;
  $('.star').eq(i).css({'width':$width,'height':$width});
  $('.star').eq(i).css({'left':$moveLeft,'top':$moveTop});
  $('.star').eq(i).css('opacity',Math.random());
}

window.setInterval(function (){
  for (var i = 0, len = $('.star').length; i < len; i++){
    $('.star').eq(i).animate({'opacity':Math.random()},1000);
  }
},1000);

window.setInterval(function (){
  var $moveLeft = 1 + Math.random() * 98 + '%';
  var $moveTop = 1 + Math.random() * 98 + '%';
  var $moveDiv = 1 + Math.random() * 119;
  $('.star').eq(parseInt($moveDiv)).animate({'left':$moveLeft,'top':$moveTop},1000);
},2000);

var $downX,$downY;
var $moveLeft1,$moveTop1;
var $moveLeft2,$moveTop2;
var $moveLeft3,$moveTop3;
$(document).mouseenter(function (e){
  $downX = e.clientX;
  $downY = e.clientY;
  $moveLeft1 = 0;
  $moveTop1 = 0;
  $moveLeft2 = 0;
  $moveTop2 = 0;
  $moveLeft3 = 0;
  $moveTop3 = 0;
});

$(document).mousemove(function (e){
  var $moveX = e.clientX;
  var $moveY = e.clientY;
  if ($moveX > $downX){
    $moveLeft1 -= 0.5;
    $moveLeft2 -= 0.8;
    $moveLeft3 -= 1.2;
  } else if ($moveX < $downX){
    $moveLeft1 += 0.5;
    $moveLeft2 += 0.8;
    $moveLeft3 += 1.2;
  }
  if ($moveY > $downY){
    $moveTop1 -= 0.5;
    $moveTop2 -= 0.8;
    $moveTop3 -= 1.2;
  } else if ($moveY < $downY){
    $moveTop1 += 0.5;
    $moveTop2 += 0.8;
    $moveTop3 += 1.2;
  }
  $('.div-1') .css('transform',`translate(${$moveLeft1}px, ${$moveTop1}px)`);
  $('.div-2') .css('transform',`translate(${$moveLeft2}px, ${$moveTop2}px)`);
  $('.div-3') .css('transform',`translate(${$moveLeft3}px, ${$moveTop3}px)`);
  $downX = $moveX;
  $downY = $moveY;
});



// 主页内容部分
$('.xm-home-div-4 img').mouseenter
