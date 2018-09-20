### client系列(跟溢出内容无关)
- clientWidth = width+padding(左右)
- clientHeight = height+padding(上下)
- clientLeft 左边框
- clientTop 上边框

### offset系列(跟溢出内容无关)
- offsetWidth = width+padding(左右)+border(左右)
- offsetHeight = height+padding(上下)+border(上下)
- offsetParent 参照物
- offsetLeft 左偏移量
- offsetTop  上偏移量

### srcoll系列 （跟溢出内容有关）
- scrollWidth   约等于  获取真实宽度+左padding
- scrollHeight  约等于  获取真实高度+上padding
- scrollLeft 滚动条横向卷出去的宽度
- scrollTop 滚动条纵向卷出去的高度
 >最小值是0 ，最大值= 真实的高度（ele.scrollHeight）-一屏的高度(ele.clientHeight)
 > 超过最大值或小于最小值都没法再设置上
> 13个属性中，只有scrollLeft和scrollTop可以设置值，其他的只能获取值

### 获取内嵌式或外链式中的任意CSS属性值
- window.getComputedStyle
- ele.currentStyle

### 浏览器兼容性处理
- 1.通过判断属性的方式
 - window.getComputedStyle
 - "getComputedStyle" in window
- 2.检测数据类型的方式
 - typeof
 - instanceof    ary instanceof Array  可以检测出对象的细分类型
 - constructor 指向所属的类  ary.constructor (若原型重写，constructor会有问题)
 - Object.prototype.toString.call(null) "[object Null]" 最精准检测数据类型的方式
   Object.prototype.toString.call([]) "[object Array]"  前面的是数据类型，后面的是所属的类
   Object.prototype.toString.call({}) "[object Object]"
- 3.判断浏览器
  -/MSIE [6-8]\.0/.test(navigator.userAgent)
  - navigator.userAgent.indexOf("MSIE 8.0")==-1 说明不是IE8浏览器
 
提前预习：
延迟加载
回到顶部
瀑布流案例
