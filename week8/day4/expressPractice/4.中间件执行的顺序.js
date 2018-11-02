let express = require("express");
let app = express();
app.listen(9000);
app.use(function(req,res,next){
    console.log("呵呵");
    next();
    console.log(1)
});
app.use("/reg",function(req,res,next){
    console.log("哈哈");
    next();
    console.log(2)
});
app.get("/reg",function(req,res,next){
    console.log("嘿嘿");
    next();
    console.log(3)
});

//错误处理的中间件
app.use(function (err, req, res, next) {//第一个参数是err，这是跟其他中间件不一样的地方
    console.error(err.stack);
    res.status(500).send('Something broke!')
});
