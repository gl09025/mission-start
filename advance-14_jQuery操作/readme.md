# 题目

sometext

## 题目1：jQuery 能做什么？

- 选择网页元素
- 改变结果集
- 元素的操作：取值和赋值
- 元素的操作：移动
- 元素的操作：复制、删除和创建
- 工具方法
- 事件操作
- 特殊效果
- AJAX

## 题目2： jQuery 对象和 DOM 原生对象有什么区别？如何转化？

1.jQuery选择器获取到的对象和DOM原生获取到的对象类型不一样，jQuery是一个类似数组的对象，DOM原生对象就是一个元素。
2.jQuery无法使用DOM原生对象的方法。

转化：
DOM对象转化成jQuery对象

```javascript
var dom = $('selector')
```

jQuery转化成原生对象
两种方法
`[index]` `.get(index)`

```javascript
//[index]方法
var $dom = $('#id') //jQuery对象
var dom = $dom[0] //原生对象
//.get(index)方法
var $dom = $('#id') //jQuery对象
var dom = $dom.get(0) //原生对象
```

## 题目3：jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？

使用jQuery提供的方法来邦定事件：

```javascript
.bind()
.delegate()
.live()
.on()
```

一些API作用：
.bind()为一个元素绑定一个事件处理程序。在.bind()绑定事件的时候，这些元素必须已经存在。

.unbind() 从元素上删除一个以前附加事件处理程序。每个用.bind()方法绑定的事件处理程序可以使用.unbind()移除。在最简单的情况下，不带参数的.unbind() 将移除元素上所有绑定的处理程序。

.delegate()为所有匹配选择器（selector参数）的元素绑定一个或多个事件处理函数，基于一个指定的根元素的子集，匹配的元素包括那些目前已经匹配到的元素，也包括那些今后可能匹配到的元素。

.live()附加一个事件处理器到匹配目前选择器的所有元素，现在和未来。

.on()在选定的元素上绑定一个或多个事件处理函数。

.off() 移除一个事件处理函数。移除用.on()绑定的事件处理程序。

推荐使用.on() 该方法提供绑定事件处理的所有功能。

例如，在一个表格的tbody 中含有 1,000 行，下面这个例子会为这 1,000 元素绑定事件

```javascript
$('#dataTable tbody').on('click','tr',function(){
  alert($(this).text())
})
```

## 题目4：jQuery 如何展示/隐藏元素？

展示元素
.show()
例如

```html
<!DOCTYPE html>
<html>
<head>
  <style>
  div { background:#def3ca; margin:3px; width:80px;
  display:none; text-align:center; }
  </style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>

  <button id="showr">Show</button>
  <div>Hello</div>

<script>
$("#showr").click(function () {
  $("div").show();
});
</script>

</body>
</html>
```

上面代码默认div是隐藏的点击show按钮显示元素

隐藏元素
.hide()
例如

```html
<!DOCTYPE html>
<html>
<head>
  <style>
  div { background:#def3ca; margin:3px; width:80px;
   text-align:center; }
  </style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>


  <button id="hide">hide</button>
  <div>Hello</div>

<script>


  $("#hide").click(function () {
  $("div").hide();
});
</script>

</body>
</html>
```

上面代码当在点击hide按钮时隐藏相应的div

## 题目5： jQuery 动画如何使用？

使用.animate()方法来实现
.animate( properties [, duration ] [, easing ] [, complete ] )

例如

```html
<!DOCTYPE html>
<html>
<head>
  <style>
div {
background-color:#bca;
width:100px;
border:1px solid green;
}
</style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <button id="go">&raquo; Run</button>

<div id="block">Hello!</div>
<script>

/* Using multiple unit types within one animation. */

$("#go").click(function(){
  $("#block").animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});
</script>

</body>
</html>
```

上面代码中的点击按钮会是id为block的元素添加动画

## 题目6：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？

1.设置和获取元素内部HTML内容，使用.html()。例如

```html
<!DOCTYPE html>
<html>
<head>
  <style>
  p { margin:8px; font-size:20px; color:blue;
      cursor:pointer; }
  b { text-decoration:underline; }
  button { cursor:pointer; }
  </style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>

  <p>
    This <button>button1</button> does nothing.
  </p>
    <p>
    This <button>button2</button> change HTML.
  </p>
<script>
$("p").click(function () {
  var htmlStr = $(this).html()
  console.log(htmlStr)
});

  $("p:nth-child(2)").click(function () {
  var htmlStr = $(this).html('<span>hello</span>');
});
</script>

</body>
</html>
```

上面代码中点击button1按钮将在控制台输出当前p元素下的所有HTML内容。`This <button>button</button> does nothing.`
点击button2按钮将改变当前的HTML。改变的内容为.html()里的内容。

2.设置和获取元素内部文本，使用.text()方法。例如

```html
<!DOCTYPE html>
<html>
<head>
  <style>
  p { margin:8px; font-size:20px; color:blue;
      cursor:pointer; }
  b { text-decoration:underline; }
  button { cursor:pointer; }
  </style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>

  <p>
    This <button>button1</button> does nothing.
  </p>
    <p>
    This <button>button2</button> change HTML.
  </p>
<script>
$("p").click(function () {
  var textStr = $(this).text()
  console.log(textStr)
});

  $("p:nth-child(2)").click(function () {
  var textStr = $(this).text('<span>hello</span>');
});
</script>

</body>
</html>
```
上面代码中点击button1按钮将在控制台输出当前p元素下的所有text内容,不包含html标签。`This button does nothing.`
点击button2按钮改变了p下的文字变为`<span>hello</span>`不会解析标签。

## 题目7：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？

 1.使用.val()设置和获取表单用户输入或者选择的内容

```html
<!DOCTYPE html>
<html>
<head>
  <style>

  p { color:blue; margin:8px; }
  </style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <input id="input1" type="text" value="some text"/>
  <p></p>
  <hr>
    <div>
    <button>Feed</button>
    <button>the</button>
    <button>Input</button>
  </div>
  <input id="input2" type="text" value="click a button" />
<script>
    $("#input1").keyup(function () {
      var value = $(this).val();
      $("p").text(value);
    }).keyup();
    $("button").click(function () {
      var text = $(this).text();
      $("#input2").val(text);
    });
</script>

</body>
</html>
```

上面代码将第一个输入框中输入的内容展示到下面的p标签中。
点击按钮会改变第二个输入框里面的内容。

 2.使用.attr()设置和获取元素属性

```html
<!DOCTYPE html>
<html>
<head>
  <style>

  p { color:blue; margin:8px; }
  </style>
  <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
  <input id="input1" type="text" value="some text"/>
  <p></p>
  <hr>
  <input id="input2" type="text" value="some text"/>

<script>
  var value1 = $("#input1").attr("type")
  $("p").text(value1)
  $("#input2").attr("value","test")

</script>

</body>
</html>
```

上述代码中获取了第一个input的type属性为text。
将第二个input里面的默认value属性由原来的some text设置为test

## 题目8

[预览](https://gl09025.github.io/mission-start/advance-14_jQuery%E6%93%8D%E4%BD%9C/jQuery-8.html)

## 题目 9
[预览](https://gl09025.github.io/mission-start/advance-14_jQuery%E6%93%8D%E4%BD%9C/subject_9/index.html)

## 题目10 
[预览](https://gl09025.github.io/mission-start/advance-14_jQuery%E6%93%8D%E4%BD%9C/subject_10/index.html)

## 题目10
[预览](https://gl09025.github.io/mission-start/advance-14_jQuery%E6%93%8D%E4%BD%9C/jquery-table/jquery-left.html)