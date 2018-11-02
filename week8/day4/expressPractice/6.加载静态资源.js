let express = require("express");
let app = express();
app.listen(9000);
app.use(express.static('public'));//内置中间件  参数是路径

app.get("/",function(req,res){
    res.sendFile("/a.html",{root:__dirname+"/public"},function(err,html){
        if(err){console.log(err)};
        res.end(html);
    })
});

