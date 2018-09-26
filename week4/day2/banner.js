let banner = (function(){
    //获取元素
    let oUl = document.getElementById("list");
    let bannerTip = document.getElementById("bannerTip");
    let btnLeft = document.getElementById("btnLeft");
    let btnRight = document.getElementById("btnRight");
    let oImgs = oUl.getElementsByTagName("img");//DOM映射
    let data = null;
    function getData(){
        let xhr = new XMLHttpRequest();
        xhr.open('get','data.json',false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                data = JSON.parse(xhr.responseText)
            }
        };
        xhr.send(null);
    }
    function bindHtml(){
        var str = '';
        var strFocus = '';
        data.forEach(function (item,index) {
            str += `<li><img src="" realImg ="${item.img}"></li>`;
            strFocus += index===0 ?`<span class="cur"></span>`:`<span></span>`;
        })
        oUl.innerHTML = str;
        bannerTip.innerHTML = strFocus;
    }
    function showImg(){
        [...oImgs].forEach(function(item){
            var tempImg = new Image();
            tempImg.src = item.getAttribute("realImg");
            tempImg.onload = function(){
                item.src = this.src;
                animate(item,{opacity:1},1000);
            };
        });
    }
    return {
       init:function(){
           //1.获取数据
           getData();
          //2.绑定数据
           bindHtml();
          //3.延迟加载
           window.setTimeout(showImg,1000);
          //4.自动轮播
          //5.划过划出
          //6.点击焦点切换
          //7.点击左右箭头切换
       }
    }
})();
banner.init(); //模块初始化