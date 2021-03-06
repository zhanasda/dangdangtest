define(["jquery"],function($) {
    return {
        "logininout": (function() {
            function addCookie(key, value, day) {
                var date = new Date(); //创建日期对象
                date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
                document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
            }



            function getCookie(key) {
                var str = decodeURI(document.cookie);
                var arr = str.split('; ');
                for (var i = 0; i < arr.length; i++) {
                    var arr1 = arr[i].split('=');
                    if (arr1[0] == key) {
                        return arr1[1];
                    }
                }
            }

            function delCookie(key) {
                addCookie(key, '', -1); //添加的函数,将时间设置为过去时间
            }


            if (getCookie("tel")) {
                $(".noname").hide();
                $(".loginout").show();
                $(".haslogin").html(getCookie("tel"));
            }

            $(".loginout").on("click", function() {
                delCookie("tel");
                $(".haslogin").html("");
                $(".noname").show();
                $(".loginout").hide();
            })

            var $areas=$(".area .pos");
            var $area=$(".area ul li a");
            $area.on("click",function(){
                $areas.html($(this).html());
            })
        })()
    }
})