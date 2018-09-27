var utils = (function () {
    function getCss(ele, attr) {
        var res = null;
        if ("getComputedStyle" in window) {
             res = window.getComputedStyle(ele, null)[attr]
        } else {
            res = ele.currentStyle[attr];
        }
        var reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(px|pt|em)?$/;
        return reg.test(res) ? parseFloat(res) :res;
    }

    function setCss(ele, attr, value) {
        if (attr === "opacity") {
            ele.style.opacity = value;
            ele.style.filter = "alpha(opacity = " + value * 100 + ")";
            return;
        }

        var reg = /^(width|height|(padding|margin)?(left|right|top|bottom)?)$/i;
        if (reg.test(attr)) {
            if (!isNaN(value)) {//对没有带单位加单位
                value += "px";
            }
        }
        ele.style[attr] = value;
    }

    function setGroup(ele, obj) {
        //1.检测obj是否是一个对象
        if (Object.prototype.toString.call(obj) !== "[object Object]") return;
        //2.分别给obj中每个css属性设置值
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {//私有的属性
                setCss(ele, key, obj[key]);
            }
        }
    }

    function css() {
        //根据参数的类型或个数，分别调用不同的方法
        var fn = getCss; //设置默认调用的方法
        var arg = arguments;
        if (arg.length === 3) fn = setCss;
        if (arg.length === 2 && typeof arg[1] === "object") fn = setGroup;
        return fn.apply(null, arg);
    }

    function win(attr, value) {  //获取文档的13个属性
        if (typeof value == "undefined") {
            return document.documentElement[attr] || document.body[attr]
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }

    function random(n, m) {
        if (isNaN(n) || isNaN(m)) { //不是有效数时返回一个随机数
            return Math.random();
        }
        if (n > m) { //交换值
            n = n + m;
            m = n - m; //m存的n的值
            n = n - m;//n存的m的值
        }
        return Math.round(Math.random() * (m - n) + n);
    }

    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;
        while (p) {
            l += p.offsetLeft + p.clientLeft;
            t += p.offsetTop + p.clientTop;
            p = p.offsetParent;
        }
        return {
            l:l,
            t:t
        }
    }


    /**
     * @param ele 当前元素
     * @param strClass  单个类名
     * @return true|false
     */
    function hasClass(ele,strClass){
        var reg = new RegExp("(^| +)"+strClass+"( +|$)");
        return reg.test(ele.className)
    }

    /**
     * 添加类名
     * @param ele  当前的元素
     * @param strClass 一个类名或多个类名
     */
    //<div class="c1 a1 a2">
    //" a1 a2 "
    function addClass(ele,strClass){
        var aryClass =  strClass.replace(/(^\s+|\s+$)/g,"").split(/\s+/g);//["a1","a2"]
        for(var i = 0;i<aryClass.length;i++){
            var curClass =aryClass[i];
            if(!hasClass(ele,curClass)){
                ele.className += " "+curClass;
            }
        }
    }

    /**
     * 删除类名
     * @param ele  当前元素
     * @param strClass 一个类名或多个类名
     */
    function removeClass(ele,strClass){
        var aryClass = strClass.replace(/^ +| +$/g,"").split(/ +/g);
        for(var i = 0;i<aryClass.length;i++){
            var curClass =aryClass[i];//拿到每一个类名
            var reg = new RegExp("(^| +)"+curClass+"( +|$)","g");
            if(hasClass(ele,curClass)){
                ele.className = ele.className.replace(reg," ");
            }
        }
    }
    return {
        css: css,
        win: win,
        random: random,
        offset:offset,
        addClass:addClass,
        removeClass:removeClass,
        hasClass:hasClass
    }
})();