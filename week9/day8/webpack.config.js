let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
let uglify = require("uglifyjs-webpack-plugin"); /*webpack自带的不用安装  压缩js*/
let config = {
    entry:"./src/main.js",/*入口文件*/
    output: {
        path:path.resolve(__dirname,"dist"),  /*返回合并后的绝对路径*/
        filename: "bundle.js" /*打包编译后的js文件名*/
    },
    module: {  //设置编译的加载器
        /*解析编译的规则*/
        rules: [
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.(png|jpg|gif)$/,use:"url-loader?limit=20000&outputPath=images/"},  /*约20kb */
            {test:/\.(htm|html)$/,use:"html-withimg-loader"},
            {test:/\.(eot|woff|woff2|tff|svg)/,use:"url-loader"}
        ]
    },
    plugins:[  /*设置功能*/
        new htmlWebpackPlugin({
            template:"./src/index.html"
           /* filename:"index2.html"*/  /*更改输出静态页面的名称*/
        }),
        new uglify()
    ]
};
module.exports = config;