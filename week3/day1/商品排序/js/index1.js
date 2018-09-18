//1.通过ajax获取动态数据
//2.将动态数据绑定在页面上
//3.对每个a标签绑定点击事件，点击时执行排序的逻辑
//4.排序的步骤：1.类数组转换成数组  2.sort方法排序 3.将排序后的数组重新添加到页面

~(function () {
    //1.创建ajax对象
    var xhr = new XMLHttpRequest();
    //2.打开一个链接地址(请求接口地址)
    xhr.open("get","./json/product.json",false);
    //3.监听请求的状态
    var data = null;
    xhr.onreadystatechange = function(){
        //请求状态码(readyState)和网络(http)状态码status
        if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
            data = JSON.parse(xhr.responseText)
        }
    }
    //4.发送请求
    xhr.send(null);
    
    
    //1.遍历后台返回的数据data
    var oUl = document.getElementById("list");
    var str = "";//用来累加li
    data.forEach(function(item){
        //item指的是数组中每个对象
        str+=`
            <li data-time ="${item.time}" data-price="${item.price}" data-hot="${item.hot}"><a href="javascript:;">
                <img src="${item.img}" alt="">
                <p>${item.title}</p>
                <span>热度：${item.hot}</span>
                <span>价格：￥${item.price}</span>
                <span>时间：${item.time}</span>
            </a></li>     
        `
    });
    oUl.innerHTML = str;
})();

~(function(){
    var oAs = document.querySelectorAll("#header>a");//a标签的集合
    var oUl = document.getElementById("list");
    var oLis = oUl.getElementsByTagName("li");
    var aLis = [].slice.call(oLis);//li集合的类数组转换成数组
    
    [...oAs].forEach(function(item,index){
        item.onclick = function(){
          sortFn(index);
        }
    })
    function sortFn(n){//n接收的是a标签的索引 0->时间(data-time) 1->价格(data-price) 2->热度(data-hot)
        var arr = ["data-time","data-price","data-hot"];
        var key = arr[n];//自定义属性名
        //假如让按照价格进行排序
        aLis.sort(function(a,b){//a前一个li b后一个li
            //通过自定义属性名拿到自定义属性值
            var prev = a.getAttribute(key);
            prev = prev.replace(/-/g,"");//对时间进行的处理
            var next = b.getAttribute(key);
            next = next.replace(/-/g,"");
            return prev-next;   //(prev-next)*1 升序（从小到大） (prev-next)*-1 降序（从大到小）
        });
        //排序后的数组重新添加到页面
        aLis.forEach(function(item){
            oUl.appendChild(item);
        })
    }



})();


