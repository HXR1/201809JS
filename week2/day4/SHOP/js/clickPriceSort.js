// 点击价格排序
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

function render() {
    var list = document.getElementById('list');
    var str = '';
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        str += `<li><a href="javascript:;">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <span>￥${item.price}</span>
        </a></li>`
    }
    list.innerHTML = str
}
render()

// 获取第二个a标签 添加点击事件
var header = document.getElementById('header');
var aList = header.getElementsByTagName('a');

var flag = true
aList[1].onclick = function () {
    // if (flag) {
    //     flag = false
    // } else {
    //     flag = true
    // }
    flag = !flag
    result.sort(function (a, b) {
        var result;
        if (flag) {
            result = a.price - b.price
        } else {
            result = b.price - a.price
        }
        return result
    })
    render()
}

