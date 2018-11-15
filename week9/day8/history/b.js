let fn = (...args)=>{
    return eval(args.join("+"));
};
let obj1 = {name:"zf"};
let obj2 = {age:9};
let obj = {...obj1,...obj2};
