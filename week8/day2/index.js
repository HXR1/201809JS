/*
* 接口地址  http://localhost:9090/getAll
* type:"get"
* dataType:"json"
* */
axios.defaults.baseURL = "http://localhost:9090";/*接口地址中公共的路径部分*/
/*对响应的信息进行劫持，只获取响应的数据*/
axios.interceptors.response.use(function(res){
    return res.data;
});
let oUl = document.getElementById("list");
axios.get("/getAll",{
    dataType:"json"
}).then(function(data){
    let str = "";
    data.forEach((item,index)=>{
        str+=`<li>${item.name}</li>`
    });
    oUl.innerHTML = str;
});

/*
* 协议 域名 端口号 都相同  同域
* 这三者只要有一个不一样就是跨域
* http://localhost:63342 ->http://localhost:9090
* 方案一  Cross跨域请求
*    Access-Control-Allow-Origin："*"响应头
* 方案二 jsonp
*
* */