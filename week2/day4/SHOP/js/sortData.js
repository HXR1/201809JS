// 将数据排好序在渲染
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

// result排序
// console.log(result, '>>>')
// 因为result是引用数据 在下面一行排序，理论上 上面一行打印出的数据
// 是没排好序的，但是浏览器会在排好序之后(result改变之后) 对上面的打印数据就行同步
result.sort(function (a, b) {
    return a.price - b.price
})
// 一定要先排序数据后渲染DOM
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

