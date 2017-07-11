0. 对于 HTTP 协议而言，HTML、CSS、JS、JSON 的本质都是什么？

都是符合相应语法的字符串。
浏览器和服务器根据http的头中的字段来判断文件类型，比如在request中请求头有个字段`Accept: text/html` 代表接受类型为html，在response中响应头中也会有个字段来标明类型`Content-Type:text/html;charset=utf-8`

1、 使用数组拼接出如下字符串 ，其中styles数组里的个数不定

```javascript
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装','冬装']
};
function getTplStr(data){
  var name = data.name
  var styleArray = data["styles"]
  var totalStr , str = '';
   styleArray.filter(function(e){
    return str += '<dd>'+ e +'</dd>'
  })
  totalStr = '<dl class="product">'+'<dt>'+ name+'</dt>'+ str +'</dl>'
  return totalStr
};
var result = getTplStr(prod);
console.log(result)
```
控制台打印出下面字符串
```
<dl class="product"><dt>女装</dt><dd>短款</dd<dd>冬季</dd><dd>春装</dd></dl>
```

2、写出两种以上声明多行字符串的方法
例如：

```
var str = 'abcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancde'
```
这段字符串很长，如何多行优雅的显示
 - 利用反斜杠和回车（反斜杠后不可有空格）
```
var str = 'abcdeab\
cdeabcde\
ancdeabcd\
eabcdeabc\
deancdeabc\
deabcdeabc\
deancdeabc\
deabcdeabc\
deancde'
```
 - 连接运算符（+）
```
var str = 'abcdeab'
+ 'cdeabcdea'
+ 'ncdeabcde'
+ 'abcdeabcd'
+ 'eancdeabc'
+ 'deabcdeab'
+ 'cdeancdeab'
+ 'cdeabcdeab'
+ 'cdeancde'
```

3、补全如下代码,让输出结果为字符串: hello\\饥人谷
```
var str = 'hello\\\\饥人谷'//补全代码
console.log(str)
```

4、以下代码输出什么?为什么

```
var str = 'jirengu\nruoyu'
console.log(str.length)
```
输出：13。`\n` 代表回车符，占一个长度

5、写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是

```javascript
var str = 'abcdcbb'
var str2 = 'abcdcba'
var str3 = 'abba'

function circleAround(str){
    if (str.length % 2 === 0){
        console.log('长度为偶数的字符串不可能是回文字符串')
        return
    }
    //找出中间分隔的index，变成两个数组，将第二个数组反转，转换成字符串比较
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
```

6、写一个函数，统计字符串里出现出现频率最多的字符

```javascript
var str = 'aaaaaaaaaaaaaaaaaaaaaaaaaaabgh'

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
            resultString += key+ ','
        }
    }
    return resultString
}

var result = statistics(str)
console.log(result)
```

7、写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如

```
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'
```
函数：

```javascript
function camelize(string){
    var newArray = string.split('-')
    var theFirstPartString = newArray[0].toString()
    var theRestOfPartArray = []
    var resultString = ''
    //除了数组第一个，将其他部分首字母转换成大写，存入新数组
    for (var i = 1;i<newArray.length;i++){
        theRestOfPartArray.push(newArray[i].charAt(0).toUpperCase()+ newArray[i].slice(1))
    }
    //数组转换成字符串拼接
    resultString = theFirstPartString + theRestOfPartArray.join('')
    return resultString
}

console.log(camelize("background-color") == 'backgroundColor')
```

8、写一个 ucFirst函数，返回第一个字母为大写的字符 

```
ucFirst("hunger") == "Hunger"
```

函数：

```javascript
function ucFirst(string){ 
    return string.charAt(0).toUpperCase()+ string.slice(1)
}

console.log(ucFirst("hunger") == "Hunger")
```

9、写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如

```
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"
```

函数：

```javascript
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
```

10、什么是 JSON格式数据？JSON格式数据如何表示对象？window.JSON 是什么？

  JSON格式数据是一种轻量级的数据交换格式。它基于JavaScript（Standard ECMA-262 3rd Edition - December 1999）的一个子集。JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这些特性使JSON成为理想的数据交换语言。易于人阅读和编写，同时也易于机器解析和生成(网络传输速度)。

对象是一个无序的“名称/值对”集合。一个对象以“{”（左括号）开始，“}”（右括号）结束。每个“名称”后跟一个“:”（冒号）；“名称/值对”之间使用“,”（逗号）分隔。
![](./images/object.gif)

```
var json1 = {"name": "Byron", "age": "24"}
```
window.JSON
1、window.JSON是浏览器的内置对象，用来检测对JSON的支持情况。
2、JSON对象内置了JSON.parse()、JSON.stringify()。
3、IE8版本以上才内置支持JSON.parse()函数方法。

11、如何把JSON 格式的字符串转换为 JS 对象？如何把 JS对象转换为 JSON 格式的字符串?

JSON.parse()将JSON字符串转化成对象。

```
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```
JSON.stringify(),将一个值转为字符串。

```
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'
```