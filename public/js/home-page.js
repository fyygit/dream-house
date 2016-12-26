/**
 * Created by Administrator on 2016/12/21.
 */
//获取轮播每个元素
var $slider = $(".slider_block");
//获取轮播每个元素
var $sliderCon = $(".slider_container");
//获取页码点
var $point = $(".point_block");
//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $slider.length;
//计算容器宽度
var allWd = wd * lg;
//////计算元素高度
var hg = 280;
////设置容器宽度
$sliderCon.width(allWd);
////设置元素高度
$slider.width(wd).height(hg);

//表示当前元素
var swipeNow = 0;
var sliderTime;
//添加滑动时间
$sliderCon.on("swipeLeft", function () {
    console.log("touch left");
    clearTimeout(sliderTime);
    //if (swipeNow < lg - 1) {
    //    //计算滑动距离，改变当前元素
    //    var swipeWd = (++swipeNow) * wd;
    //    $sliderCon.css("transform", "translateX(-" + swipeWd + "px)");
    //    //改变点的选中
    //    $point.removeClass("active").eq(swipeNow).addClass("active");
    //    autoSwipe();
    //}
    swipeNow = swipeNow >= lg - 1 ? 0 : swipeNow + 1;
    var swipeWd = swipeNow * wd;
    $sliderCon.css("transform", "translateX(-" + swipeWd + "px)");
    //改变点的选中
    $point.removeClass("active").eq(swipeNow).addClass("active");
    autoSwipe();
});
$sliderCon.on("swipeRight", function () {
    console.log("touch right");
    clearTimeout(sliderTime);
    //if (swipeNow > 0) {
    //    //计算滑动距离，改变当前元素
    //    var swipeWd = (--swipeNow) * wd;
    //    $sliderCon.css("transform", "translateX(-" + swipeWd + "px)");
    //    //改变点的选中
    //    $point.removeClass("active").eq(swipeNow).addClass("active");
    //    autoSwipe();
    //}
    swipeNow = swipeNow > 0 ? swipeNow - 1 : lg - 1;
    var swipeWd = swipeNow * wd;
    $sliderCon.css("transform", "translateX(-" + swipeWd + "px)");
    //改变点的选中
    $point.removeClass("active").eq(swipeNow).addClass("active");
    autoSwipe();
});
function autoSwipe() {
    sliderTime = setTimeout(function () {
        //if (swipeNow < lg - 1) {
        //    //计算滑动距离，改变当前元素
        //    var swipeWd = (++swipeNow) * wd;
        //    $sliderCon.css("transform", 'translateX(-' + swipeWd + 'px)');
        //    //改变点的选中
        //    $point.removeClass('active').eq(swipeNow).addClass('active');
        //    autoSwipe();
        //}
        swipeNow = swipeNow >= lg - 1 ? 0 : swipeNow + 1;
        var swipeWd = swipeNow * wd;
        $sliderCon.css("transform", "translateX(-" + swipeWd + "px)");
        //改变点的选中
        $point.removeClass("active").eq(swipeNow).addClass("active");
        autoSwipe();
    }, 2000);
}
autoSwipe();

/*区域面积等选择*/
$(function () {
    $(".query_block").click(function () {
        var i = $(this).index();
        console.log(i);
        if ($(".down-box").eq(i).css("display") == "none") {
            $(".down-box").hide();
            $(".down-box").eq(i).show();
            //设置标签的样式
            $(".query_block").children().removeClass("active");
            $(this).children().addClass("active");
        }
        else {
            $(".down-box").hide();
            //    //设置标签的样式
            $(this).children().removeClass("active");
        }
    });
    /*区域*/
    $(".list li").click(function () {
        var i = $(this).index();
        console.log("111", i);
        //设置DIV显示和隐藏
        $(".cont").hide();
        $(".cont").eq(i).show();
        //设置标签的样式
        $(".list li").removeClass("active");
        $(".list").removeClass("active");
        $(this).addClass("active");
    });
    $(".cont li").click(function () {
        $(".down-box").hide();
        $(".query_block").children().removeClass("active");
    });
    /*面积*/
    $(".area").on({
        touchmove: function () {
            $(".area").removeClass("active");
            $(this).addClass("active");
        },
        click: function () {
            $(".down-box").hide();
            $(".query_block").children().removeClass("active");
        }
    });
    $(".btn").click(function () {
        $(".down-box").hide();
        $(".query_block").children().removeClass("active");
    });
    /*更多*/
    $(".lists li").click(function () {
        var i = $(this).index();
        console.log("111", i);
        //设置DIV显示和隐藏
        $(".more").hide();
        $(".more").eq(i).show();
        //设置标签的样式
        $(".lists li").removeClass("active");
        $(".lists").removeClass("active");
        $(this).addClass("active");
    });
    $(".more li").click(function () {
        $(".down-box").hide();
        $(".query_block").children().removeClass("active");
    });

    $(".query_price").click(function (){
        $(this).toggleClass("active_down");
    })
});

/*信息栏内容切换*/
$(function () {
    $(".header").click(function () {
        var i = $(this).index();
        console.log(i);
        //设置DIV显示和隐藏
        $(".news-row").hide();
        $(".news-row").eq(i).show();

        //设置标签样式
        $(".header").removeClass("active");
        $(this).addClass("active");

        $(".news-row").children().removeClass("active");
        $(".news-row").eq(i).children().addClass("active");
    });
});

/*顶端*/
$(function(){
    $(window).scroll(function(){
        var scrollTop = $( window ).scrollTop();
        if( scrollTop >= 50 )
        {
            $( ".top_point" ).css( "display", "block" );
        }
        else
        {
            $( ".top_point" ).css( "display", "none" );
        }
    });
    $(".top_point").on("click",function(){
        $( "html,body").scrollTop(0);
    });
});
