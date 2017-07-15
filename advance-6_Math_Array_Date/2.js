function getRandStr(len){
  //补全函数
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var resultString = ""
  for (var i=0;i<len;i++){
      resultString += string.charAt(Math.floor(Math.random() * string.length))
  }
    return resultString
}
var log = console.log.bind(console)
var str = getRandStr(6); // 0a3iJiRZap
log(str)