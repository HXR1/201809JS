let banner = (function(){
    //获取元素
    let box = document.getElementById("box");
    let oUl = document.getElementById("list");
    let oLis = oUl.getElementsByTagName("li");
    let bannerTip = document.getElementById("bannerTip");
    let oSpans = bannerTip.getElementsByTagName("span");
    let btnLeft = document.getElementById("btnLeft");
    let btnRight = document.getElementById("btnRight");
    let oImgs = oUl.getElementsByTagName("img");//DOM映射
    let step = 0;//显示的banner的索引
    let autoTimer = null;
    let p = new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('get','data.json',true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                // data = JSON.parse(xhr.responseText);
                resolve(JSON.parse(xhr.responseText));

            }
        };
        xhr.send(null);
    });

    function bindHtml(data){
        var str = '';
        var strFocus = '';
        data.forEach(function (item,index) {
            str += `<li><img src="" realImg ="${item.img}"></li>`;
            strFocus += index===0 ?`<span class="cur"></span>`:`<span></span>`;
        })
        oUl.innerHTML = str;
        let cloneLi = oLis[0].cloneNode(true);
        oUl.appendChild(cloneLi);
        oUl.style.width = oUl.offsetWidth+oLis[0].offsetWidth+"px";
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
    function autoPlay(){
            step++;
            if(step===oLis.length){
               oUl.style.left = 0;//瞬间回到第一张，由于最后一张跟第一张一样，所以看不到这个过程
               step=1;//紧接着第二张
            }
            animate(oUl,{left:-step*1000},1000);
            btnFocus();
    }
    function btnFocus(){
        let spanIndex = step===oLis.length-1?0:step;
        [...oSpans].forEach(function(item,index){
            utils.removeClass(item,"cur");
            if(spanIndex === index){
                utils.addClass(item,"cur");
            }
        })
    }
    function overout(){
        //划过轮播图时 ，左右箭头显示，不自动轮播
        box.onmouseover = function(){
            btnLeft.style.display = btnRight.style.display = "block";
            clearInterval(autoTimer);
        };
        //划出轮播图时，左右箭头隐藏，自动轮播
        box.onmouseout = function(){
            btnLeft.style.display = btnRight.style.display = "none";
            autoTimer = window.setInterval(autoPlay,2000);
        }
    }
    function changeBtn(){
        [...oSpans].forEach(function(item,index){
            item.onclick = function(){
                //把step值改成点击焦点的索引
                step = index;
                //ul根据step值设置下移动的距离，-step*1000
               animate(oUl,{left:-step*1000},1000);
               btnFocus();
            }
        })
    }
    function handleArrow(){
        btnLeft.onclick = function(){
            step--;
            if(step<0){
                oUl.style.left = -(oLis.length-1)*1000+"px";//瞬间回到倒数第一张
                step = oLis.length-2;
            }
            animate(oUl,{left:-step*1000},1000);
            btnFocus();
        };
        btnRight.onclick = autoPlay;
    }
    return {
       init(){
          p.then(function(data){
              //2.绑定数据
              bindHtml(data);
          }).then(function(){
              //3.延迟加载x
              window.setTimeout(showImg,1000);
              //4.自动轮播
              autoTimer = window.setInterval(autoPlay,2000);
              //5.划过划出
              overout();
              //6.点击焦点切换
              changeBtn();
              //7.点击左右箭头切换
              handleArrow();
          })



       }
    }
})();
banner.init(); //模块初始化
