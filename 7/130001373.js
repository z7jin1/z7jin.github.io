var style="<style>rainbow-text, rainbow-text * {background-image : linear-gradient(to left, orangered, orange, gold, lightgreen, cyan, dodgerblue, mediumpurple, hotpink, orangered);background-size : 137vw;-webkit-background-clip: text;background-clip : text;color : transparent;-webkit-animation : rainbowan 77s linear infinite;animation : rainbowan 77s linear infinite;}@-webkit-keyframes rainbowan {to {background-position: -2000vw;}}@keyframes rainbowan {to {background-position: -2000vw;}}.z7jin-demo-ad{height:37px;line-height:37px;position:fixed;left:0px;bottom:0px;width:100%;border-top:1px solid #000;font-size:14px;z-index:777;overflow:hidden;background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(7,7,7,7) 30%, rgba(77,77,77,.7) 77% );}.z7jin-demo-ad .z7jin-fl{float:left;margin-left:7px;}.z7jin-demo-ad .z7jin-fr{float:left;margin-left:21px;}.z7jin-demo-ad .z7jin-fr a{margin-left:7px;}.z7jin-demo-ad a.close-scn-ad{display:block;height:37px;width:37px;text-align:center;position:absolute;right:7px;bottom:0px;background-color:!important;}.mywth {position: absolute;left:37px;top:17px;font-size: 14px;height:21px;width:77px;line-height:21px;cursor: pointer;z-index:7777777;}</style><style>*{margin:0;padding:0}*,:after,:before{box-sizing:border-box}a{text-decoration:none;cursor:pointer;color:#fff;text-shadow:#f0f 0 1px 3px,#f0f 1px 0 3px,#f0f 0 -1px 3px,#f0f -1px 0 3px;filter:glow(color=#FF00FF,strength=3)}.elevator_item{display:block;position:fixed;top:37%;right:3%;bottom:40px;background:!important no-repeat center;z-index:777;}.elevator_item .feedback{width:37px;height:37px;font-size:14px;padding:7px 0px;display:block;border-radius:37px;text-align:center;margin-top:4px;box-shadow:0 1px 2px rgba(7,7,7,.7);cursor:pointer;}.graHover{position:relative;overflow:hidden;}</style>",
html='<!--rainbow-text--><div class="z7jin-demo-ad" id="z7jin-demo-ad"><div class="z7jin-fl"><a href="https://z7jin.github.io/">Copyright © 小້໌ᮨㅤ七҉</a></div><div class="z7jin-fr"><a href="https://z7jin.github.io/">\u9996\u9875</a><a href="https://z7jin.github.io/dy.html">影院</a><a href="https://z7jin.github.io/yy.html">音乐</a><a href="https://z7jin.github.io/xjj.html">美女</a><a href="https://z7jin.github.io/ly.html">\u7559\u8a00</a></div><a class="close-scn-ad" onclick="document.getElementById(\'z7jin-demo-ad\').style.display=\'none\';" href="javascript:void(0)">✕</a></div><!--div class="mywth"><div id="he-plugin-simple"></div> <script>WIDGET = {CONFIG:{"modules":"10234","background":5,"tmpColor":"#999","tmpSize":"14","cityColor":"#999","citySize":"14","aqiSize":"14","weatherIconSize":"20","alertIconSize":"16","padding":"0px","shadow":"0","language":"auto","borderRadius":5,"fixed":"false","vertical":"middle","horizontal":"left","key":"5b9b7d3df4e441ef9977099bb657701e"}}</script> <script src="//widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script></div></rainbow-text><div class="elevator_item"><a class="feedback graHover" href="https://z7jin.github.io">首页</a><a class="feedback graHover" href="https://z7jin.github.io/dy.html">影院</a><a class="feedback graHover" href="https://z7jin.github.io/yy.html">音乐</a><a class="feedback graHover" href="https://z7jin.github.io/xjj.html">美女</a><a class="feedback graHover" href="https://z7jin.github.io/ly.html">留言</a></div-->';
try{top.location.hostname,top.location.hostname==window.location.hostname&&top==self&&(document.writeln(style),document.writeln(html))}catch(a){document.writeln(style),document.writeln(html)};
/*function noMenuOne(){alert("\u52b3\u70e6\u60a8\u5c0a\u91cd\u4e00\u4e0b\u52b3\u52a8\u6210\u679c\uff0c\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff08\u5c0f\u3164\u4e03\u0051\u0031\u0033\u0030\u0030\u0030\u0031\u0033\u0037\u0033\uff09\uff01");return!1}document.oncontextmenu=noMenuOne;*/
((function() {
	var callbacks = [],
		timeLimit = 50,
		open = false;
	setInterval(loop, 1);
	return {
		addListener: function(fn) {
			callbacks.push(fn);
		},
		cancleListenr: function(fn) {
			callbacks = callbacks.filter(function(v) {
				return v !== fn;
			})
		}
	}
	function loop() {
		var startTime = new Date();
		debugger;
		if (new Date() - startTime > timeLimit) {
			if (!open) {
				callbacks.forEach(function(fn) {
					fn.call(null);
				})
			}
			open = true;
			window.stop();
			alert('小້໌ᮨㅤ七҉Q130001373');
		} else {
			open = false;
		}
	}
})()).addListener(function() {
	window.location.reload();
});
