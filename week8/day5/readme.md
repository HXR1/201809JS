### cookie使用注意事项
cookie是为了辩别用户身份，进行会话跟踪而存储在客户端上的数据
- 可能被客户端篡改，使用前验证合法性
- 不要存储敏感数据，比如用户密码，账户余额
- 使用httpOnly保证安全防止XSS攻击产生
- 设置正确的domain和path，减少数据传输

设置cookie
document.cookie  = "key=value"
获取cookie  
document.cookie

###在express中操作cookie
设置cookie
res.cookie(name,value,options)
获取请求头中的cookie
req.cookies.name

### 第三方中间件（cookie-parser）来解析cookie
设置cookie
res.cookie(name,value);
获取请求头中的cookie
req.cookies
清除cookie
res.clearCookie(name)

    //1.普通设置
    //res.cookie('name','value');

    //2.设置域名
    //res.cookie('name','zfpx',{domain:'a.zfpx.cn'});

    //3.设置路径
    //res.cookie('name','zfpx',{path:'/visit'});

    //4.过期时间
    //res.cookie('name','zfpx',{expires:new Date(Date.now()+20*1000)});//毫秒
    //res.cookie('name','zfpx',{maxAge:20*1000});//过期时间 毫秒

    //httpOnly true还是false无意义 document.cookie取不到
    //res.cookie('name','zfpx',{httpOnly:true});

第一次  客户端向服务器端发送请求
       服务器端接收到请求后，将sessionId保存在客户端cookie中
第二次  客户端再次向服务器发送请求时，会把保存sessionId的cookie发送给服务器端，服务器端通过cookie中的sessionId找到服务器中对应的数据发送给客户端 

###session
1.什么是session?
- session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上

2. cookie与session区别
cookie数据存放在客户的浏览器上，session数据放在服务器上。
cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗 考虑到安全应当使用session
session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面,应当使用COOKIE
单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie
将登陆信息等重要信息存放为session、其他信息如果需要保留，可以放在cookie中

3. 若sessionId没有存在客户端cookie里，说明是第一次访问或cookie过期，这给设置客户端cookie，并返回{balance:100};
   再次访问时 ，每次余额减20
