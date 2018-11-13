//这是我建立的模板
let ary = []; //事件池
function on(f) {
    // 订阅
    ary.push(f)
}
function fire() {
    //发布
    ary.forEach((item)=>{
        item && item();
    })
}
// let a = 1 || 2;
// let b = 1 && 2;
// console.log(a,b);
function f1() {
    console.log(1)
}
function f2() {
    console.log(2)
}
function f3() {
    console.log(3)
}
on(f1);
on(f2);
on(f3);
fire();
