var sleep=60,interval=null;window.onload=function(){var e=document.getElementById("btn");e.addEventListener("click",function(){interval||(this.style.backgroundColor="#c7c7c7",this.style.width="92px",this.style.color="#f4f4f4",this.disabled="disabled",this.innerText=sleep--+"s后重新获取",interval=setInterval(function(){return 0==sleep?(interval&&(clearInterval(interval),interval=null,sleep=60,e.innerText="获取验证码",e.style.backgroundColor=""),!1):void(e.innerText=sleep--+"s后重新获取")},1e3))})};