/**
 * Created by asus on 2016/12/11.
 */

/*获取验证码*/
var sleep = 60,
    interval = null;
window.onload = function () {
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        if (!interval) {
            this.style.backgroundColor = '#c7c7c7';
            this.style.width = '92px';
            this.style.color = '#f4f4f4';
            this.disabled = "disabled";
            this.innerText = sleep-- + "s后重新获取";
            interval = setInterval(function () {
                if (sleep == 0) {
                    if (!!interval) {
                        clearInterval(interval);
                        interval = null;
                        sleep = 60;
                        btn.innerText = "获取验证码";
                        btn.style.backgroundColor = '';
                    }
                    return false;
                }
                btn.innerText = sleep-- + "s后重新获取";
            }, 1000);
        }
    })
};
$(function () {
    /*身份选择*/
    $("#icon").click(function () {
        $(this).toggleClass("active");
        $(".icon-list").toggle();
        $(".type").click(function () {
            var i = $(this).index();
            console.log(i);
            $("#identity").val($(this).text());
            $(".icon-list").hide();
            $("#icon").removeClass("active")


        });
        /*注册按钮*/
        $(".type").click(function () {
            if ($("#user").val() != "" && $("#code").val() != "" && $("#password").val() != "" && $("#repassword").val() != "" && $("#indentity").val() != "") {
                $(".submit").css("background-color", "#ea5404");
                console.log($("#identity").val());
                if ($("#identity").val() == "经纪人") {
                        $(".submit").click(function () {
                            location.href = "./broker.html";
                        })
                }else if($("#identity").val() == "代理商"){
                    $(".submit").click(function () {
                        location.href = "./agent.html";
                    })
                }else if($("#identity").val() == "运营商"){
                    $(".submit").click(function () {
                        location.href = "./operator.html";
                    })
                }else if($("#identity").val() == "小业主"){
                    $(".submit").click(function () {
                        location.href = "./sublessor.html";
                    })
                }else if($("#identity").val() == "开发商"){
                    $(".submit").click(function () {
                        location.href = "./developers.html";
                    })
                }

            }

        });
    });
});


