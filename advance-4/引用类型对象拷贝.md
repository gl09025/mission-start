1. 引用类型有哪些？非引用类型有哪些

引用类型值（对象、数组、函数、正则）：指的是那些保存在堆内存中的对象，变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象。

非引用类型一般都为基本类型值（数值，字符串，布尔，null和undefined）

2. 如下代码输出什么？为什么

```javascript
var obj1 = {a:1, b:2};
var obj2 = {a:1, b:2};
console.log(obj1 == obj2); //false,内存地址不一样
console.log(obj1 = obj2); //输出obj2对象，将obj2赋值给obj1，打印出obj2对象
console.log(obj1 == obj2); //true，上一步obj1的指针指向了obj2，是相同的内存空间
```

3.如下代码输出什么? 为什么

```javascript
var a = 1
var b = 2
var c = { name: '饥人谷', age: 2 }
var d = [a, b, c]

var aa = a
var bb = b
var cc = c
var dd = d

a = 11
b = 22
c.name = 'hello'
d[2]['age'] = 3

console.log(aa) //1,非引用类型，还是保持原来的数值
console.log(bb) //2，同上，非引用类型，还是保持原来的数值
console.log(cc) //{ name: 'hello', age: 3 }，cc指向c的内存空间，c改变了，cc也会跟着改变。d数组中引用的是c的地址，修改d中的c也会改变原来的c属性值。
console.log(dd) //[a, b, { name: 'hello', age: 3]，dd指向d的内存空间，d中对象c的属性改变了，dd中也跟着d一起改变。
```

4.如下代码输出什么? 为什么

```javascript
var a = 1
var c = { name: 'jirengu', age: 2 }

function f1(n){
  ++n
}
function f2(obj){
  ++obj.age
}

f1(a) //a是非引用类型，全局作用域中a还是原来的值1
f2(c) //f2中直接改的对象中的值，引用类型参数传递
f1(c.age) //f1没有修改c对象中的值，只是基本类型的传递
console.log(a) //1
console.log(c) //{ name: 'jirengu', age: 3}
```


5.过滤如下数组，只保留正数，直接在原数组上操作

```javascript
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
  for (var i = 0; i<arr.length; i++){
    if(arr[i] <= 0 ){
      arr.splice(i,1)
      filter(arr)
    }
  }
  return arr
}
filter(arr)
console.log(arr) // [3,1,2]
```

6.过滤如下数组，只保留正数，原数组不变，生成新数组

```javascript
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
  var newArray = []
  var index = 0
  for (var i = 0; i<arr.length; i++){
    if(arr[i] > 0 ){
      newArray[index] = arr[i]
      index += 1
    }
  }
  return newArray
}
var arr2 = filter(arr)
console.log(arr2) // [3,1,2]
console.log(arr)  // [3,1,0,-1,-2,2,-5]
```

7.写一个深拷贝函数，用两种方式实现
使用递归实现。可能会带来性能问题
```javascript
var obj = {
  name: "andrew",
  sex: "male",
  friend: {
    name: "friend1",
    sex: "female"
  }
}

function deepCopy (obj){
  var newObj = {}
  for (var key in obj){
    if (obj.hasOwnProperty){
      if(typeof obj[key] === 'number' || typeof obj[key] === 'boolean' || typeof obj[key] === 'string' || obj[key] === null || obj[key] === undefined){
        newObj[key] = obj[key]
      }else {
        newObj[key] = deepCopy(obj[key])
      }
    }
  }
  return newObj
}

var obj2 = deepCopy(obj)
```
利用JSON来实现。JSON能不能处理所有的数据类型，它能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构，并且兼容性是IE8+
```javascript
var obj = {
  name: "andrew",
  sex: "male",
  friend: {
    name: "friend1",
    sex: "female"
  }
}
function deepCopy(obj){
  return JSON.parse(JSON.stringify(obj))
}
var obj2 = deepCopy(obj)
```