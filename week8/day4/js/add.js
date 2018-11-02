axios.defaults.baseURL= "http://localhost:8089";
axios.interceptors.response.use((res)=>{
    return res.data;
});
//获取url地址的参数并转换成对象
function formatUrl(url){
    //匹配参数部分
    let reg = /([^?&=]+)=([^?&=]+)/g;
    let obj = {};
    url.replace(reg,($0,$1,$2)=>{
        obj[$1] = $2;
    });
    return obj;
}
let obj = formatUrl(window.location.href);
let id = obj.id;
let username = document.getElementById("username");
let userTel = document.getElementById("userTel");
let btn = document.getElementById("btn");
let reg = /^\s*$/g;
if(id){
    axios.get("/getList",{
       params:{
           id:id
       }
    }).then(function(res){
        if(res.code===0){
            username.value = res.data.name;
            userTel.value = res.data.tel;
        }
    })
}

btn.onclick = function(){
    if(reg.test(username.value)||reg.test(userTel.value)){
        return;
    }
    if(id){//修改
        axios.put("/updateInfo",{
            id:id,
            name:username.value,
            tel:userTel.value
        }).then(function(res){
            if(res.code === 0){
                alert(res.msg);
                window.location.href="/";
            }
        })

    }else{
        axios.post("/addInfo",{ //新增内容
            name:username.value,
            tel:userTel.value
        }).then(function(res){
            if(res.code ===0){
                alert(res.msg);
                window.location.href="/";
            }
        })
    }

};