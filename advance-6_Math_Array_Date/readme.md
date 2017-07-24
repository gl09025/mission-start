Math任务

1、写一个函数，返回从min到max之间的 **随机整数**，包括min不包括max 



```javascript
function randomNumber(min,max){
    return Math.floor(Math.random() * (max -min)+ min)
}
```





2、写一个函数，返回从min都max之间的 **随机整数**，包括min包括max 

```javascript
function randomNumber(min,max){
    return Math.floor(Math.random() * (max -min + 1)+ min)
}
```

3、写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。

```javascript
function getRandStr(len){
  //补全函数
    var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var resultString = ""
  for (var i=0;i<len;i++){
      resultString += string.charAt(Math.floor(Math.random() * string.length))
  }
    return resultString
}
var str = getRandStr(10); // 0a3iJiRZap
```

4、写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255

```javascript
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
```

5、写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff

```javascript
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
```

数组任务

1、数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法

 - push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。
 - pop方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。
 - shift方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。
 - unshift方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。
 - join方法以参数作为分隔符，将所有数组成员组成一个字符串返回。如果不提供参数，默认用逗号分隔。
 - splice方法用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。splice的第一个参数是删除的起始位置，第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

push

```
var arr = [1,2,3,4,5]
arr.splice(arr.length,0,0) //插入0，[1, 2, 3, 4, 5, 0]
```

pop

```
var arr = [1,2,3,4,5]
arr.splice(arr.length - 1 ,1)//[1, 2, 3, 4]
```

shift

```
var arr = [1,2,3,4,5]
arr.splice(0 ,1) //[2, 3, 4, 5]
```

unshift

```
var arr = [1,2,3,4,5]
arr.splice(0,0,90) //[90, 1, 2, 3, 4, 5]
```

2、写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作

```
function squareArr(arr){
    arr.filter(function (ele,index) {
         arr[index] = ele * ele;
    })
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]
```

3、写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变

```
function filterPositive(arr){
   return arr.filter(function(ele){
        return ( typeof ele === 'number' && ele > 0) 
    })
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]
```


Date 任务

1、 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间

```javascript
var str = getChIntv("2017-10-1");
console.log(str);  

function getChIntv(timeString){
  //将时间都转换成毫秒
   let now = Date.now()
  let time = new Date(timeString).getTime()
  //相差的毫秒
  let diffTime = time - now
  //先算有多少天，取模之后算小时，再取模算分，最后取模算秒
  let day = Math.floor(diffTime/(3600*24*1000)) 
   diffTime= diffTime % (3600*24*1000) ;
  let hour = Math.floor(diffTime/(3600*1000))
   diffTime= diffTime % (3600*1000) ;
  let minute = Math.floor(diffTime/(60*1000))
   diffTime= diffTime % (60*1000) ;
  let second = Math.floor(diffTime / 1000)
  return '距离十一还有： ' + day +'天'+hour+'时'+ minute+'分'+ second +'秒'
}
```

2、把hh-mm-dd格式数字日期改成中文日期

```
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日
```

```javascript
function getChsDate(string) {
    //变成数组 ["2015", "10", "08"]
    let newArray = string.split('-')
    let resultString = ''
    //存储数字对应的汉字
    let translateObject = {
        0: '零',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
    }

    let yearString = '',monthString = '' ,dayString = ''

    for (let index = 0; index < newArray.length; index++) {
        //再再分割数组每一项，将数字转换成汉字
        let insideArray = newArray[index].split('')
        //处理年
        if (index === 0) {
            for (let j = 0; j < insideArray.length; j++) {
                yearString += translateObject[insideArray[j]]
            }    
        } else if (index === 1) {//处理月
                //调用函数处理大于10，小于10，等于10的不同输出
                monthString = xxx(insideArray)
        } else {//处理日
            dayString = xxx(insideArray)
        }
    }
//等于10就返回‘十’，大于10就返回‘十’加上个位的数
    function xxx(insideArray) {
        let insideResultString = ''
        if (insideArray[0] === '0') {
            insideResultString = translateObject[insideArray[1]]
        } else if (insideArray[1] === '0') {
            insideResultString = '十'
        } else {
            insideResultString = '十' + translateObject[insideArray[1]]
        }
        return insideResultString
    }
   

    resultString = yearString + '年' + monthString + '月' + dayString + '日'
    return resultString
}
```


3、写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

刚刚（ t 距当前时间不到1分钟时间间隔）
3分钟前 (t距当前时间大于等于1分钟，小于1小时)
8小时前 (t 距离当前时间大于等于1小时，小于24小时)
3天前 (t 距离当前时间大于等于24小时，小于30天)
2个月前 (t 距离当前时间大于等于30天小于12个月)
8年前 (t 距离当前时间大于等于12个月)

```javascript
function friendlyDate(time){
    //获取现在的时间毫秒，与传入的参数计算相差
    let nowTime = Date.now()
    let diffTime = nowTime - time
    //统一从秒到年的时间单位
    let SECOND = 1000
    let MINUTE = SECOND * 60
    let HOUR = MINUTE * 60
    let DAY = HOUR * 24
    let MONTH = DAY * 30
    let YAER = MONTH * 12 
    //直接计算距离现在的每个时间单位，取整
    if (diffTime >= YAER) {
        time = parseInt(diffTime / YAER)
        return time + '年前'
    } else if (diffTime >= MONTH) {
        time = parseInt(diffTime / MONTH)
        return time + '月前'
    } else if (diffTime >= DAY) {
        time = parseInt(diffTime / DAY)
        return time +　'天前'
    } else if (diffTime >= HOUR) {
        time = parseInt(diffTime / HOUR)
        return time + '小时前'
    } else if (diffTime >= MINUTE) {
        time = parseInt(diffTime / MINUTE)
        return time + '分钟前'
    } else if (diffTime >= SECOND) {
        time = parseInt(diffTime / SECOND)
        return time + '秒前'
    }
}
var str = friendlyDate( '1484286699422' ) //  1分钟前
var str2 = friendlyDate('1483941245793') //4天前
```