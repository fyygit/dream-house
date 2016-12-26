/**
 * Created by Administrator on 2016/12/23.
 */
$(function () {
    /*点击预约*/
    $(".order-inp").click(function () {
        $(this).text("已接单，待反馈");
        $(this).removeClass("order-inp");
        $(this).addClass("order-text");
    });

    /*点击预约详情*/
    $(".order-row").click(function () {
        if ($(this).children(".order-inp").text() == "接单") {
            location.href = "./appointment-details.html";
        }
    })

});