// 当函数执行前面有new 那么这就不再是函数执行了，而是构造函数的执行，
// 返回值就是当前类的实例
// 如果我们创建的是类(构造函数)，都会将首字母大写，以此和普通函数进行区分
// 普通函数执行 VS 构造函数执行
// 普通函数执行：
// 开辟私有作用域 =》 形参赋值 =》 变量提升 =》 代码执行
// 构造函数执行
// 开辟私有作用域 =》 形参赋值 =》 变量提升
// 浏览器默认开辟一个存储空间是object数据类型，构造函数里面的this指向这个object地址
// this也就是当前的实例
// 如果没有return 浏览器会默认把她创建的object返回出去
// 也就是this(当前类的实例)被返回出去
// 如果有return但是返回的是基本数据类型，浏览器会忽视这个return继续返回this(当前类的实例)
// 如果return的是一个对象 那么浏览器就会把这个对象返回，忽视this(当前类的实例)

// 开辟私有作用域 形参赋值 变量提升
// 浏览器会默认添加一个 object
// 代码自上而下执行
// 遇到this.xx = bb
// 就会白浏览器自己添加的object里面存储xx:bb
// 默认 return这个object


// 见图1.png
function Fn(name, age) { // 这个函数叫类
    this.name = name
    this.age = age
    this.getCen = function () {
        alert('hello')
    }
}
var f = new Fn('zhufeng', 9) // f就是Fn类的实例
// f = fff000地址
// {name: 'zhufeng', age: 9, getCen: function(){}}
// console.log(f, '>>>>')
// f.getCen()

// 如图 2.png
function Fn1() {
    var a = 1
    // console.log(a)
    return a
}
//Fn1()
var f1 = new Fn1()
console.log(f1)

// 如图3.png
function Fn2(data) {
    this.name = data.name
    this.age = data.age
    this.cen = 'hello'
}
var f21 = new Fn2({name: 'zhufeng', age: 9})
var f22 = new Fn2({name: 'jay', age: 40})
console.log(f22.name, f22.age) // jay 40
console.log(f21.name, f21.age) // jay 40




var arr1 = new Array(1,2)




