/*先处理静态资源，再处理接口*/
let http = require("http");
let fs = require("fs");
let url = require("url");
let path = require("path");//处理路径的模块
let mime = require("mime"); //根据路径返回对应mime类型

http.createServer((req, res) => {
    //处理请求的路径和参数
    let {pathname, query} = url.parse(req.url, true);
    if (pathname === "/favicon.ico") {res.end(); return;}
    if (pathname === "/") {
        //__dirname当前文件所在目录的绝对路径(目录)
        let file = fs.readFileSync(path.resolve(__dirname, "../index.html"));
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(file);
        return;
    }
    //处理接口
    /*/getList 获取所有的数据和获取一条数据 （获取  GET）
    * /addInfo 客户端向服务器端提交数据  （增加 POST）
    * /updateInfo  修改一条数据 （修改 PUT）
    * /removeInfo 删除一条数据（删除 DELETE）
    * */
    let users = {  //这个对象是要返回给客户端的数据
        code: 0,
        msg: "",
        data: []
    };

    function read() {
        let file = fs.readFileSync(path.join(__dirname, "..", "json", "data.json"));
        file = JSON.parse(file);
        return file;
    }

    function write(data, callback) {
        fs.writeFile(path.join(__dirname, "..", "json", "data.json"), data, callback);
    }

    switch (req.method) {
        case "GET":
            if (pathname === "/getList") {
                let id = query.id;
                if(id){//获取一条数据
                    let dataUsers = read();
                    let user = dataUsers.find((item)=>{ //根据参数id获取一条数据
                        return item.id == id
                    });
                    users.data = user;
                    res.end(JSON.stringify(users));
                    return;
                }else{//获取所有的数据
                    let file = read();
                    res.setHeader("Content-Type", "application/json");
                    users.data = file;
                    res.end(JSON.stringify(users));
                    return;
                }
            }
            break;
        case "POST":
            if (pathname === "/addInfo") {
                //服务器要拿到客户端传过来的数据并增加数据库中
                let str = "";
                req.on("data", function (chunck) { //当客户端有请求体的数据发送给服务器端时，就会触发data事件
                    str += chunck;//累加数据片段
                })
                req.on("end", function () {//当数据发送完后会触发end事件
                    let user = JSON.parse(str);//{name:"",tel:""}
                    let file = read();
                    user.id = file.length > 0 ? file.length + 1 : 1;
                    file.push(user);
                    write(JSON.stringify(file),function(err){
                        if(err) {return}
                        res.end(JSON.stringify({
                            code:0,
                            msg:"添加成功"
                        }))
                    })
                });
                return;
            }
            break;
        case "PUT":
            if(pathname ==="/updateInfo"){
                //获取所有的数据，找到id值的这一项修改成客户端传过来的值
                let file = read();
                let str ="";
                req.on("data",(chunck)=>{
                    //chunck表示客户端传给服务器端的数据片段
                    str+=chunck;
                });
                req.on("end",()=>{/*end事件触发表示客户端的数据传送完了*/
                    let user = JSON.parse(str);
                    file = file.map((item,index)=>{
                        if(item.id == user.id){
                            return user;
                        }
                        return item;
                    })
                    write(JSON.stringify(file),function(err){
                        if(err){return};
                        res.end(JSON.stringify({
                            code:0,
                            msg:"修改成功"
                        }))
                    })
                })
            }
            return;
            break;
        case "DELETE":
            if (pathname === "/removeInfo") {
                let id = query.id; //字符串
                let file = read();
                file = file.filter(function (item, index) {
                    return item.id != id;
                });
                write(JSON.stringify(file), function (err) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    res.end(JSON.stringify({
                        code: 0,
                        msg: "删除成功"
                    }))
                });
                return;
            }
            break;
    }


    //处理静态资源
    //请求的地址就是我们查找文件的路径
    //console.log(path.resolve(__dirname,"../"+pathname)); //记得回到项目根目录
    //console.log(path.join(__dirname, "..", pathname));
    fs.stat(path.join(__dirname, "..", pathname), (err, stats) => {
        if (err) {
            res.writeHead(
                404,
                {
                    "Content-Type": "text/plain;charset=utf-8"
                }
            );
            res.end("页面不存在");
            return;
        }
        if (stats.isFile()) {
            let file = fs.readFileSync(path.join(__dirname, "..", pathname));
            res.setHeader("Content-Type", `${mime.getType(pathname)};charset=utf-8`);
            res.end(file);
            return;
        }
    })


}).listen(8089, () => {
    console.log("8089端口已被启用");
});
