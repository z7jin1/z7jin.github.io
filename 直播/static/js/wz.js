$(function(){
 $.backstretch(["/Bt/bg/44.jpg","/Bt/bg/55.jpg","/Bt/bg/66.jpg","/Bt/bg/77.jpg","/Bt/bg/88.jpg","/Bt/bg/99.jpg"],
 {fade:1000,duration:60000}); //背景，切换现实
});

function DHwz(){//设置导航栏菜单颜色
str=window.location.href;
var wz = str.split("/");
var zz = wz[3];
if(!$.trim(zz)){ 
cf.style.backgroundColor="rgba(255,28,147,.3)";
}else{
document.getElementById(zz).style.backgroundColor="rgba(8,250,8,.2)";
}
};
DHwz()

$(function(){
 var start_height = $(document).scrollTop();
 var nav_height = $('.nav').outerHeight();
 $(window).scroll(function(){
 var end_height = $(document).scrollTop();
 if (end_height > nav_height){
 $('.nav').addClass('hide');
 }else {
 $('.nav').removeClass('hide');
 }
 if (end_height < start_height){
 $('.nav').removeClass('hide');
 }
 start_height = $(document).scrollTop();
});
}); //设置导航栏上拉显示下拉隐藏

$(document).ready(function(){
 $("#LByx").click(function(){
 $(".LBn").toggle();
});
});//列表隐显
//setTimeout(function(){ $(".LBn").fadeOut(888);},60000);//设置列表一分钟隐藏

function wzgd(){
      var hzf = document.title;
      var yzf = hzf.charAt(0);
      var szf = hzf.substr(1);
      document.title = szf + yzf;
  }
  wzgd();
setInterval(wzgd,500);//title文字滚动