// 实现 上架时间 价格 热度 都可以排序
// 点击价格排序
// 第一步获取数据
var xhr = new XMLHttpRequest();
xhr.open('get', 'JSON/product.json', false);
var result = null;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        result = JSON.parse(xhr.responseText)
        // may error
        result.sort(function (a, b) {
            return a.price - b.price
        })
    }
};
xhr.send(null);

// 第二步 将获取到的数据渲染到页面  单纯的渲染
var list = document.getElementById('list');
function render() {
    var str = '';
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        // may error
        str += `<li
            data-hot="${item.hot}"
            data-time="${item.time}"
            data-price="${item.price}">
                <a href="javascript:;">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <span>￥${item.price}   hot:${item.hot}   
            时间：${item.time}</span>
        </a></li>`
    }
    list.innerHTML = str
}
render();

// 获取第二个a标签 添加点击事件
// 第三步 获取到所有a标签 并循环绑定点击事件
var header = document.getElementById('header');
var aList = header.getElementsByTagName('a');
var typeList = ['time', 'price', 'hot'];
for (var i = 0; i < aList.length; i++) {
    // 上架时间 价格 热度
    var item = aList[i];
    item.type = typeList[i];
    // 给每一个a标签 添加一个私有属性 为了在点击的时候识别点击的是哪一个a标签
    // type 的意义在于点击不同a的时候 是不同的
    item.flag = 1;
    // 再给每一个a标签添加一个flag 为的是每次点击是需要升序还是降序
    // flag 的意义在于点击同一个a 值会在-1和1之间循环
    item.onclick = itemClick
}

// 第四步 给a标签绑定的点击事件方法  也就是排序
function itemClick() {
    var lis = list.getElementsByTagName('li');
    lis = [].slice.call(lis);
    var type = this.type;
    // 通过这一步就可以判断点击的是哪一个a标签
    this.flag *= -1;
    // 对每一个a标签的私有属性 flag 进行取反
    // 也就是说第一次点击时候 flag变成-1 第二次变成1 第三次又是-1
    var flag = this.flag;
    // var flag = this.flag *= -1;
    lis.sort(function (a, b) {
        var beforePrice = a.getAttribute('data-' + type);
        // may error
        var nextPrice = b.getAttribute('data-' + type);
        if (type === 'time') {
            // 2017-03-15
            // beforePrice = beforePrice.replace('-', '');
            // beforePrice = beforePrice.replace('-', '');
            // nextPrice = nextPrice.replace('-', '');
            // nextPrice = nextPrice.replace('-', '');
            beforePrice = beforePrice.replace(/-/g, '');
            nextPrice = nextPrice.replace(/-/g, '');
        }
        // flag的意义
        // 点击同一个a标签的时候 a.flag 会在-1和1两个数之间变化
        // 这样就可以控制排序 是升还是降
        return (nextPrice - beforePrice) * flag
    })
    var frg = document.createDocumentFragment()
    // 文档碎片就是临时保存DOM的容器
    for (var i = 0; i < lis.length; i++){
        frg.appendChild(lis[i])
    }
    list.appendChild(frg)
}