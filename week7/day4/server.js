/*创建一个服务，端口号是9090,读取index.html的内容，把读取到的内容作为响应的内容返回给客户端*/
let http = require("http");
let fs = require("fs");
let mime = require("mime");
http.createServer(function(req,res){
    //若请求的路径是index.html，才读取这个页面返回回去
    //根据请求的路径查找对应的文件,获取文件的绝对路径，然后再读取
    let pathname = req.url;
    console.log(pathname);
    if(pathname === "/"){
       let file =  fs.readFileSync(__dirname+"/index.html","utf-8");
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        res.end(file);
        return;
    }
    //处理所有的静态资源
    fs.stat(__dirname+pathname,function(err,stats){
        if(err){//表示请求的路径不存在
            res.statusCode = 404;//返回响应的状态
            res.setHeader("Content-Type","text/plain;charset=utf-8");
            res.end("页面不存在");
            return;
        }
        if(stats.isFile()){
            let file = fs.readFileSync(__dirname+pathname,"utf-8");
            res.statusCode = 200;
            console.log(mime.getType(pathname));
            res.setHeader("Content-Type",`${mime.getType(pathname)};charset=utf-8`);
            res.end(file);
        }
    })



}).listen(9090,function(){
    console.log("9090端口被启用");
});
