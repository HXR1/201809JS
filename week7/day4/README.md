node是一个运行的环境（平台）
运行的平台：浏览器和node
### node的模块机制：
一个js文件就相当于是一个模块
不同模块之间想要相互调用：导入和导出
导出：module.exports = {} 一次性全部导出
exports.xx = xxx;  写的时候是一个一个导出
导入：require()

### node模块的分类
 - 内置模块 http,fs,url,path,querystring.... 
  >不需要安装，直接使用，是node自带的
 - 第三方模块 （别人封装好的插件和库，然后放入npm平台，这样我们就可以通过npm安装到本地项目中）  npm是包管理器  npm install 包名  安装到本地
 模块查找的机制：  （node_modules） (包是通过js引入使用)
 C:\Users\Administrator\Desktop\day4   当前项目下找到
 C:\Users\Administrator\Desktop   上级目录
 C:\Users\Administrator   上级目录
 C:\Users    上级目录
 C:\       上级目录
 
 全局下安装的目录   npm install less -g
 全局下安装的会涉及到包版本冲突问题，所以尽量少安装在全局下
 C:\Users\Administrator\AppData\Roaming\npm\node_modules
 > 安装在全局下适合于通过命令操作的，而不是引入到js中操作
 例如less:
 若安装在全局 直接通过 lessc index.less 
 若安装在本地 需要在本地通过命令配置下才能使用   "build": "lessc index.less"  
 > npm run build
 
 - 自定义的模块
 >是自己创建的js文件，引入时需要加./ ../
 >不会往上级查找，当前目录找不到则会报错
 
 
 
 
 
### 项目初始化
 npm init -y  一键生成package.json文件
 dependencies 生产环境
 devDependencies 开发环境
 从线上弄下来的项目，是没有安装的第三方模块，但是package.json里会记录之前安装的模块，需要通过npm install 跑环境（安装package.json里所需要的模块）
 
 


