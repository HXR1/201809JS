// 通过ajax获取数据
// var xhr = new XMLHttpRequest();
// // Http
// xhr.open('get', 'JSON/product.json', false);
// // [method] get post delete
// // [path] 接口
// // [async] false true
// var result = null;
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         result = JSON.parse(xhr.responseText)
//         // console.log(result)
//     }
// };
// xhr.send(null);
// console.log(result)

function http(data) {
    var result = null;
    var xhr = new XMLHttpRequest();
    xhr.open(data.method, data.path, data.async);
    // xhr.open('get', 'JSON/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result = JSON.parse(xhr.responseText)
            data.fn(result)
        }
    };
    xhr.send(null);
}
http({
    method: 'get',
    path: 'JSON/product.json',
    async: false,
    fn: fn // 回调函数 callback
})
http({
    method: 'get',
    path: 'JSON/hello.json',
    async: false,
    fn: function (result) {
        console.log(result, 'hello')
    } // 回调函数 callback
})
function fn(result) {
    console.log(result, 'yy')
}
// ....


