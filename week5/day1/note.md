### 什么是事件？说白了指的是一件事
 > 如下这些事件都是已存在的，系统处理好的
 - 鼠标事件 click mouseover mouseout mouseenter mousemove mouseleave mousewheel
 - 键盘事件 keydown(按下时触发) keyup(抬起来时触发) keypress(按下并抬起来时触发)
 - 系统事件 resize(浏览器窗口发生改变时触发) scroll(滚动条发生改变) DOMContentLoaded (dom元素加载完了后再触发)
 - 表单元素  change(表单元素发生改变时触发) input(移动端，表单输入时触发)  blur(失去焦点，光标离开表单元素时触发) focus(光标在表单元素时触发)
 
 
### 事件绑定 ：事件（行为）发生时做些具体的事情（给事件绑定行为）
- 事件绑定分为DOM0级事件绑定和DOM2级事件绑定
> DOM0级事件绑定问题：对同一元素，同一事件绑定多个行为时，后面的行为会覆盖前面的行为，最终只执行最后一次绑定的行为
> DOM0级事件绑定行为移除 ： oDiv.onclick = null

- 标准浏览器 DOM2级事件绑定   addEventListener
 第一个参数事件类型  第二个参数 事件绑定的行为  第三个参数  事件传播的方式
 oDiv.addEventListener("click",fn,false); 
 oDiv.addEventListener("click",fn,false);//处理了重复绑定

 IE6~8 DOM2级事件绑定 attachEvent
 oDiv.attachEvent("onclick",fn);
 oDiv.attachEvent("onclick",fn);//执行了两次，没有做重复绑定处理

- 标准浏览器 DOM2事件移除 removeEventListener
  oDiv.removeEventListener("click",fn,false); 
  
  IE6~8 DOM2级事件移除 detachEvent
  oDiv.detachEvent("onclick",fn)
  
### 事件对象 e
- 浏览器记录了事件相关的信息
  
  
  