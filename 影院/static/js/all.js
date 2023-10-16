//*********************************************************
// 目的：导航调用
//*********************************************************
function setparam(){var t=document.URL.split("#")[1];return console.log("id="+t),loadurl(void 0===t?"7jin":t),!1}function loadurl(t){$("#nav a").removeAttr("class"),$("a[data-url='"+t+"']").attr("class","on"),$("#online").attr("src",""+$("a[data-url='"+t+"']").attr("data"))}document.write("<div id=\"webbox\"><iframe src='https://z7jin.github.io' id='online' name='online' scrolling='auto' frameborder='no' marginwidth='0' marginheight='0' allowtrancparency='true'></iframe></div>"),jQuery||location.reload(),$(function(){history.pushState({},$("title").html(),""),setparam(),$("#nav a").click(function(){loadurl($(this).data("url")),history.pushState({},$("title").html(),"#"+$(this).data("url"))}),window.addEventListener("popstate",function(){history.state;setparam()})});
//*********************************************************

//*********************************************************
// 目的：下拉菜单
//*********************************************************
$(function(){$(".menu-icon").click(function(){var ul=$(".menu");if(ul.css("display")=="none"){ul.slideDown()}else{ul.slideUp()}});$(".menu-icon").click(function(){var _name=$(this).attr("name");if($("[name="+_name+"]").length>1){$("[name="+_name+"]").removeClass("select");$(this).addClass("select")}else{if($(this).hasClass("select")){$(this).removeClass("select")}else{$(this).addClass("select")}}});$(".nav li").click(function(){var li=$(this).text();$(".menu-icon").html(li);$(".menu").hide();$("div").removeClass("select")})});
//*********************************************************