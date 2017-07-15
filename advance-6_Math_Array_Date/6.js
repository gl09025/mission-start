function squareArr(arr) {
    arr.filter(function (ele,index) {
         arr[index] = ele * ele;
    })
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]