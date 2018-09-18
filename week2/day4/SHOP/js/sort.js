var arr = [1, 2, 100, 7, 4]
arr.sort(function (a, b) {
    return 100
    // 如果a - b 大于0 证明 a > b  b在前 a在后
})
// 1. a b 分别代表前面一项和后面一项
// 2. 如果返回的是一个小于0的数 那么 a在前 b在后
// 3. 如果返回的是一个大于0的数 那么 b在前 a在后



var objArr = [{name: 'xiaoSi',age: 66},
    {name: 'xiaoSun',age: 18},
    {name: 'xiaoBao',age: 24}
]
objArr.sort(function (a, b) {
    return a.age - b.age
})
console.log(objArr)
