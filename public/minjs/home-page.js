function autoSwipe(){sliderTime=setTimeout(function(){swipeNow=swipeNow>=lg-1?0:swipeNow+1;var e=swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()},2e3)}var $slider=$(".slider_block"),$sliderCon=$(".slider_container"),$point=$(".point_block"),wd=$(window).width(),lg=$slider.length,allWd=wd*lg,hg=280;$sliderCon.width(allWd),$slider.width(wd).height(hg);var swipeNow=0,sliderTime;$sliderCon.on("swipeLeft",function(){console.log("touch left"),clearTimeout(sliderTime),swipeNow=swipeNow>=lg-1?0:swipeNow+1;var e=swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}),$sliderCon.on("swipeRight",function(){console.log("touch right"),clearTimeout(sliderTime),swipeNow=swipeNow>0?swipeNow-1:lg-1;var e=swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}),autoSwipe(),$(function(){$(".query_block").click(function(){var e=$(this).index();console.log(e),"none"==$(".down-box").eq(e).css("display")?($(".down-box").hide(),$(".down-box").eq(e).show(),$(".query_block").children().removeClass("active"),$(this).children().addClass("active")):($(".down-box").hide(),$(this).children().removeClass("active"))}),$(".list li").click(function(){var e=$(this).index();console.log("111",e),$(".cont").hide(),$(".cont").eq(e).show(),$(".list li").removeClass("active"),$(".list").removeClass("active"),$(this).addClass("active")}),$(".cont li").click(function(){$(".down-box").hide(),$(".query_block").children().removeClass("active")}),$(".area").on({touchmove:function(){$(".area").removeClass("active"),$(this).addClass("active")},click:function(){$(".down-box").hide(),$(".query_block").children().removeClass("active")}}),$(".btn").click(function(){$(".down-box").hide(),$(".query_block").children().removeClass("active")}),$(".lists li").click(function(){var e=$(this).index();console.log("111",e),$(".more").hide(),$(".more").eq(e).show(),$(".lists li").removeClass("active"),$(".lists").removeClass("active"),$(this).addClass("active")}),$(".more li").click(function(){$(".down-box").hide(),$(".query_block").children().removeClass("active")}),$(".query_price").click(function(){$(this).toggleClass("active_down")})}),$(function(){$(".header").click(function(){var e=$(this).index();console.log(e),$(".news-row").hide(),$(".news-row").eq(e).show(),$(".header").removeClass("active"),$(this).addClass("active"),$(".news-row").children().removeClass("active"),$(".news-row").eq(e).children().addClass("active")})}),$(function(){$(window).scroll(function(){var e=$(window).scrollTop();e>=50?$(".top_point").css("display","block"):$(".top_point").css("display","none")}),$(".top_point").on("click",function(){$("html,body").scrollTop(0)})});