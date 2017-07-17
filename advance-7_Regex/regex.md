**题目1：** `\d`，`\w`,`\s`,`[a-zA-Z0-9]`,`\b`,`.`,`*`,`+`,`?`,`x{3}`,`^`,`$`分别是什么?

|      |      |
| :--- | :--- |
| \d         |[0-9] 数字字符     |
| \w         |[a-zA-Z_0-9] 单词字符，字母，数字下划线     |
| \s         |[\t\n\x0B\f\r]  匹配任意的空白符    |
| \b         |     匹配单词的开始或结束 |
| .          |  匹配除换行符以外的任意字符    |
| *          |  重复零次或更多次    |
| +          |  重复一次或更多次    |
| ?          |   重复零次或一次   |
| x{3}       |   3个x  |
| ^         |    匹配字符串的开始  |
| $          |    	匹配字符串的结束  |


**题目2：** 写一个函数`trim(str)`，去除字符串两边的空白字符

```javascript
function trim(str){
  var reg = /^\s+|\s+$/g
  return str.replace(reg,'')
}
```

**题目3：** 写一个函数`isEmail(str)`，判断用户输入的是不是邮箱

```javascript
function isEmail(email) {
    var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;
    return re.test(email);
}
```

**题目4：** 写一个函数`isPhoneNum(str)`，判断用户输入的是不是手机号

```javascript
function isPhoneNum(str){
  var reg = /^1[34578]\d{9}$/
  return reg.test(reg)
}
```

**题目5：** 写一个函数`isValidUsername(str)`，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）

```javascript
function isValidUsername(str){
  var reg = /^\w{6~20}$/
  reg.test(str)
}
```

**题目6：** 写一个函数`isValidPassword(str)`, 判断用户输入的是不是合法密码（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少至少包括两种）

```javascript
function isValidPssword(str){
  var reg = /(^[0-9]+$)|(^[A-Z]+$)|(^[a-z]+$)|(^_+$)|\W+/g;
  if(str.length <= 6 || str.length >= 20){
    return '长度在6到20之间';
  }else if(reg.test(str)){
      return '至少满足大小写字母、数字或者下划线其中两种';
  }else{
      return '正确';
  }
}
```

**题目7：** 写一个正则表达式，得到如下字符串里所有的颜色


```
var re = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee "
console.log( subj.match(re) )  // ['#121212', '#AA00ef']
```

题目8： 下面代码输出什么? 为什么? 改写代码，让其输出[""hunger"", ""world""].

```
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat);
```

输出:
```
[""hunger", hello "world"""]
```

匹配双引号之间的所有字符，正则会尽可能多的匹配符合的条件，第一次匹配到hunger前面的双引号，最后匹配到world后面的双引号。
改写，只匹配一次或多次

```
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*?"/g;
str.match(pat);
```