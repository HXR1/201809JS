let sum = (...arg)=>{
    return eval(arg.join("+"))
};
let fn = (a,b)=>{
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
};
/*module.exports ={
    sum,
    fn
};*/
exports.sum = sum;
exports.fn = fn;

/*虽然写的时候是一个一个导出，但是真正导出时还是放在一个对象中导出*/
