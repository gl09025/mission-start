# JavaScript 实现一个模板引擎


## 简单的数据渲染

> 一个简单的需求，假设我们已经获取到了一组歌曲列表数据
>```javascript
>var songs = [
>	{name:'刚刚好 ', singer:'薛之谦', url: 'http://music.163.com/xxx'},
>	{name:'最佳歌手 ', singer:'许嵩', url: 'http://music.163.com/xxx'},
>	{name:'初学者 ', singer:'薛之谦', url: 'http://music.163.com/xxx'},
>	{name:'绅士<script>console.log(1)</script> ', singer:'薛之谦', url: 'http://music.163.com/xxx'},
>	{name:'我门 ', singer:'陈伟霆', url: 'http://music.163.com/xxx'},
>	{name:'画风 ', singer:'后弦', url: 'http://music.163.com/xxx'},
>	{name:'We Are One ', singer:'郁可唯', url: 'http://music.163.com/xxx'}
>]
>```
>我们要用JS来渲染这些数据

### 想法1，直接拼接字符串

使用循环来直接将数据拼接成HTML放到页面中。

```javascript
var html = ''

html += '<div class=song-list>'

html += '  <h1>热歌榜</h1>'

html += '  <ol>'

for(var i=0; i<songs.length; i++){
  html += '<li>'+ songs[i].name + ' - ' + songs[i].singer +'</li>'
}

html += '  </ol>'

html += '</div>'

document.body.innerHTML = html
```

反思，如果我们直接拼接字符串的话，如果用户非法传了一个带`script`标签的字符，那么浏览器就会去执行这段非法的脚本，会带来安全问题。
就是所谓的脚本注入。
那么我们直接来构造DOM对象。

### 想法2，构造DOM对象 

```javascript
var elDiv = document.createElement('div')
elDiv.className = 'song-list'

var elH1 = document.createElement('h1')
elH1.appendChild(document.createTextNode('热歌榜'))

var elList = document.createElement('ol')

for(var i=0; i<songs.length; i++){
  var li = document.createElement('li')
  li.textContent = songs[i].name + ' - ' + songs[i].singer
  elList.appendChild(li)
}

elDiv.appendChild(elH1)
elDiv.appendChild(elList)

document.body.appendChild(elDiv)
```

## 字符串替换

在上面拼接字符串的方法中我们需要将一个数据中的所有变量都写出来，像这样

```javascript
var li = '<li>'+ songs[i].name + ' - ' + songs[i].singer +'</li>'
```

这样貌似还是很繁琐，我们能不能约定一个模板，然后直接用函数来实现呢？

```javascript
var li = stringFormat('<li>{0} - {1}</li>', songs[i].name, songs[i].singer)
```

下面我们来实现`stringFormat`这个函数。

先看最终效果

```javascript
function stringFormat(string) {
    var params = [].slice.call(arguments,1)
    var regex = /\{(\d+)\}/g
    string = string.replace(regex,function(){
        var index = arguments[1]
        return params[index]
    })
    return string
}
```

需要替换string中的特定字符串，因为只有第一个参数是确定的，后面的参数个数并不能确定个数，所以我们使用`arguments`来获取.

- 首先获取`arguments`

但是`arguments`不是一个真正的数组，所以我们不能用 `arguments.slice(1)` 来获取到除了第一个string之外的所有参数，
我们要使用`[].slice.call(arguments,1)`来获取。

- 接着我们使用正则来匹配具有相同特征的字符并替换

使用string的replace方法可以查找到正则匹配到的字符并替换。
这里面的arguments并不是上面的arguments而是通过匹配到的。比如我们这里将arguments打印出来是这样的。

![图片](https://raw.githubusercontent.com/gl09025/image_respository/master/2018%E5%B9%B402%E6%9C%8805%E6%97%A5/string-replace.png)

可以看到数组中第二个就是我们需要替换的字符,这样就找到了索引（需要注意的是这里的模板是我们约定好了的，比如这里的{0} {1}），
再将对应索引的字符串替换成传进来的字符串params[index]，在replace方法中使用return就能替换。

## 字符串替换的升级版-模板引擎

上面的方法中都是只能一对一的替换，更复杂点的话呢？

```html
var string = 
'My skills:' + 
'<%if(this.showSkills) {%>' +
    '<%for(var index in this.skills) {%>' + 
    '<a href="#">' +
    '    <%this.skills[index]%>'+
    '</a>' +
    '<%}%>' +
'<%} else {%>' +
    '<p>none</p>' +
'<%}%>';
```

要将上面的字符串替换成正常的js来执行。
观察我们需要替换的字符串，发现有三种情况

1.不需要替换的html内容,<% %>外层

2.<% %>里层的不需要替换的JS内容

3.<% %>里层需要替换的变量

将上面的string变成我们需要的JS内容如下所示

```javascript
var lines = ''
lines += 'My skills:' 
if(this.showSkills) {
    for(var index in this.skills) {
        lines+= '<a href="#">'
        lines+= this.skills[index]
        lines+= '</a>' 
    }
}    
else{
    lines+= '<p>none</p>'
}
```

如果是字符串就变成字符串，如果是JS内容就去掉 <%%>,如果里面是需要替换的变量去掉<%%>并和字符串放在一起。这样就是一开始的拼接字符串方法了。

1.首先我们需要将字符串变成我们需要的格式。具体实现方法可看最后部分代码。

2.然后要替换`<% %>`之间的变量，思路如下

```javascript
var template = function(tpl, data) {
    var regex = /<%([^%>]+)?%>/g;
    while(match = regex.exec(tpl)) {
        tpl = tpl.replace(match[0], data[match[1]])
    }
    return tpl;
}
```

利用regex.exec方法来找到正则对应的字符串并替换。exec这个方法一次找一个匹配到的内容。

3.利用new Function() 可以构造一个函数,可以根据字符串来构造一个函数。
看一个例子

```javascript
var fn = new Function("arg", "console.log(arg + 1);");
fn(2); // outputs 3
```

相当于下面的代码

```javascript
var fn = function(arg) {
    console.log(arg + 1);
}
fn(2); // outputs 3
```

最后的实现：更详细的过程可以[参考这里](http://blog.jobbole.com/56689/)

```javascript
var template = function(html, options) {
    //正则匹配<%%>中的内容，判断是否是JS语句
    var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0;
    //将匹配到的不同情况的字符串加入相应的变量
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    //替换变量的内容
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    //将字符串构造成函数
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
}
```