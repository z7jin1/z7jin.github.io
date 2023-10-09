function runoob() {
    console.log('Hello World!');
}$(document).ready(()=>{
    $('#gb-ts').click(()=>{
        ('.tishi').fadeOut('slow')
    })
    setTimeout(function() {
        $('.tishi').fadeIn('slow')
    }, 777);
})
/*7Core-CN - 网页鼠标点击特效（爱心）*/
!function (e, t, a) {function r() {for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");requestAnimationFrame(r)}function n() {var t = "function" == typeof e.onclick && e.onclick;e.onclick = function (e) {t && t(), o(e)}}function o(e) {var a = t.createElement("div");a.className = "heart", s.push({el: a,x: e.clientX - 5,y: e.clientY - 5,scale: 1,alpha: 1,color: c()}), t.body.appendChild(a)}function i(e) {var a = t.createElement("style");a.type = "text/css";try {a.appendChild(t.createTextNode(e))} catch (t) {a.styleSheet.cssText = e}t.getElementsByTagName("head")[0].appendChild(a)}function c() {return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"}var s = [];e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {setTimeout(e, 1e3 / 60)}, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()}(window, document);
$(function(){
    var t = document.title ;
    var t01 = t + "*•.¸（ >‿◠）¸.•*";
    var t02 = t + "*•.¸（⊙‿⊙）¸.•*";
    var t03 = t + "*•.¸（◠▽◠）¸.•*";
    var t04 = t + "*•.¸（ ô‿ô ） ¸.•*";
    var t05 = t + "*•.¸（͡° ʖ ͡°）¸.•*";
    var t06 = t + "*•.¸（͡ Ö‿Ö ） ¸.•*";
    var t07 = t + "*•.¸（＾▽＾）¸.•*";
    var t08 = t + "*•.¸（ •◡• ）¸.•*";
    var t09 = t + "*•.¸（ ¬‿¬ ）¸.•*";
    var t10 = t + "*•.¸（◉◡◉）¸.•*";
    var t11 = t + "*•.¸（◔◡◔）¸.•*";
    var t12 = t + "*•.¸（ˇωˇ）¸.•*";
    var t13 = t + "*•.¸（ô ◡ ô）¸.•*";
    var t14 = t + "*•.¸（∩▽∩）¸.•*";
    var t15 = t + "*•.¸（⊙△⊙）¸.•*";
    var t16 = t + "*•.¸（≧▽≦）¸.•*";
    var t17 = t + "*•.¸（ ^人^ ）¸.•*";
    var t18 = t + "*•.¸（°ω°）¸.•*";
    var t19 = t + "*•.¸（ˋωˊ）¸.•*";
    var t20 = t + "*•.¸（ˋ△ˊ）¸.•*";
    var t21 = t + "*•.¸（ˇ▽ˇ）¸.•*";
    var t22 = t + "*•.¸（°ο°）¸.•*";
    var t23 = t + "*•.¸（ˇ◡ˇ）¸.•*";
    var t24 = t + "*•.¸（ ⊙ʖ⊙）¸.•*";
    var t25 = t + "*•.¸（ˉ▽ˉ）¸.•*";
    var t26 = t + "*•.¸（￣□￣）¸.•*";
    var myObj = {"title":[ t01,t02,t03,t04,t05,t06,t07,t08,t09,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26 ]}
    var x = myObj.title.length;
    var i = 0 ;
    function tit(){document.getElementsByTagName("title")[0].innerText = myObj.title[i];i++;if( i == x ){ i = 0 ;}setTimeout(function (){tit()}, 777);}
    tit()
});
/*document.write('<div style="position:fixed;left:0;bottom:0;width:400px;height:110px;padding:5px;border:1px solid #e6e6e6;border-radius:5px;background:#fff;"><a href="javascript:;" style="position:absolute;top:-32px;left:0px;background:#fff;color:#333;height:30px;line-height:30px;display:inline-block;padding:0 20px;border:1px solid #e6e6e6;border-bottom-color:#fff;border-radius:5px 5px 0 0 ;font-weight: bold;" class="closead">隐藏</a><iframe src="https://tvv.tw/images/m2.html" width="310px" height="105px" frameborder="0" scrolling="no"></iframe></div><script>$(function () {$(".closead").click(function () {var pr = $(this).parent().css("bottom").replace("px","");if (pr == "0") {$(this).html("展开");$(this).parent().animate({ "bottom": "-122px" });}else {$(this).html("隐藏");$(this).parent().animate({ "bottom": "0" });}});});</script>'); */