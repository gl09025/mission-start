var str = 'abcdcbb'
var str2 = 'abcdcba'
var str3 = 'abba'

function circleAround(str){
    if (str.length % 2 === 0){
        console.log('长度为偶数的字符串不可能是回文字符串')
        return
    }
    //找出中间分隔的index，变成两个数组，将第二个数组反转，再比较两个数组
    var newArray = str.split('')
    var index = ((newArray.length - 1) / 2) + 1
    var leftArray = newArray.slice(0,index-1)
    var realRightArray = newArray.slice(index,newArray.length+1)
    var rightArray = realRightArray.reverse()
    if (leftArray.toString() === rightArray.toString()){
        console.log(str + '是回文字符串')
        return true
    }else {
        console.log(str + '不是回文字符串')
        return false
    }
}

circleAround(str)
circleAround(str2)
circleAround(str3)