function camelize(string){
    var newArray = string.split('-')
    var theFirstPartString = newArray[0].toString()
    var theRestOfPartArray = []
    var resultString = ''
    //除了数组第一个，将其他部分首字母转换成大写，存入新数组
    for (var i = 1;i<newArray.length;i++){
        // theRestOfPartArray.push(newArray[i].charAt(0).toUpperCase()+ newArray[i].slice(1))
        theRestOfPartArray.push(newArray[i].replace(newArray[i][0],newArray[i][0].toUpperCase()))
    }
    //数组转换成字符串拼接
    resultString = theFirstPartString + theRestOfPartArray.join('')
    return resultString
}

console.log(camelize("background-color") == 'backgroundColor')