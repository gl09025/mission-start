function filterPositive(arr){
   return arr.filter(function(ele){
        return ( typeof ele === 'number' && ele > 0) 
    })
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]