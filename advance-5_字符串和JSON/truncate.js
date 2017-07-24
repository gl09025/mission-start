function truncate(string,maxLength){
    var realLength = string.length
    var resultString = ''
    if (realLength > maxLength){
        return resultString = string.slice(0,maxLength) + '...'
    }else {
        return string
    }
 
}

console.log(truncate("hello, this is hunger valley,", 10) == "hello, thi...")
console.log(truncate("hello world", 20) == "hello world")