const express = require("express");
const  app = express();
let cookieParser = require("cookie-parser");
app.listen(9595);
app.use(cookieParser("zfpx")); //使用中间件  参数指密钥
//
/*app.get("/visit",(req,res)=>{
       //res.cookie("name","zf",{path:"/write"});//请求的地址是/write客户端才会像服务器端发送cookie
        res.cookie("name","zf");
        console.log(req.cookies.name); //获取请求头中的cookie

    res.send("ok");
});*/

app.get("/write",(req,res)=>{
    //res.cookie("age",123);
    res.cookie('age','123',{signed:true});
    res.send()
})
app.get("/read",(req,res)=>{
    console.log(req.cookies.age);//获取普通的cookie
    console.log(req.signedCookies.age);//获取加密的cookie
    res.send()
});



