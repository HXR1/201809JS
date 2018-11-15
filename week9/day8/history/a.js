let sum = (a,b)=>{
    return a+b;
}

let fn = (...args)=>{
    return eval(args.join("+"));
};
export {    /*放在对象里一次性导出*/
    sum,
    fn
}

//export let sum2 = sum;
/*export let sum = (a,b)=>{  /!*一个一个导出*!/
    return a+b;
};*/

//设置默认导出 ，只能导出一个 (好处就是导入时的变量名自己随便起)
let aa = 10;
export default  aa;

