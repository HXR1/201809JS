//解构赋值 数组和对象
let ary = [10, 20, 15];
//由于数组是有顺序的，x表示数组的第一项，y表示数组第二项....
//x,y,z即声明又定义
//let [x,y,z] = ary;
//let [x,,z]=ary;//中间这一项表示空项
//给b赋初始值30 = 表示设置默认值
let [x, [a, b = 30], y] = [10, [5], 15];
console.log(x, a, b, y); //解构时拿不到值则是undefined

//交换c和d的值
let c = 5;
let d = 10;
[d, c] = [c, d];
console.log(c, d);

//对象的解构赋值  = 表示设置默认值  :表示更改变量名
let obj = {name: "zf", age: 8};
//由于对象没有顺序，解构时变量名跟属性名得一样
let {name: n, age = 9, hobby = "sleep"} = obj;
//name变量存储的是name属性的值
console.log(n, age, hobby);

//嵌套的解构赋值
let ary2 = {a1: "同仁堂", b1: ["珠峰", "孟记粥铺"], c1: "回龙观东大街"};
let {a1, b1: [e, f], c1} = ary2;
console.log(a1, e, f, c1);

//对象解构赋值的简写写法
let hello = 10;
let world = 20;
/*let  obj3 = {
    name:"fwj",
    hello:hello,
    world:world
}*/
let obj3 = {
    name: "fwj",
    hello,
    world
}
console.log(obj3);

/*let utils = (function(){
    function getCss(){}
    function setCss(){}
    return {
       getCss:getCss,
       setCss:setCss
    }
})
utils.getCss()
utils.setCss()*/

let utils = (function () {
    function getCss() {
        console.log(1)
    }

    function setCss() {
        console.log(2)
    }

    function offset() {
        let t = 10;
        let l = 20;
        return {
            t,
            l
        }
    }

    return {
        getCss,
        setCss
    }
})();
let {getCss, setCss} = utils;
getCss();
setCss();

//... 扩展运算符，展开运算符，剩余运算符(rest element)
//合并
let ary5 = [10, 20, 56, 7];
let ary6 = [30, 40];
let ary7 = [...ary5, ...ary6];
let [, ...arr1] = ary5;
let [...arr] = ary;//克隆数组
console.log(Math.max(...ary5));

let o1 = {n: 10, m: 20};
let o2 = {a: 30, b: 40};
let o = {...o1, ...o2};//es7
//console.log(Object.assign(o1, o2));//合并对象
let {...o3} = o1;//克隆对象
//console.log(o3);

/*function fn(x,...arr){//rest参数
    console.log(arr instanceof Array);//true
    console.log(x,arr);
    console.log(arguments);//还是有的
}
fn(10,20,30);*/

//形参可以设置默认
/*function fn(x,y=30){
    console.log(y);
}
fn(10);
//参数可以是对象，数组，可以解构赋值
function  ajax({url="",method="get"}){
    console.log(url,method);
}
ajax({});
ajax({method:"post"});*/


//箭头函数   参数部分=>函数体部分
/*function fn(a){
    return a+10;
}*/
/*let fn = a => a+10;  //若只有一行，并且有返回值 ,直接写return后面的内容，return可以省略
console.log(fn(20));*/

/*function fn(a,b){
    let total = null;
    total  = a+b;
    return a+b;
}*/

//若有多个参数拿小括号包起来 ，若函数体内容有多行，得用{}包起来
/*let fn = (a,b)=>{
    let total = null;
    total  = a+b;
    return a+b;
}
console.log(fn(10, 20));*/

let fn = a => (c, d) => a+ c + d;
/*function fn(a){
   return function(c,d){
       return a+c+d;
   }
}*/
console.log(fn(10)(20, 30));

/*let ary =[10,3,5,7,15];
ary.sort((a,b)=>a-b);*/

//箭头函数和普通函数区别
/*let myObj = {
    num : 10,
    fn:(function(){
        return function(){
            console.log(this);
        }
    })()
}
myObj.fn();*/

let myObj = {
    num : 10,
    fn:(function(){
        return ()=>{
            console.log(this);//window
        }
    })()
}
myObj.fn();

let obj2 = {
    num :20
}
/*function fn2(){
    console.log(this);
}*/
function sum(){
    console.log(this);
    // var that  = this;
    /*window.setTimeout(function(){ //定时器里的this指的是sum方法中this
        console.log(that);//window
    },1000);*/
   /* window.setTimeout(fn2.bind(this),1000);*/
   window.setTimeout(()=>{
       console.log(this);
   },1000);
}
sum.call(obj2);

let fn3 = ()=>{
    console.log(arguments);//报错 arguments is not defined
}
fn3(10);
//箭头函数没有this,会往上级作用查找，若没找到继续往上查找，直到找到window
//箭头函数中没有arguments
//不要定义成构造函数
//不支持call,apply,bind改变箭头函数的this关键字，因为箭头函数没有this
//思考题（周六晚上前交，组长发我QQ)
//自己es6看字符串方法和数组的方法










