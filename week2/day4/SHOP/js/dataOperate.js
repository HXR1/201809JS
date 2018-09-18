// 获取数据 然后在页面上绑定数据
// 通过ajax获取数据
var xhr = new XMLHttpRequest();
xhr.open('get', 'JSON/product.json', false);
var result = null;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        result = JSON.parse(xhr.responseText)
    }
};
xhr.send(null);

// 如何将拿到的数据绑定到页面
// 1.创建li等标签，再将li放入ul里
// var myLi = document.createElement('li')
// list.appendChild(myLi)
// 2.字符串拼接方式
// str +=
//     '<li>' +
//     '<a href="javascript:;">' +
//     '<img src="'+item.img+'" alt="">'+
//     '<p>'+item.title+'</p>' +
//     '<span>￥'+item.price+'</span>' +
//     '</a>' +
//     '</li>'
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
// ES6 模板字符串
// var str = 'hello';
// var res = 'zhufeng ' + str + ' world';
// var es6Res = `zhufeng ${str} world`

