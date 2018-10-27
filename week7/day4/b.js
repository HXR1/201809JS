/*
let a = require("./a");
console.log(a.sum(10, 5, 20));*/

let {sum,fn} = require("./a");/*自定义模块，要写成相对路径*/
console.log(sum(10, 20, 30));