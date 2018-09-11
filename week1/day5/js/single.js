// 可扩展性
var name = 'zhufeng'
var age = 9

var nameH = 'he'
var ageH = 18

var c = name
function fn(name, age, sex) {
    console.log(arguments)
    console.log(name + age + '岁', name + '是' + sex + '生')
}
fn('zhufeng', 9, '男')

function add1() {
    var total = 0
    // 最后一项是需要减的
    for (var i = 0; i < arguments.length; i++) {
        if (i == arguments - 2) {
            // 倒数第二项是需要和前面累加的相乘
            total = total * arguments[i]
        } else  {
            total += arguments[i]
        }
    }
    return total - arguments[arguments.length-1]
}
add1(1,2,3,4,5,7)
function add(data) {
    var total = 0
    var addNum = data.addNum
    for (var i = 0; i < addNum.length; i++) {
        total = total + addNum[i]
    }
    total = total * data.multiply
    total = total - data.subtract
    return total
}
add({
    addNum: [1,2,3,4,5],
    multiply: 5, // 累加后需要乘的数
    subtract: 7  // 最后需要减的数
})

// 累加一组数[1,2,3] 然后乘一个数5
// 在累加一组数[4,5,6] 再除一个数2 返回结果

function operator(data) {
    var total = 0
    var arrOne = data.arrOne
    var multiply = data.multiply
    var arrTwo = data.arrTwo
    var divide = data.divide
    for (var i = 0; i < arrOne.length; i++) {
        total = total +  arrOne[i]
    }
    total = total * multiply
    for (var i = 0; i < arrTwo.length; i++) {
        total = total +  arrTwo[i]
    }
    total = total / divide
    return total
}
operator({
    arrOne: [1,2,3],
    multiply: 5, // 乘
    arrTwo: [4,5,6],
    divide: 2 // 除
})




