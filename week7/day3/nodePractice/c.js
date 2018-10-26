let mime  = require("mime");
console.log(mime.getType("a.txt"));//"text/plain"
console.log(mime.getType("index.html"));//"text/html"