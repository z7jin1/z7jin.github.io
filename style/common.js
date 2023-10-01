
var app_ad={
    close_appAD:function(){
        $("#khdDown").hide();
        $.cookie("app_ad",0,{path:'/'});
    },
    app_ad_cookie:function(){
        if($.cookie("app_ad")==null){
            if($.cookie("app_home_ad")==null){
                $("#khdDown").hide();
            }else{
                $("#khdDown").show();
            }
        }else{
            $("#khdDown").hide();
        }
    },
    in_home:function(){
        $("#app_home_show").hide();
        $.cookie("app_home_ad",0,{path:'/'});
        app_ad.app_ad_cookie();
        $('html,body').removeClass('ovfHiden');

    },
    app_home_ad:function(){
        $(".app_btn").css("left",($(window).width()-320)/2+"px");
        if($.cookie("app_home_ad")==null){
            $("#app_home_show").show(function(){
                var url = "//z7jin.github.io";
                $.ajax({
                    type: "get",
                    url: url,
                    data: {
                        posid:150,
                        adid:451
                    },
                    dataType: "json",
                    success: function (data) {
                        console.log(data)
                    },
                    error: function(data) {

                    }
                })
                $('html,body').addClass('ovfHiden')
            });

        }else{
            $("#app_home_show").hide();
            $('html,body').removeClass('ovfHiden');
        }
        app_ad.app_ad_cookie()
    },
    openApp:function(){
        var url = "https://z7jin.github.io";
        $.ajax({
            type: "get",
            url: url,
            data: {
                posid:150,
                adid:451
            },
            dataType: "json",
            success: function (data) {
                console.log(data)
                console.log("执行跳转")
                setTimeout(function() {
                    window.location = "https://z7jin.github.io/app";
                }, 25);

                var iOS = /iPad|iPhone|iPod/.test( navigator.userAgent );
//            console.log(navigator.userAgent);
                if(iOS) {
//                console.log('调用ios');
                    window.location = "https://z7jin.github.io";
                } else {
//                console.log('调用android');
                    window.location = "https://z7jin.github.io";
                }
            },
            error: function(data) {
                console.log(data)
                console.log("执行跳转")
                setTimeout(function() {
                    window.location = "https://z7jin.github.io/app";
                }, 25);

                var iOS = /iPad|iPhone|iPod/.test( navigator.userAgent );
//            console.log(navigator.userAgent);
                if(iOS) {
//                console.log('调用ios');
                    window.location = "https://z7jin.github.io";
                } else {
//                console.log('调用android');
                    window.location = "https://z7jin.github.io";
                }
            }
        })
        // window.location.href = "https://z7jin.github.io"
        // return

    }
};

$(function(){
    app_ad.app_home_ad();
});