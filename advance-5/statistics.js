var str = 'abcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancde'

function statistics(str){
    //转换成数组
    var newArray = str.split('')
    //利用foreach遍历,在新对象中统计每个字符出现的次数
    var counts = {};
    newArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    //找出最大的数字
    var min = Infinity, max = -Infinity 
    for (var key in counts){
        // if (counts[key] < min) {min = counts[key]}
        if (counts[key] > max) {max = counts[key]}
    }
    console.log('次数最多为：'+ max +'次，有如下字符：')
    //找出最大的数字所对应的字符
    return maxCountCharater(counts,max)
}

function maxCountCharater(counts,max){
    var resultString = ''
    for (var key in counts){
        if (counts[key] === max){
            resultString += key+ ' '
        }
    }
    return resultString
}

var result = statistics(str)
console.log(result)
