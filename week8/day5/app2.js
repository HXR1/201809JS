const express = require("express");
const  app = express();
let cookieParser = require("cookie-parser");
app.listen(9595);
app.use(cookieParser());
let cookie_key = "ckey";//cookie的key
let session_id = null; //保存sessionId
let session = {}//表示服务器端存的所有的session
app.get("/visit",(req,res)=>{
       //判断请求是否携带cookie
        session_id = req.cookies[cookie_key];
        if(session_id){
            let balance = session[session_id].balance-20;
            session[session_id].balance = balance;
            res.send(`老客户你好，你的会员卡余额为${balance}元`)
        }else{//第一次访问
            setInit(res)
        }
})
function setInit(res){
    //服务器端向客户端种植cookie,把sessionId存储的值返回给客户端
    let session_id = Math.random();
    res.cookie(cookie_key,session_id);
    session[session_id] = {balance:100};
    res.send("新客户你好，你的会员卡余额为100元");
}