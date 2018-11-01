axios.defaults.baseURL= "http://localhost:8089";
axios.interceptors.response.use((res)=>{
    return res.data;
});
let list = document.querySelector(".list");
axios.get("/getList").then(function(users){
    if(users.code===0){
        let str = "";
        users.data.forEach((item,index)=>{
        str+=`
        <li>
            <span>${item.id}</span>
            <span>${item.name}</span>
            <span>${item.tel}</span>
            <span>
                <a href="/add.html?id=${item.id}">修改</a>
                <a href="javascript:;" data-id="${item.id}" class="del">删除</a>
            </span>
        </li>`
        })
        list.innerHTML = str;
    }
})
list.onclick  = function(e){
    let target = e.target;
    if(target.className === "del"){  //点击的是删除的这个A标签
        //先询问下用户是否删除，若要删除再发起请求
        let flag = window.confirm("请问确认要删除吗?");
        if(flag){
            let id = target.dataset.id;
            axios.delete("/removeInfo?id="+id).then(function(res){
                if(res.code === 0){
                    list.removeChild(target.parentNode.parentNode);
                }
            })
        }
    }
}
