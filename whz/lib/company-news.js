$(function () {
    var skroll = new Skroll()
		.add(".anim4",{
			animation:"slideInLeft",
			delay:80,
			duration:800
		})
		.init();
		$(window).load(function(e){
			skroll.recalcPosition();
		})
		setInterval(function(){
			skroll.recalcPosition();
		},2000)
		// 鼠标进入向上弹起，鼠标离开回到原位，动画形式
		$('.block').mouseenter(function(){
			$(this).css('transform','translateY(-30px)');
		});
		$('.block').mouseleave(function(){
			$(this).css('transform','translateY(0px)');
		});

		//把本模块变为红色，清除其他模块红色
		var k = $('.xm-top li').children('a').removeClass('xm-top-a-sy');
		$('.xm-top-a-gs .xm-top-a-1').addClass('xm-top-a-sy');
});