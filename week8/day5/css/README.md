## 基础选择器
- 通配符选择器 * 
- 元素选择器
- class
- id 
- 后代选择器 E F
- 子元素选择器 E>F
- 相邻兄弟元素选择器 E+F
- 通用兄弟元素选择器 E~F

### !important > 行内样式 > ID > class > E  > * > 继承 > 浏览器默认样式
## 属性选择器

- E[attr]
- E[attr="value"]
- E[attr^="value"] 以value开头
- E[attr$="value"] 以value结尾
- E[attr*="value"] 包含value
- E[attr~="value"] 以空格分割

```
    <a title="hello world">
    a[title~="world"></a>
```
- E[attr|="value"] -分割
```
    <div class="home-div"></div>
    div[class|=home"]
```
## 伪类和伪元素选择器

- :link :hover :visited : active :focus
- :first-child
- :last-child
- nth-child() 2n 2n-1 even odd 
- nth-last-child
- nth-of-type()
- empty()
- not()

- :first-line,:first-letter,:before :after

```
    .clearfix:after,   /* 防止margin叠加 */
         .clearfix:before{
             content: "";
             display: table;
         }
         .clearfix:after{
             clear:both;
         }
```

## 清除浮动
- 添加空元素
```
 <div style="clear:both"></div>
```
- 给父元素添加overflower
- 让父元素浮动（不推荐）
- 伪元素

## img 外层间隙
``` 
    给img加vertical-align属性
```

## 盒子模型分类
- 标准盒子模型
- IE盒子模型  IE8及以下

## 转换
box-sizing: content-box;标准盒子模型
box-sizing: border-box; IE盒子模型

- -moz-box-sizing:
- -webkit-box-sizing:

## 行内块级元素
img input td

## 行内、块级元素的区别
1. 块级元素会独占一行，其宽度会自适应父元素宽度，行内元素不会独占一行，相邻的行内元素会排列在同一行，直到一行排不开，才会换行。其宽度随元素的内容变化
2. 块级元素可以设置width、height属性，行内元素设置width、height是无效的
3. 块级元素可以设置marging、padding，行内元素margin仅设置左右方向有效，上下无效，padding上下左右都有效

## 
- block
- inline
- inline-block

## px em rem 
### px 相对的长度单位
- 相对于显示器屏幕分辨率而言的
- 1个px相当1个像素
### em 相对的的长度单位
- em相对参照物为父元素的font-size
- em具有继承的特点
- 当没有设置font-size时，浏览器有一个默认设置 1em = 16px
- 缺点 容易混乱
### rem 
- css3新加入的长度单位
- rem相对参照物为html
- 当没有设置font-size，浏览器有一个默认设置 1rem = 16px
- 优点 易于计算
- 缺点IE8不兼容

```
    p{
        font-size: 1rem;
        font-size: 16px;
    }
```

- 谷歌浏览器默认最小的文字为12px

## 为什么将html设置font-size:625%
- 方便计算
- 兼容性的考虑
  桌面浏览器默认字体大小是16px，但是其他类型设备默认字体大小不一定是16px，特别是高分辨率的设备，因为16px大小的字体看起来可能会非常小。所以按照设备的基准字体大小设置合适用户浏览的字体大小。
- 谷歌浏览器默认最小font-size为12px


