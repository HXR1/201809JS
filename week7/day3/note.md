node是啥？是一个运行的平台(环境)，它支持js语言，可以写后台的服务
node特点：
- 基于v8引擎渲染
- 基于事件驱动的I/0(输入/输出)操作
- 是单线程的，所以基本是异步的操作
- 遵循CommonJS规范,提供模块机制，包管理机制（通过npm命令安装包（第三方模块）），内置模块（http,fs,url,path...)
- 每一个文件就是一个模块（模块之间相互使用，需要引入和导出）

### 运行node文件
 - 右键 run a.js 
 - 命令行运行  前提是要进入a.js所在目录，然后执行node a.js
 - 执行node命令 可以进入REPL环境，这个相当于浏览器的控制台一样，可以写js代码
 
### 模块之间导出和引入
- 模块的导出
module.exports = {} 一次性全部导出
exports.xxx = xxx  一个一个的导出
>模块只有导出后，其他模块才能用这个模块中封装的功能
- 模块的引入
require()


### 项目初始化
- 告诉别人项目的相关(例如名称，版本，入口文件，按照的第三方模块等)
- 项目的维护
npm init
初始化package.json文件
npm init -y  一键生成

### 安装第三种模块
npm install jquery  表示安装生产环境所需要的包 
npm install less -D 表示安装开发环境所需要的包

dependencies  生产环境
devDependencies  开发环境

使用第三方模块：require("mime");

### node内置模块
http,fs,url,path....
直接通过require("http")引入内置模块，不需要安装





 

