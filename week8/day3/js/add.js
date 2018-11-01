axios.defaults.baseURL= "http://localhost:8089";
axios.interceptors.response.use((res)=>{
    return res.data;
});

let username = document.getElementById("username");
let userTel = document.getElementById("userTel");
let btn = document.getElementById("btn");
let reg = /^\s*$/g;
btn.onclick = function(){
    if(reg.test(username.value)||reg.test(userTel.value)){
        return;
    }
    axios.post("/addInfo",{
        name:username.value,
        tel:userTel.value
    }).then(function(res){
        if(res.code ===0){
            alert(res.msg);
            window.location.href="/";
        }
    })
};