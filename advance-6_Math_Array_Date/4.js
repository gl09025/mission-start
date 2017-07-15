function getRandColor(){
    var string = "0123456789abcdef"
    var resultString = "#"
    for (var index = 0; index < 6; index++) {
       resultString += string.charAt(Math.floor(Math.random() * string.length))
    }
    return resultString
}
var color = getRandColor()
console.log(color)   // #3e2f1b