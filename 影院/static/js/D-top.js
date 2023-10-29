function post(url,To) {
 var Pt = document.createElement("form"); //创建form表单
 Pt.action = url;
 Pt.method = "post";
 Pt.target = "_top";//设置跳出框架
 Pt.style.display = "none";//表单样式为隐藏
 for (var Tem in To) {//初始化表单内部的控件
  var opt =document.createElement("input");  //添加input标签
  opt.type="text";   //类型为text
  opt.id = Tem;   //设置id属性
  opt.name = Tem; //设置name属性
  opt.value = To[Tem];   //设置value属性
  Pt.appendChild(opt);
 }
 document.body.appendChild(Pt);
 Pt.submit();
 return Pt;
}//post跳转
$(function(){
$(window).scroll(function(){
if($(window).scrollTop()>188){
$('#D-top').fadeIn(888);
}else{
 $('#D-top').fadeOut(888);
}});
$('#D-top').click(function(){
location.reload(true);
$('html,body').animate({scrollTop:0},88);
return false;
});
});//返回定部
document.addEventListener("error", function (e) {
 var elem = e.target;
 if (elem.tagName.toLowerCase() == 'img') {
 elem.src = "/Bt/bg/5.jpg";
}},true);//图片加载失败替换为默认图片