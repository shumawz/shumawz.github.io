var popup = document.createElement("div");
var button = document.createElement("button");

button.id = "close";
button.textContent = "关闭";
popup.id = "popup";
popup.className = "popup";
var title = document.createElement("h1");
title.textContent = "<LTDC开发者大会特别公告>";
var content = document.createElement("p");
content.textContent = "<LTDC开发者大会特别公告：<br>尊敬的用户，请关注置顶文章>";
popup.appendChild(title);
popup.appendChild(content);
document.body.insertAdjacentHTML("afterbegin", '<div id="popup" class="popup"><h1>LTDC开发者大会特别公告：<br>尊敬的用户，请关注置顶文章</p></div>');
document.body.insertAdjacentElement("afterbegin", button);

var popup = document.getElementById("popup");
var close = document.getElementById("close");


function show() {
    popup.style.opacity = 1;
    popup.animate([
      { transform: 'translateX(110%)' }, 
      { transform: 'translateX(0)' }
    ], {
      duration: 1000,
      fill: 'forwards', 
      easing: 'ease-in-out'
    }); 
}


function hide() {
    popup.animate([
        { transform: 'translateX(0)' }, 
        { transform: 'translateX(110%)' }
      ], {
        duration: 1000, 
        fill: 'forwards', 
        easing: 'ease-in-out'
      });
  }

window.onload = function() {
    show()
}//这里选择触发方式，默认是加载完成出现弹窗
//要让弹窗出现调用show()，隐藏调用hide()即可
popup.insertBefore(close, popup.firstChild);
close.onclick = function() {
     hide();
  };