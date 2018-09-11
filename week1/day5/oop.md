## 面向对象

### 单例模式
> 最开始JS语言并没有引用数据类型，只有基本数据。会产生全局变量污染(冲突)问题
```javascript
var name = 'zhufeng'
var age = 18

// 如果没有对象数据类型，我们有需要另一个name或者age就会和之前的变量产生冲突
// 可以给name加前后缀，但是操作起来很麻烦，代码也不易维护，没有扩展性
var name = 'jay'
var age = 40
```
> 代码的可扩张性
> 在我们需要操作一个人的name和age的时候，我们并不知道之后会不会还有其他的人需要加入进来，如果我们直接使用name和age变量，之后会很难维护，所以我们可以用一个对象将这两个属性包含起来
```javascript
function add1() {
    var total = 0
    // 最后一项是需要减的
    for (var i = 0; i < arguments.length; i++) {
        if (i == arguments - 2) {
            // 倒数第二项是需要和前面累加的相乘
            total = total * arguments[i]
        } else  {
            total += arguments[i]
        }
    }
    return total - arguments[arguments.length-1]
}
add1(1,2,3,4,5,7)
function add(data) {
    var total = 0
    var addNum = data.addNum
    for (var i = 0; i < addNum.length; i++) {
        total = total + addNum[i]
    }
    total = total * data.multiply
    total = total - data.subtract
    return total
}
add({
    addNum: [1,2,3,4,5],
    multiply: 5, // 累加后需要乘的数
    subtract: 7  // 最后需要减的数
})
```
> 例如累加方法，如果我们是一个个的传入数字，然后遍历arguments，前期实现的需求。但是如果后面想要对累加的数进行其他操作就很困哪，要么把传参方式改了但是需要重写方法，要么就在原函数里面无限的修改，最后别人也不知道你代码写的是啥。  
> 所以在最开始我们传参的时候就可以使用`单例模式`也就是传一个对象

### 模块化开发
百度首页
> 我们分成以下几个模块  一般我们一个文件就是一个模块
> 主页面模块 入口文件(index)  
> 搜索设置模块  searchModel
> 天气模块 wearthModel
```javascript
var searchModel = {
    
}
// 这两个可能是在不同的文件
var wearthModel = {
    
}
```
> 对象是将描述同一事物的属性和方法合并，这也是单例模式的使用  
> 将函数的参数以一个对象的形式传递，也是使用了单例模式的思想  

### 高级单例模式
> 高级单例模式就是融合了其他设计模式(发布订阅模式，promise)去写的代码
> 如下 就是单例模式和闭包思想的融合，就是高级单例模式
```javascript
function fn1() {
    
    return {}
}
var dataFn1 = fn1()
```
### 工厂模式
> 就是将实现某一功能的代码封装成一个函数，下次再需要实现这个功能的时候调用这个函数即可  
> `低耦合高内聚` 减少页面不必要代码，提高代码利用率
```javascript
// 累加一组数[1,2,3] 然后乘一个数5
// 在累加一组数[4,5,6] 再除一个数2 返回结果
function operator(data) {
    var total = 0
    var arrOne = data.arrOne
    var multiply = data.multiply
    var arrTwo = data.arrTwo
    var divide = data.divide
    for (var i = 0; i < arrOne.length; i++) {
        total = total +  arrOne[i]
    }
    total = total * multiply
    for (var i = 0; i < arrTwo.length; i++) {
        total = total +  arrTwo[i]
    }
    total = total / divide
    return total
}
operator({
    arrOne: [1,2,3],
    multiply: 5, // 乘
    arrTwo: [4,5,6],
    divide: 2 // 除
})
```
> 累加一组数[1,2,3] 然后乘一个数5 在累加一组数[4,5,6] 再除一个数2 返回结果  
> 上面就是需要实现的功能，我们把这个功能封装成函数operator 这就是工厂模式  
> operator执行的时候传过去一个对象就是单例模式的使用

### 面向对象
> 面向过程 C
> 面向对象 java php c++ javaScript

### 对象 类 实例
> 万物皆对象，我们研究学习的所有东西都是对象  
> 类 对象的具体划分 比如说 马类 人类 植物类 
> 实例 某一类中的具体实物 人中的 你 我 他

### JS中的内置类
数据类型
- Number
- String
- Boolean
- Null
- Undefined
- Object
- - Array
- - RegExp
- - Date
- Function
元素集合类
- NodeList
- HTMLCollection
> Null 和 Undefined浏览器禁止我们操作

> document > HTMLDocument > Document(getElementById) > Node > EventTarget > 
Object  
> li > HTMLLIElement > HTMLElement > Element > Node > EventTarget > Object

### 基于面向对象(构造函数方式)创建数据
> 使用面向对象的方式创建基本数据类型  
> 赋值给一个变量后，可以像字面量方式创建的数据一样使用
> 但是面向对象方式创建的数据都是object数据类型
```javascript
var a = 100; // 字面量方式创建一个Number类型数据赋值给a变量
var b = new Number(100) // 通过面向对象的方式创建一个数据赋值给b
console.log(typeof a, typeof b)
// number object
b + 100 // 200
```

> 使用面向对象的方式创建引用数据类型
```javascript
var arr = [1, 2, 3]
var arrNew = new Array(1, 2, 3)
console.log(arr, arrNew) 
// [1, 2, 3] [1, 2, 3]
var arrOne = [9]
var arrOneNew = new Array(9)
console.log(arrOne, arrOneNew) 
// [9] [empty × 9]
```
> 使用面向对象的方式创建数组  
> 当参数多于1的时候，和字面量方式没有区别  
> 但是只有一个参数的时候面向对象方式创建的数组结果就是 长度为参数，然后每个值都为空的数组

> 字面量方式创建对象，一般都是创建空对象
```javascript
var obj = {name: 'zhufeng'} // 字面量方式创建对象
var objNew = new Object() // 基本用来创建空对象
```

### 普通函数执行 VS 构造函数执行
```javascript
function Fn() {
    this.name = 'zhufeng'
}
Fn()
var f = new Fn()
console.log(f, '>>>>>')
```
> 当函数执行前面有new 那么这就不再是函数执行了，而是构造函数的执行,  
> 返回值就是当前类的实例
> 如果我们创建的是类(构造函数)，都会将首字母大写，以此和普通函数进行区分  
> 普通函数执行：  
> 开辟私有作用域 =》 形参赋值 =》 变量提升 =》 代码执行  
> 构造函数执行  
> 开辟私有作用域 =》 形参赋值 =》 变量提升  
> 浏览器默认开辟一个存储空间是object数据类型，构造函数里面的this指向这个object地址  
> this也就是当前的实例  
> 如果没有return 浏览器会默认把她创建的object返回出去,也就是this(当前类的实例)被返回出去
> 如果有return但是返回的是基本数据类型，浏览器会忽视这个return继续返回this(当前类的实例)  
> 如果return的是一个对象 那么浏览器就会把这个对象返回，忽视this(当前类的实例)


### 原型
> 每一个函数(类)，都有一个prototype属性，存储的是给当前类使用的公有的属性和方法。prototype是一个对象，浏览器默认给他开辟堆内存  
> 每一个prototype都有一个默认属性constructor指向类本身  
> 每一个实例(对象)，都有一个__proto__属性，指向所属类的原型  
