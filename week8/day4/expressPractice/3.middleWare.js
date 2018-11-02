let express = require("express");
let app = express();
app.listen(9000);
app.use(function(req,res,next){  //不管请求方式，请求地址是啥，都会走到这个中间件
    console.log('Time:', new Date().toLocaleString());
    next() ;//代码能继续往下
});
app.use('/user', function (req, res, next) {//只要接口地址匹配，则会走到这里
    console.log('Request Type:', req.method);
    next();
});
app.get('/user', function (req, res, next) {/*请求方式是get方式时才走到这里*/
    res.send('USER');
})

