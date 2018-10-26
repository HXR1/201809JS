//若想使用其他模块里的内容，先通过require引入进来 a相当于是a模块导出的对象

let a = require("./a");//js，json文件后缀可不写
console.log(a.sum(10, 5, 15));
console.log(a.fn(3, 4));

/*let {sum,fn} = require("./a");
console.log(sum(10, 5, 15));
console.log(fn(3, 4));*/

