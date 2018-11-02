let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.listen(9000);
//body-parser 用来解析客户端请求体的数据
app.use(bodyParser.urlencoded({extended:false}));//application/x-www-form-urlencoded
app.use(bodyParser.json());//application/json

app.get("/",function(req,res){
    res.sendFile("/index.html",{root:__dirname},function(err,html){
        if(err){console.log(err)};
        res.end(html);
    })
});
app.post("/login",function(req,res,next){
    //console.log(req.body);  //请求体的数据，是一个对象
    //req和res可以扩展属性
    req.name = req.body.xm; //在其他中间里可以拿到 req.name 是自己设置的自定义属性
    next();
});
app.use(function(req,res,next){
    console.log(req.name);
    res.send();
})

