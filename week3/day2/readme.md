\d \w \s \n . \b [] a|b () ^ $ + * ? {n}{n,}{n,m} g,i,m
reg.test() 验证字符串是否跟正则相匹配 
reg.exec() str.match() str.split() 捕获（把字符串中匹配的内容拎出来）

### exec
- 返回值:数组 第一项：匹配的内容 第二项：匹配内容的起始索引 第三项 原字符串

### JS盒子模型
 - JS中提供了与盒子模型相关的属性
 - css盒子模型 width,height,border,padding,margin
### client系列(跟溢出的内容无关)
  -  clientWidth = width+padding(左右)
  -  clientHeight = height+padding(上下)
  -  clientLeft  左边框
  -  clientTop 上边框  
### offset系列(跟溢出内容无关)
 - offsetWidth = width+padding(左右)+border(左右)=clientWidth+border(左右)
 - offsetHeight = height+padding(上下)+border(上下)=clientHeight+border(左右)
 - 与偏移量相关
  - offsetParent 参照物
  - offsetLeft 左偏移量
  - offsetTop 上偏移量  
### scroll系列 (跟溢出内容有关)
  - scrollWidth ≈ width+左padding值   约等于真实宽度
  - scrollHeight ≈  height+上padding值 约等于真实的高度
  > 为什么是约等于？
  - 各个浏览器的行高不一样
  - 相同浏览器是否设置overflow属性，值也不一样
  - 跟滚动条相关
   - scrollLeft 横向卷出去的内容
   - scrollTop 纵向卷出去的内容 
   
### 获取一屏的高度和整个文档的高度
一屏的高度
document.documentElement.clientHeight || document.body.clientHeight
文档的高度
document.documentElement.scrollHeight||document.body.scrollHeight
若没有溢出的内容，一屏的高度和文档的高度是一样
   
   
 
    
  
 
 