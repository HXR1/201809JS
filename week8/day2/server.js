let http = require("http");
let url = require("url");
let fs = require("fs");
let mime = require("mime");
http.createServer(function(req,res){
    //req 客户端发起请求携带的信息
    //res 服务器端响应时携带的信息
    //console.log(url.parse(req.url,true)); /*query的值也就是客户端传过来的参数解析成对象*/
    let { pathname,query }= url.parse(req.url,true);//解析请求的地址
    //如果请求的路径/ 需要返回index.html页面
    if(pathname ==="/favicon.ico") return;
    if(pathname === "/"){
        let file = fs.readFileSync(__dirname+"/index.html");
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(file);//把数据返回给客户端并断开客户端与服务器端的链接
        return;
    }
    ///////////////////////处理接口///////////////////////////
    if(pathname==="/getAll"){
       let data =  fs.readFileSync(__dirname+"/data.json");
       res.writeHead(200,{
           "Content-Type":"application/json;charset=utf-8",
           "Access-Control-Allow-Origin":"*"    /*允许其他服务器访问这个9090端口服务的数据*/
       });
       res.end(data);
       return;
    }
    if(pathname ==="/getList"){
        let cbFn = query.cb;//"fn"
        let data =  fs.readFileSync(__dirname+"/data.json");
        res.setHeader("Content-Type","application/json");
        res.end(`${cbFn}(${data})`); /*发送给客户端后，客户端解析成js代码，执行fn方法，并把响应的数据data作为fn的实参*/
        return;
    }


    ////////////////////////////////////////////////////////
    //统一的处理的静态资源
      //->1.根据客户端请求的路径在服务器端找到这个文件
      //->2.服务端返回静态文件时，需要设置响应头(Content-Type)
    fs.stat(__dirname+pathname,function(err,stats){
        if(err){ //说明文件没有找到
           /* res.statusCode = 404; 设置状态码
            res.setHeader()   设置响应头*/
           res.writeHead(404,{
               "Content-Type":"text/plain;charset=utf-8"
           });
          res.end("页面没找到~");
          return;
        }
        if(stats.isFile()){ //是文件
           let file =  fs.readFileSync(__dirname+pathname);
           //设置响应头的mime类型
            //根据路径返回对应的mime类型
            res.setHeader("Content-Type",`${mime.getType(pathname)};charset=utf-8`);
            res.end(file);
            return;
        }
    })
}).listen(9090,function(){
    console.log("9090端口号被启用~")
});



