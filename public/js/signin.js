/**
 * Created by Administrator on 2016/12/22.
 */
$(function(){
    /*登录跳转*/
    $("#password").blur(function(){
        if($("#form-name").val()!=""&&$("#password").val()!=""){
            $(".submit").css("background-color","#ea5404");
            $(".submit").click(function(){
                location.href="../my/my-afterlanding.html";
            })
        }
    });

    /*清除样式*/
    $("#clear").click(function(){
        $(".boxes,.success_box").css("display","block");
        $(".cancel_btn").click(function(){
            $(".boxes,.success_box").css("display","none");
        });
        $(".success_btn").click(function(){
            $("#memories").text(0);
            $(".boxes,.success_box").css("display","none");
        })
    });

    /*收藏*/
    $(".s_left").click(function(){
        location.href="./collection.html";
    });

    $(".text").click(function(){
        var i=$(this).index();
        console.log(i);
        //设置DIV显示隐藏
        $(".content").hide();
        $(".content").eq(i).show();

        //设置标签样式
        $(".text").removeClass("active");
        $(this).addClass("active");
        $(".content").children().removeClass("active");
        $(".content").eq(i).children().addClass("active")
    })
});