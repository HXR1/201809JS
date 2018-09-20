var utils = (function(){
    function getCss(ele,attr){
        if("getComputedStyle" in window){
          return  window.getComputedStyle(ele,null)[attr]
        }else{
            return ele.currentStyle[attr];
        }
    }
    function setCss(ele,attr,value){
        if(attr ==="opacity"){
            ele.style.opacity = value;
            ele.style.filter = "alpha(opacity = "+value*100+")";
            return;
        }

        var reg = /^(width|height|(padding|margin)?(left|right|top|bottom)?)$/i;
        if(reg.test(attr)){
            if(!isNaN(value)){//对没有带单位加单位
                value+="px";
            }
        }
        ele.style[attr] = value;
    }
    function setGroup(ele,obj){
        //1.检测obj是否是一个对象
        if(Object.prototype.toString.call(obj)!=="[object Object]") return;
        //2.分别给obj中每个css属性设置值
        for(var key in obj){
            if(obj.hasOwnProperty(key)){//私有的属性
                setCss(ele,key,obj[key]);
            }
        }
    }
    function css(){
        //根据参数的类型或个数，分别调用不同的方法
       var fn = getCss; //设置默认调用的方法
       var arg = arguments;
       if(arg.length===3) fn = setCss;
       if(arg.length===2&&typeof arg[1] ==="object") fn = setGroup;
       return fn.apply(null,arg);
    }
    function win(attr,value){  //获取文档的13个属性
        if(typeof value == "undefined"){
           return document.documentElement[attr]||document.body[attr]
        }
        document.documentElement[attr] = value;
        document.body[attr]= value;
    }

    return {
        css:css,
        win:win
    }
})();