### 事件
指的是一件事
鼠标事件 click mouseover mouseout mouseenter mousemove mouseleave mousewheel
键盘事件 keydown keyup keypress
系统事件 resize scroll DOMContentLoaded
表单事件 change input focus blur 
### 事件绑定
- 这件事发生时做具体的事情 （给事件绑定行为）
- DOM0级事件绑定和DOM2级事件绑定
 + DOM0级事件绑定
  - 事件作为元素的属性存在
  - 例如：oDiv.onclick = function(){}
  - 问题：同一个元素同一个事件绑定多个行为时，只有最后一个行为起作用
 + DOM2级事件绑定
  - 标准浏览器 addEventListener
   - oDiv.addEventListener("click",function(){},false)
   - 移除 oDiv.removeEventListener("click",function(){},false)
  - IE(6-8) attachEvent
   - oDiv.attachEvent("onclick",function(){})
   - 移除 oDiv.detachEvent("onclick",function(){})
 + DOM2事件绑定 addEventListener和attachEvent区别
   - IE没有处理重复绑定，标准浏览器处理了重复绑定
   - IE下事件绑定行为是window 标准浏览器下事件绑定行为中this是绑定元素
   - IE下事件绑定行为执行的顺序是乱的，标准浏览器下是按照绑定的顺序执行
### 事件对象
 - 记录着事件相关的信息
 - 标准浏览器 形参e(arguments[0]) IE window.event
 -  e.clientX  到可视窗口左边的距离
 -  e.clientY  到可视窗口上边的距离
 -  e.pageX ||(e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft))  到文档左边的距离  
 -  e.pageY || (e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)) 到文档上边的距离 
 - e.type 事件类型
 - e.target||e.srcElement  事件源
 - e.preventDefault()   标准下   e.returnValue = false; IE下 阻止默认行为
 - e.stopPropagation()  标准下   e.cancelBubble = true; IE下 阻止事件冒泡
    