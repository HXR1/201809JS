const path = require("path");
console.log(path.resolve()); //没有传参返回当前目录的绝对路径
console.log(path.resolve('/foo/bar', './baz'));//  C:\foo\bar\baz 直接在根目录下绝路路径
console.log(path.resolve('/foo/bar', '/tmp/file/'));// C:\tmp\file/
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
//C:\Users\Administrator\Desktop\day3\js\wwwroot\static_files\gif\image.gif   当前文件所在目录下的绝对路径

//处理路径时，把每个路径拼接起来
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
//\foo\bar\baz\asdf
console.log(path.join('/foo', 'bar', 'baz/asdf','..','quux'));
//\foo\bar\baz\quux
console.log(path.join('/foo', 'bar', 'baz','..','quux'));
//\foo\bar\quux
console.log(path.join('/foo', 'bar', 'baz','.','quux'));
//\foo\bar\baz\quux