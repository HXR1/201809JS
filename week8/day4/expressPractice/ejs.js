let express = require("express");
let app = express();
app.listen(9000);
app.use(express.static("public"));
//页面上渲染的html页面用ejs模板引擎
app.engine("html",require('ejs').__express);
//放模板文件的目录
app.set('views', './public'); //当前目录的public文件下
//配置默认模板后缀的名字
app.set('view engine','html');//模板文件的后缀是html

app.get("/",function(req,res){
    //渲染b模板
    res.render("b",{user:"lily",arr:[1,2,3,4]},function(err,html){
        res.send(html);
    });
});