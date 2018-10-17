### 响应式开发概念
- 根据设备的宽度，自动调整页面的大小，从而在各个设备上呈现出最佳的视觉效果
### 响应式开发的种类
 - 小型的项目或需求页   PC端和移动端共用一套
 - 大型的项目例如淘宝   PC端（固定布局）和移动端(移动适配)各用一套
### 响应式所用的技术
 - 视口viewport 
 - 媒体查询（可以识别设备的特征，从而调整页面的布局）
 - 布局时用相对单位 rem 100% em  
 - flex布局
 - 图片处理（max-width/min-width）

### 视口viewport
概念抽象，设置简单
PC端页面和移动端页面最大差别：设备的宽度不一样
默认移动端页面时按照980宽度渲染，这个宽度还是比移动设备宽度大，为了防止滚动条的出现，早期各个设备做个缩放处理 缩放的比例 = 设备的宽度/980 ,这样处理后，文字图片都非常模糊看不清

所以需要去更改渲染的宽度（布局视口的宽度），改成设备的宽度渲染，这样页面也不会缩放
<meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
 
 width=device-width  布局视口 = 设备宽度
 user-scalable=no  是否允许缩放页面 no禁止 yes 允许
 initial-scale=1.0  初始缩放值 
 maximum-scale=1.0  最大缩放比例
 minimum-scale=1.0  最小缩放的比例
 
 ### 媒体查询
 根据媒体条件设置不同的样式，从而显示不同的效果
 @media all|screen|print and (媒体条件){
    div{
        css样式
    }
 } 
 假如公司里会给你两套图 1000和480宽度的设计稿   这两个宽度就是媒体查询设置的两个主断点    自己还会设置次断点
 @media all and(max-width:1000px){
 
 
 }
 @media all and(max-width:480px){
  
  
  }
 
 
 
 
