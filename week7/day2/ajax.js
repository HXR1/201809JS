let urlEncode = (obj) => {
    //{name:"zf",age:9} "name = zf&age=9"
    //encodeURIComponent 和encodeURI 编码字符串
    //它俩的区别：encodeURI 不会对特殊字符：/?&=进行编码 encodeURIComponent 会都进行编码
    //解码 decodeURIComponent 和 decodeURI
    if(Object.prototype.toString.call(obj)!=="[object Object]"){
        return obj;
    };
    let str = "";
    for (let attr in obj) {
        if (!obj.hasOwnProperty(attr)) return;
        str += `${attr}= ${encodeURIComponent(obj[attr])}&`
    }
    str = str.slice(0, str.length - 1);
    return str;
};
let search = (url) => url.indexOf("?") === -1 ? "?" : "&";

let ajax = (options) => {
    //options中属性部分若没设置得给它设置默认值
    let {
        url,
        type = "get",
        async = true,
        cache = true,
        data = {},
        dataType = "json",
        success,
        error
    } = options;

    //get系列 get|head|delete|options  post系列 post|put
    let regGet = /^(GET|HEAD|DELETE|OPTIONS)$/i;
    let regPost = /^(POST|PUT)$/i;
    if (!regGet.test(type) && !regPost.test(type)) return;
    //处理get系列的参数部分
    if (regGet.test(type) && data) {
        if (Object.prototype.toString.call(data) === "[object Object]") {
            data = urlEncode(data);
            url+=`${search(url)}${data}`;
        }
    }
    //处理get系列的缓存 只有get系列的才有缓存，post系列没有缓存
    if(regGet.test(type) && !cache){ //不需要缓存 cache的值为false
        //在url地址后加一个随机数
        url+=`_=${Math.random()}`;
    }

    let xhr = new XMLHttpRequest();
    xhr.open(type, url, async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            //根据dataType返回对应的数据并传给success方法
            let result = xhr.responseText;/*字符串*/
            switch (dataType){
                case "json":
                    result = xhr.responseText;
                    break;
                case "xml":
                    result = xhr.responseXML;
            }
           success&&success(JSON.parse(result));
        }
        if (xhr.readyState === 4 && /^(4|5)\d{2}$/.test(xhr.status)) {
            //请求失败 执行error方法
            error&&error(xhr,xhr.status,xhr.statusText);
        }
    };
    //根据请求的类型确定发送请求体里是否有内容
    if(regGet.test(type)){
        xhr.send(null); //请求体里不需要放数据
    }else{
        xhr.send(urlEncode(data));
    }
};