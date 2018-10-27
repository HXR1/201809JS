let http = require("http");
//createServer 创建一个服务
http.createServer(function(req,res){
    //req(request) 请求时携带的信息
    //res(response) 响应时携带的信息
    //console.log(req.url);
    res.setHeader("Content-Type","text/plain;charset=utf-8");//设置响应头
    res.end("珠峰你好,很久不见~")/*设置响应内容，并断开客户端和服务器端的连接*/

}).listen(9090,function(){
    console.log("9090端口被启用");
});