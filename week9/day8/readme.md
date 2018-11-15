npm install yarn -g 

npm install XXX     yarn add XXX
npm uninstall xxx   yarn remove xxx


npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install XXX   

es6模块
CMD sea.js 和 AMD  require.js
es6模块：（浏览器环境下）es6module
    引入 import
    导出 export
    
node模块：(node环境下)  commonJS规范
    引入：require  内置模块 第三方模块 自定义模块
    导出：module.exports={} 和 exports.xxx      


npm install babel-cli -g
npm install babel-loader babel-core   babel-preset-es2015  babel-preset-stage-0 style-loader css-loader less less-loader style-loader css-loader  file-loader url-loader  html-withimg-loader    url-loader  uglifyjs-webpack-plugin  html-webpack-plugin

Babel 是一个 JavaScript 编译器。
npm install babel-cli -g;
配置文件 .babelrc
预设(presets)   babel-preset-env     es6
                babel-preset-stage-0   es7

babel x.js 直接编译
babel x.js -o x2.js  将编译的结果在x2文件中输出

webpack 
安装 cnpm  install webpack -D
src （源文件）
dist （打包编译后的文件,是自动生成的，只需要配置下即可）
webpack配置在本地得配置下
"scripts": {
    "build":"webpack --mode development"
 },                            
npm run build 相当于执行webpack命令 

新建webpack的配置文件  webpack.config.js 
## 解析js文件
webpack不能将es6/es7代码编译成es5代码，如果想要实现这个功能得借助于babel  
安装 babel-core babel-loader                     
 
## 解析css文件
style-loader css-loader                            
css解析完后放在style标签

## 解析less文件
style-loader css-loader less-loader  less

## 解析图片
file-loader  url-loader
url-loader依赖于file-loader 
url-loader将图片解析成base64编码格式

html-withimg-loader  处理页面通过路径引入图片的方式

## html-webpack-plugin
设置打包后的静态页面，并且将打包后的js文件自动插入到静态页面

## webpack-dev-server
创建web服务，当代码发生改变时，自动打包，自动打开页面，自动刷新页面