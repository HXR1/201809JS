let fs = require("fs");
//读取文件
//readFile 异步的
/*fs.readFile("./text1.txt",{encoding:"utf-8"},function(err,files){
        if(err){console.log(err)};
        console.log(files);
});*/
//fs.readFileSync(path[, options])  同步的
let files = fs.readFileSync("./text1.txt",{encoding:"utf-8"});
console.log(files);

//写入文件
//异步的
/*fs.writeFile("./text2.txt","今天天气很热~","utf-8",function(err){
    if(err) console.log(err);
})*/
//同步的
fs.writeFileSync("./text2.txt","珠峰","utf-8");

//读取 text1.txt里的内容，写入text2.txt里
//先判断下text1.txt是否是个文件？若存在则读取再写入
//获取文件或文件夹相关信息

fs.stat("./text1.txt",function(err,stats){
    //stats.isFile() true 是文件
    //stats.isDirectory()  是否是文件夹，若是则返回true ,否则返回false
    if(err) return;
    if(stats.isFile()){//是文件
        fs.readFile("./text1.txt","utf-8",function(err,file){
            if(err) return;
            fs.writeFile("./text2.txt",file,"utf-8",function(err){
                if(err) console.log(err);
            })
        })
    }
});







