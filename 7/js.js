//跨域获取父URL
function getParentUrl() { 
    var url = null;
    if (parent !== window) { 
        try {
           url = parent.location.href; 
        }catch (e) { 
           url = document.referrer; 
        } 
     }
     return url;
}
// check UA
ua = navigator.userAgent.toLowerCase(),
    check = function (r) {
        return r.test(ua);
    },
    DOC = document,
    isStrict = DOC.compatMode === "CSS1Compat",
    isOpera = check(/opera/),
    isChrome = check(/\bchrome\b/),
    isWebKit = check(/webkit/),
    isSafari = !isChrome && check(/safari/),
    isSafapori2 = isSafari && check(/applewebkit\/4/),
    isSafari3 = isSafari && check(/version\/3/),
    isSafari4 = isSafari && check(/version\/4/),
    isIE6 = !-[1, ] && !window.XMLHttpRequest,
    isIE7 = check(/msie 7/),
    isIE8 = check(/msie 8/),
    isIE678 = isIE6 || isIE7 || isIE8,
    isIE11 = check(/trident/) && check(/rv:11.0/),
    isIE = check(/msie/) || isIE11,
    isEdge = check(/edge/),
    isGecko = !isWebKit && check(/gecko/),
    isGecko2 = isGecko && check(/rv:1\.8/),
    isGecko3 = isGecko && check(/rv:1\.9/),
    isBorderBox = isIE && !isStrict,
    isWindows = check(/windows|win32/),
    isMac = check(/macintosh|mac os x/),
    isAir = check(/adobeair/),
    isLinux = check(/linux/),
    isIphone = check(/iphone/),
    isIpod = check(/ipod/),
    isIpad = isSafari && !isIphone && !isIpod && 'ontouchend' in document,
    isIos = isIphone || isIpad || isIpod || isSafari,
    isAndroid = check(/android/),
    isSymbian = check(/symbianos/),
    isWindowsphone = check(/windows phone/),
    isWechat = check(/micromessenger/),
    isMobile = check(/iphone|ipad|ipod|android|micromessenger|windows phone|symbianos/) || isIpad,
    isDesktop = check(/windows|win32|macintosh|mac os x|adobeair|linux/),
    isHttps = /^https/i.test(window.location.protocol),
    isKuaizhan = check(/kznativenav/),
    isHtml5Plus = check(/html5plus/),
	isMiniprogram = check(/miniprogram/),
	isApp = isHtml5Plus || isMiniprogram,
    inFrame = (self!=top);
if (isMobile) $("body").addClass("isMobile");
if (!isMobile) $("body").addClass("isDesktop");
if (isWechat) $("body").addClass("isWechat swipeLeft");
if (isIE) $("body").addClass("isIE");
if (isHtml5Plus) $("body").addClass("isHtml5Plus");
if (self!=top){
	$("body").addClass("inframe");
	$("body").append('<a class="openwindow desktop" href="'+ location.href +'" target="_blank"></a>');
	 if(getParentUrl().indexOf(location.host) != -1){
		 $("body").addClass("sameframe");
		 }else{
			 $("body").addClass("crossframe");
			 }
}

var myDate = new Date();
var year = myDate.getYear(); //获取当前年份(2位)
var year = myDate.getFullYear(); //获取完整的年份(4位,1970)
var month = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
var day = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
var hour = myDate.getHours(); //获取当前小时数(0-23)
var minute = myDate.getMinutes(); //获取当前分钟数(0-59)
var second = myDate.getSeconds(); //获取当前秒数(0-59)
var millisecond = myDate.getMilliseconds(); //获取当前毫秒数(0-999)

//图片url检测
isimageUrl = function(url){
    if(!/\//.test(url))return false;
    return /.jpg$|.jpeg$|.gif$|.png$|.bmp$|.pic$/.test(url.toLowerCase());
}

////stackoverflow.com/questions/1462649/jquery-memory-leak-with-dom-removal
$.fn.removeWithoutLeaking = function () {
    this.each(function (i, e) {
        if (e.parentNode)
            e.parentNode.removeChild(e);
    });
};

//页签状态
function isHidden() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return document.hidden;
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'Hidden') in document)
            return eval('document.' + prefixes[i] + 'Hidden');
    }
    // otherwise it's not supported
    return null;
}

// 去除微信默认参数
if (/from=[^&$?]{1,}(&|$)/.test(location.search) || /isappinstalled=[^&$?]{1,}(&|$)/.test(location.search)) {
  var newSearch = location.search.replace(/from=[^&$?]{1,}(&|$)/, '').replace(/isappinstalled=[^&$?]{1,}(&|$)/, '').replace(/&$|\?$/, '');
  var newUrl = location.origin + location.pathname + newSearch + location.hash;
  location.replace(newUrl);
}

//SS7点击量
function hits(siteId,channelId,contentId){
  $.ajax({
    type: "POST",
    url: "//www.mvcat.com/api/stl/actions/hits",
    contentType: "application/json",
    data: JSON.stringify({
	  "siteId": siteId,
	  "channelId": channelId,
	  "contentId": contentId,
	  "autoIncrease": true
}),
    dataType: "json",
    success: function (result) { console.log('hits:' + result.value)  }
  });
};

//通用数据
var otitle = document.title;
var ourl = location.href;
if(imageurl == "")imageurl = "https://www.mvcat.com/img/logo_1024.jpg";
if(!/\/\//.test(imageurl))imageurl = location.protocol + "//" + location.host + imageurl;
var oshareData = {
    title: $("meta[property='og:title']").attr("content") || document.title.split(" · ")[0],
    desc: $("meta[property='og:description']").attr("content") || $("meta[name='Description']").attr("content") || channelname + " · MVCAT" || "WWW.MVCAT.COM", //这里请特别注意是要去除html 
    link: ourl,
    imgUrl: imageurl || $("meta[property='og:image']").attr("content") || "https://www.mvcat.com/img/logo_1024.jpg",
    type: "link"
};

oshareData.imgUrl = "https://api.mvcat.com/image/resize/?w=200&url=" + oshareData.imgUrl;

var shareData = oshareData;

var themecolor = rgb2hex($("body").css("color")) || "#000";
var othemecolor = themecolor;
var counter = 0;
var jumptip = "将跳转第三方网站，可能会有广告！";

//updateShareData
function updateWxShareData(data){
	
	if(!/\/\//.test(data.imgUrl))data.imgUrl = "https:"+data.imgUrl;
	//data.imgUrl = data.imgUrl.replace("https","http");
	if(!/\/\//.test(data.link))data.link = "https:"+data.link;
	
	try{
		
	wx.updateAppMessageShareData(data);
    wx.updateTimelineShareData(data);
	
		if(inFrame && getParentUrl().indexOf(location.host) != -1){
			window.top.wx.updateAppMessageShareData(data);
			window.top.wx.updateTimelineShareData(data);
			if(isMiniprogram){
				if(imageurl == "")data.imgUrl = "";
				window.top.wx.miniProgram.postMessage({data:data});
			}
		}
		if(isMiniprogram){
			if(imageurl == "")data.imgUrl = "";
			wx.miniProgram.postMessage({data:data});
		}
		
	}catch(err){}
}
updateWxShareData(oshareData);
//end updateShareData

//清除hash
try {
    //history.replaceState("", document.title, window.location.pathname);
} catch (e) {
   // window.location.hash = "";
}

var refresh="close";
window.onunload = function(){
   if(refresh=="refresh"){
      //alert('刷新');
   }
}
window.onbeforeunload = function(){
   refresh="refresh";
}


//转rgb
colorToRgb = function (color) {
    var div = document.createElement('div');
    div.style.backgroundColor = color;
    document.body.appendChild(div);
    var c = window.getComputedStyle(div).backgroundColor;
    document.body.removeChild(div);
    return c;
};

//textcolor
function autoTextColor(color) {
    var rgb = colorToRgb(color);
    var RgbValueArry = rgb.replace("rgb(", "").replace(")", "").split(",");
    var $grayLevel = RgbValueArry[0] * 0.299 + RgbValueArry[1] * 0.587 + RgbValueArry[2] * 0.114;
    if ($grayLevel >= 192) {
        return "#333";
    } else {
        return "#fff";
    }
}



//下载文件
function downFile(url) {
    var $eleForm = $("<form method='get'></form>");
    $eleForm.attr("action", url);
    $(document.body).append($eleForm);
    $eleForm.submit();
}
	
// download count
$("body").on("click",".downloadcount",function () {
	$.ajax({
		url: "/sitefiles/services/cms/utils.aspx?type=Download&publishmentSystemID=" + siteid + "&channelID=" + channelid + '&contentID=' + contentid + "&fileurl=/"
	});
})

//in app
if (isKuaizhan) {
	$("body").addClass("inframe inapp");
}

//ios iframe fix
if(inFrame && isIos && isSafari)$("html,body").css({"height":"100%","overflow-y":"auto"});

// 复制
var copyed="";function copy(value){if(copyed==value)return;var currentFocus=document.activeElement;let textarea=document.createElement('textarea');textarea.style.position='fixed';textarea.style.left=0;textarea.style.top=0;textarea.value=value;textarea.style.height=0;textarea.style.opacity=0;textarea.readOnly=true;document.body.appendChild(textarea);let scrollY=window.scrollY;textarea.focus();textarea.setSelectionRange(0,textarea.value.length);var res=document.execCommand('copy',false,null);currentFocus.focus();document.body.removeChild(textarea);window.scrollTo(0,scrollY);return res}

//复制网址
function copyurl(href){
	if(!/\/\//.test(href))href = "http:" + href;
	copy(href);
	jsalert("<p>> 网址已复制 <</p><p>打开浏览器 > 粘贴 < 访问！</p>",10000);
	return;
}
function wxopentip(){
	$("body").append('<div class="popmask wxopentip" style="text-align:right;color:#c0c0c0;background:rgba(0, 0, 0, 0.75);padding-right:1em;" onclick="$(\'.wxopentip\').hide();"><span style="font-size:6em;" class="shake shake-constant shake-slow">&#xe6d8;</span><br>自带浏览器打开&emsp;</div>');
	return;
}

//cookies

function getCookieDomain() {
 var host = location.hostname;
 var ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
 if (ip.test(host) === true || host === 'localhost') return host;
 var regex = /([^]*).*/;
 var match = host.match(regex);
 if (typeof match !== "undefined" && null !== match) host = match[1];
 if (typeof host !== "undefined" && null !== host) {
  var strAry = host.split(".");
  if (strAry.length > 1) {
   host = strAry[strAry.length - 2] + "." + strAry[strAry.length - 1];
  }
 }
 return '.' + host;
}

function saveCookie(name, value, days, domain)
//写cookies函数
{
	var exp = new Date();
	exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
	var domain = domain || getCookieDomain();
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=" + domain + ";path=/";

}

function getCookie(name)
//取cookies函数        
{
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr !== null) {
		return unescape(arr[2]);
	} else {
		return null;
	}
}

function delCookie(name, domain)
//删除cookie
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	var domain = domain || getCookieDomain();
	if (cval !== null) {
		document.cookie = name + "=" + escape(cval) + ";expires=" + exp.toGMTString() + ";domain=" + domain + ";path=/";
	}

}

//rgb2hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!rgb) return;

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

//计算颜色值的反色，colorStr格式为：rgb(0,0,0),#000000或者#f00
function reversalColor(colorStr) {
    var sixNumReg = /^#(\d{2})(\d{2})(\d{2})$/ig;
    var threeNumReg = /^#(\d{1})(\d{1})(\d{1})$/ig;
    var rgbReg = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/ig;
    var c1 = 0,
        c2 = 0,
        c3 = 0;
    var parseHexToInt = function (hex) {
        return parseInt(hex, 16);
    };
    var parseIntToHex = function (int) {
        return int.toString(16);
    };
    this.parse = function () {
        if (sixNumReg.test(colorStr)) {
            sixNumReg.exec(colorStr);
            c1 = parseHexToInt(RegExp.$1);
            c2 = parseHexToInt(RegExp.$2);
            c3 = parseHexToInt(RegExp.$3);
        } else if (threeNumReg.test(colorStr)) {
            threeNumReg.exec(colorStr);
            c1 = parseHexToInt(RegExp.$1 + RegExp.$1);
            c2 = parseHexToInt(RegExp.$2 + RegExp.$2);
            c3 = parseHexToInt(RegExp.$3 + RegExp.$3);
        } else if (rgbReg.test(colorStr)) {
            //rgb color 直接就是十进制，不用转换
            rgbReg.exec(colorStr);
            c1 = RegExp.$1;
            c2 = RegExp.$2;
            c3 = RegExp.$3;
        } else {
            throw new Error("Error color string format. eg.[rgb(0,0,0),#000000,#f00]");
        }
        c1 = parseIntToHex(255 - c1);
        c2 = parseIntToHex(255 - c2);
        c3 = parseIntToHex(255 - c3);
        return '#' + (c1 < 10 ? '0' + c1 : c1) + (c2 < 10 ? '0' + c2 : c2) + (c3 < 10 ? '0' + c3 : c3);
    };
}

//反色
function oppositeColor(a) {
    a = a.replace('#', '');
    var c16, c10, max16 = 15,
        b = [];
    for (var i = 0; i < a.length; i++) {
        c16 = parseInt(a.charAt(i), 16); //  to 16进制
        c10 = parseInt(max16 - c16, 10); // 10进制计算
        b.push(c10.toString(16)); // to 16进制
    }
    return '#' + b.join('');
}


//震动
function startVibrate(duration) {
    if (isMobile && navigator.vibrate) {
        window.navigator.vibrate(duration);
    }
}

var vibrateInterval;

//在给定的持续时间和间隔时开始持续的振动
//假定一个数字值
function startPeristentVibrate(duration, interval) {
    if (navigator.vibrate) {
        vibrateInterval = setInterval(function () {
            startVibrate(duration);
        }, interval);
    }
}

// 停止震动
function stopVibrate() {
    // 清除间隔和停止持续振动
    if (vibrateInterval) clearInterval(vibrateInterval);
    startVibrate(0);
}

//提示jsalert
var jsalertTimer;
function jsalert(txt, time, mode) {
	if(!txt)return;
	if($("#jsalert").length ==0)$("body").append('<div id="jsalert" class="jsalert none"></div>');
	var e = $("#jsalert");
	e.removeClass("top bottom warning");
	if(mode)e.addClass(mode);
	e.html(txt);
	e.css("margin-bottom",-e.outerHeight()/2 + "px");
	var t = time || 1500;
	e.stop(true,true).slideUp(100,function(){e.slideDown(300);});
	clearTimeout(jsalertTimer);
	jsalertTimer = setTimeout(function () {e.slideUp(1000);}, t);
	startVibrate(30);
	if (window.speechSynthesis){
		speechSynthesis.cancel();
		if (getCookie("playtone") == "on")speechSynthesis.speak(new window.SpeechSynthesisUtterance(txt));
	}
	e.click(function(){e.slideUp(300);})
}

//jsalertObject
function jsalertObject(tips, obj) {
	var description = "";
	for (var i in obj) {
		var property = obj[i];

		description += i + " = " + property + "\n";
	}
	jsalert(tips + "\r\n" + description,15000);
}

//获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);return null;
}

//url转化
function str2num(str) {
        if (str == "") return;
        var num_out = "";
        var str_in = escape(str);
        for (i = 0; i < str_in.length; i++) {
            num_out += str_in.charCodeAt(i) - 23;
        }
        return "mvcat:" + num_out;
}

//showleft
    if($("#left").length>0){
    $("body").append('<div class="showleft"></div>');
    $(".showleft").click(function () {
            if ($(".swipeLeft,.swipeRight").length > 0) {
                $("body").toggleClass("swipeLeft swipeRight");
            } else if ($(".swipeLeft,.swipeRight").length == 0 && $("body").width() < 767) {
                $("body").addClass("swipeRight");
            } else {
                $("body").addClass("swipeLeft");
            }
            startVibrate(30);
            //sidebar cookie
            //if($("body").hasClass("swipeRight")){saveCookie("sidebar","on");}else{saveCookie("sidebar","off");};
            //模拟window resize
            $(window).trigger("resize");
        }) //end click
    }//end showleft
    
//右侧工具栏
$("body").append('<div id="ftool"></div>');

//左侧开关
$("#left").append('<div id="lcontrol" class="submenu"></div>');

//tabmode
var tabmode = true;

$("#lcontrol").append('<input type="checkbox" checked="checked" id="tabmode" class="checkbox-ios tabmode"><label class="tabmode tooltip" for="tabmode" onclick="if(tabmode){tabmode=false;jsalert(\'关闭折叠模式\', 3000);saveCookie(\'tabmode\',\'off\');}else{tabmode=true;jsalert(\'开启折叠模式\', 3000);saveCookie(\'tabmode\',\'on\');};"></label>');

if(getCookie("tabmode") == "off"){
	tabmode = false;
    $("#tabmode").prop("checked", false)
}

//qrmode
var qrmode = false;

if(!isMobile)$("#lcontrol").append('<input type="checkbox" id="qrmode" class="checkbox-ios qrmode"><label class="qrmode tooltip" for="qrmode" onclick="if(qrmode){qrmode=false;jsalert(\'关闭扫码功能\', 3000);saveCookie(\'qrmode\',\'off\');}else{qrmode=true;jsalert(\'开启扫码功能\', 3000);saveCookie(\'qrmode\',\'on\');};"></label>');

if(getCookie("qrmode") == "on"){
	qrmode = true;
    $("#qrmode").prop("checked", true)
}

//themecolor
    if(!isIE)$("#lcontrol").append('<input type="checkbox" id="themecolor" class="checkbox-ios themecolor desktop"><label class="themecolor tooltip" for="themecolor" onclick="themecolorer()"></label>');
	
function themecolorer(){
	if (!$("#themecolor").prop("checked")) {
		pickcolor(changeTheme);
		if(!isMobile)jsalert("移动鼠标选色",15000,"top");
	}else{
		changeTheme(null);
	}
}



//squareposter
var squareposter = false;
    $("#lcontrol").append('<input type="checkbox" id="squareposter" class="checkbox-ios squareposter desktop"><label class="squareposter tooltip" for="squareposter" onclick="if(squareposter){squareposter=false;$(\'body\').removeClass(\'squareposter\');saveCookie(\'squareposter\',\'off\');jsalert(\'圆角模式\', 3000);}else{squareposter=true;$(\'body\').addClass(\'squareposter\');saveCookie(\'squareposter\',\'on\');jsalert(\'直角模式\', 3000);};"></label>');
if (getCookie("squareposter") == "on") {
    squareposter = true;
    $("body").addClass("squareposter");
    $("#squareposter").prop("checked", true);
}

//playtone
var playtone = false;
if (!isMobile)
    $("#lcontrol").append('<input type="checkbox" id="playtone" class="checkbox-ios playtone desktop"><label class="playtone tooltip" for="playtone" onclick="if(playtone){playtone=false;saveCookie(\'playtone\',\'off\');jsalert(\'关闭提示音效\', 3000);}else{playtone=true;playTone();saveCookie(\'playtone\',\'on\');jsalert(\'开启提示音效\', 3000);};"></label>');
if (getCookie("playtone") == "on") {
    playtone = true;
    playTone();
    $("#playtone").prop("checked", true)
}

//eyecare
$("#lcontrol").append('<input type="checkbox" id="eyecare" class="checkbox-ios eyecare"><label class="eyecare tooltip" title2="快捷键 E" for="eyecare" onclick="if(eyecare){eyecarer(\'off\');saveCookie(\'eyecare\',\'off\');}else{eyecarer(\'on\');saveCookie(\'eyecare\',\'on\');};return false;"></label>');
//eyecare
var eyecare = false;
function eyecarer(trigger){
    if(trigger=="on"){
        eyecare = true;
        $("#eyecare").prop("checked", true);
		$("body").addClass("bgmask eyecare");
        $(window).trigger("resize");
		//jsalert("护眼模式已开启",3000);
    }else{
		changeColor(getCookie("themecolor"));
        eyecare = false;
        $("#eyecare").prop("checked", false);
		$("body").removeClass("bgmask eyecare");
        $(window).trigger("resize");
		//jsalert("护眼模式已关闭",3000);
    }
}


//fullscreen
if(!isHtml5Plus)$("#lcontrol").append('<input type="checkbox" id="fullscreen" class="checkbox-ios fullscreen desktop"><label class="fullscreen tooltip" title2="快捷键 F" for="fullscreen" onclick="if(fullscreen){exitFullScreen()}else{fullScreen()};return false;"></label>');


//播放按钮
function playbutton(e) {
    e.each(function () {
        if ($(this).find(".play").length > 0) return;
        if ($(this).is(".poster[data-video-title]")) {
            $(this).append('<a href="//www.baidu.com/s?wd=' + $(this).attr('data-video-title') + '" class="play" target="_blank"></a>');
            return;
        } else if ($(this).is(".poster[data-video]")) {
            if (/购票/.test($(this).attr("data-video"))) {
                $(this).append('<a href="' + $(this).attr("data-video") + '" class="play ticket"></a>');
            } else if (/http/.test($(this).attr("data-video")) && !/163.com|.mp3/.test($(this).attr("data-video"))) {
                $(this).append('<a href="' + $(this).attr("data-video") + '" class="play"></a>');
            } else {
                $(this).append('<span class="play link"></a>');
            }
        }
    })
}


//playbutton($(".poster[data-video],.poster[data-video-title]"));


//视频播放器
function loadVideo(e, url, poster, autoplay) {
        if (/.mp4$/.test(url)) {
            e.prepend('<div class="media grayscale"><video ' + autoplay + ' controls preload="none" width="100%" height="100%" poster="' + poster + '" x-webkit-airplay="true"><source src="' + url + '" type="video/mp4" /></video></div>');
        }else if(/.m3u8$/.test(url)){
			e.prepend('<link href="/css/video-js.css?v202007280956" rel="stylesheet"><div class="media grayscale"><video id="video-js" class="video-js vjs-big-play-centered" controls preload="none" width="100%" height="100%" poster="' + poster + '" playsinline webkit-playsinline x-webkit-airplay="true"><source id="source" src="'+ url +'" type="application/x-mpegURL"></video></div>');
			$.getScript("/js/video-js.min.js?v202007280907",function(){
				$.getScript("/js/videojs-contrib-hls.min.js",function(){
				    videojs('video-js', {
							bigPlayButton: true,
							textTrackDisplay: false,
							posterImage: true,
							errorDisplay: true
						},function(){
							//this.play();
						})
			});
			});
		}
} //end loadVideo


//名称过滤
function titleformat(word){
	if (word == "")return true;
	var word = word.toLowerCase();
	if (/《/.test(word) && /》/.test(word)) {
		word = word.split("《")[1].split("》")[0];
	}else if (word.split(" ")[0] == "") {
		word = word.split(" ")[1].replace(/[^\u4e00-\u9fa5]/g,"");
	}else {
		word = word.split("(")[0].split("（")[0].split(" ")[0].replace(/[^\u4e00-\u9fa5]/g,"");
	}
	if (word == "")return true;
	return word;
}


//内容搜索
function moviefinder(e) {

        if ($("body.content.movies,body.content.movie,body.content.history,body.content.wiki").length == 0) return; //限定内容页

        //h3
        e.find("h3").each(function () {
			var word = titleformat(this.innerText);
			this.outerHTML = '<h3 class="insearch"><a style="display:block;border:none;" href="/search/?type=Title&word=' + word + '">'+ this.innerText +'</a><input id="submit" type="submit" value=" " onClick="insearch(\'' + word + '\',\'Title\')" /></h3>';
		})
        //em
        e.find("em").each(function () {
            var word = titleformat(this.innerText);
            if (word == title || $(this).parents(":header").length > 0)return true;
            this.innerHTML = '<a class="link hide" href="/search/?type=Title&word=' + word + '" onmouseover = "$(this).removeClass(\'hide\')" style="white-space: nowrap">' + this.innerText + '</a>';
        })

    } //end moviefinder

moviefinder($("#content"));


//内容搜索
function bookfinder(e) {
		
		function sbook(word){
			return '<a style="display:inline-block;border:none;" href="javascript:jdcoupon(\'' + word + '\')">&#xe628;</a> <a style="display:inline-block;border:none;" href="//baike.baidu.com/item/' + word + '">&#xe75b;</a> <a style="display:inline-block;border:none;" href="//search.bilibili.com/all?keyword=' + word + '">&#xe60a;</a> <a style="display:inline-block;border:none;" href="//m.douban.com/search/?type=book&query=' + word + '">&#xe654;</a> <a style="display:inline-block;border:none;" href="//www.zhihu.com/search?q=' + word + '">&#xe69a;</a> <a style="display:inline-block;border:none;" href="//zh.wikipedia.org/wiki/' + word + '">&#xe688;</a> <a style="display:inline-block;border:none;" href="https://www.baidu.com/s?wd=' + word + ' epub">&#xe8f1;</a>'
		}

        //h3
        e.find("h3").each(function () {
			var word = titleformat(this.innerText);
			this.outerHTML = '<h3 class="insearch" style="position: relative;border-bottom: 1px solid;" onmouseover = "$(this).find(\'span\').css(\'right\',\'0\');$(this).find(\'span a\').css(\'color\',\'var(--txtcolor)\');" onmouseout="$(this).find(\'span\').css(\'right\',\'-100%\')" onclick2="jdcoupon(\'' + word + '\');" ondblclick="window.open(\'//baike.baidu.com/item/' + word + '\');">' + this.innerText + '<span style="position: absolute; right: -100%; display: inline-block; background: var(--themecolor); transition-duration: 0.5s; border-radius: 14px 0px 0px; padding-left: 5px;">&nbsp;' + sbook(word) + '&nbsp;</span></h3>';
		})
			
        //em
        e.find("em").each(function () {
            var word = titleformat(this.innerText);
            if (word == title || $(this).parents(":header").length > 0)return true;
            this.innerHTML = '<div style="display: inline-block;border-bottom: 1px dashed;cursor: pointer;" onmouseover = "$(this).find(\'span\').css(\'width\',\'auto\');$(this).find(\'a\').css(\'color\',\'var(--txtcolor)\')" onmouseout="$(this).find(\'span\').css(\'width\',\'0\')">' + this.innerText + '<span style="position: absolute; display: inline-block; width: 0px; overflow: hidden; white-space: nowrap; vertical-align: middle; background: var(--themecolor); border-radius: 14px;">&nbsp;' + sbook(word) + '&nbsp;</span></div>';
        })

    } //end bookfinder

	if(/books/.test(location.href)){
		bookfinder($("#content"));
		checkmovieurl(videourl);
	}



function movielite(){
	if($(".moviefinder").length>0){
		if(!freemode){
			$('#content .ipage>*').not('.moviefinder').hide();
			$('#content').on('mouseenter','.moviefinder',function(){$('#content .ipage>*').not('.moviefinder').hide();$(this).nextUntil('.moviefinder').slideDown(0);});
			$('body').addClass('movielite');
			}else{
				$('#content .ipage>*').show();
				$('body').removeClass('movielite');
			}
		}
	}

var freemode = true;
//$("#lcontrol").append('<input type="checkbox" id="freemode" class="checkbox-ios freemode"><label class="freemode tooltip" for="freemode" onclick="if(freemode){freemode=false;jsalert(\'<p><自律模式><\/p>隐藏非必看电影<br \/>精简显示内容<br \/>无广告\', 10000);saveCookie(\'freemode\',\'off\');$(\'body\').addClass(\'selfmode\');}else{freemode=true;jsalert(\'<p>>自由模式<<\/p>网站内容不受限制\', 3000);saveCookie(\'freemode\',\'on\');$(\'body\').removeClass(\'selfmode\');};movielite();"></label>');
//if (getCookie("freemode") == "off") {//自律模式
//    freemode = false;
//    $("#freemode").prop("checked", true);
//	$("body").addClass("selfmode");
//	movielite();
//	//if(!inFrame)jsalert("<p><自律模式><\/p>主动求索 拒绝推送",5000);
//}

//mvcaturl
function mvcaturl(url) {
	if(!url)return;
	
	if(/public.163.com/.test(url)){ //https://public.163.com/#/wap/media/video/VJAUBGIQ8/%E8%A5%BF%E7%BA%BF%E6%97%A0%E6%88%98%E4%BA%8B
		return url + "#player";
	}
	
	var url = decodeURI(url).split("#")[0];
	var ourl = url;
    var p = url.split("?")[1] || "";//参数保留
    if (p) p = "&" + p;
	
	if(/ixigua.com|bilibili.com\/video|youku.com\/v_show|v.qq.com\/x/.test(url)){ //(混剪|剪辑|解说|解析|片段|欣赏|短片|纪录/.test(url) || /短片|解说|混剪|片段|人物|预告|书|导/.test(channelname)
        if (url.indexOf("ixigua.com") != -1) { //https://www.ixigua.com/7159571143820345870?logTag=fe09749199d1c859dcf7
            var vid = url.split("ixigua.com/")[1].split("?")[0];
            url = "//www.ixigua.com/iframe/" + vid + "?autoplay=0";
        } else if (url.indexOf("youku.com/v_show/id_") != -1) { //v.youku.com/v_show/id_XMzcyOTcxODE5Ng==.html
            var vid = url.split("id_")[1].split(".")[0];
            url = "//player.youku.com/embed/" + vid;
        } else if (url.indexOf("v.qq.com/x/page/") != -1) { //v.qq.com/x/page/p0726u76bif.html
            var vid = url.split("v.qq.com/x/page/")[1].split(".")[0];
            url = "//v.qq.com/iframe/player.html?vid=" + vid;
		} else if (url.indexOf("v.qq.com/x/cover/") != -1) { //v.qq.com/x/cover/mzc002007knmh3g/i0045u918s5.html
            var vid = url.split("v.qq.com/x/cover/")[1].split("/")[1].split(".")[0];
            url = "//v.qq.com/iframe/player.html?vid=" + vid;
		} else if (url.indexOf("bilibili.com/video/av") != -1) { //www.bilibili.com/video/av27123788/
            var vid = url.split("bilibili.com/video/av")[1].split("/")[0].split("#")[0].split("?")[0];
            url = "//api.mvcat.com/bilibili/player.php?aid=" + vid;
        } else if (url.indexOf("bilibili.com/video/") != -1) { //www.bilibili.com/video/BV1gk4y1R7Pi
            var vid = url.split("bilibili.com/video/")[1].split("/")[0].split("#")[0].split("?")[0];
            url = "//api.mvcat.com/bilibili/player.php?bvid=" + vid;
        }
		url = url + p + "#player";
     }

        return url;
		
}//end mvcaturl

function Base64() {

    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }

    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function rawurlencode(str) {
    var base64 = new Base64();
    var str = str;
    str = base64.encode(str);
    str = str.split('/').join('_').split('+').join('-');
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
}


//滚动还原
var popScroll = (function (className) {  
    var scrollTop;  
    return {  
        afterOpen: function () {  
            scrollTop = $(document).scrollTop();  
            $('body').addClass(className);  
            document.body.style.top = -scrollTop + 'px';  
        },  
        beforeClose: function () {  
            $('body').removeClass(className);  
            $(document).scrollTop(scrollTop); 
        }  
    };  
})('popmaskon');


function popIframe(src,target) {
	
		$("#infscr-loading,.jsalert,#tooltip").remove();
		$("body").removeClass("loading");
		
		var src = decodeURI(src);
		
		if(target == "_blank" && !tabmode){
			window.open(src);
			return;
		}
		
		 if (isimageUrl(src)) {
			popImg(src);
			return;
		}
		
		if( !/#player|.m3u8$|.mp4$/.test(mvcaturl(src)) ){
			
			if(src.indexOf(location.host) == -1 && src.indexOf("//") != -1){
				var outlink = "/outlink/?target=" + encodeURIComponent(src);
				if(inFrame && isMobile){
					location.href = outlink;
				}else{
					window.open(outlink);
				}
				return;
			}
			
			if (!tabmode || isIos || (isHttps && /^http:/.test(src))) {
				top.location.href = src;
				return;
			}
		}

        if ($("#popIframe").length == 0) $("body").append('<div class="popmask popIframe loading2" id="popIframe"><iframe name="popIframe" frameborder="0" allowfullscreen="true" allowtransparency="true"></iframe><a class="closemask" id="closemask"></a></div>');
		
		//if (src.toLowerCase().indexOf(location.host) == -1 && /v.youku.com|tudou.com|www.iqiyi.com|v.qq.com|letv.com|le.com|mgtv.com|pptv.com|sohu.com|acfun.cn|acfun.tv|bilibili.com\/bangumi|tv.cctv.com|m1905.com|v.yinyuetai.com|www.56.com|vlook.cn|v.ku6.com|miaopai.com|weibo.com|v.17173.com|v.ifeng.com|meipai.com|weishi.com|.m3u8$|.mp4$|#vip/.test(src.toLowerCase()))$("#popIframe").append('<div id="magic" target="popIframe" onmouseup="$(\'#popIframe iframe\').attr(\'src\', \'/player/?url=' + src + '\');$(this).remove();" style="display: block!important;"></div>');
		
        try{popScroll.afterOpen();}catch(err){}//防止滚动
		
        if(/\/home\/|\/login\//.test(src.toLowerCase()))$(".popIframe,body").addClass("pophome");
		
		//sandbox
		if(/#player/.test(mvcaturl(src)) && author != "MVCAT")$("#popIframe iframe").attr("sandbox","allow-top-navigation allow-same-origin allow-forms allow-scripts");
		
		if(/bvid=/.test(mvcaturl(src))){
			
			var bvid = mvcaturl(src).split("bvid=")[1].split("#")[0].split("?p=")[0];
			
			function getpage(){
				$.ajax({
				type:"GET",
				url:"//api.mvcat.com/bilibili/pagelist.php?bvid=" + bvid, 
				dataType:"json",
				success:function(data) {
					console.log(data);
					
					if(data.code != 0 || data.data.length <= 1){
						$("#popIframe iframe").attr("src", mvcaturl(src)).on("load",function () {$("#popIframe").removeClass("loading");});
						return;
					}
					
					data = data.data;
					
					$("#popIframe iframe").before('<div id="选集" style="color:var(--txtcolor);padding: 0.75em;margin: 0;max-height: 4.5em;overflow: auto"><span style="display: inline-block;padding-right: 0.5em;">选集：</span></div>');
					
					for(var i=0;i < data.length;i++){
						$("#popIframe #选集").append('<a style="color:var(--txtcolor);display: inline-block;padding-right: 0.5em;opacity: 0.5;" class="nopop" href="#P'+ data[i].part +'" onclick="$(\'#popIframe iframe\').attr(\'src\',\'//api.mvcat.com/bilibili/player.php?bvid='+ bvid +'&p='+ (i+1) +'&autoplay=1\');$(this).addClass(\'current icon play\').siblings().removeClass(\'current icon play\');">'+ data[i].part +'</a>');
					}
					$("#popIframe").css("background","#000");
					$("#popIframe iframe").css("height",$("#popIframe").innerHeight() - $("#popIframe #选集").outerHeight());
			
					var n = src.split("#")[0].split("?p=")[1] || 1;
					$("#popIframe #选集>a").eq(n-1).click();
				},
				error:function(data) {}
				});
			}	
			getpage();
			
		}else{
			if(/#player/.test(mvcaturl(src))){
				src = mvcaturl(src);
				if ($(window).width() < $(window).height())$("#popIframe").css("background","#000").css("padding-top", "1.5em");
			}
			if(/.m3u8$|.mp4$/.test(src)){
				loadVideo($("#popIframe"), src, imageurl, "autoplay");
				$("#popIframe iframe").remove();
				$("#popIframe").removeClass("loading");
			}else{
				if(src)$("#popIframe iframe").attr("src", src).on("load",function () {$("#popIframe").removeClass("loading");});
			}
		}
		
		closemask = function(){
			$("body").removeClass("loading");
			$("#popIframe iframe").attr("src","").remove();
                    var mask = $('.popIframe');
                    if ($(window).width() < $(window).height()) {
                        mask.animate({
                            'top': '110%'
                        }, 100, 'linear', function () {
                            mask.remove();
							popScroll.beforeClose(); //解除防滚动
                        });
                    } else {
                        mask.animate({
                            'left': '110%'
                        }, 100, 'linear', function () {
                            mask.remove();
							popScroll.beforeClose(); //解除防滚动
                        });
                    }
					updateWxShareData(oshareData);
                    $("body").removeClass("pophome");//用户中心
                    //清除hash
                    try {
                        history.replaceState('', document.title, ourl);
                    } catch (e) {
                        window.location.hash = "";
                    }
                    //刷新登录状态
                    if($(".pophome").length>0)location.reload();
					
			}// end fn closemask
		
        setTimeout(function () {
                $('#closemask').click(function () {
					closemask();
                })
                $("#closemask").swipe({
                    swipe: function () {
                        closemask();
                    }
                });

            }, 300) //end setTimeout

        $("body.music.content #left").css("opacity", "1");
		
        if(!/\/search\/|player.bilibili.com|#player/.test(src) && src.indexOf(window.location.hash.split("#")[1])==-1)window.location.hash = src; //添加hash

    } //end popIframe

//fullscreen
var fullscreen = false;

function fullScreen() {
	if(isHtml5Plus)return;
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
        el.mozRequestFullScreen || el.msRequestFullScreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
        fullscreen = true;
    } else if (typeof window.ActiveXObject != "undefined") {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
            fullscreen = true;
        }
    } else {
        fullscreen = false;
        $("#fullscreen,#fullscreen+label,#ftool .fullscreen").remove();
    }
	
	try{$("#fullscreen").prop("checked", true);}catch(err){};
}


function exitFullScreen() {
		if(isHtml5Plus)return;
        var el = document;
        var cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
            el.mozCancelFullScreen || el.exitFullScreen;
        if (typeof cfs != "undefined" && cfs) {
            cfs.call(el);
            fullscreen = false;
        } else if (typeof window.ActiveXObject != "undefined") {
            //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
                fullscreen = false;
            }
        }
		try{$("#fullscreen").prop("checked", false);}catch(err){};

    }
    //end fullscreen

//popImg
function popImg(e) {
    if (isimageUrl(e)) {
        $("body").append('<img src="' + e + '" id="tempImg" style="display:none" />');
        var imgs = $("#tempImg");
        start(imgs);
        $("#tempImg").remove();
    } else if (e.is("img")) {
        var imgs = e;
        start(imgs);
    } else {
        var imgs = e.find("img").not("a img,#infscr-loading img");
        e.off("click");
        e.on("click", "img:not('a img,#infscr-loading img')", function() {
            start(this);
        });
    }
    imgs.css("cursor", "zoom-in");
    function start(i) {
        var popSrc = i.src;
        if($("#popImgMask").length==0)$("body").append('<div class="popImgMask" id="popImgMask"></div>');
        if (imgs.length > 1) {
            if (isMobile) {
                //jsalert("左右滑动查看");
            } else {
                //jsalert("左右键切换图片");
            }
        }
        function newImg(src, title) {
            $("#popImg").remove();
			$("body").removeClass("loaded").addClass("loading");
            $("#popImgMask").prepend('<img class="popImg" id="popImg" src="' + src + '" width="0" height="0" style="cursor: zoom-out;" />');
            img = $("#popImg");
            var newImg = new Image();
            newImg.src = src;
            newImg.onload = function() {
                $("#popImgMask").css("background-image", "none");
                //imgResize
                var iWidth = $(window).width();
                var iHeight = $(window).height();
                var clientw = iWidth*0.92;
                var clienth = iHeight*0.92;
                var imgw = newImg.width;
                var imgh = newImg.height;
                if (imgw / imgh >= clientw / clienth) {
                    w = Math.min(clientw,imgw);
                    h = imgh * w / imgw;
                } else {
                    h = Math.min(clienth,imgh);
                    w = imgw * h / imgh;
                }
                img.height(h + "px");
                img.width(w + "px");
                img.css("top", (iHeight - h) / 2 + "px");
                img.css("left", (iWidth - w) / 2 + "px");
                img.fadeOut(0).fadeIn();
				$("body").removeClass("loading").addClass("loaded");
				
                //图片颜色
                var newcolor = "silver";
				
		  		try{
                	var vibrant = new Vibrant(newImg);
                	var swatches = vibrant.swatches();
                	if (swatches["Vibrant"])newcolor = swatches["Vibrant"].getHex();
				}catch(err){
					console.log(err);
				}
				
				img.css({'border':'24px inset ' + newcolor});
                if(iWidth <= 425 || iHeight <= 425)img.css({'border':'1px solid ' + newcolor});
                $("#popImg,.imgNav a").css("color", newcolor);
				jsalert(title, 3000);
                $(".jsalert").css("color", autoTextColor(newcolor)).css("background-color", newcolor);
		
            };
        }
        //end newImg
        $("#popImgMask").append('<div class="imgNav desktop" id="imgNav"><a class="none" href="javascript:void(0)" id="prevImg" ></a><a class="none" href="javascript:void(0)" id="nextImg" ></a></div>');
        //全局
        imgl = imgs.index($(i));
        function imgNav(n) {
            imgl = parseInt(imgl + n);
            if (imgs.length > 1) {
                $("#prevImg,#nextImg").show();
            }
            if (imgl <= 0) {
                imgl = 0;
                $("#prevImg").hide();
            }
            if (imgl >= imgs.length - 1) {
                imgl = imgs.length - 1;
                $("#nextImg").hide();
            }
            var src = imgs[imgl].src;

            var oSrc = $(imgs[imgl]).attr("data-original") || "";
            if (oSrc !== "") {
                src = oSrc;
            }
            var title = $(imgs[imgl]).attr("data-title") ||  imgs[imgl].title || "";
            function pageY(e){return e.offsetParent ? e.offsetTop + pageY(e.offsetParent) : e.offsetTop;}
			var targetOffset =  pageY(imgs[imgl]) - window.innerHeight/3;
            if (!isimageUrl(e))$("html,body").animate({scrollTop:targetOffset}, 500);
            newImg(src, title);
        }
        imgNav(0);
        try {
            $("#prevImg").click(function() {
                imgNav(-1);
                if (imgl == 0)jsalert("没有了")
                return false;
            });
            $("#nextImg").click(function() {
                imgNav(1);
                if (imgl == imgs.length - 1)jsalert("没有了")
                return false;
            });
        } catch (err) {}
        $(".popImgMask").click(function() {
            $(".popImgMask,.popImgMask *,.popImgStyle,.jsalert").remove();
			$("body").removeClass("loading").addClass("loaded");
            $(document).off("keydown");
        });

        // END popImg	
        //keyevent
        $(document).off("keydown");
        $(document).keydown(function(event) {
            if (event.keyCode === 38 || event.keyCode === 40 || event.ctrlKey || event.shiftKey || event.altKey || event.metaKey || /input|textarea/.test(document.activeElement.tagName.toLowerCase())) {
                return;
            } else {
                event.preventDefault();
            }
            switch (event.keyCode) {
              case 37:
                //左
                $("#prevImg").click();
                break;

              case 39:
                //右
                $("#nextImg").click();
                break;

              //case 38:
                //上
                //$("#prevImg").click();
                //break;

             // case 40:
                //下
                //$("#nextImg").click();
                //break;

              case 27:
			  case 4:
                //esc back
                $(".popImgMask").click();
                break;
            }
        });
        //滑动
        if (isMobile) {
            $("#popImgMask").swipe({
                swipeLeft:function() {
                    $("#nextImg").click();
                },
                swipeRight:function() {
                    $("#prevImg").click();
                },
                excludedElements:$.fn.swipe.defaults.excludedElements + ", #xx , #xxx"
            });
        }
    }
}
//end popImg


//站内搜索 insearch

function insearch(word, type) {
	
	if(word == "")return;

    if (word == "全屏") {
        if (fullscreen) {
            exitFullScreen();
        } else {
            fullScreen();
        };
        return;
    }
	
    if (word == "优惠券") {
        popIframe('/coupon/');
        return;
    }
	
	if (/优惠券/.test(word)) {
		word = word.replace('优惠券','');
        tbcoupon(word);
        return;
    }

    if (word == "虎鲸") {
        $("body").append('<script src="/js/game_whale.js"></script>');
        return;
    }

    if (word == "打飞机") {
        popIframe('//zty.pe/')
        return;
    }

    if (word == "圈小猫") {
        popIframe('/game/catch-the-cat/');
        return;
    }

    if (word == "矩阵" || word == "matrix") {
		bgmStop();
		musicmask = false;
		bgmPlay('//music.163.com/song/media/outer/url?id=5054972.mp3');
		bgm = true;
        $("body").append('<script src="/js/game_matrix.js"></script>').removeClass("breath sleepy eyecare").addClass('bgmask');
		changeColor('limegreen');
		$(".insearch #searchword").val("黑客帝国");
		$(window).trigger("resize");
        return;
    }

    if (word == "助眠" || word == "睡觉" || word == "背景音") {
		bgmStop();
		$("body").removeClass("breath sleepy eyecare bgmask").addClass("soundsleep");
		$("#soundsleep").slideDown(0);
		history.replaceState("", document.title, window.location.pathname + "#soundsleep");
		shareData.title = "背景音";
        shareData.desc = "静心/学习/助眠";
        shareData.imgUrl = "https://www.mvcat.com/img/logo_appicon.png";
        shareData.link = "/#soundsleep";
		updateWxShareData(shareData);
        return;
    }
	
	if (word == "主题" || word == "颜色") {
		pickcolor(changeTheme);
        return;
    }
	
	if (word == "黑色主题" || word == "默认主题") {
		changeTheme(null);
		jsalert("恢复默认黑色主题");
		$("#themecolor").prop("checked", false);
        return;
    }

    if (/早安喵|午安喵|晚安喵/.test(word)) {
		bgmStop();
		musicmask = false;
		singlemode();
		$("#mplay").attr("data-title","早安喵");
		$("#mplay").attr("data-media","//music.163.com/song/media/outer/url?id=28875230.mp3");
		$("#mplay").attr("data-cover","/img/cat_black.png");
		bgmPlay($("#mplay"));
        return;
    }

    if (word == "彩带") {
		evanyou('body');
        return;
    }
	
	
    if (/v.youku.com|tudou.com|www.iqiyi.com|v.qq.com|letv.com|le.com|mgtv.com|pptv.com|sohu.com|acfun.cn|acfun.tv|bilibili.com\/bangumi|tv.cctv.com|m1905.com|v.yinyuetai.com|www.56.com|vlook.cn|v.ku6.com|miaopai.com|weibo.com|v.17173.com|v.ifeng.com|meipai.com|weishi.com|.m3u8$|.mp4$|#vip/.test(word)) {
        popIframe("/player/?url="+word);
        return;
    }
	
    if (/\/\//.test(word)) {
        popIframe(word);
        return;
    }
    

    if (/吃什么/.test(word)) {
        popIframe('/game/eat/');
        return;
    }
    
    if (word == "初音") {
        popIframe('/game/mikutap/');
        return;
    }

    if (/壁纸/.test(word)) {
        popIframe('/wallpaper/');
        return;

    }
	
	//http://greencat.club/?url=

    if ($("body").hasClass("music")) {
        var type = type || "Title,TagNames";
        popIframe("/music/search/?type=" + type + "&word=" + word);
    } else if ($("body").hasClass("wiki")) {
        var type = type || "Title,TagNames";
        popIframe("/wiki/search/?type=" + type + "&word=" + word);
        //搜年份
    } else if (/^[0-9]+[0-9]*[0-9]*$/.test(word) && word.length == 4 && 1894 < parseInt(word) && parseInt(word) < new Date().getFullYear()+1 ) {
        var type = "AddDate";
        popIframe("/search/?channelID=3&type=" + type + "&word=" + word);
    } else {
        var type = type || "Title,subTitle,TagNames";
        //word = word.replace(/(电影|电视剧)/g,"");
        popIframe("/search/?type=" + type + "&word=" + word);
    }
}

//电影网站
var qCommentary = function (txt) {
    if (txt.length == 0) return;
    if (txt.length > 18) txt = txt.slice(0, 19);
    var q = '<fieldset class="qBox qcommentary"><legend>《<span class="keyword">' + txt + '</span>》拉片解说&nbsp;</legend><a href="//search.bilibili.com/all?keyword=' + txt + '" class="desktop" target="_blank">B站搜索</a><a href="//m.bilibili.com/search?keyword=' + txt + '" class="mobile" target="_blank">B站搜索</a><a href="//www.douyin.com/search/' + txt + '" target="_blank">抖音搜索</a><a href="//www.ixigua.com/search/' + txt + '" target="_blank">西瓜搜索</a></fieldset>';
    return q;
}
var qWatch = function (txt) {
    if (txt.length == 0) return;
    if (txt.length > 18) txt = txt.slice(0, 19);
    var q = '<fieldset class="qBox qwatch"><legend>《<span class="keyword">' + txt + '</span>》在线观看&nbsp;</legend><a href="//www.baidu.com/s?wd=' + txt + '在线观看">百度一下</a><a href="//so.iqiyi.com/so/q_' + txt + '" target="_blank">爱奇艺搜索</a><a href="//v.qq.com/x/search/?q=' + txt + '" target="_blank">腾讯搜索</a></fieldset>';
    return q;
}
var qDown = function (txt) {
    if (txt.length == 0) return;
    if (txt.length > 18) txt = txt.slice(0, 19);
    var q = '<fieldset class="qBox qdown"><legend>《<span class="keyword">' + txt + '</span>》资源搜索&nbsp;</legend><a href="//www.baidu.com/s?wd=' + txt + ' 下载">百度下载</a><a href="//www.baidu.com/s?wd=' + txt + ' magnet">搜索磁力</a><a href="//www.baidu.com/s?wd=' + txt + '网盘">搜索网盘</a><a href="//www.baidu.com/s?wd=' + txt + ' 字幕">搜索字幕</a></fieldset>';
    return q;
}

var qData = function (txt) {
    if (txt.length == 0) return;
    if (txt.length > 18) txt = txt.slice(0, 19);
    var q = '<fieldset class="qBox qdata"><legend>《<span class="keyword">' + txt + '</span>》资料介绍&nbsp;</legend><a href="//baike.baidu.com/search/word?word=' + txt + '" target="_blank">百度百科</a><a href="//www.baike.com/wiki/' + txt + '" target="_blank">互动百科</a><a href="//zh.wikipedia.org/wiki/' + txt + '" target="_blank">维基中文</a></fieldset>';
    return q;
}
var qReview = function (txt) {
    if (txt.length == 0) return;
    if (txt.length > 18) txt = txt.slice(0, 19);
    var q = '<fieldset class="qBox qreview" target="_blank"><legend>《<span class="keyword">' + txt + '</span>》评分影评&nbsp;</legend><a href="//m.douban.com/search/?type=movie&query=' + txt + '&type=movie" target="_blank">豆瓣影评</a><a href="//www.zhihu.com/search?type=content&q=' + txt + '" target="_blank">知乎评论</a></fieldset>';
    return q;
}

var qMusic = function (txt) {
    if (txt.length == 0) return;
    if (txt.length > 18) txt = txt.slice(0, 19);
    var q = '<fieldset class="qBox qmusic"><legend>《<span class="keyword">' + txt + '</span>》 收听/下载/MV&nbsp;</legend><a href="//music.163.com/#/search/m/?s=' + txt + '" target="_blank">网易云音乐</a><a href="//www.xiami.com/search?key=' + txt + '" target="_blank">虾米音乐</a><a href="//sou.kuwo.cn/ws/NSearch?key=' + txt + '" target="_blank">酷我音乐</a><a href="//so.yinyuetai.com/mv?keyword=' + txt + '" target="_blank">音悦台</a><a href="//m.douban.com/search/?type=music&query=' + txt + '&type=music" target="_blank">豆瓣音乐</a></fieldset>';
    return q;
}

//快捷搜索
var qSearchSites = function (txt) {
    var q = '<fieldset class="qBox qSearch"><legend onClick="insearch(\'' + txt + '\',\'Title\')">《' + txt + '》快捷搜索&nbsp;</legend><a href="//www.baidu.com/s?wd=' + txt + ' 在线观看">百度一下</a><a href="//search.bilibili.com/all?keyword=' + txt + '">B站搜索</a><a href="//so.iqiyi.com/so/q_' + txt + '">奇艺搜索</a><a href="//m.douban.com/search/?type=movie&query=' + txt + '&type=movie">豆瓣电影</a><div id="closeqBox" onclick="$(this).parent(\'.qBox\').hide(300);"></div></fieldset>';

    if ($("body").hasClass("music") || $("body").hasClass("mabc") || $("body").hasClass("mtalk")) {
        q = '<fieldset class="qBox qSearch"><legend>《<span class="keyword">' + txt + '</span>》 快捷搜索&nbsp;</legend><a href="//music.163.com/#/search/m/?s=' + txt + '">网易云音乐</a><a href="//m.douban.com/search/type=music&?query=' + txt + '&type=music">豆瓣音乐</a><div id="closeqBox" onclick="$(this).parent(\'.qBox\').hide(300);"></div></fieldset>';
    };
	
    if (/books/.test(location.href)) {
        q = '<fieldset class="qBox qSearch"><legend>《<span class="keyword">' + txt + '</span>》 快捷搜索&nbsp;</legend><a href="javascript:jdcoupon(\'' + txt + '\')">优惠购书</a> <a href="//baike.baidu.com/item/' + txt + '">百度百科</a> <a href="//search.bilibili.com/all?keyword=' + txt + '">B站搜索</a> <a href="//m.douban.com/search/?type=book&query=' + txt + '">豆瓣图书</a> <a href="//www.zhihu.com/search?q=' + txt + '">知乎搜索</a> <a href="//zh.wikipedia.org/wiki/' + txt + '">维基百科</a> <a href="https://www.baidu.com/s?wd=' + txt + ' epub">百度下载</a><div id="closeqBox" onclick="$(this).parent(\'.qBox\').hide(300);"></div></fieldset>';
    };
    return q;
}

var qSearch = function (s) {
    var txt = '';
    var selectTxt = function () {

        if (document.selection) {
            txt = document.selection.createRange().text;
        } else {
            txt = document.getSelection();
        }

        txt = txt.toString();

        if (txt.length > 18) {
            txt = txt.slice(0, 19);
        }

        return txt;

    };



    $('<div id="huaci" style="display:none;position:absolute;z-index:1;" ></div>').appendTo('body');

    $(s).mouseup(function (e) {
        if (e.target.id === 'huaci') {
            return

        }
        e = e || window.event;
        var txt = selectTxt(),
            sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40,
            top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
        var txt = selectTxt();
		
		var huaci = $('#huaci');

        huaci.html(qSearchSites(txt));

        if (txt) {
            huaci.show(300).css({
                left: left,
                top: top
            });

        } else {
            huaci.hide(300);
        }

    });

    return qSearchSites(txt);

};

//autosort

function autosort(s) {
    s = $(s);
    s.find(".item").each(function () {
        i = $(this);
        var itemsrc = $(this).text().toLowerCase();

        s.find(".sort").each(function () {
            var sortsrc = $(this).text().toLowerCase();
            if (itemsrc.indexOf(sortsrc) !== -1 || i.hasClass(sortsrc)) {
                $(this).show();
                i.addClass(sortsrc);
            }
        });
    });

    s.find(".sort").click(function () {
        var sortsrc = $(this).text().toLowerCase();
        $(this).addClass("current").siblings(".sort").removeClass("current");
        $(s).find(".item").hide();
        $(s).find(".item." + sortsrc).show();
    })
}

//autosort(".autosort");
//end autosort




//tooltip
(function($){
$.fn.extend({
    tooltip:function() {
        if (isMobile)return;
        var targets = this, target = false, tip = false, tooltip = false, title = false;
        targets.on("mouseenter mousemove focus", function() {
            target = $(this);
            tip = target.attr("data-title") || target.attr("title");
            if (!tip || tip == "") return;
            target.attr("data-title", tip);
            target.removeAttr("title");
            tooltip = $('<div id="tooltip" class="tooltip" style="display:none;opacity:0;"></div>');
            if($("#tooltip").length == 0)tooltip.html(tip).appendTo("body");
            var init_tooltip = function() {
                if ($(window).width() < tooltip.outerWidth() * 1.5) tooltip.css("max-width", $(window).width() / 2); else tooltip.css("max-width", 240);
                var pos_left = target.offset().left + target.outerWidth() / 2 - tooltip.outerWidth() / 2, pos_top = target.offset().top - tooltip.outerHeight() - 20;
                if (pos_left < 0) {
                    pos_left = target.offset().left;
                    tooltip.addClass("tleft");
                } else tooltip.removeClass("tleft");
                if (pos_left + tooltip.outerWidth() > $(window).width()) {
                    pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth();
                    tooltip.addClass("tright");
                } else tooltip.removeClass("tright");
                if (pos_top < 0) {
                    var pos_top = target.offset().top + target.outerHeight();
                    tooltip.addClass("ttop");
                    pos_top = pos_top + 20;
                } else {
                	tooltip.removeClass("ttop");
                }
                tooltip.css({
					display: "block",
                    left:pos_left,
                    top:pos_top
                });
                if(tooltip.hasClass("ttop")){
                tooltip.animate({
                    top:"-=10",
                    opacity:1
                }, 150);
                }else{
                tooltip.animate({
                    top:"+=10",
                    opacity:1
                }, 150);
                }
            };
			init_tooltip();
            var remove_tooltip = function() {
                $("#tooltip").stop(true,false).remove();
            };
            target.on("mouseleave blur", remove_tooltip);
            tooltip.on("click mouseleave", remove_tooltip);
			$(window).scroll(remove_tooltip);
			$("#left,#right,#rightside").scroll(remove_tooltip);
        });
    }
});
})(jQuery);
//end tooltip

// 气泡 particles bubble
function bubble(selector, num, size, color, direction, speed, callback) {

        if ($("body.music").length == 0) return;

        $(selector).attr("id", "particles-js");

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": num || 48,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": color || "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": size || 10,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 500,
                    "color": color || "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,

                    "speed": speed || 6,
                    "direction": direction || "bottom",
                    "random": false,
                    "straight": false,

                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {

                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": size / 2 || 4,
                        "duration": 0.3,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": $(selector).width() / 4,
                        "duration": 0.1
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        })
        $(selector + " .particles-js-canvas-el").animate({
                opacity: '1'
            }, 1500) //.addClass("layer").attr("data-depth","0.2");
    } //end bubble


function musicshaker(mode){
	if(mode == "on"){
		$("div.musicmask.musicmask").addClass("cshaker shake-opacity shake-constant");
		$("#left,.showleft,#ftool,#rightside,#favorite").addClass("cshaker shake-opacity shake-constant");
		$("#right").addClass("cshaker shake-little shake-constant");
		startPeristentVibrate([100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100], 4000);
		//$("div.musicmask.musicmask .bgmask").addClass("jshaker").jshaker();
	}else if($(".jshaker,.cshaker").length > 0){
        $(".cshaker").removeClass("shake shake-constant shake-little shake-slow shake-fast shake-opacity shake-crazy shake-chunk");
        stopVibrate();
		//$(".jshaker").jshaker.stop();
	}
}



//bgmask
var musicmask = false;
if ($("body.music").length > 0 || getCookie("musicmask") == "on") {
    musicmask = true;
}
var musicmasksrc = "";

function musicmasker() {
    if (!musicmask || !musicmasksrc) return;
	musicmasksrc = musicmasksrc.split("&")[0];
    try {tempImg.onload = null;} catch (err) {}; //中止未完成
    $("body").removeClass("loaded").addClass("loading");
    $(window).trigger("resize");
    tempImg = new Image();
    tempImg.src = musicmasksrc;
    tempImg.onload = function (e) {
		eyecarer("off");
        $("body").prepend('<div class="bgmask musicmask parallax" style="display:none;"><div class="bgmask layer shine" data-depth="0.4" style="background-image:url(\'' + encodeURI(musicmasksrc) + '\');"></div></div>');
		
		
		  var swatchescolor = "white";

		  try{
            var vibrant = new Vibrant(tempImg);
            var swatches = vibrant.swatches();
            if (swatches['LightVibrant']) {
                swatchescolor = swatches['LightVibrant'].getHex();
				changeColor(swatchescolor);
			}
          }catch(err){
			console.log(err);
		  }
		  
		  changeColor(swatchescolor);
		  $("body").addClass("bgmask musicmask");
			
			//stars
			if($(".music.root:not(.content)").length>0 && $("body.stars").length > 0){
				$("div.musicmask .layer").removeClass("shine");
				stars("div.musicmask .layer",300,5); 
				counter ++;
				$(window).resize(function(){
					$("canvas#stars").remove();
					stars("div.musicmask .layer",300,5);
				})
				//$("canvas#stars").addClass("layer").attr("data-depth","0.4");
			}else if($("body.morning,body.mvcat.root,body.fear,body.hate").length == 0 ){//ripples
				$("div.musicmask .layer").ripples();
				counter ++;
			}
			
          $("div.musicmask").fadeIn(2500, function () {
													  
			$("body").removeClass("loading");
			
            //parallax & particles
            if (!isIE && !isEdge) $('div.musicmask').parallax().parallax('updateLayers'); //影响ie/edge blur
			
			// 音乐动态效果
			if (!/.gif/.test(musicmasksrc) && $(".music.root:not(.song)").length == 0) {
				if ($("body").is(".sorrow")) {
                    if ($("body.content").length > 0){
                        $.getScript("/js/threeSnow.js",function(){
                            threeSnow("div.musicmask", "/img/snow.png", 100);
                        });
                    }
                } else if ($("body").is(".fear,.hate")) {
                    //if(!isMobile){
                        $.getScript("/js/threeSmoke.js",function(){
                            bloodsmoke('body');
                            });
                    //}
                } else if ($("body").is(".love,.word")) {
                    if ($("body.content").length > 0){
                        $.getScript("/js/threeSnow.js",function(){
                            threeSnow("div.musicmask", "/img/seed.png", 50);
                        });
                    }
                } else {
                    //if ($("body.content").length > 0)bubble("div.musicmask", 48, 24, swatchescolor, "top", 2);
                }
			}
			
			if ($("body.morning").length > 0)bubble("div.musicmask", 48, 24, swatchescolor, "top", 2);

            //if ($("#mplay").hasClass("anger") && !$("body").hasClass("pause"))musicshaker("on");

            musicmask = true;
            acontrol();
			
			visualizer(themecolor);

        }); //end bgmask fadein
			
		
    	$("body").removeClass("loading").addClass("loaded");

        $(window).trigger("resize");

        }//end onload
}

//音频可视化
function visualizer(color) {
	
	if(bgm && $("body.music #aplayer").length > 0 && /upload/.test($("#aplayer")[0].src)  && $("#visualizer").length==0){
    	$("div.musicmask").append('<canvas id="visualizer" width="' + document.documentElement.clientWidth + '" height="' + document.documentElement.clientHeight + '" style="position:fixed;left:0;bottom: -8px;opacity: 0.2;filter: blur(8px);"></canvas>');
		console.log("visualizer start：" + $("#aplayer")[0].src);
	}else{
		console.log("visualizer stop");
		return;
	}

    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

    var audio = document.getElementById('aplayer');
    audio.crossOrigin = 'anonymous';
    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    var source = ctx.createMediaElementSource(audio);
    // we have to connect the MediaElementSource with the analyser 
    source.connect(analyser);
    analyser.connect(ctx.destination);
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64;
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // we're ready to receive some data!
    var canvas = document.getElementById('visualizer'),
        cwidth = canvas.width,

        cheight = canvas.height - 2,
        meterWidth = 12, //width of the meters in the spectrum
        gap = 2, //gap between meters
        capHeight = 2,
        capStyle = color || '#fff',
        meterNum = cwidth / (meterWidth + 1), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(1, color || '#0f0');
    gradient.addColorStop(0.5, color || '#ff0');
    gradient.addColorStop(0, '#f00');
    // loop
    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);

        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            ctx.fillStyle = capStyle;
            //draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                ctx.fillRect(i * (meterWidth + gap), cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                ctx.fillRect(i * (meterWidth + gap), cheight - value, meterWidth, capHeight);
                capYPositionArray[i] = value;
            };
            ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
            ctx.fillRect(i * (meterWidth + gap), cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFrame);
		
		//图片可视化
        function getAve(arr) {
            var sum = 0, ave = 0, i = 0;
            for (i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            ave = sum / arr.length;
            return ave;
        }
		//console.log(getAve(array));
		var brightness = Math.min(1.38,Math.max(0.62,getAve(array)/62));
        if ($("body .musicmask").length > 0 && getAve(array) > 5) {
            $("body .musicmask .layer").removeClass("shine").css("transition-duration","0.62s").css("filter", "brightness(" + brightness + ")");
            //jsalert($("body .musicmask .layer").css("filter"));
        }
    }
    renderFrame();
    audio.play();
}

//bgm//////////////////////////////////////////////////////////////

$("#lcontrol").prepend('<div class="poster cover" id="mplay"></div><div class="acontrol none"></div>');
//musicbg
//if(!isMobile)
$(".acontrol").append('<input type="checkbox" id="musicbg" class="checkbox-ios musicbg" /><label class="musicbg tooltip" title2="快捷键 B" for="musicbg" onclick="togglemusicmask()"></label>');
//cyclemode
$(".acontrol").append('<input type="checkbox" id="cyclemode" class="checkbox-ios cyclemode" /><label class="cyclemode tooltip" title2="快捷键 S" for="cyclemode" onclick="togglecyclemode();return false;"></label>');

function acontrol() {
    $(".acontrol").show();
    if (musicmask) {
        $("#musicbg").prop("checked", true)
    } else {
        $("#musicbg").prop("checked", false)
    };
    if (cyclemode == "single") {
        singlemode();
    } else {
        randmode();
    };
}


volumein = function (e) {
    e.play();
    e.volume = 0;
    var v = 0;
    var t = setInterval(function () {
        v += 0.1;
        if (v <= 1) {
            e.volume = v;
        } else {
            clearInterval(t);
        }
    }, 200);
}
volumeout = function (e) {
    var v = e.volume;
    var t = setInterval(function () {
        v -= 0.1;
        if (v >= 0) {
            e.volume = v;
        } else {
            clearInterval(t);
            e.pause();
        }
    }, 50);
}

//audioAutoPlay
function audioAutoPlay(e) {
	
        if ($("audio").length == 0) return;
		
        try {
            volumein(e);
        } catch (e) {}
		
        if (e.paused) {
            $("body").addClass("pause");
        } else {
            $("body").removeClass("pause");
            bgm = true;
			$("body").addClass("bgm play");
        }

        musicmasker();
		
    } //end audioAutoPlay

// auto volume
function autovol(vol, tip) {
	try {
		$("#aplayer")[0].volume = vol;
		} catch (err) {};
	//jsalert(tip + "：" + Math.round(vol*100) + "%" );
}


//bgmplay

var bgm = false;
var playtime = 0;
var mediaUrl="",mediaCate="",mediaTitle="",mediaCover="",mediaFile="",mediaSummary="",mediaAuthor="",mediaSource="",mediaLinkUrl="";
function bgmPlay(e) {

        bgmStop("bgmplay");

        playtime = new Date().getTime();
        saveCookie("playtime", playtime);

        if (e instanceof jQuery) {
            //jquery ele
            mediaUrl = e.attr("data-media") || "";
            mediaCate = e.attr("data-cate") || e.attr("cate") || "";
            mediaTitle = e.attr("data-title") || e.attr("title") || "";
            mediaCover = e.attr("data-cover") || "";
            mediaFile = e.attr("data-file") || "";
            mediaAuthor = e.attr("data-author") || "";
            mediaSource = e.attr("data-source") || "";
            mediaSummary = e.attr("data-summary") || e.attr("title") || "";
            mediaLinkUrl = e.attr("data-url") || mediaUrl;
			
			if(!/\/\//.test(mediaLinkUrl))mediaLinkUrl = location.protocol + "//" + location.host + mediaLinkUrl;

            $("#mplay").attr("data-title", mediaTitle);
            $("#mplay").attr("data-media", mediaUrl);
            $("#mplay").attr("data-cover", mediaCover);
            $("#mplay").attr("data-file", mediaFile);
            $("#mplay").attr("data-cate", mediaCate);
            $("#mplay").attr("data-summary", mediaSummary);
            $("#mplay").attr("data-author", mediaAuthor);
            $("#mplay").attr("data-source", mediaSource);
            $("#mplay").attr("data-url", mediaLinkUrl);
            $("#mplay").css("background-image", "url(" + mediaCover + ")");
            $("#mplay,body").removeClass("joy anger sorrow happy fear love hate lust poem prose motto toplist playlist").addClass(mediaCate);
			
			if($("body").hasClass("music")){
				shareData.title = " " + mediaTitle;
            	shareData.desc = mediaSummary;
            	shareData.imgUrl = mediaCover;
				imageurl = mediaCover;
            	shareData.link = mediaLinkUrl;
				if(!$("body").hasClass("single"))updateWxShareData(shareData);
			}

            //start
            $("#mplay,.cover[data-media='" + mediaUrl + "']").addClass("playing rotate360");

            //auto scroll
            if (!isMobile) try {
                    var targetOffset = $(".playing").not("#mplay").offset().top;
                    //$("html,body").animate({scrollTop:targetOffset-30}, 500);
                } catch (err) {}
                // jquery ele
        } else {
            mediaUrl = e;
            $("#mplay,.cover[data-media='" + mediaUrl + "']").css({
                "background-image": "none",
                "background-color": "black"
            }).addClass("playing rotate360");
        }

        //音频播放器
        function aplay(src) {

            if (!!(document.createElement('audio').canPlayType)) {
                $("body").append('<audio src="' + src + '" data-media="' + mediaUrl + '" hidden="true" height="0" width="0" preload="none" loop="loop" class="aplayer" id="aplayer"></audio>');
            } else {
                $("body").append('<embed src="' + src + '" data-media="' + mediaUrl + '" width="0" height="0" hidden="true" loop="true" class="aplayer" id="aplayer"></embed>');
            }

            //acontrol
            acontrol();
            autonext($("#aplayer")[0]);

        }

        //.mp3

        if (/.mp3$|.aac$|.ogg$|.wav$/.test(mediaUrl.toLowerCase())) {
            aplay(mediaUrl);
        }
        //163song
        else if (/song\?id=/.test(mediaUrl)) {
            var id = mediaUrl.split("id=")[1];
            aplay("//music.163.com/song/media/outer/url?id=" + id + ".mp3");
        }
        //163playlist album
        else if (mediaUrl.indexOf("music.163.com") !== -1) {
            if (mediaUrl.indexOf("/playlist?") !== -1 || mediaUrl.indexOf("/toplist?") !== -1) {

                var type = 0;
            }
            if (mediaUrl.indexOf("/album?") !== -1) {
                var type = 1;
            }
            var id = mediaUrl.split("id=")[1];
            if ($("#content").length > 0) {
                var playlist = '<p id="aplayer" class="aplayer" style="background:rgba(0,0,0,0.05) url(\'' + mediaCover + '\') no-repeat center center;background-size: cover;box-shadow2: 0px 10px 50px -15px #000;"><iframe id="aplayer" class="aplayer"  style="background:rgba(0,0,0,0.05) url(/img/loading_dot.gif) no-repeat center center;opacity:0.85;" frameborder="0" width="330" height="450" src="//music.163.com/outchain/player?type=' + type + '&auto=1&height=430&id=' + id + '" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe></p>';
                $("#content").before(playlist);
            } else {
                $("body").after('<iframe class="mplayer none" frameborder="0" width="330" height="450" src="//music.163.com/outchain/player?type=' + type + '&auto=1&height=430&id=' + id + '" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>');
            } // end #content
            //acontrol
            acontrol();
        } //end 163playlist album
		
		//歌词
		var lyricUrl = "";
		lyricUrl = mediaFile || mediaUrl || mediaSource;
		if(/song\?id=/.test(lyricUrl))lyricUrl = "//music.163.com/api/song/media?id=" + lyricUrl.split("id=")[1];
		if(/.mp3$/.test(lyricUrl))lyricUrl = lyricUrl.replace(".mp3",".lrc");
		if(/.lrc$/.test(mediaFile))lyricUrl = mediaFile;
		
		if(lyricUrl){
			if($("#slyric").length==0)$("body").append('<div id="slyric" class="slyric"></div>');
			if($("body.content.song,body.root.music").length>0)Lyric(lyricUrl,$("#aplayer")[0],$("#slyric")[0]);
		}

        //load
        $(".aplayer").on("load play", function () {
                try {
                    acycle($("#aplayer"), $(".cover.playing"));
                } catch (err) {}

            })
		//end load

        //autovol
        var cvol = getCookie("volume");
        if ($("body.content.word").length > 0) {
            autovol("0.3", "自动音量")
        } else if ($("#aplayer").length > 0 && cvol != null) {
            autovol(cvol, "记忆音量");
        }

        //bgmask musicmask

        musicmasksrc = mediaCover;

        //music download
        //if($("body.content.music.song").length>0 && $("#author").length>0){
        //$("#author").append('<p><a href="javascript:popIframe(mvcaturl(\'' + videourl + '\'))"> 下载</a></p>')
        //}


        //开始播放
        audioAutoPlay($("#aplayer")[0]);
		
		//if(mediaTitle != "")jsalert(mediaTitle,5000);
		
		if(/wallpaper/.test(mediaCover)){
			try{$("#downwallpaper").remove()}catch(err){};
			$("#favorite h2").append('<span id="downwallpaper" onclick="popImg(\''+ mediaCover +'\')" style="float:right;cursor:pointer;">&#xe617;</span>');
		}

} // end bgmPlay


// Lyric
function parseLyric(text) {
    var lines = text.split("\n"), //[xx:xx.xx]xxx
    pattern = /\[\d{2}:\d{2}.\d{2}\]|\[\d{2}:\d{2}.\d{3}\]|\[\d{2}:\d{2}\]/g, //保存最终结果的数组
    result = [];
    //去掉首部不含时间
    while (!pattern.test(lines[0])) {
		//console.log(lines[0]);
        lines = lines.slice(1);
    }
    //去掉首尾空行
    lines[0].length === 0 && lines.shift();
    lines[lines.length - 1].length === 0 && lines.pop();
	//console.log(lines);
    lines.forEach(function(v, i, a) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern), //提取歌词
        value = v.replace(pattern, "");
		//console.log(time);
		//console.log(value);
        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        if(time!=null)time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(":");
            //将结果压入最终数组
            result.push([ parseInt(t[0], 10) * 60 + parseFloat(t[1]), value ]);
        });
    });
    //按时间大小排序
    result.sort(function(a, b) {
        return a[0] - b[0];
    });
    return result;
}

function Lyric(lrcurl,aplayer,container) {
if(/163.com/.test(lrcurl))dataType = "jsonp";
if(/mvcat.com/.test(lrcurl)){
	dataType = "";
	lrcurl = lrcurl.replace("www.mvcat","io.mvcat");
}
console.log(lrcurl);
$.ajax({
        type:"GET",
        url:lrcurl,
		dataType: dataType,
        success:function(data) {
			console.log(data);
			if(data.nolyric == true)return;
			if(/163.com/.test(lrcurl))data = data.lyric;
			var lyric = parseLyric(data);
			console.log(lyric);
			var html = "";
			for (var i = 0; i < lyric.length; i++) {
				var lrc = lyric[i][1];
				if (lrc == "") lrc = "";
				html += '<p class="lrc lrc' + i + '" onclick="aplayer.currentTime = ' + lyric[i][0] + ';">' + lrc + "</p>";
			}
			
			var no = 0;
			aplayer.addEventListener('timeupdate', function () {
				//监听audio
				var delay = -0.1;
				if (lyric[no] && aplayer.currentTime >= lyric[no][0] + delay) {
					if(lyric[no][1])container.innerHTML = lyric[no][1];
					if(no<lyric.length){
						//console.log(lyric[no][1]);
						no ++;
					}
				}else{
					if(no>0)no --;
				}
				if(aplayer.duration == aplayer.currentTime || aplayer.currentTime == 0){
					container.innerHTML = "";
					no == 0;
				}
			});
			aplayer.addEventListener('ended', function () {
				//监听audio
				container.innerHTML = "";
        	});
		},
        error:function(data) {
			console.log("lrc err:"+data.toString());
		}
    });
}
//end Lyric

//bgmPause
function bgmPause() {
        if (bgm) {
            if ($("body.music").length == 0) { //不适合暂停音乐的场景
                bgmStop();
                return;
            }
            try {
                volumeout($("audio")[0]);
            } catch (err) {
                bgmStop();
                return;
            }
            $("body").removeClass("play").addClass("pause");
			$(".playing").removeClass("rotate360");
			musicshaker("off");
            bgm = false;
        } else {
            try {
                volumein($("audio")[0]);
            } catch (err) {
                bgmPlay($("#mplay"));
            };
			playtime = new Date().getTime();
            if ($("body.pause").length == 0) musicmasker();
            $("body").removeClass("pause").addClass("play");
			$(".playing").addClass("rotate360");
			//if ($("#mplay").hasClass("anger"))musicshaker("on");
            bgm = true;
			visualizer(themecolor);
        }
    } //end bgmPause

//bgmStop
function bgmStop(e) {
        //remove css
        $("body").removeClass("loading bgm play pause");
        $("#mplay,#cover,body").removeClass("action war sf suspense comedy love spirit cartoon horror crime erotic documentary drama cult joy anger sorrow happy fear love hate lust poem prose motto toplist playlist");
        $(".playing").removeClass("playing rotate360");
        //remove bgmask
        try {
            if (e != "bgmplay"){
				$("body.bgmask").removeClass("bgmask musicmask");//连续播放无需更新
				changeColor(getCookie("themecolor"));
			}
            $("body .musicmask").fadeOut(1500, function () {
                $(this).remove();
            });
        } catch (err) {};
		
		musicshaker("off");

        try {
            $("audio").each(function(){
				volumeout($(this)[0]);
			})
        } catch (err) {}
        try {
            $("audio,.aplayer,.acycle,.slyric,#bloodsmoke,#vertexShader,#fragmentShader,#matrix,#whale,#dotlaine,#evanyou").remove();
        } catch (err) {}

        $(".acontrol").hide();

        bgm = false;
		
        //$(window).trigger("resize"); //还原颜色

    } //end bgmStop


//acycle
function acycle(audio, e) {
        if (audio.length == 0 || e.length == 0) return;
        var aplayer = audio[0];
        $(".acycle").remove();
        e.append('<canvas class="acycle mplayer"></canvas>');

        //绑定timeupdate事件
		var progressValue = 0;
        aplayer.addEventListener('timeupdate', function () {
            if (!isNaN(aplayer.duration)) {
                progressValue = aplayer.currentTime / aplayer.duration; //用时间比来获取进度条的值
                if (progressValue == 1) {
                    progressValue = 0; //当播放完成，进度条跳到开始
                }


                if ($('.acycle').length > 0) {
                    drawCircle(progressValue, $('.acycle'));
                }
            }
        }, false);
		
		$(window).resize(function(){
				if ($('.acycle').length > 0) {
                    drawCircle(progressValue, $('.acycle'));
                }
		})


        drawCircle = function (percentage, ele) {

            ele.each(function () {
                var canvas = $(this)[0];
                var lineWidth = 8;

                var canvasWidth = $(this).parent().width();
                var innerR = canvasWidth / 2 - lineWidth / 2; //半径
                if ($(window).width() < 991) {
                    innerR = canvasWidth / 2 - lineWidth / 4;
                }
                var ctx;
                canvas.setAttribute('width', canvasWidth + 'px');
                canvas.setAttribute('height', canvasWidth + 'px');
                if (canvas.getContext) {
                    ctx = canvas.getContext('2d');
                }
                ctx.translate(canvasWidth / 2, canvasWidth / 2);
                ctx.beginPath();
                ctx.arc(0, 0, Math.max(innerR,0), 0, (Math.PI * 2 / 180 + percentage * Math.PI * 2), false);
                ctx.lineWidth = lineWidth;
                if ($(window).width() < 991) {
                    ctx.lineWidth = lineWidth / 2;
                }
                ctx.fillStyle = themecolor;
                ctx.strokeStyle = themecolor;
                ctx.stroke();
                if (window.devicePixelRatio) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            });

        };


    }
    //end acycle


//视频字段videourl检测
function checkmovieurl(url){
	
	var videotitle = "在线观看";
	var videoauthor = "";
	
	if(/@/.test(url)){
		videotitle = url.split("#")[1].split("@")[0]||"在线观看";
		videoauthor = url.split("@")[1]||"匿名";
	}
	
if (/thunder:|ed2k:|magnet:|ftp:|.torrent$|pan.baidu.com|pan.xunlei|pan.quark|aliyundrive/.test(url)) {
    //$("#content").append('<h2>下载地址</h2><blockquote><a class="pop downloadcount" href="' + url + '">' + url + '</a></blockquote>');
	//$('#summary #info,#summary .poster,#summary .rating').last().after('<td class="function download downloadcount" ><a href="' + url + '" onclick="copy($(this).attr(\'href\'));alert(\'已复制链接，粘贴到迅雷等下载工具开始下载。\')" target="_blank" ><span class="icon">&#xe8f1;</span><br /><span class="title">下载<span class="desktop">地址</span></span></a></td>');
	if(/pan.baidu.com|pan.xunlei|pan.quark|aliyundrive/.test(url)){
		videotitle = "网盘资源";
		$('.qBox.qdown').prepend('<a class="hover" href="' + url + '" target="_blank">'+ videotitle +'（免费）</a>');
	}
	if(/thunder:|ed2k:|magnet:|ftp:|.torrent$/.test(url)){
		videotitle = "下载资源";
		$('.qBox.qdown').prepend('<a class="hover" href="' + url + '" target="_blank">'+ videotitle +'（免费）</a>');
	}
} else if (/.mp4$|.m3u8$/.test(url)) {
	videotitle = "在线观看";
    $('.qBox.qwatch').prepend('<a class="hover" href="' + url + '">'+ videotitle +'（免费）</a>');
} else if (/#player/.test(mvcaturl(url)) && !isMobile && $('.qBox.qwatch').length > 0) {
	$('.qBox.qwatch').prepend('<a class="hover" href="' + url + '">'+ videotitle +'（@'+ videoauthor +'）</a>');
} else if (/#player/.test(mvcaturl(url))) {
	
	var videotitlestr = '<a href="'+ url.split("#")[0] +'" target="_blank" style="color:var(--txtcolor)">'+ videotitle + ' @ ' + videoauthor +'</a>';
	//var videotitlestr = videotitle + ' @ <a href="/search/?type=Author&word='+ url.split("@")[1] +'" style="color:var(--txtcolor)">' + videoauthor +'</a>';
	
	var p = '<div class="media grayscale clear" style="height:auto!important;max-height:none!important;overflow:hidden"><div id="选集" style="display:none;color:var(--txtcolor);padding: 0.75em;margin: 0;max-height: 4.5em;overflow: auto;"><span style="display: inline-block;padding-right: 0.5em;">选集：</span></div><iframe style="float:left" class="media grayscale" id="bplayer" name="在线观看" src="' + mvcaturl(url) + '" frameborder=0 allowfullscreen="true" allowtransparency="true" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe></div>';
	
	
	if($("body").width() > 768 || $("table#summary").length ==0 ){
		$("h1").after(p);
	}else{
		$("table#summary").after(p);
	}
	
	if(/bvid=/.test(mvcaturl(url))){
		var src = url;
		var bvid = mvcaturl(src).split("bvid=")[1].split("#")[0].split("?p=")[0];
		
		function getpage(){
			$.ajax({
			type:"GET",
			url:"//api.mvcat.com/bilibili/pagelist.php?bvid=" + bvid, 
			dataType:"json",
			success:function(data) {
				console.log(data);
				
				if(data.code != 0)return;
				data = data.data;
				if(data.length <= 1)return;
				
				for(var i=0;i < data.length;i++){
					$(".media #选集").append('<a style="color:var(--txtcolor);display: inline-block;padding-right: 0.5em;opacity: 0.5;" class="nopop" href="#P'+ data[i].part +'" onclick="$(\'iframe#bplayer\').attr(\'src\',\'//api.mvcat.com/bilibili/player.php?bvid='+ bvid +'&p='+ (i+1) +'&autoplay=1\');$(this).addClass(\'current icon play\').siblings().removeClass(\'current icon play\');">'+ data[i].part +'</a>');
				}
				$(".media #选集").show();
		
				var n = src.split("#")[0].split("?p=")[1] || 1;
				$(".media #选集>a").eq(n-1).click();
			},
			error:function(data) {}
		  });
		}	
		getpage();
	}// end if
	
	//if(/bilibili/.test(url) && $("#在线观看").length == 1)$("#在线观看").append(' <a class="sorter pop desktop" href="https://passport.bilibili.com/login">720P/1080P观看需要先【点此登录】B站！</a>');
	
} else if (/\/\//.test(url) && url.indexOf("music.163.com") == -1) {
    //$("#content").append('<h2>观看地址</h2><blockquote><a class="pop" href="' + url + '">' + url + '</a></blockquote>');
	//$('#summary #info,#summary .poster,#summary .rating').last().after('<td class="function play free" ><a href="' + url + '" target="_blank" ><span class="icon">&#xe87c;</span><br /><span class="desktop">在线</span>观看</span></a></td>');
	if(/bilibili/.test(url))videotitle = "哔哩哔哩";
	$('.qBox.qwatch').prepend('<a class="hover" href="' + url + '" target="_blank">'+ videotitle +'（免费）</a>');
}
// end 视频地址url

//fileurl
//download resource
if (/thunder:|ed2k:|magnet:|ftp:|.torrent$|pan.baidu.com|pan.xunlei|pan.quark|aliyundrive/.test(fileurl)) {
    //$("#content").append('<h2>下载地址</h2><blockquote><a class="pop downloadcount" href="' + fileurl + '">' + fileurl + "</a></blockquote>");
}
//end fileurl


if (/thunder:|ed2k:|magnet:|ftp:|.torrent$|pan.baidu.com|pan.xunlei|pan.quark|aliyundrive/.test($("#content").html())){
	//$("h1 .sorter").first().append('（文末有下载）');
}

}//end checkmovieurl
	
//优惠券搜索
function tbcoupon(key){
	var surl = "//coupon.mvcat.com/index.php?r=/search/tblist&keyWords=" + key;
	if(!isMobile)surl = "//coupon.mvcat.com/index.php?r=/l&kw=" + key;
	if( key == "") surl = "//coupon.mvcat.com";
	window.open(surl);
}
function pddcoupon(key){
	var surl = "//coupon.mvcat.com/index.php?r=/search/pddlist&keyword=" + key;
	if(!isMobile)surl = "//coupon.mvcat.com/index.php?r=/l/pddlist&kw=" + key;
	if( key == "") surl = "//coupon.mvcat.com";
	window.open(surl);
}
function jdcoupon(key){
	var surl = "//coupon.mvcat.com/index.php?r=/search/jdlist&keyword=" + key;
	if(!isMobile)surl = "//coupon.mvcat.com/index.php?r=/l/jdlist&kw=" + key;
	if( key == "") surl = "//coupon.mvcat.com";
	window.open(surl);
}
function coupon(key){
	tbcoupon(key)
}
		
//电影 全网资源
function allsearch(title,durl) {
    //var title = title.split(" ")[0];
	var tdallsearch = "";
    if ($("body.movie.content #summary,body.timeline.content #summary,body.search").length > 0) {
		
		var qlink = '<div class="全网搜索" id="qlink">'+ qCommentary(title) + qWatch(title) + qDown(title) + qReview(title) + qData(title) +'</div>'
        if ($("#qlink").length == 0) $("#right #summary").first().after(qlink);
		if ($("#right #summary").length == 0) $("#right h1").first().after(qlink);

		if(durl){
			tdallsearch += '<td valign="middle" class="function allsearch reviews" ><a href="' + durl + '/reviews" target="_blank" ><span class="icon">&#xe60b;</span><br /><span class="title"><span class="desktop">豆瓣</span>影评</span></a></td>';

			tdallsearch += '<td valign="middle" class="function allsearch discussion" ><a href="' + durl + '/discussion" target="_blank" ><span class="icon">&#xe872;</span><br /><span class="title"><span class="desktop">影片</span>论坛</span></a></td>';
		
			//海报剧照
			var doubanposter = durl + "/photos?type=R";
			if(isMobile)doubanposter = "https://m.douban.com/movie/subject/" + durl.split('/subject/')[1] + "/all_photos";
			tdallsearch += '<td valign="middle" class="function allsearch posters" ><a href="' + doubanposter + '" target="_blank" ><span class="icon">&#xe620;</span><br /><span class="title">剧照<span class="desktop">海报</span></span></a></td>';
			
		}//end if durl
		
		
		//原声音乐
        if (/music.163.com/.test(videourl)){
			tdallsearch += '<td class="function allsearch music desktop"><a href="' + videourl + '"><span class="icon">&#xe608;</span><br /><span class="title">原声<span class="desktop">音乐</span></span></a></td>';
		}else{
			tdallsearch += '<td class="function allsearch music desktop"><a href="//music.163.com/#/search/m/?type=10&s=' + title + '"><span class="icon">&#xe608;</span><br /><span class="title"><span class="desktop">搜索</span>原声</span></a></td>';
		}
		
		//书籍原著
        if (/名著|小说/.test(tags)) tdallsearch += '<td valign="middle" class="function allsearch goods book" ><a href="javascript:tbsearch(\'' + title + '书籍\')" target="_blank" onclick="javascript:hits(413,413,75)" ><span class="icon">&#xe785;</span><br /><span class="title">书籍<span class="desktop">原著</span></span></a></td>';
		
		//tdallsearch += '<td valign="middle" class="function allsearch goods disc" ><a href="javascript:tbsearch(\'' + title + '光盘\')" target="_blank" onclick="javascript:hits(413,413,75)" ><span class="icon">&#xe657;</span><br /><span class="title"><span class="desktop">正版</span>光盘</span></a></td>';
		//tdallsearch += '<td valign="middle" class="function allsearch goods posters" ><a href="javascript:tbsearch(\'' + title + '海报\')" target="_blank" onclick="javascript:hits(413,413,75)" ><span class="icon">&#xe620;</span><br /><span class="title"><span class="desktop">挂画</span>海报</span></a></td>';
		//tdallsearch += '<td valign="middle" class="function allsearch goods toy" ><a href="javascript:tbsearch(\'' + title + '\')" target="_blank" onclick="javascript:hits(413,413,76)" ><span class="icon">&#xe676;</span><br /><span class="title"><span class="desktop">电影</span>周边</span></a></td>';
		
		//影票
		var wxticket = "";
		if(isWechat && !inFrame)wxticket = '<wx-open-launch-weapp style="display:block;position:absolute;width:100%;height:100%;left:0;top:0;opacity:0;" id="launch-btn-weapp-ticket2" username="gh_2ad1b9ca7a85" path="pages/movie/movie?refer_userId=543326"><template>折扣影票<br /><br /><br /><br /></template></wx-open-launch-weapp>';
		//if(!isMobile)tdallsearch += '<td valign="middle" class="function allsearch ticket"><a href="javascript:popImg(\'/img/qr_wximvcat.jpg\')" onclick="hits(413,413,77)" style="color:red"><span class="icon">&#xe622;</span><br /><span class="title">85折影票</span></a>'+ wxticket +'</td>';
		
		//微信群
		var groupurl = "javascript:popImg('/img/qr_wxlonelywalle.jpg')";
		//tdallsearch += '<td valign="middle" class="function allsearch wechat"><a href="'+ groupurl +'"  onclick="hits(413,413,77)"><span class="icon">&#xe681;</span><br /><span class="title"><span class="desktop">微信</span>群聊</span></a></td>';
		
		//剪辑素材
		var clipurl ="//www.yugaopian.cn/?view=search&keyword=" + title;
		if(isMobile) clipurl ="http://m.yugaopian.cn/?view=list&keyword=" + title;
        //tdallsearch += '<td valign="middle" class="function allsearch clip desktop"><a href="'+ clipurl +'"><span class="icon">&#xe8f1;</span><br><span class="title"><span class="desktop">剪辑</span>素材</span></a></td>';
		
		//复制信息
        tdallsearch += '<td valign="middle" class="function allsearch copy"><a href="javascript:$(\'#summary #info\').dblclick();"><span class="icon">&#xe630;</span><br><span class="title">复制<span class="desktop">信息</span></span></a></td>';
		
	
		if($(".function.allsearch").length > 0)$(".function.allsearch").remove();
		$("#summary tr").append(tdallsearch);
		
    }//end if
	
	//
	checkmovieurl(fileurl);
	checkmovieurl(videourl);
	
}
//end 全网搜索

function movieinfo(data,durl){
	var title = data.title;
	var id = data.id;
	if(!/upload|weserv/.test(imageurl))imageurl = "https://api.mvcat.com/image/?url=" + data.pic.large;
	var tags = data.tags;
	
    if($("#summary,#copyright,#doubansummary").length>0)$("#summary,#copyright,#doubansummary").remove();
	
	if($("#content").length==0) $("#right h1").first().after('<div class="douban" id="content"></div>');
	
    $("#right h1").first().after('<p id="copyright" style="text-align: right;font-size: 0.75em;"></p><table width="100%" border="0" cellpadding="8" cellspacing="0" class="summary douban functions" id="summary"><tbody><tr><td class="function poster desktop"></td><td id="info" class="info"></td></tr></tbody></table>');
	
    $("html,body").animate({scrollTop:0}, "middle");
	
            if (data.lineticket_url) {
                var ctip = '声明：请支持正版购票观看。';
            } else {
                var ctip = '<a href="mailto:15311462018@qq.com" onClick="alert(\'15311462018@qq.com\')">声明：观看将跳转第三方正版网站，版权问题请点此联系站长。';
            }
            //$("#copyright").html(ctip);
			
            //海报
            $("#summary .poster").first().html('<img id="poster" src="' + imageurl + '" data-original="' + imageurl.replace('m_ratio_poster','l') + '" />').css("background-image", "url('" + imageurl + "')");
			$("#copyright").before('<div class="poster mobile" style="background-image:url(\'' + imageurl + '\');height:auto;padding-bottom:0;box-shadow:none;"><img src="' + imageurl + '" style="position:relative;height:auto!important;" onclick="popImg(this.src)" /></div>');
			
			//影票
			var tdticket = "";
			var wxticket = "";
			if(isWechat && !inFrame)wxticket = '<wx-open-launch-weapp style="display:block;position:absolute;width:100%;height:100%;left:0;top:0;opacity:0;" id="launch-btn-weapp-ticket2" username="gh_2ad1b9ca7a85" path="pages/movie/movie?refer_userId=543326"><template>折扣影票<br /><br /><br /><br /></template></wx-open-launch-weapp>';
			if(data.lineticket_url != '')tdticket += '<td valign="middle" class="function ticket"><a href="javascript:popImg(\'/img/qr_wximvcat.jpg\')"  onclick="hits(413,413,77)" style="color:red"><span class="icon">&#xe622;</span><br /><span class="title">85折影票</span></a>'+ wxticket +'</td>';
			
            //观看
			var freewatch='';
			var vipwatch='';
			try{
				for(var i=0;i < Math.min(data.vendors.length,15);i++){
					if(data.vendors[i].payment_desc == "免费观看")continue;
					//$('#summary #info').after('<td class="function play charge '+ data.vendors[i].id +' tooltip" title2="跳转 [' + data.vendors[i].title + '] 观看"><a href="' + data.vendors[i].url.split("?")[0] + '" target="_blank"><span class="icon">&#xe662;</span><br /><span class="title">'+ data.vendors[i].title +'<br />￥ VIP</span></a></td>');
					vipwatch += '<a href="' + data.vendors[i].url.split("?")[0] + '" target="_blank">'+ data.vendors[i].title +'（VIP）</a>';
				}
				for(var i=0;i < Math.min(data.vendors.length,15);i++){
					if(data.vendors[i].payment_desc != "免费观看")continue;
					if(/咪咕/.test(data.vendors[i].title))continue;
					//$('#summary #info').after('<td class="function play free '+ data.vendors[i].id +' tooltip" title2="跳转 [' + data.vendors[i].title + '] 观看"><a href="' + data.vendors[i].url.split("?")[0] + '" target="_blank"><span class="icon">&#xe87c;</span><br /><span class="title">'+ data.vendors[i].title +'<br />@ 免费</span></a></td>');
					freewatch += '<a class="hover" href="' + data.vendors[i].url.split("?")[0] + '" target="_blank">'+ data.vendors[i].title +'（免费）</a>';
				}
			}catch(err){console.log(err)};
			
            //评分
			var rating = data.rating.value;
			if(!rating)rating = "&#xe71c;";
            var tdrating = '<td valign="middle" class="function rating douban" onclick="copy(\''+ durl +'\');jsalert(\'已复制 > 豆瓣链接\');window.open(\''+ durl +'\');"><a href="' + durl + '/comments" target="_blank"><span class="icon">' + rating + '</span><br /><span class="title"><span class="desktop">评分</span>短评</span></a></td>';
			
            //演员poster
            //if ($("#summary").width() > 800) {
                if ($("#summary .actors").length > 0) $("#summary .actors").remove();
				var tdactors = "";
                if(data.actors)for(var i=0;i < Math.min(data.actors.length,2);i++){
                    if(data.actors[i].avatar)tdactors += '<td valign="middle" class="poster function actors desktop" style="background-image:url(\'//api.mvcat.com/image/?url=' + data.actors[i].avatar.large + '\')"><img width="100%" src="https://api.mvcat.com/image/?url=' + data.actors[i].avatar.large + '" data-original="https://api.mvcat.com/image/?url=' + data.actors[i].avatar.large.replace('s_ratio_celebrity','l') + '" class="tooltip" title="主演：' + data.actors[i].name +'"/></td>';
                }
            //}
            
            //内容自动隐藏
            //if($("#content").html().length<500){
            //$("#content").hide();
            //$("#content").before('<a href="#content" class="showcontent" style="display:block;margin:1em;text-align:center;text-decoration:underline;cursor:pointer;">详细资料 </a>');
            //$("#content").after('<div class="qlink none"><a href="#content" class="showqlink" style="display:block;margin:1em;text-align:center;text-decoration:underline;cursor:pointer;">更多资源 </a>'+qWatch(title)+qDown(title)+qData(title)+qReview(title)+'</div>');
            //$(".showcontent").click(function(){$("#content,.qlink").slideToggle(0);})
            //}else{}
            //if(videourl.length>0 && fileurl.length>0){$("#info").hide();}
            //国语电影检测
            //try{
            //if(unescape(data.countries).indexOf("中国")!==-1){
            //$(".function.subtitles").remove();}
            //}catch(e){};
			
			//原名
			var original_title = '';
			if(data.original_title != ''){
				original_title = ' <a class="link" href="//www.baidu.com/s?wd=' + data.original_title + ' magnet" target="_blank">' + data.original_title + '</a>';
			}
			var rating = '';
			if(data.rating.value > 0)rating = data.rating.value +'分';
            var infotitle = '<div><strong>片名：</strong><span>' + data.title + original_title + '（<a href="/search/?type=AddDate&channelID=3&word='+ data.year +'">' + data.year +'</a>）'+ rating +'</span>&emsp;</div>';
			
            //别名
            var aka = "";
			var infoaka = "";
            if(data.aka)for(var i=0;i < Math.min(data.aka.length,10);i++){
                aka += '<a class="link" href="//www.baidu.com/s?wd='+ data.aka[i].split("(")[0] +' magnet" target="_blank">'+ data.aka[i] +'</a> ';
            }
            if(aka)infoaka = '<div><strong>别名：</strong><span>' + aka + '</span>&emsp;</div>';
			
            //上映
            var pubdate = "";
            var infopubdate = "";
            if(data.pubdate)for(var i=0;i < Math.min(data.pubdate.length,5);i++){
                pubdate += data.pubdate[i] + ' ';
            }
            if (pubdate)infopubdate = '<div><strong>上映：</strong><span><a href="/search/?type=AddDate&channelID=3&word='+ data.year +'">' + pubdate + '</a></span>&emsp;</div>';
			
			var durations = "";
			var infodurations = "";
            if (data.durations) {
            	for(var i=0;i < Math.min(data.durations.length,10);i++){
                	durations += ''+ data.durations[i] +' ';
            	}
				if(durations)infodurations = '<div><strong>时长：</strong><span>' + durations + '</span>&emsp;</div>';
			}
			
			var infogenres = "";
			var genres = "";
            if (data.genres) {
            	for(var i=0;i < Math.min(data.genres.length,10);i++){
                	genres += '<a class="link" href="/search/?type=Title,subTitle,TagNames&word='+ data.genres[i] +'">'+ data.genres[i] +'</a> ';
            	}
				if(genres)infogenres = '<div><strong>类别：</strong><span>' + genres + '</span>&emsp;</div>';
			}
			
			var infocountries = "";
			var countries = "";
            if (data.countries) {
            	for(var i=0;i < Math.min(data.countries.length,10);i++){
                	countries += '<a class="link" href="/search/?type=Title,subTitle,TagNames&word='+ data.countries[i].replace("中国","") +'">'+ data.countries[i] +'</a> ';
            	}
				if(countries)infocountries = '<div><strong>地区：</strong><span>' + countries + '</span>&emsp;</div>';
			}
			
			var infolanguages = "";
			var languages = "";
            if (data.languages) {
            	for(var i=0;i < Math.min(data.languages.length,10);i++){
                	languages += '<a class="link" href="/search/?type=Title,subTitle,TagNames&word='+ data.languages[i] +'">'+ data.languages[i] +'</a> ';
            	}
				if(languages)infolanguages = '<div><strong>语言：</strong><span>' + languages + '</span>&emsp;</div>';
			}
			
            //导演
            var directors = "";
            var tddirectors = "";
			if(data.directors)for(var i=0;i < Math.min(data.directors.length,5);i++){
                if(data.directors[i] == "undefined")continue;
				
                directors += '<a class="link" href="/search/?type=Title,TagNames&word='+ data.directors[i].name +'">'+ data.directors[i].name +'</a> ';
				
				if(data.directors[i].avatar && i==0)tddirectors += '<td valign="middle" class="poster function actors desktop" style="background-image:url(\'//api.mvcat.com/image/?url=' + data.directors[i].avatar.large + '\')"><img width="100%" src="https://api.mvcat.com/image/?url=' + data.directors[i].avatar.large + '" data-original="https://api.mvcat.com/image/?url=' + data.directors[i].avatar.large.replace('s_ratio_celebrity','l') + '" class="tooltip" title="导演：' + data.directors[i].name +'"/></td>';
            }
			var infodirectors = "";
            if (directors != "") {
                infodirectors = '<div><strong>导演：</strong><span>' + directors + '</span>&emsp;</div>';
            }
            //演员
            var actors = "";
            if(data.actors)for(var i=0;i < Math.min(data.actors.length,10);i++){
                if(data.actors[i].name == "undefined")continue;
                actors += '<a class="link" href="/search/?type=Title,TagNames&word='+ data.actors[i].name +'">'+ data.actors[i].name +'</a> ';
            }
			var infoactors = "";
            if (actors != "") {
                infoactors = '<div><strong>演员：</strong><span>' + actors + '&emsp;</div>';
            }
			
			//写入页面
			$('#summary #info').html(infotitle + infoaka + infopubdate + infodurations + infogenres + infocountries + infolanguages + infodirectors + infoactors).after(tddirectors + tdactors + tdrating + tdticket);
		   
		   //简介
            if (data.intro != null) {
                $("#summary").after('<p id="doubansummary" class="douban doubansummary" style="font-size:0.75em;max-height2:15em!important;overflow: auto;"><strong>简介：</strong><span>' + data.intro + "</span></p>");
		        $("#doubansummary").prepend('<div class="mobile nowrap">' + $('#summary #info').html() + "</div>"); 
            }
			
		    //标签
			try{
			   if($('#right h1 .tags').length == 0)$('#right h1').first().append('<div class="tags clear"></div>');
		       if(data.tags)for ( var i = 0; i < data.tags.length; i++){
				   var tag = data.tags[i].name;
		           if($("#right h1 .tags .tag#" + tag).length == 0)$('#right h1 .tags').append('<a class="tag" id="'+ tag +'" href="/search/?type=tagNames,Title,subTitle&word='+ tag +'">'+ tag +'</a>');
		       }
		       if(subtitle)for ( var i = 0; i < subtitle.split(",").length; i++){
				   var subgenre = subtitle.split(",")[i];
		           if($("#right h1 .tags .tag#" + subgenre).length == 0)$('#right h1 .tags').append('<a class="tag" id="'+ subgenre +'" href="/search/?type=tagNames,Title,subTitle&word='+ subgenre +'">'+ subgenre +'</a>');
		       }
			   if(data.genres)for(var i=0;i < Math.min(data.genres.length,3);i++){
				   var genre = data.genres[i];
		           if($("#right h1 .tags .tag#" + genre).length == 0)$('#right h1 .tags').append('<a class="tag genre" id="'+ genre +'" href="/search/?type=tagNames,Title,subTitle&word='+ genre +'">'+ genre +'</a>');
		       }
			   if(data.countries)for(var i=0;i < Math.min(data.countries.length,3);i++){
				   var countrie = data.countries[i];
		           if($("#right h1 .tags .tag#" + countrie).length == 0)$('#right h1 .tags').append('<a class="tag countrie" id="'+ countrie +'" href="/search/?type=tagNames,Title,subTitle&word='+ countrie +'">'+ countrie +'</a>');
		       }
			   //if(data.year && $("#right h1 .tags .tag#" + data.year).length == 0)$('#right h1 .tags').append('<a class="tag year" id="'+ data.year +'" href="/search/?type=AddDate&channelID=3&word='+ data.year +'">'+ data.year +'</a>');
			   if(data.actors)for(var i=0;i < Math.min(data.actors.length,3);i++){
				   var actor = data.actors[i].name;
		           //if($("#right h1 .tags .tag#" + actor).length == 0)$('#right h1 .tags').append('<a class="tag actor" id="'+ actor +'" href="/search/?type=tagNames,Title,subTitle&word='+ actor +'">'+ actor +'</a>');
		       }
			   if(data.directors)for(var i=0;i < Math.min(data.directors.length,3);i++){
				   var director = data.directors[i].name;
		           //if($("#right h1 .tags .tag#" + director).length == 0)$('#right h1 .tags').append('<a class="tag director" id="'+ director +'" href="/search/?type=tagNames,Title,subTitle&word='+ director +'">'+ director +'</a>');
		       }
			}catch(err){}
	
		   
		   //复制信息
		   $("body").on("click","#summary #info strong,.doubancomment strong,#doubansummary strong",function(){
				copy($(this).next("span").text());
				jsalert("已复制 > " + $(this).text().replace("：",""));
				return false;//阻止冒泡
			})
		   
		   $("#summary #info,#doubansummary").dblclick(function(){
				var txt = $('#doubansummary').text().replace(/\u2003/g,"\n"); //中文空格[ ]\u2003
				copy(txt + '\n\n来源：' + location.href);
				jsalert('已复制 > 影片信息');
				return false;//阻止冒泡
			})
		   
		   $("#right h1").on("mousedown",".sorter",function(){
				copy($(this).text().replace(" · ",""));
				jsalert("已复制 > 简介");
				return false;//阻止冒泡
			})
		   
			allsearch(data.title,durl);
			$('.qBox.qwatch a').not(".hover").first().before(freewatch);
			$('.qBox.qwatch').append(vipwatch);
			$('.qBox.qreview a').first().attr("href",durl + "/comments");
			
		   
		   //宽屏模式
            if ($("#summary").outerWidth() > $("#summary").parent().width()) {
				//$("body").addClass("swipeLeft");
			}
		   
            //去除过多单元格
            try {
                function cleartd() {
				  setTimeout(() => {
					var e = $("#summary .function").not(".rating,.ticket,.search,.ticket,.copy,.posters,.free:first");
                    if ($("#summary").outerWidth() > ($("#summary").parent().width() + 5)) {
                        e.filter(":visible").last().hide(0);
                    }else if ($("#summary #info").width() > 320 ) {
						e.filter(":hidden").last().show(0);
					}
					cleartd();
                  },100)
				}
				cleartd();
				
                if ($("body").width() <= 1440 && !inFrame) {
                    //$("body").addClass("swipeLeft");
                }
                if (channelindex == "cartoon") {
                    $("#summary .actors").remove();
                }

            } catch (e) {}
			

            $("#summary .tooltip").tooltip();

            $("body").removeClass("loading");
            
            try {
                $(".qBox.qcommentary").append('<a href="//www.youtube.com/results?search_query=' + encodeURI(data.original_title) + '" target="_blank">YouTube</a>');
                $(".qBox.qwatch").append('<a href="//www.google.com/search?q=' + encodeURI(data.original_title) + '" target="_blank">Google</a>');
                $(".qBox.qdata").append('<a href="//en.wikipedia.org/wiki/' + encodeURI(data.original_title) + '" target="_blank">Wikipedia</a>');
                $(".qBox.qreview").append('<a href="//www.imdb.com/find?q=' + encodeURI(data.original_title) + '" target="_blank">IMDB</a><a href="//www.rottentomatoes.com/search/?search=' + encodeURI(data.original_title) + '" target="_blank">烂番茄</a>');
            } catch (e) {}
			
			try {
                if ($("body.search").length > 0) {//shareData
					$("h1").html($("h1").html().replace("正在搜索",data.title));
					otitle = data.title;
					shareData.title = data.title + "（"+ data.year +"）";
					if (data.rating.value > 0)shareData.title += data.rating.value +"分";
					if (directors != "undefined") {directors = $("<p>" + directors+"</p>").text() + '导演，'}else{directors = ""};
					if (actors != "undefined") {actors = $("<p>"+actors+"</p>").text()+ '主演的'}else{actors = ""};
					shareData.desc = data.year + '年上映，由' + directors + actors + data.genres + '电影。'
					shareData.imgUrl = data.pic.normal;
					updateWxShareData(shareData);
                }
			 } catch (e) {}
			 
	//解说
	function getwatch(){
		$.ajax({
        type:"GET",
        url:"//api.mvcat.com/search/?type=watch&q=" + title, 
        dataType:"json",
        success:function(data) {
			console.log(data);
			for(var i=0;i < Math.min(data.length,100);i++){
				var subtitle = data[i].subtitle || "在线观看";
				var e = $(".qBox.qwatch");
				if(/解说|解读|解析|影评|访谈/.test(subtitle))e = $(".qBox.qcommentary");
				e.prepend('<a class="hover getwatch tooltip" title="'+ data[i].summary +'" href="'+ data[i].videourl +'" onclick="hits(516,' + data[i].channelid + ',' + data[i].id + ')">'+ subtitle +'（@'+ data[i].author +'）</a>');
				$("a.author").attr("href",data[i].videourl.split("#")[0]).attr("target","_blank").html(data[i].author);
			}
			$(".getwatch").tooltip();
		},
        error:function(data) {}
    });
	}	
	getwatch();
			 
	//下载
	function getdownloads(){
		$.ajax({
        type:"GET",
        url:"//api.mvcat.com/search/?type=download&q=" + title, 
        dataType:"json",
        success:function(data) {
			console.log(data);
			for(var i=0;i < Math.min(data.length,100);i++){
				var subtitle = data[i].subtitle || "网络资源";
				$(".qBox.qdown").prepend('<a class="hover getdownloads tooltip" title="'+ data[i].summary +'"" href="'+ data[i].fileurl +'" target="_blank" onclick="hits(511,' + data[i].channelid + ',' + data[i].id + ');copy(\''+ data[i].summary + '\\n' + data[i].fileurl +'\')">'+ subtitle +'（@网盘）</a>');
			}
			$(".getdownloads").tooltip();
		},
        error:function(data) {}
    });
	}	
	getdownloads();
	
	//影评
	function getreviews(){
		var reviewsurl = "https://frodo.douban.com/api/v2/tv/" + id + "/reviews?start=0&count=5&apikey=054022eaeae0b00e0fc068c0c0a2102a";
		$.ajax({
        type:"GET",
        url:"//api.okzy.tv/api.php/provide/vod/at/json/?ac=detail&t=36&wd=" + title, 
        dataType:"json",
        success:function(data) {
		reviews = data.reviews;
		try {$("#content .doubancomment").remove();} catch (e) {}
		//console.log(reviews);
		for(var i=0;i < Math.min(reviews.length,100);i++){
			if(reviews[i] == "undefined")continue;
			$("#content").first().prepend('<blockquote class="douban doubancomment popular_reviews"><strong style="font-weight:bold!important">' + reviews[i].user.name + '：</strong><span>' + reviews[i].abstract + ' —— 影评<a href="'+ reviews[i].url +'">《'+ reviews[i].title +'》</a></span></blockquote>');
		}
		},
        error:function(data) {
        }
    });
	}	
	//getreviews()
	
	//视频解说
	function getvideo(){
		$.ajax({
        type:"GET",
        url:"//api.okzy.tv/api.php/provide/vod/at/json/?ac=detail&t=36&wd=" + title, 
        dataType:"json",
        success:function(data) {
		//console.log(data);
		if(data.total==0)return;
		var title = data.list[0].vod_name;
		var urls = data.list[0].vod_down_url;
		var poster = data.list[0].vod_pic;
		var url = urls.split("#");
		for(var i = url.length-1; i >= 0; i--){
			$("#content .doubancomment").last().after('<div class="media grayscale 电影解说"><video controls preload="none" width="100%" height="100%" poster2="' + poster + '" x-webkit-airplay="true"><source src="' + url[i].split("$")[1] + '" type="video/mp4" /></video></div>');		
			//$("#content .doubancomment").last().after('<iframe class="media grayscale" src="https://open.kkvod.aoliooo.com/?title=' + title + '&src=' + url[i].split("$")[1] + '" frameborder=0 allowfullscreen="true" allowtransparency="true"></iframe>');
		}//end for
		$("#content .doubancomment").last().after('<h2 id="电影解说">电影解说</h2>');
		$('#summary #info,#summary .poster,#summary .rating').last().after('<td class="function play" ><a href="#电影解说" onclick="$(\'.media.电影解说 video\')[0].play()" ><span class="icon">&#xe87c;</span><br /><span class="title">电影解说<br />@ 免费</span></a></td>');
        },
        error:function(data) {
        }
    });
	}

	//剧照
	function getphotos(){
	$.ajax({
        type:"GET",
        url:"https://frodo.douban.com/api/v2/movie/" + id + "/photos?start=0&count=12&apiKey=054022eaeae0b00e0fc068c0c0a2102a",
        dataType:"jsonp",
        success:function(data) {
		photos = data.photos;
		//console.log(photos);
		if(photos.length > 0)$("#content").first().append('<h2>剧照截图</h2>');
		for(var i=0;i < Math.min(photos.length,12);i++){
			if(photos[i] == "undefined")continue;
			var src = '//api.mvcat.com/image/?url='+ photos[i].image.large.url;
			$("#content").first().append('<div class="list"><p class="poster" style="padding-bottom: 62%;background-image:url(\''+ src +'\');"><img src="'+ src +'" /></p></div>');
		}
        },
        error:function(data) {
        }
    });
	}	

	//短评
	function getcomment(){
		$.ajax({
        type:"GET",
        url:"https://frodo.douban.com/api/v2/movie/" + id + "/interests?apiKey=054022eaeae0b00e0fc068c0c0a2102a",
        dataType:"jsonp",
        success:function(data) {
		comments = data.interests;
		try {$("#content .doubancomment").remove();} catch (e) {}
		//console.log(comments);
		if(comments.length > 0)$("#content").first().append('<h2>网友影评</h2>');
		for(var i=0;i < Math.min(comments.length,12);i++){
			if(comments[i] == "undefined")continue;
			$("#content").first().append('<blockquote class="douban doubancomment popular_comments"><strong style="font-weight:bold!important">' + comments[i].user.name + '：</strong><span>' + comments[i].comment +'</span></blockquote>');
		}//end for
		getphotos();
		//getvideo();
        },
        error:function(data) {
        }
    });
	}
	
	//getcomment();
	
	//同类推荐
	function getrecommend(q){
	$.ajax({
		type:"GET",
		url: "//api.mvcat.com/douban/search/?type=movie&q=" + q,
		dataType:"jsonp",
		success:function(data) {
		//console.log(data);
		if(data.subjects){
		recommend = data.subjects;
		for(var i=0;i < Math.min(recommend.length,12);i++){
			if(recommend[i] == "undefined" || recommend[i].id == id || /default/.test(recommend[i].pic.normal))continue;
			var rating = recommend[i].rating.value + '分 / ';
			if(parseInt(rating)==0)rating = "";
			$("#rightside .related").append('<a href="/movie/douban/?'+ recommend[i].id +'" class="list"><p class="poster" style="background-image:url(\'//api.mvcat.com/image/?url='+ recommend[i].pic.normal +'\')"></p><h3 class="title">'+ recommend[i].title + '</h3><p class="summary">' + rating + (recommend[i].card_subtitle || '') + '</p></a>');
		}
		}
		
		var tags = $("#right .tags .tag");
		if($("#rightside .related .list").length == 0 && tags.length > 0)getrecommend(tags.eq(Math.floor(Math.random() * tags.length)).text());
		},
		error:function(data) {
		}
	});
	}
	
	$(document).ready(function(){
		if($("#rightside").length > 0 && $("#rightside .related .list").length == 0)getrecommend(title.split(" ")[0]);
	})
			
}//end movieinfo

//getJSONP
var responseHandler; // 定义一个全局作用域的函数

function getJSONP(url, success, error) {
  if (url.indexOf('?') === -1) {
    url += '?callback=responseHandler';
  } else {
    url += '&callback=responseHandler';
  }

  // 创建script 标签
  var script = document.createElement('script');


  // 在函数内部实现包裹函数，因为要用到
  responseHandler = function(json) {
    success(json)
  }

  var randnum = Math.floor(Math.random() * 1e5 + 1);
  script.setAttribute('src', url);
  script.setAttribute('id', randnum);
  document.body.appendChild(script);
  script.onload = function () {
	  document.getElementById(randnum).remove();
	  }
  script.onerror = function () {
	  error()
	  }
}
//end getJSONP

//douban movie api

function doubanmovie(id,callback) {
	if ($("body.search,body.content.movie,body.content.history").length == 0) return; //限定内容页
    $("body").addClass("loading");
    var durl = "https://movie.douban.com/subject/" + id;
    var apiurl = "//api.mvcat.com/douban/movie/?id=" + id;
	
	$.ajax({
        type:"GET",
        url:apiurl,
        dataType:"jsonp",
        success:function(data) {
		//console.log(data);
		if(data.msg || data.localized_message){
			if(title){
				allsearch(title);
			}else{
				location.href="/404.html";
			}
		}else{
			movieinfo(data,durl);
		}
		$("body").removeClass("loading");
		
		if(callback && typeof callback === "function")callback();
    
        },
        error:function(data) {
			$("body").removeClass("loading");
        }
    });

}
//end doubanmovie()

if($('body.content.short,body.content.clip,body.content.cut').length > 0){
	checkmovieurl(videourl);
}else if (/douban.com\/subject\//.test(source)) {
    var id = source.split("/subject/")[1].split("/")[0];
    doubanmovie(id);
}else if($('body.content.movie').length > 0){
	allsearch(title);
}


//#mplay 点击
$("body").on("click", "#mplay", function () {
    if (bgm) {
        saveCookie('bgm', 'pause', 60);
    } else {
        saveCookie('bgm', 'play', 60);
    }
	if(isMobile)fullScreen();
});


//#mplay 双击
$("body").on("dblclick", "#mplay", function () {
    var url = $("#mplay").attr("data-url");
    media = $("#mplay").attr("data-media");
    if (url != "undefined") {
        window.open(url);
        return false;
    } else if (media != "undefined") {
        popIframe(media);
        return false;
    } else {
        return false;
    }
})

//点击播放
$("body").on("click", ".cover", function () {
    if ($(this).hasClass("playing")) {
        bgmPause();
    } else {
		if($(this).is($("#mplay")) && (!$(this).attr("data-media") || cyclemode == "random")){
			randomsong();
		}else{
			bgmPlay($(this));
		}
		if($("body.music.root").length > 0 && isMobile)fullScreen();
    }
});

/*
 * 将秒数格式化时间
 * @param {Number} seconds: 整数类型的秒数
 * @return {String} time: 格式化之后的时间
 */
function formatTime(seconds) {
	var min = Math.floor(seconds / 60),
		second = Math.round(seconds % 60),
		hour, newMin, time;
	if (min > 60) {
		hour = Math.floor(min / 60);
		newMin = min % 60;
	}
	if (second < 10) {
		second = '0' + second;
	}
	if (min < 10) {
		min = '0' + min;
	}
	return time = hour ? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
}

//音乐快捷键


function vol(obj, step) {
    var volume = obj.volume + step;
    if (volume >= 1) {
        volume = 1;
    }
    if (volume <= 0) {
        volume = 0;
    }
    obj.volume = volume;
    jsalert("音量调节：" + Math.round(volume * 100) + "%");
    saveCookie('volume', volume, 60);
}

function volup() {
    if (bgm == false) {
        bgmPlay($("#mplay"));
    };
    try {
        vol($("#aplayer")[0], 0.05)
    } catch (err) {
        jsalert("当前状态不支持：音量调节")
    };
}

function voldown() {
    if (bgm == false) {
        bgmPlay($("#mplay"));
    };
    try {
        vol($("#aplayer")[0], -0.05)
    } catch (err) {
        jsalert("当前状态不支持：音量调节")
    };
}

function fast(obj, step) {
    var t = obj.currentTime + step;
    var tt = obj.duration;
    if (t >= tt) {
        t = tt;
    }
    if (t <= 0) {
        t = 0;
    }
    obj.currentTime = t;
	if (isNaN(tt)){
		jsalert("正在加载中请稍候！");
		return;
	}
    if (step > 0) {
        jsalert("快进：" + formatTime(t) + "/" + formatTime(tt))
    } else {
        jsalert("快退：" + formatTime(t) + "/" + formatTime(tt))
    }
}

function FF() {
    if (bgm == false) {
        bgmPlay($("#mplay"));
    };
    try {
        fast($("#aplayer")[0], 5)
    } catch (err) {
        jsalert("当前状态不支持：快进")

    };
}

function FR() {
    if (bgm == false) {
        bgmPlay($("#mplay"));
    };
    try {
        fast($("#aplayer")[0], -5)
    } catch (err) {
        jsalert("当前状态不支持：快退")
    };
}

//randomsong

var cyclemode = getCookie("cyclemode") || "random";

var randomsongindex = -1;

function randomsong(i) {
    if (typeof(randomsongs) != "undefined") {
		
        if(counter>3 && !fullscreen && !isApp)location.reload();//性能
		
		if(i){
			if(i < 0)i = randomsongs.length - 1;
			if(i >= randomsongs.length)i = 0;
			var randomsong=randomsongs[i];
			randomsongindex = i;
			console.log("randomsongindex:" + i);
		}else{
			var i = Math.floor(randomsongs.length*Math.random());
			randomsong = randomsongs[i];
		}
		
		$("#mplay").attr("data-title",randomsong[0]);  
		$("#mplay").attr("data-media",randomsong[1]);
		$("#mplay").attr("data-cover",randomsong[2]);
		$("#mplay").attr("data-author",randomsong[3]);
		$("#mplay").attr("data-source",randomsong[4]);
		$("#mplay").attr("data-file",randomsong[5]);
		$("#mplay").attr("data-url",randomsong[6]);
		$("#mplay").css("background-image","url('"+randomsong[2]+"')");
		
		if($("body.root.mvcat").length > 0){
			musicmask = true;
        	cyclemode = "random";
			if(!bgm)jsalert("按键R切换背景",5000);
        	$("#right #searchword").val(randomsong[0].replace("《","").replace("》",""));
		}
		
		bgmPlay($("#mplay"));
        //jsalert("随机一首");
		
		
    } else if ($("body.music #right .list .cover,body.music #rightside .list .cover").length >= 2) {
        var i = Math.round(Math.random() * ($(".list .cover").length - 1));
        bgmPlay($(".list .cover").eq(i));
        //jsalert("随机一首：" + $(".list .cover.playing").attr("data-title"));
        $("html,body").animate({
            scrollTop: $(".list .cover.playing").offset().top - 30
        }, 500);
    } else {
        bgmPlay($("#mplay"));
        //jsalert("循环播放：" + mediaTitle);
    }
    //randmode();
}

//切歌

function prevsong() {
    if (cyclemode == "random" || ($(".list .cover").length <= 1 && $("body.music.content").length == 0)) {
        randomsong(randomsongindex-1)
    } else {
        var i = $(".list .cover").index($(".list .cover.playing")) - 1;
        if (i < 0) {
            i = $(".list .cover").length - 1;
        };
        bgmPlay($(".list .cover").eq(i));
        jsalert("上一首：" + $(".list .cover.playing").attr("data-title"));
        $("html,body").animate({
            scrollTop: $(".list .cover.playing").offset().top - 30
        }, 500);
    }
}

function nextsong() {
    if (cyclemode == "random" || ($(".list .cover").length <= 1 && $("body.music.content").length == 0)) {
        randomsong(randomsongindex+1)
    } else {
        var i = $(".list .cover").index($(".list .cover.playing")) + 1;
        if (i > $(".list .cover").length - 1) {
            i = 0;
        };
        bgmPlay($(".list .cover").eq(i));
        jsalert("下一首：《" + $(".list .cover.playing").attr("data-title") + "》" + $(".list .cover.playing").attr("data-summary"));
        $("html,body").animate({
            scrollTop: $(".list .cover.playing").offset().top - 30
        }, 500);
    }
}

function autonext(e) {
    e.loop = false;
    e.onended = function () {
        if (cyclemode == "random") {
            randomsong();
        } else {
            volumein(e);
            jsalert("单曲循环：" + mediaTitle);
        }
    }
}

function randmode() {
    $('body').addClass('随机').removeClass('单曲');
    cyclemode = "random";
	$("#cyclemode").prop("checked", false);
}

function singlemode() {
    $('body').addClass('单曲').removeClass('随机');
    cyclemode = "single";
	$("#cyclemode").prop("checked", true);
}

function togglecyclemode() {
    if (cyclemode == "single") {
        randmode();
        jsalert("随机模式");
        saveCookie("cyclemode", "random", 3600);
    } else {
        singlemode();
        jsalert("单曲循环");
        saveCookie("cyclemode", "single", 3600);
    }
}

function togglemusicmask() {
    if (!musicmask) {
        musicmask = true;
        musicmasker();
        saveCookie("musicmask", "on", 3600);
        jsalert("开启背景图片！", 3000);
    } else {
        $("body").removeClass("bgmask musicmask action war sf suspense comedy love spirit cartoon horror crime erotic documentary drama cult joy anger sorrow happy fear love hate lust poem prose motto toplist playlist");
        try{$("div.musicmask .layer").ripples('destroy')}catch(err){};
        $("body .musicmask").stop(true, false).fadeOut(1500, function () {
            $("body .musicmask").remove();
        });
        musicmask = false;
        saveCookie("musicmask", "off", 3600);
		changeColor(getCookie("themecolor"));

        try {
            $("#bloodsmoke,#vertexShader,#fragmentShader").remove();
        } catch (err) {}
        jsalert("关闭背景图片");
    }
    $(window).trigger("resize");
}


$(document).keydown(function (event) {
							  
	console.log("keyCode:" + event.keyCode);
							  
    if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey || /input|textarea/.test(document.activeElement.tagName.toLowerCase()) || $("body").hasClass("soundsleep")) {
        return;
    } else {
		if((event.keyCode === 38 || event.keyCode === 40) && $("body.music.root").length == 0 )return;
        event.preventDefault();
    }

    switch (event.keyCode) {

    // space/enter 播放／停止
    case 32:
        bgmPause();
        break;
    case 13:
        bgmPause();
        break;
    // 多媒体停止 播放／停止
    case 179:
        bgmPause();
        break;
        //上 上一曲
    case 38:
		if($("body.music.root").length > 0){
        	prevsong();
        	break;
		};
        //下 下一曲
    case 40:
		if($("body.music.root").length > 0){
        	nextsong();
        	break;
		};
        //右 快进
    case 39:
        FF();
        break;
        //左 快退
    case 37:
        FR();
        break;
        //+= 音量＋
    case 107:
        volup();
        break;
        //+ 音量＋
    case 187:
        volup();
        break;
        //-_ 音量－
    case 109:
        voldown();
        break;
        //－ 音量－
    case 189:
        voldown();
        break;
        //R 随机播放一首
    case 82:
        randomsong();
        break;
        //S 单曲循环
    case 83:
        $("#cyclemode+label").click();
        break;
        //F 全屏
    case 70:
        if (fullscreen) {
            exitFullScreen();
        } else {
            fullScreen();
        };
        break;
        //N 夜间模式
    case 78:
        if (eyecare) {
            eyecarer("off");
        } else {
            eyecarer("on");
        };
        break;
        //B bgmask
    case 66:
        $("#musicbg+label").click();
        break;
    case 27:
	case 4:
        //esc back
        try{parent.closemask()}catch(err){console.log(err)};
		fullscreen = false;
        break;
    }

});
//end bgm ///////////////////////////////////////////////////////

//favorite
function addFavorite(trigger, ftitle, furl) {
    if (!navigator.cookieEnabled) {
        //判断是否支持Cookie
        return;
    } else {
        //if(getCookie('favorite').replace(/[^\u0000-\u00ff]/g,"aa").length>4050)alert("Cookie存储将满！请删除足迹或整理下收藏吧~");
        var tag = $("#favorite .items")[0];//输出结果DIV id
        var hisCount = 20;//足迹限制
        var favCount = 10;//收藏限制
        var myTitle = ftitle || shareData.title || document.title.split(" · ")[0];//取标题
		myTitle = myTitle.replace(" ", "");
        var myUrl = furl || shareData.link || location.href.split("#")[0].split(location.host)[1];//取地址
        var expTime = new Date(new Date().setDate(new Date().getDate() + 5e3));//设定过期时间为5000天
        var edp = "|||; expires=" + expTime.toGMTString() + ";domain="+ location.host +"; path=/";//组合Cookie参数
        var allCookie = document.cookie;//取出全部Cookie
        var added = document.cookie.indexOf("^^^" + escape(myUrl) + "$$$") != -1;
        var faved = added && document.cookie.indexOf(escape("favorite:" + myTitle) + "^^^") != -1;
        //收藏红心
        if (faved) {
            $(".addfavorite,#ftool .ffavorite").addClass("faved");
        } else {
            $(".addfavorite,#ftool .ffavorite").removeClass("faved");
        }
        //显示收藏
        if (trigger == "show") {
            $("#favorite").addClass("show");
        }
        var preDat = '';
        //★预设置顶内容 <a class="list text" href=""><span class="icon faved"></span><span></span></a>
        if (allCookie.indexOf("favorite=") != -1 && allCookie.indexOf("$$$|||") != -1) {
            //判断是否为第一次浏览
            var myCookieStart = allCookie.indexOf("favorite=") + "favorite=".length;
            var myCookieEnd = allCookie.indexOf("$$$|||");
            var myCookieall = allCookie.substring(myCookieStart, myCookieEnd);
            var myCookie = unescape(myCookieall).split("$$$");
            var myCookieTit = new Array();
            var myCookieUrl = new Array();
            for (var i = 0; i < myCookie.length; i++) {
                var myCookieOne = myCookie[i].split("^^^");
                myCookieTit[i] = myCookieOne[0];
                myCookieUrl[i] = myCookieOne[1];
            }
            var favDat = "";
            var hisDat = "";
            var mfavDat = "";
            var mhisDat = "";
            for (var i = 0; i < myCookie.length; i++) {
                if (/(已删除)/.test(myCookieTit[i])) continue;
                if (/favorite:/.test(myCookieTit[i])) {
                    if (/\/music/.test(myCookieUrl[i])) {
                        var icon = "music";
                        mfavDat += '<a class="list text" href="' + myCookieUrl[i] + '"><span class="icon faved ' + icon + '"></span><span>' + myCookieTit[i].replace("favorite:", "") + "</span></a>";
                    } else {
                        var icon = "heart";
                        favDat += '<a class="list text" href="' + myCookieUrl[i] + '"><span class="icon faved ' + icon + '"></span><span>' + myCookieTit[i].replace("favorite:", "") + "</span></a>";
                    }
                } else if (/history:/.test(myCookieTit[i])) {
                    if (/\/music/.test(myCookieUrl[i])) {
                        var icon = "music history";
                        mhisDat += '<a class="list text" href="' + myCookieUrl[i] + '"><span class="icon ' + icon + '"></span><span>' + myCookieTit[i].replace("history:", "") + "</span></a>";
                    } else {
                        var icon = "history";
                        hisDat += '<a class="list text" href="' + myCookieUrl[i] + '"><span class="icon ' + icon + '"></span><span>' + myCookieTit[i].replace("history:", "") + "</span></a>";
                    }
                }
            }
            //end for
            if ($("body.music").length > 0) {
                var Dat = mfavDat + mhisDat;
            } else {
                var Dat = preDat + favDat + hisDat;
            }
            tag.innerHTML = Dat;
            //输出结果给页面div
            try {
                $(".favorite .items").html(Dat);
            } catch (err) {}
            //页面收藏
            var favCookie = "";
            var hisCookie = "";
            for (var i = 0; i < myCookie.length; i++) {
                if (myCookieUrl[i] == myUrl || /(已删除)/.test(myCookieTit[i])) continue;
                //排序去重
                if (/favorite:/.test(myCookieTit[i])) {
                    if (favCookie.split("$$$").length >= favCount) {
                        //数量限制
                        //jsalert("已达到最大收藏数量<" + favCount + ">,最早的收藏将被覆盖！");
                        continue;
                    }
                    favCookie += escape(myCookieTit[i]) + "^^^" + escape(myCookieUrl[i]) + "$$$";
                } else if (/history:/.test(myCookieTit[i])) {
                    if (hisCookie.split("$$$").length >= hisCount) {
                        //数量限制
                        //jsalert("已达到最大历史记录<"+ hisCount +">,最早的记录将被覆盖！");
                        continue;
                    }
                    hisCookie += escape(myCookieTit[i]) + "^^^" + escape(myCookieUrl[i]) + "$$$";
                }
            }
            var newCookie = favCookie + hisCookie;
            //清空
            if (trigger == "clear") {
                if (confirm("清空足迹？（收藏将保留）")) {
                    document.cookie = "favorite=" + escape("favorite:" + myTitle) + "^^^" + escape(myUrl) + "$$$" + favCookie + edp;
                    document.cookie = "favorite=" + escape("history:" + myTitle) + "^^^" + escape(myUrl) + "$$$" + favCookie + edp;
                    addFavorite();
                    jsalert("已清空足迹！");
                    //$('#favorite').removeClass("show");
                    return;
                }
            }
			//删除
            if (trigger == "delete") {
				document.cookie = "favorite=" + newCookie.replace(escape(myTitle), escape("(已删除)" + myTitle)) + edp;
				addFavorite();
                jsalert("已删除！");
				return;
            }
            if (trigger == "add") {
                if (!faved) {
                    //添加收藏
                    document.cookie = "favorite=" + escape("favorite:" + myTitle) + "^^^" + escape(myUrl) + "$$$" + newCookie + edp;
                    addFavorite();
                    if ($("#favorite").hasClass("show")) {
                        //jsalert("已收藏《" + myTitle + "》");
                    } else {
                        if (isMobile) {
                            //jsalert("已收藏！");
                        }
                        if (!isMobile) {
                            //jsalert("已收藏！鼠标移到红心进入收藏夹。", 3e3);
                        }
                    }
                } else {
                    //删除收藏
                    document.cookie = "favorite=" + newCookie.replace(escape(myTitle), escape("favorite:(已删除)" + myTitle)) + edp;
                    addFavorite();
                    //jsalert("已取消收藏");
                }
            } else {
                //window.addEventListener('unload',function(){//关闭时保存
                if ($("body.root.mvcat").length > 0) return;

                //忽略首页
                if (faved) {
                    //排序
                    document.cookie = "favorite=" + escape("favorite:" + myTitle) + "^^^" + escape(myUrl) + "$$$" + newCookie + edp;
                } else {
                    document.cookie = "favorite=" + escape("history:" + myTitle) + "^^^" + escape(myUrl) + "$$$" + newCookie + edp;
                }
            }
        } else {
            //第一次浏览
            tag.innerHTML = "";
            try {
                $(".favorite .items").html(preDat);
            } catch (err) {}
            //页面收藏
            //if($(".favorite .items").length>0)return;
            if ($("body.root.mvcat").length > 0) return;
            //忽略首页
            document.cookie = "favorite=" + escape("history:" + myTitle) + "^^^" + escape(myUrl) + "$$$" + edp;
        }
    }
}
//end addFavorite

//壁纸下载
var mediacover = $("#mplay").attr("data-cover");
if(/wallpaper/.test(mediacover)){
	try{$("#downwallpaper").remove()}catch(err){};
	$("#favorite h2").append('<span id="downwallpaper" onclick="popImg(\''+ mediacover +'\')" style="float:right;cursor:pointer;">&#xe617;</span>');
}

var playing = false;

//感谢 张鑫旭博客：//www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/
window.AudioContext = window.AudioContext || window.webkitAudioContext;

function playTone() {
    if (!window.AudioContext || isMobile) {
        return;
    };
    var e = "a,input,textarea,img,.cover,label,.closemask,#content .img,body.calendar span,.daodream-launcher-button"; //音效元素
    var audioCtx = new AudioContext();
    var arrFrequency = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
    var start = 0,
        direction = 1;
    $(document).on('mouseenter', e, function () {
        if (bgm || playing || !playtone) {
            return;
        };
        var frequency = arrFrequency[start];
        if (!frequency) {
            direction = -1 * direction;
            start = start + 2 * direction;
            frequency = arrFrequency[start]
        }

        start = start + direction;
        var oscillator = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
        oscillator.start(audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
        oscillator.stop(audioCtx.currentTime + 1)
    })
};

function linkqr(e){
		var title = e.attr("title") || e.attr("data-title");
		if(title && !e.hasClass("qrcode"))return;//过滤文字tooptip
		var href = e.attr("data-href") || e.attr("href");
		if(/\/outlink/.test(href))href = decodeURIComponent(href.split("target=")[1]);
		if(/javascript:|thunder:|ed2k:|ftp:/.test(href))return;
		if(!/\/\//.test(href))href = location.protocol + "//" + location.host + href;
		if(!/^http/.test(href))href = "https:" + href;
		var size = 88;
		if(href.length > 200)size = 200;
		$('body').append('<div id="tempqr" class="tempqr none"></div>');
		var tempqr = $('#tempqr');
		var fillcolor = rgb2hex($("body").css("color"));
		if(autoTextColor(fillcolor) == "#333")fillcolor = "#333";
		tempqr.qrcode({render: 'image', size: size, text: href, fill: fillcolor, background: null});
		tempqr.find('img').attr("width",size).attr("height",size);
		e.attr("data-title",tempqr.html()).addClass("qrcode");
		tempqr.remove();
		e.tooltip();
		e.focus();
		e.mouseleave(function(){e.removeAttr("data-title").removeClass("qrcode");});
		$(window).resize(function(){
			$(".qrcode").removeAttr("data-title");
		})
}
		
//linkqr
if(!isMobile)$('body').on("mouseenter","#right a[href*='/'],#rightside a[href*='/'],#nav a[href*='/']",function(){
	if(!qrmode)return;	
	linkqr($(this));
});

//closecolorpicker
function closecolorpicker(){
	$('#colorpicker,#closecolorpicker').remove();
	$('.jsalert').slideUp(10);
	if(!getCookie("themecolor"))$("#themecolor").prop("checked", false);
}

//pickcolor
function pickcolor(callback) {
$("body").append('<div id="closecolorpicker" style="position:fixed;z-index:99;top:0;width:100%;height:100%;" onclick="closecolorpicker()"></div><canvas width="280" height="280" id="colorpicker" style="position:fixed;z-index:999;top:50%;left:50%;margin-top:-140px;margin-left:-140px;border-radius: 50%;color: #000;box-shadow: 0 0 15px,0 0 0 40px inset;cursor: pointer;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas>');
var canvas = document.getElementById("colorpicker"),
	ctx = canvas.getContext("2d");
canCen = {
	x: canvas.width / 2,
	y: canvas.height / 2
}, mouseAngle = 0, mousePos = {
	x: 0,
	y: 0
}, mouseDist = 50, useMouse = true, canvas.addEventListener("mousemove", function(e) {
	if (useMouse) {
		var clientRect = canvas.getBoundingClientRect(),
			x = (e.clientX - clientRect.left) * (canvas.width / canvas.offsetWidth),
			y = (e.clientY - clientRect.top) * (canvas.height / canvas.offsetHeight),
			n = 180 + (Math.atan2(canCen.y - y, canCen.x - x)) * 180 / Math.PI;
		mouseDist = Math.round((Math.min(canCen.y - 64, Math.sqrt(Math.pow(canCen.x - x, 2) + Math.pow(canCen.y - y, 2))) / (canCen.y - 64)) * 100);
		mouseAngle = Math.round(n % 360);
		mousePos.x = x;
		mousePos.y = y;
		pickedcolor = "hsl(" + mouseAngle + "," + mouseDist + "%, 50%)";
		if (typeof callback === "function")callback(pickedcolor);
	}
}, false);
if(!('ontouchstart' in document.documentElement))canvas.addEventListener("click", function(e) {
	useMouse = !useMouse;
	if (useMouse) {
		canvas.style.color = "#000";
		if(!isMobile)jsalert("移动鼠标选色",15000,"top");
	} else {
		if(!isMobile)jsalert("点击空白退出",15000,"top");
		canvas.style.color = pickedcolor;
	}
	
}, false);

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < 360; i++) {
		var scaleBack;
		ctx.strokeStyle = ctx.fillStyle = "hsl(" + i + "," + mouseDist + "%, 50%)";
		scaleBack = 38;
		ctx.lineWidth = 3
		ctx.beginPath();
		ctx.moveTo(canCen.x, canCen.y);
		ctx.lineTo((canCen.x) + (canCen.x - scaleBack) * Math.cos((i / 360) * Math.PI * 2), (canCen.y) + (canCen.y - scaleBack) * Math.sin((i / 360) * Math.PI * 2));
		ctx.stroke()
	}
	requestAnimationFrame(animate)
}
animate();
}

//changeColor
function changeColor(color){
	if(color != null){
		themecolor = color;
		document.body.style.setProperty('--themecolor',color);
		document.body.style.setProperty('--txtcolor',autoTextColor(color));
		$("body").addClass("themecolor");
	}else{
		document.body.style.removeProperty('--themecolor');
		document.body.style.removeProperty('--txtcolor');
		$("body").removeClass("themecolor");
	}
	$(window).trigger("resize");
}//end changecolor

//iframe内主题
function iframetheme() {
  setTimeout(() => {
	if($("body.themecolor").length==0){
		var themecolor = $("body", parent.document).css("color");
		document.body.style.setProperty("--themecolor",themecolor);
		document.body.style.setProperty("--txtcolor",autoTextColor(themecolor));
		if($("body", parent.document).hasClass("bgmask")){
				$("body").addClass("bgmask");
			}else{
				$("body").removeClass("bgmask");
				}
		iframetheme();
	}
  },300)
}
if(self!=top && $("body.sameframe").length>0)iframetheme();

//changeTheme
function changeTheme(color){
	bgmStop();
	eyecarer("off");
	changeColor(color);
	if(color != null){
		saveCookie('themecolor',color,365);
		$("#themecolor").prop("checked", true);
	}else{
		delCookie('themecolor');
	}
}//end changetheme


//speak
if (window.speechSynthesis){
$("body").on("focus mouseenter","[data-speak]",function(e){
  var content = $(this).attr("data-speak") || this.innerText;
  if (getCookie("playtone") == "on")speechSynthesis.speak(new SpeechSynthesisUtterance(content));
  $(this).blur(function(){speechSynthesis.cancel()});
  $(this).mouseout(function(){speechSynthesis.cancel()})
})
}
  
////////////////////DOC READY
//$(document).ready(function () {

$(function () {
	var href = location.href;
	if(!/#/.test(href))return;
	var hash = decodeURI(href.replace(href.split("#")[0]+"#",""));
	if (/\/\//.test(hash)) {
		if(isIos && isSafari){
			window.open(hash);
		}else{
			popIframe(hash);
		}
	} else if (hash == "play" && videourl) {
		popIframe(videourl);
	} else if (hash == "poster" && imageurl) {
		popImg(imageurl);
	} else if (/mvcat:/.test(hash)) {
		popIframe("//api.mvcat.com/url/?" + hash);
	} else {
		var e = $("a[href='#" + hash + "'],*[id='" + hash + "']");
		if(e.length > 0)e.click();
	}

})

//themecolor
if(getCookie("themecolor"))changeTheme(getCookie("themecolor"));

//eyecare
if(getCookie("eyecare")=="on" && $("body.music").length == 0){eyecarer("on")}


//music autostart
if ($("body.content.music").length > 0) {
	var i = Math.round(Math.random() * ($("#right .cover").length - 1));
	bgmPlay($("#right .cover").eq(i));
}

//ifvisible.js
ifvisible.setIdleDuration(15);//seconds
ifvisible.on("idle", function(){
	if($("body.popmaskon").length == 0)$("body").removeClass("wakeup").addClass("idle");
});
ifvisible.on("wakeup", function(){
	$("body").removeClass("idle").addClass("wakeup");
});

// Possible statuses are:
// idle: when user has no interaction
// hidden: page is not visible
// active: page is visible and user is active
if( ifvisible.now('hidden') ){}


//定时器
function mtimer() {
  setTimeout(() => {

	//themecolor
	themecolor = rgb2hex($("body").css("color") || "#000");

	//bgm autostop
	if (getCookie('playtime') > playtime) {
		if (bgm) bgmPause();
	}

	// background playing
	if (isHidden() || $("body.popmaskon").length > 0) {
		if (bgm) {
			saveCookie("playing", 1);
		} else {
			saveCookie("playing", 0);
		}
	}

	//bgm autostop
	if (getCookie('playing') == 1) {
		playing = true;
	} else {
		playing = false;
	}

	// eyecare class

	if ($("body.eyecare").length > 0) {
		//$("body").addClass("bgmask");
	}

	//网页标题
	if (bgm && mediaTitle) {
		document.title = mediaTitle;
	} else {
		if (isHidden()) {
			document.title = " ..zzZ "
		} else if($("#soundsleep:visible").length > 0) {
			document.title = "背景音 · MVCAT";
		} else {
			document.title = otitle;
		}
	}

	//totop
	if (!isMobile && $(document.body).height() > $(window).height() * 2 && $("#ftool .totop").length == 0)$("#ftool").append('<a href="javascript:scrollTo(0,0);" class="icon totop"></a><a href="javascript:scrollTo(0,document.body.scrollHeight);" class="icon tobot"></a>');

	//ftool 评论
	if($("#comments").length != 0 && $("#ftool .tocomments").length == 0)$("#ftool").append('<a href="#comments" class="icon tocomments" onclick="$(\'#comments textarea\').focus();"><div style="font-size: 1rem;line-height: 1.5;">留言</div></a>');

	//fullscreen
	if(document.body.scrollHeight == window.screen.height)fullscreen = true;
	
	mtimer();

  }, 3000);
}
mtimer();

// end 定时器

// favorite
if($("#left").length>0){//判断是否单页
	$("body").append('<div id="favorite"><h2>收藏<span onclick="$(\'#favorite\').removeClass(\'show\')" class="close"></span><span class="addfavorite heart" onclick="addFavorite(\'add\');"></span></h2><div class="items clear"></div></div>');
	$("#ftool").prepend('<a class="icon ffavorite heart" onclick="addFavorite(\'add\');" onmouseover="if(!isMobile)addFavorite(\'show\');"></a>');
	//收藏按钮
	$("#favorite,.favorite").on("click", ".icon:not(.star)", function (e) {
		e.preventDefault();
		addFavorite("delete", $(this).next("span").text(), $(this).parent("a").attr("href"));
	})
	//刷新收藏
	addFavorite();
	function refreshfav() {
	  setTimeout(() => {
		if (isHidden()) return;
		addFavorite();
		refreshfav();
	  }, 3000);
	}
	refreshfav();
}

//警告
//if ($("body.content[class*='负能量'],body.content[class*='负能量'] h1").length > 1) {
//    $("#right h1").first().after('<span class="tag warning">身体不适预警！！！</span>')
//}

//版权
if ($("body.content.nocopy h1").length > 0) {
	$("#right h1").first().append('&nbsp;<span class="sorter">版权限制，仅做展示。</span>')

}

//站内链接 .pop,a[target='popIframe'],#left .submenu a[href*='/'],.qBox a,a.list[href*='/'],.list a[href*='/'],a.list.text,.sorter a[href*='/'],#summary a[href*='/'],.tags a[href*='/'],#content a[href*='/'],body.channel.timeline #right a[href*='/'],#calendar a[href*='/']

$("body").on("click", "a[href*='/'],a[href*=':'],a[data-href*='/']", function (e) {
																			   
		$("body").removeClass("loading");

		var src = $(this).attr("data-href") || this.href;
		
		console.log("onclick:" + src);
		
		if (isHtml5Plus && !/javascript/.test(src)) {
			popIframe(src);
			return false;
		}
		
		if(/javascript/.test(src) || /\/outlink/.test(src) || $(this).hasClass("nopop") || $(this).attr("target") == "_blank" )return true;
		
		if (/thunder:|ed2k:|magnet:|ftp:|.torrent$/.test(src)) {
			copy(src);
			jsalert("<p>> 已复制链接 < </p>粘贴到下载工具开始下载",10000);
			return false;//阻止冒泡
		}
		
		if(/\/\//.test(src) && src.indexOf(location.host) == -1 && !/#player|.m3u8$|.mp4$/.test(mvcaturl(src))){ //外站链接
			console.log("外站链接：" + src);
			window.open("/outlink/?target=" + encodeURIComponent(src));
			return false;
		}

		if(src.indexOf(location.host) != -1 && !tabmode )return true;// && !isHtml5Plus
		
		//微信内hack
		if (isWechat && !isMiniprogram && /vsearch/.test(src)){
			wxopentip();
			return false;
		}

		e.preventDefault();
		$(this).attr("data-href",src)

		if($(this).attr("target") == "_blank"){
			popIframe(src,"_blank");
		} else {
			popIframe(src);
		}

}) //站内链接

//sort
$(".sortbox").on("click", ".sorter a[href*='#']", function () {
	$(this).siblings("a").removeClass("current");
	$(this).addClass("current");
	var s = $(this).attr("href").split("#")[1] || $(this).text();
	var p = $(this).parents(".sortbox");

	if (p.length > 1) {
		p = p.first().find(".sort");
	} else {
		p = p.first().find(".sort").not(".sortbox .sortbox .sort");
	}

	if (p.filter("." + s).length == 0) {
		insearch(s);
		return false;
	}

	p.hide(0);
	p.filter("." + s).show(0);

	//if (!isMobile) $("html,body").animate({scrollTop: p.filter("." + s).first().offset().top - 10}, 500);

});

//selector
$(".selections").on("click", ".selector", function () {
	var p = $(this).parents(".selections");
	p.find(".selector").removeClass("current");
	$(this).addClass('current');
	p.find(".selection").hide(0);
	p.find('.selection[class*=' + $(this).text() + ']').show(0);
	//if(!isMobile)$("html,body").animate({scrollTop:p.offset().top}, 500);
});

//图片弹出层
$(document).on("mouseenter", ".popimgs,#summary,#content", function () {
	popImg($(this));
});


if (!isMobile) {
	qSearch('#content'); //快捷搜索
	$(".tooltip").tooltip(); //tooltip
}

//swipe
/*$("body").swipe({
    fingers:1,
    threshold:100, // default 75
    cancelThreshold:null,
    pinchThreshold:20,
    maxTimeThreshold:null,
    fingerReleaseThreshold:250,
    longTapThreshold:500,
    doubleTapThreshold:200,
    swipe:null,
    swipeLeft:function() {
        $("body").addClass("swipeLeft").removeClass("swipeRight");
        $(window).trigger("resize");

    },
    swipeRight:function() {
        $("body").addClass("swipeRight").removeClass("swipeLeft");
        $(window).trigger("resize");
    },
    swipeUp:function() {
        $("body").addClass("swipeUp").removeClass("swipeDown");
    },
    swipeDown:function() {
        $("body").addClass("swipeDown").removeClass("swipeUp");
    },
    swipeStatus:null,
    pinchIn:null,
    pinchOut:null,
    pinchStatus:null,
    click:null,//Deprecated since 1.6.2
    tap:null,
    doubleTap:null,
    longTap:null,
    hold:null,
    triggerOnTouchEnd:true,
    triggerOnTouchLeave:false,
    allowPageScroll:"auto",
    fallbackToMouseEvents:true,
    excludedElements:$.fn.swipe.defaults.excludedElements + ",input,textarea,body.inframe,#popImgMask,#echarts,.echarts",
    preventDefaultEvents:true,
    allowPageScroll:"vertical",
    preventDefaultEvents:false
});*/

//musicroot swipe
if ($("body.music.root").length > 0) {
    if (isMobile) {
        $("body").swipe({
            swipeLeft:function() {
                if(!bgm){
					bgmPause()
					}else{
						//FR()
						}
            },
            swipeRight:function() {
                if(!bgm){
					bgmPause()
					}else{
						//FF()
						}
            },
            swipeUp:function() {
                if(!bgm){
					bgmPause()
					}else{
						randomsong()
						}
            },
            swipeDown:function() {
				if(!bgm)bgmPause()
            },
            tap:function() {
                if(!bgm)bgmPause();
				fullScreen();
            },
            doubleTap:function() {
				bgmPause();
            },
            excludedElements:$.fn.swipe.defaults.excludedElements + "a,input,textarea,#left,#right,#rightside,#ftool,.showleft,#favorite",
            allowPageScroll:"vertical",
            preventDefaultEvents:true
        });
        //setTimeout(function(){jsalert("上划切歌<br />下划暂停<br />左划快退<br />右划快进",5000)},5000)
        setTimeout(function(){jsalert("双击暂停 / 上划切歌" ,5000 ,"bottom")},5000);
    } else {
        $("body").dblclick(function() {
			if(fullscreen){exitFullScreen()}else{fullScreen()};
        });
        setTimeout(function(){jsalert("空格暂停 / 上下切歌 / 左右进退 / 双击全屏", 5000 ,"bottom")},8000);
    }
}

//window scroll
if ($(window).scrollTop() == 0)$("body").addClass("scrollTop");
$(window).scroll(function() {
    var before = $(window).scrollTop();
    $(window).scroll(function() {
        var after = $(window).scrollTop();
        if (after == 0) {
            //console.log('顶');
            $("body").addClass("scrollTop");
        } else if (before < after) {
            //console.log('上');
            $("body").addClass("scrollUp");
            $("body").removeClass("scrollDown scrollTop");
            before = after;
        } else if (before > after) {
            //console.log('下');
            $("body").addClass("scrollDown");
            $("body").removeClass("scrollUp scrollTop");
            before = after;
        }
    });
    //scroll function
    $("#huaci,#tooltip").slideUp(50);
    if ($("#favorite").css("position") == "fixed") $("#favorite").removeClass("show");
});


    //微信分享
    if (isWechat) $.ajax({
        type: "get",
        url: "//api.mvcat.com/wx/jssdk.php?url=" + encodeURIComponent(ourl),
        //替换网址，xxx根据自己jssdk文件位置修改 
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonpCallback",

        success: function (data) {
                //console.log(data);
				//jsalertObject("连接成功！",data);
                wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: ["updateAppMessageShareData", //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
                        "updateTimelineShareData" //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
                    ],
					openTagList: ['wx-open-launch-app','wx-open-launch-weapp'] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
                });
            },
            error: function (data) {
                //console.log(data);
                //jsalertObject("ajax出错",data); 
            }
    });

    wx.ready(function () {
					   
		if(!/\/\//.test(oshareData.imgUrl))oshareData.imgUrl = location.protocol + "//" + location.host + oshareData.imgUrl;
		
		wx.updateAppMessageShareData(oshareData);
        wx.updateTimelineShareData(oshareData);
		
		//jsalertObject("wx.ready",oshareData); 
		
		if(isMiniprogram){
			if(imageurl == "")oshareData.imgUrl = "";
			wx.miniProgram.postMessage({data:oshareData});
		}
    });

    wx.error(function (res) {
        //console.log(res);
        //jsalertObject("wx.error",res); 
        //config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
	
	//小程序hack
	if (isMiniprogram) {
		$("body").on("click","a[href*='/']",function(e){
			var href = $(this).attr("href");
			if(href.indexOf(location.host) == -1 || !/qq.com/.test(href) || /\/vsearch|\/live|\/player|\/iframe|\/jump/.test(href)){
				e.preventDefault();
				copyurl(href);
			}
		})
	} //end 小程序hack
	
//});
//end of docready

//iOS Web APP中点击链接跳转到Safari 浏览器新标签页的问题 devework.com
//stanislav.it/how-to-prevent-ios-standalone-mode-web-apps-from-opening-s-in-safari
if(("standalone" in window.navigator) && window.navigator.standalone){
//if(document.referrer != '')document.body.innerHTML += '<div id="iosback" onclick="window.history.back(-1);" style="position:fixed;z-index:999;left:0;top:0;font-size: 0.75em!important;line-height: 20px!important;">〈 返回</div>';
var noddy, remotes = false;
document.addEventListener('click', function(event) {
noddy = event.target;
while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
noddy = noddy.parentNode;
}
if('href' in noddy && noddy.href.indexOf('http') !== -1 && noddy.href.indexOf('javascript:') == -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
{
event.preventDefault();
document.location.href = noddy.href;
}
},false);
}

//返回按钮
if($(window).width() < $(window).height() && $("#right h1").length>0 && $("body.music").length==0 && !inFrame && !isHtml5Plus)$("#right h1").first().prepend('<span id="back" style="position: absolute;margin: 0;" onclick="location.href=contentid?channelurl:\'/\'">&#xe98b;</span>');
//call app
(function() {
	var ua = navigator.userAgent.toLowerCase();
	var t;
	var c = location.href.replace(/\./g,'_');
	var pre = 'mvcatmovie://';
	var download_url = '/app/apk/';
	if(/music/.test(location.href)){
		pre = 'mvcatmusic://';
		'/app/apk/';
	}
	var config = {
		scheme_IOS: pre + c,
		scheme_Adr: pre + c,
		download_url: download_url,
		timeout: 600
	};

	function openclient() {
		var startTime = Date.now();
		var ifr = document.createElement('iframe');
		ifr.src = ua.indexOf('os') > 0 ? config.scheme_IOS : config.scheme_Adr;
		ifr.style.display = 'none';
		document.body.appendChild(ifr);
		var t = setTimeout(function() {
			var endTime = Date.now();
			if (!startTime || endTime - startTime < config.timeout + 200) {
				//if(confirm("是否需要下载安卓APP？"))window.location = config.download_url
			} else {}
		}, config.timeout);
		window.onblur = function() {
			clearTimeout(t)
		}
	}
	if(isAndroid && !isWechat && !isHtml5Plus)openclient();
})()