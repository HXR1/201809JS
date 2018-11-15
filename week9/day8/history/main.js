//第一种方式 知道之前导出的变量名叫什么
/*import {sum,fn} from "./a.js";
console.log(sum(10, 20));
console.log(fn(10,20,30));*/

//第二种方式不知道之前导出的变量名，可以对导出的对象重新命名
/*import * as obj from "./a.js";
//把a.js中导出的对象重新命名成obj
console.log(obj.sum(10, 20));
console.log(obj.fn(10, 20, 30));*/

//第三种方式 导入默认导出的内容，变量名自己随便设置
import  cc,{sum} from "./a.js";
console.log(cc);
console.log(sum(10, 20));

