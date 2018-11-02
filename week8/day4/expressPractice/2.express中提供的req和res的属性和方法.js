const  express = require("express");
const app = express();
app.listen(9000);
//路由参数 和问号传参
// /user/2/lily  {id:2,name:"lily"}

/*app.get("/user/:id/:name",function(req,res){
    //req.params 参数对象{id:2,name:"lily"}
    //console.log(req.params.name);
    res.send();
})*/
app.get("/user",(req,res)=>{
    //console.log(req.query); //拿到问号传参部分
    //console.log(req.query.id);
    //console.log(req.path); //请求的路径pathname
    //res.sendStatus(200);
    //res.send("hello");//对象，数组，字符串，布尔值或数字
    //res.redirect("/reg");//接口跳转
    /*res.sendFile("/index.html",{root:__dirname},function(err,html){
        if(err){console.log(err);return}
        res.send(html); //把页面的内容发送客户端
    })*/
});
/*app.get("/reg",function(req,res){
    res.send("注册页面");
})*/


