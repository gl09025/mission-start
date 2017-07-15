function getRandIP(){
  //补全
  var ipArray = []
  
  for (var i = 0; i<4; i++){
    var randomNumber = Math.floor(Math.random() * 256 )
    ipArray.push(randomNumber)
  }
  return ipArray.join('.')
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45