## 变量提升

### 全局作用域
> 浏览器在拿到JS文件的时候开辟一个空间去做一些事情 如变量提升 代码执行  
> 全局变量 在全局作用域里面带var关键字的 和 function  
> 私有作用域 private scope  
> 私有变量 形参 带var关键字

### a && window.a
> 全局作用域下写的 a = 10 或者 var a = 10 都是给window添加了一个属性 所以和window.a 完全一样  
> 单独取没有定义的a会报错(alert(a)) 但是alert(window.a)不会报错 会输出undefined
> a && var a  
> a 与 var a 都是给window增加私有属性a,但是var a 会有变量提升， 所以结果是undefined

```javascript
console.log(a) // undefined
console.log(window.b) // undefined
console.log(b) // Error
var a = '10';
b = '12'
```

### 变量提升细节
> 变量提升时函数不仅会声明还会定义 所以函数执行代码可以写在函数体之前  
> 带var关键字的 只会声明不会定义  
> 同名变量，不会继续变量提升
```javascript
fn()
function fn() {
    var a = 15
    alert(a)
}
var fn
```
> return 后面不进行变量提升但是return下面会进行变量提升
```javascript
function fn() {
    alert(a) // undefined
    result() // Error: result is not a function
    return function result() {}
    var a = 10
    var result = 10
}
fn()
```
> 条件判断语句里面 带var 关键字的会进行变量提升  
> function 标准浏览器下 在执行体外面不会进行变量提升 也就是在执行体外面拿不到函数，但是在条件判断体里面会提升，也就是说可以在函数体之前执行
```javascript
console.log(fn, '外面') 
// undefined 拿不到fn 如果执行fn会报错
if (typeof a === 'undefined') {
    var a = 100
    console.log(fn, '里面') 
    // 可以拿到fn 可以执行fn 
    function fn() {
        console.log('10') // 10
    }
}
```
> 自执行函数不会进行变量提升
```javascript
console.log(fn) // Error fn is not defined
!(function fn() {})()
```

### 作用域链
> 函数执行的时候，寻找边量，会先在当前作用域下寻找，如果没找到会往上级作用域寻找，一直到window，如果window 里面还没有就会报错
> 作用域链往上寻找变量，只和函数定义有关和执行无关
```javascript
var a = 100
!(function fn() {
    var a = 10
    a = 20
    function fn1() {
        console.log(a) // 20
    }
    fn1()
})()

var a = 100
function fn1() {
    console.log(a) // 100
    // 作用域链查找变量只和函数定义有关和执行无关
}
!(function fn() {
    var a = 10
    a = 20
    fn1() // 100 
})()
```
### 基本规范
> 基本不要写函数套函数  
> 不要在函数执行之前调用函数

## 逻辑与(&&) & 逻辑或(||)
> 在判断语句里面 && 左右两边同时为true，这个判断才为true，有一边为false就为false
```javascript
if (true && 0) {
    alert('ok')
} else {
    alert('No')
}
// 输出 OK
if (true && 1) {
    alert('ok')
} else {
    alert('No')
}
// 输出No
```
> 在判断语句中的 逻辑或(||) 左右两天有一边为true判断结果就为true。两边都是false结果才是false
```javascript
if (false || 1) {
    console.log('OK')
}// 输出OK
if (false || '') {
    
} else {
    console.log('No')
} // 输出No
```
> 赋值操作中， 如果 逻辑或(||) 左边为false 就将右边赋值给变量，如果左边为true 则将左边赋值给变量
```javascript
var cur = {}
var next = {}
function fn(cur, next) {
    var data = null;
    return data
}
var a = fn(cur, next) || 'default'
// fn执行返回的是null 所以将'default'赋值给 a
console.log(a, '>>>>') // 输出 default
``` 

> 逻辑与的赋值操作 如果左边为true 将右边赋值给变量，如果左边false直接将左边赋值给变量
```javascript
var cur = {}
var next = {}
function fn(cur, next) {
    var data = 1;
    return data
}
var a = fn(cur, next) && 'default'
console.log(a, '>>>>') // 输出default
```

## 逻辑运算的级别
[逻辑运算的级别](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


## 闭包
> 函数在执行的时候形成的私有作用域，使全局变量不受污染  
> `模块化` 开发
```javascript
var butt = document.getElementById('butt')
function clicIt() {
    var total = 0
    return function () {
        total++;
        butt.innerHTML = total
    }
}
realClick = clicIt()
butt.onclick = realClick


for (var i = 0; i < 6; i++) {
    !(function (i) {
        lis[i].onclick = function () {
            console.log(i)
        }
    })(i)
}
```

## this关键字
> this 是函数执行时的主体
> 正常函数执行，就是函数执行前面没有点，并且也没有其他的操作，此时的this就是window  
> 当函数执行前面有点的时候，函数里面的this就是点前面的东西  
> 当给DOM绑定事件的时候，绑定方法里面的this，是事件执行时的DOM
> 自执行函数里面的this永远是window

```javascript
var a = 20;
function getA() {
    return this.a // fo.a
}
var fo = {
    a: 10,
    getA: getA
};
console.log(fo.getA())
// fo.getA执行的时候 getA里面的this就是 fo 所以this.a 就是 fo.a
console.log(getA())
// getA() 执行的时候 没有点也没有其他特殊操作，getA里面的this就是window this.a 就是window.a

var name = 'jay';
var person = {
    name: 'kang',
    pro: {
        name: 'lili',
        getName: function () {
            return this.name;
        }
    }
};
console.log(person.pro.getName()) // lili
// getName()前面有点 里面的this就是点前面的就是person.pro
var person = person.pro.getName;
console.log(person()) // jay
// person() 前面没有点 也没有其他操作里面的this就是window

function fo() {
    console.log(this.a)
}
function active(getA) {
    // 形参赋值是就是把fo所在的地址给变量getA
    // getA正常执行 前面没有点也没有特殊的操作
    // 所以里面的this 是window
    getA()
}
var a = 20
var obj = {
    a: 10,
    getA: fo
}
active(obj.getA) // 20

var myLis = document.getElementsByTagName('li')
    function clickFn() {
        alert(this.title)
    }
    for (var i = 0; i < myLis.length; i++) {
        myLis[i].title = '我是第'+(i + 1)+'个'
        myLis[i].onclick = clickFn
//        myLis[0].title = '我是第一个'
//        myLis[0].onclick = function () {
//            // 点击的时候这个this就指向myDiv[0] 第一个LI
//            alert(this.title)
//        }
        //myLis[i].onclick = function () {
          //  alert(this.title)
        //}
    }
```
> myLis[i].onclick = clickFn  
> 这种绑定方式 给三个li绑定的都是同一个方法同一个引用空间地址，在循环绑定的时候我们并不知道函数里的this是什么； 只有在点击具体的li时才知道是什么函数里面的this是什么  
> myLis[i].onclick = function () {alert(this.title)}  
> 这种绑定方式，在每一次循环的时候都创建了一个新函数，将新函数绑定在li的点击事件上，所以创建了三个新函数