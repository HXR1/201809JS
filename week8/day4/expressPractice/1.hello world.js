const express = require("express");//引入express
const app = express(); //使用express 已经创建服务
app.get('/', (req, res) => {
    //req客户端请求时携带的信息
    //res 服务器端响应时携带的信息   还是可以使用原生node提供的属性和方法
   /* res.setHeader("Content-Type","text/plain;charset=utf-8");
    res.end("hello world");*/

    res.send('Hello World!') //1.已设置好mime类型 2.res.end()断开了连接
});

//根据请求方式调用不同的方法 第一个参数表示请求的地址  第二个参数表示路径匹配时做的操作
/*app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.post('/', function (req, res) {
    res.send('Got a POST request')
})
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})*/
app.listen(9000,()=>{
    console.log("9000端口被启用")
});