let http = require("http");//引入内置模块
let mime  = require("mime");//require里直接写模块名 会先判断是否是内置模块，如果不是则去当前项目的node_modules查找，若还没找到则往上级目录查找，若还没找到，则继续往上直到磁盘的顶级目录，若还没找到则报错
console.log(mime.getType("a.js"));//"application/javascript"
console.log(__dirname); //所在目录的绝对路径  C:\Users\Administrator\Desktop\day4


let sum =(...arg)=>{
    return eval(arg.join("+"));
};
let fn = (a,b)=>{
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
};
module.exports = {
    sum,
    fn
}