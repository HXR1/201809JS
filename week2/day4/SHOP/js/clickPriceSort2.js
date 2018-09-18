// 点击价格排序
// server.js  服务请求的文件
var xhr = new XMLHttpRequest();
xhr.open('get', 'JSON/product.json', false);
var result = null;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        result = JSON.parse(xhr.responseText)
        result.sort(function (a, b) {
            return a.price - b.price
        })
    }
};
xhr.send(null);

// index.js 初始化渲染
function render() {
    var list = document.getElementById('list');
    var str = '';
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        str += `<li data-price="${item.price}">
                <a href="javascript:;">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <span>￥${item.price}</span>
        </a></li>`
    }
    list.innerHTML = str
}
render()

// sort.js 真正处理业务的文件
// 获取第二个a标签 添加点击事件
var header = document.getElementById('header');
var aList = header.getElementsByTagName('a');

aList[1].onclick = function () {
    var list = document.getElementById('list');
    var lis = list.getElementsByTagName('li');
    // 第一步 获取到所有li
    lis = [].slice.call(lis)
    // 第二步 li集合是一个类数组 转成数组
    // 使用数组sort方法为lis排序
    lis.sort(function (a, b) {
        var beforePrice = a.getAttribute('data-price')
        var nextPrice = b.getAttribute('data-price')
        return nextPrice - beforePrice
    })
    for (var i = 0; i < lis.length; i++){
        list.appendChild(lis[i])
    }
}
