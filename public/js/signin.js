/**
 * Created by asus on 2016/12/11.
 */
var sleep = 60,
    interval = null;
window.onload = function ()
{
    var btn = document.getElementById ('btn');
    btn.addEventListener("click",function ()
    {
        if (!interval)
        {
            this.style.backgroundColor = '#c7c7c7';
            this.style.width='92px';
            this.style.color='#f4f4f4';
            this.disabled = "disabled";
            this.innerText = sleep-- +"s后重新获取" ;
            interval = setInterval (function ()
            {
                if (sleep == 0)
                {
                    if (!!interval)
                    {
                        clearInterval (interval);
                        interval = null;
                        sleep = 60;
                        btn.innerText = "获取验证码";
                        btn.style.backgroundColor = '';
                    }
                    return false;
                }
                btn.innerText = sleep-- +"s后重新获取" ;
            }, 1000);
        }
    })
};
