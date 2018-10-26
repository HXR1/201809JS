~(function () {
    let formatObj = (obj) => {
        let str = "";
        for (let attr in obj) {
            if (!obj.hasOwnProperty(attr)) return;
            str += `${attr}=${obj[attr]}&`;
        }
        str = str.slice(0, str.length - 1);
        return str;
    };
    let search = (url) => url.indexOf("?") === -1 ? "?" : "&";
    let axiosPromise = (options) => {
        let _defaults = {
            url:"",
            method: "get",
            async: true,
            cache: true,
            params: {},//get系列传的参数
            data: {},//post系列传的参数
            dataType: "json"
        };
        //Object.assign(_default,options);合并对象
        let {url, method, async, cache, params, data, dataType} = {..._defaults, ...options};
        let regGet = /^(GET|HEAD|DELETE|OPTIONS)$/i;
        let regPost = /^(POST|PUT|PATCH)$/i;
        if (!regGet.test(method) && !regPost.test(method)) return;
        /*既不是get系列也不是post系列*/
        //get系列的并且传了params传参，需要把参数转换成urlencode字符串放在url地址后面
        //http://www.baidu.com ?age=1&name=lucy
        if(regGet.test(method)&&params){
            if(Object.prototype.toString.call(params)==="[object Object]"){
                url+=`${search(url)}${formatObj(params)}`;
            }
        }else{
            data = formatObj(data);
        }
        //get系列若cache=false表示不需要缓存则还需要处理下
        if(regGet.test(method)&&!cache){
            url+=`_=${Math.random()}`;
        }
        return new Promise(function (resolve, reject) {
            //ajax四部
            //创建ajax对象
            let xhr = new XMLHttpRequest();

            //设置链接的链接地址并打开
            xhr.open(method, url, async);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                    let res = JSON.parse(xhr.responseText);
                    switch (dataType) {
                        case "json":
                            res =JSON.parse(xhr.responseText) ;
                            break;
                        case "xml":
                            res = xhr.responseXML;
                            break;
                    }
                    resolve(res);
                }
                if (xhr.readyState === 4 && /^(4|5)\d{2}$/.test(xhr.status)) {
                    reject(xhr, xhr.status, xhr.statusText);
                }
            };

           if(regGet.test(method)){
                xhr.send(null);
           }else{
               xhr.send(data);
           }
        })
    };
    ["get","head","delete","options"].forEach((item,index)=>{
        //这些根据请求类型封装的方法，核心逻辑跟axiosPromise一样，只有方法运行传的参数不一样
        axiosPromise[item] = function(url,options){
            options = {
                ...options,
                url:url,
                method:item
            };
            return axiosPromise(options);
        }
    });
    ["post","put","patch"].forEach((item,index)=>{
        axiosPromise[item] = function(url,data,options){
            options = {
                ...options,
                url:url,
                data:data,
                method:item
            };
            return axiosPromise(options);
        }
    });
    window.axiosPromise = axiosPromise;
})();

