//从ftp下载jquery-3.2.1.js
//在m.html中，在<script src="m.js"之前,先用script引入jquery-3.2.1.js
//在m.js中编写程序
//查找: 
//查找左眼下的黑眼球，保存在变量$eye_l_b中备用
var $eye_l_b=$(".eye_l>.eye_b");
                   //下的
var currX_l=$eye_l_b.offset().left+20;
var currY=$eye_l_b.offset().top+20;

var DIST=22.5;//黄
var LEFT=22,TOP=24;
//查找右眼下的黑眼球，保存在变量$eye_r_b中备用
var $eye_r_b=$(".eye_r>.eye_b");
var currX_r=$eye_r_b.offset().left+20;

//当鼠标在网页中移动时执行:
$(document).mousemove(function(e){
  move(currX_l,$eye_l_b,e);
  move(currX_r,$eye_r_b,e);
});
function move(currX,$eye_b,e){
  var offsetX=currX-e.clientX;
  var offsetY=currY-e.clientY;
  var rate=DIST/
    Math.sqrt(offsetX*offsetX+offsetY*offsetY);
  var top=offsetY*rate;
  var left=offsetX*rate;
  $eye_b.css("top",TOP-top);
  $eye_b.css("left",LEFT-left);
}




/*
//修改样式: 
//将左眼下的黑眼球的背景色改为红色
$eye_l_b.css("background","red");
//将右眼下的黑眼球的背景色改为绿色
$eye_r_b.css("background","green");
//为元素绑定事件处理函数:
//当单击.mbody时，执行任务: alert("好痒！！！");
$(".mbody").click(function(){
  alert("好痒！！！");
})
*/