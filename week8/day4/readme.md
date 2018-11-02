### express安装
npm install express  生产环境
npm install express -D 开发环境

### req属性
- req.query 获取问号传参部份
- req.params 获取路由传参部份
- req.path  获取请求的路径

### res属性
- res.json()  转换成json格式数据
- res.send() 包含了res.json方法的功能
- res.set() 设置响应头
- res.sendStatus(200) 设置响应状态码
- res.redirect() 接口跳转
- res.sendFile(path [，options] [，fn])  跳转到静态页面
- res.render() 渲染模板 ejs模板 <%=%> <%if(){%>

### 中间件
- 应用中间件  （自己去封装的逻辑部分）
- 路由级中间件
- 错误中间件
- 第三方中间件  （需要安装  cookie-parser body-parser）
- 内置中间件

### ejs模板