var style="<style>.z7jin-demo-ad{height:33px;line-height:33px;position:fixed;left:0px;bottom:0px;width:100%;border-top:1px solid #000;font-size:14px;z-index:7777777;overflow:hidden;background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(7,7,7,7) 30%, rgba(77,77,77,.7) 77% );}.z7jin-demo-ad .z7jin-fl{float:left;margin-left:3px;}.z7jin-demo-ad .z7jin-fr{float:left;margin-left:21px;}.z7jin-demo-ad .z7jin-fr a{margin-left:3px;}.z7jin-demo-ad a.close-scn-ad{display:block;height:33px;width:33px;text-align:center;position:absolute;right:3px;bottom:0px;background-color:!important;}.mywth {position: absolute;left:33px;top:17px;font-size: 14px;height:21px;width:77px;line-height:21px;cursor: pointer;z-index:7777777;}</style><style>*{margin:0;padding:0}*,:after,:before{box-sizing:border-box}a{text-decoration:none;cursor:pointer;color:#fff;text-shadow:#f0f 0 1px 3px,#f0f 1px 0 3px,#f0f 0 -1px 3px,#f0f -1px 0 3px;filter:glow(color=#FF00FF,strength=3)}.elevator_item{display:block;position:fixed;top:37%;right:3%;bottom:40px;background:!important no-repeat center;z-index:7777777;}.elevator_item .feedback{width:33px;height:33px;font-size:14px;padding:3px 0px;display:block;border-radius:33px;text-align:center;margin-top:3px;box-shadow:0 1px 2px rgba(7,7,7,.7);cursor:pointer;}.graHover{position:relative;overflow:hidden;}</style>",
html='<div class="z7jin-demo-ad" id="z7jin-demo-ad"><div class="z7jin-fl"><a href="https://z7jin.github.io/">Copy © 小້໌ᮨㅤ七҉</a></div><div class="z7jin-fr"><a href="https://z7jin.github.io/">\u9996\u9875</a> <a class="venoboxframe" data-type="iframe" href="https://z7jin.github.io/影院">影院</a> <a class="venoboxframe" data-type="iframe" href="https://z7jin.github.io/音乐">音乐</a> <a class="venoboxframe" data-type="iframe" href="https://z7jin.github.io/视频">视频</a> <a class="venoboxframe" data-type="iframe" href="https://z7jin.github.io/图片">图片</a> <a class="venoboxframe" data-type="iframe" href="https://www3.cbox.ws/box/?boxid=3531896&boxtag=kwlzal">聊天</a></div> <a class="close-scn-ad" onclick="document.getElementById(\'z7jin-demo-ad\').style.display=\'none\';" href="javascript:void(0)">✕</a></div><div class="mywth"><div id="he-plugin-simple"></div> <script>WIDGET = {CONFIG:{"modules":"10234","background":5,"tmpColor":"#999","tmpSize":"14","cityColor":"#999","citySize":"14","aqiSize":"14","weatherIconSize":"20","alertIconSize":"16","padding":"0px","shadow":"0","language":"auto","borderRadius":5,"fixed":"false","vertical":"middle","horizontal":"left","key":"5b9b7d3df4e441ef9977099bb657701e"}}</script> <script src="//widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script></div></rainbow-text><!--div class="elevator_item"><a class="feedback graHover" href="https://z7jin.github.io">\u9996\u9875</a><a class="feedback graHover" href="https://z7jin.github.io/影院">影院</a><a class="feedback graHover" href="https://z7jin.github.io/音乐">音乐</a><a class="feedback graHover" href="https://z7jin.github.io/视频">视频</a><a class="feedback graHover" href="https://z7jin.github.io/图片">图片</a><a class="feedback graHover" href="https://z7jin.github.io/聊天">留言</a></div--><!-- 调用弹出层 --><link rel="stylesheet" href="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-ms/venobox/1.6.0/venobox.min.css" type="text/css" media="screen" /><script type="text/javascript" src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-ms/venobox/1.6.0/venobox.min.js"></script><script type="text/javascript">$(document).ready(function(){$(".venoboxframe").venobox({framewidth:"100%",frameheight:"666"})});</script>';
try{top.location.hostname,top.location.hostname==window.location.hostname&&top==self&&(document.writeln(style),document.writeln(html))}catch(a){document.writeln(style),document.writeln(html)};
window.onload=function(){document.onkeydown=function(){var e=window.event||arguments[0];return 123==e.keyCode?(alert("\u7981\u6b62\u76d7\u7528\uff01"),!1):e.ctrlKey&&e.shiftKey&&73==e.keyCode?(alert("\u7981\u6b62\u76d7\u7528\uff01"),!1):e.ctrlKey&&85==e.keyCode?(alert("\u7981\u6b62\u76d7\u7528\uff01"),!1):e.ctrlKey&&83==e.keyCode?(alert("\u7981\u6b62\u76d7\u7528\uff01"),!1):void 0},document.oncontextmenu=function(){return alert("\u7981\u6b62\u76d7\u7528\uff01"),!1}};
/*7Core-CN - 网页鼠标点击特效（爱心）*/
!function (e, t, a) {function r() {for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");requestAnimationFrame(r)}function n() {var t = "function" == typeof e.onclick && e.onclick;e.onclick = function (e) {t && t(), o(e)}}function o(e) {var a = t.createElement("div");a.className = "heart", s.push({el: a,x: e.clientX - 5,y: e.clientY - 5,scale: 1,alpha: 1,color: c()}), t.body.appendChild(a)}function i(e) {var a = t.createElement("style");a.type = "text/css";try {a.appendChild(t.createTextNode(e))} catch (t) {a.styleSheet.cssText = e}t.getElementsByTagName("head")[0].appendChild(a)}function c() {return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"}var s = [];e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {setTimeout(e, 1e3 / 60)}, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()}(window, document);
$(function(){
    var t = document.title ;
    var t01 = t + "*•.¸😻‍¸.•*";
    var t02 = t + "*•.¸😺¸.•*";
    var t03 = t + "*•.¸😸¸.•*";
    var t04 = t + "*•.¸😹¸.•*";
    var t05 = t + "*•.¸😻¸.•*";
    var t06 = t + "*•.¸😼¸.•*";
    var t07 = t + "*•.¸😽¸.•*";
    var t08 = t + "*•.¸🙀¸.•*";
    var t09 = t + "*•.¸😿¸.•*";
    var t10 = t + "*•.¸😾¸.•*";
    var t11 = t + "*•.¸🐱¸.•*";
    var myObj = {"title":[ t01,t02,t03,t04,t05,t06,t07,t08,t09,t10,t11 ]}
    var x = myObj.title.length;
    var i = 0 ;
    function tit(){document.getElementsByTagName("title")[0].innerText = myObj.title[i];i++;if( i == x ){ i = 0 ;}setTimeout(function (){tit()}, 777);}
    tit()});
