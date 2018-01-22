# 作业

作业

## 题目1： jQuery 中， $(document).ready()是什么意思？

当DOM准备就绪时，指定一个函数来执行。
'.ready()' 方法提供了一种方法，使得一旦页面的文档对象模型（DOM）变为安全的操纵，就立即运行JavaScript代码。这往往是执行与页面的用户视图或交互之前需要任务的好时机，例如添加事件处理程序和初始化插件。当多个函数通过连续调用添加到该方法中，它们根据它们被添加的DOM准备就绪的顺序执行。在jQuery 3.0中，jQuery保证了在一个处理程序中的异常发生，不会妨碍后续添加的处理程序的执行。

jQuery提供了几种方法来绑定函数，当DOM已准备就绪时，绑定的函数将会运行。以下所有语法是等价的：

```javascript
$( handler )
$( document ).ready( handler )
$( "document" ).ready( handler )
$( "img" ).ready( handler )
$().ready( handler )
```

在jQuery 3.0 中，只建议使用第一种语法（即 $( handler )）; 其他语法仍然能正常工作，但已被标记为弃用。这是因为，这些选择器跟.ready()方法的行为没有任何关系，这是低效的，并可能导致对该方法行为不正确的假设。例如，第三条语法中，"document"选择器其实什么也没选择。第四语法表示等待文档（ document ）准备就绪，但从代码上看，它暗示（错误地）等待图像（"img"）准备就绪。

'.ready()' 方法通常用于一个匿名函数：

```javascript
$( document ).ready(function() {
  // Handler for .ready() called.
});
```

这等价于调用推荐的方式：

```javascript
$(function() {
  // Handler for .ready() called.
});
```

## 题目2： $node.html()和$node.text()的区别？

`$node.html()` 获取集合中第一个匹配元素的HTML内容。
`$node.text()` 得到匹配元素集合中每个元素的合并文本，包括他们的后代。

例如代码：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
 <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <title>test</title>
</head>
<body>
    <div class="demo-container">
        <div class="demo-box">Demonstration Box</div>
    </div>
    <script>
        var $aHtml = $('.demo-container').html()
        console.log($aHtml) // <div class=\"demo-box\">Demonstration Box</div>
        var $aText = $('.demo-box').text()
        console.log($aText) // Demonstration Box
    </script>
</body>
</html>

```

`$node.html(htmlString)` 用来设置每个匹配元素的一个HTML 字符串。

可以使用 .html() 来设置元素的内容，这些元素中的任何内容会完全被新的内容取代。

以下的HTML

```html
<div class="demo-container">
  <div class="demo-box">Demonstration Box</div>
</div>
```

设置 `<div class="demo-container">` 的HTML内容

```javascript
$('div.demo-container')
  .html('<p>All new content. <em>You bet!</em></p>');
```

一开始的HTML将变成：

```html
<div class="demo-container">
  <p>All new content. <em>You bet!</em></p>
</div>
```

`$node.text(testString)` 用于设置匹配元素内容的文本。当提供的是一个数值或布尔值得时候，那么将被转换成一个字符串表现形式，提供给这个方法。
以下的HTML：

```html
<div class="demo-container">
  <div class="demo-box">Demonstration Box</div>
  <ul>
    <li>list item 1</li>
    <li>list <strong>item</strong> 2</li>
  </ul>
</div>
```

`$('div.demo-container').text('<p>This is a test.</p>');` 代码语句将输出以下 DOM :

```html
<div class="demo-container">
&lt;p&gt;This is a test.&lt;/p&gt;
</div>
```

它会出现在渲染的页面上就好像标签被暴露，像这样：

```html
<p>This is a test</p>
```

不会像`.html()` 一样解析标签，会将内容当作文本直接显示在页面中。

## 题目3： $.extend 的作用和用法？

作用：将两个或更多对象的内容合并到第一个对象。

用法如下
例子1:合并两个对象，并修改第一个对象。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>

<div id="log"></div>

<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};

// Merge object2 into object1
$.extend( object1, object2 );

// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>

</body>
</html>
```

输出如下：

```javascript
{"apple":0,"banana":{"price":200},"cherry":97,"durian":100}
```

例子2：采用递归方式合并两个对象，并修改第一个对象。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>

<div id="log"></div>

<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};

// Merge object2 into object1, recursively
$.extend( true, object1, object2 );

// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>

</body>
</html>
```

输出：

```javascript
{"apple":0,"banana":{"weight":52,"price":200},"cherry":97,"durian":100}
```

例子3: 合并 defaults 和 options 对象，并且不修改 defaults 对象。这是常用的插件开发模式。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>

<div id="log"></div>

<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };

// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );

// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>

</body>
</html>
```

输出

```javascript
defaults -- {"validate":false,"limit":5,"name":"foo"}
options -- {"validate":true,"name":"bar"}
settings -- {"validate":true,"limit":5,"name":"bar"}
```

## 题目4： jQuery 的链式调用是什么？

使用jQuery封装的对象会返回jQuery对象，返回的是jQuery对象，这样就可以一直使用jQuery的方法来操作。
例如如下HTML

```html
<div class="wrap">
  <div class="inner">
    <div class="list"></div>
    <div class="list"></div>
    <div class="list"></div>
  </div>
</div>
```

使用jQuery在第一个class为list中插入文本

```javascript
$('.wrap').find('.inner').children().eq(0).text('hello')
```

## 题目5： jQuery 中 data 函数的作用

在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。

.data() 方法允许我们在DOM元素上绑定任意类型的数据,避免了循环引用的内存泄漏风险。

我们可以在一个元素上设置不同的值，之后获取这些值：
`.data(key,value)` 或 `.data(obj)`

```javascript
$("body").data("foo", 52);
$("body").data("bar", { myType: "test", count: 40 });
$("body").data({ baz: [ 1, 2, 3 ] });

$("body").data("foo"); // 52
$("body").data(); // { foo: 52, bar: { myType: "test", count: 40 }, baz: [ 1, 2, 3 ] }
```

`.data(key)` 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值

```javascript
alert( $("body").data("foo")); //undefined
$("body").data("bar", "foobar");
alert( $("body").data("bar")); //foobar
```

## 题目6：

写出以下功能对应的 jQuery 方法：

- 给元素 $node 添加 class active，给元素 $noed 删除 class active

``` $node.addClass('active')
 $node.removeClass('active')

```

- 展示元素$node, 隐藏元素$node

```javascript
 $node.show()
 $node.hide()
```

- 获取元s素$node 的 属性: id、src、title， 修改以上属性

```javascript
$node.attr('id')
 $node.attr('src')
 $node.attr('title')
 第二个参数为Null相当于移除 .removeAttr()
 $node.attr('id','String||Numble||Null')
 $node.attr('src','String||Numble||Null')
 $node.attr('title','String||Numble||Null')
```

- 给$node 添加自定义属性data-src

```javascript
$node.attr('data-src','sth')
```

- 在$ct 内部最开头添加元素$node

```javascript
$ct.prepend($node) $node.prependTo($ct)
```

- 在$ct 内部最末尾添加元素$node

```javascript
$ct.append($node)  $node.appendTo($ct)
```

- 删除$node

 `$node.remove()`

- 把$ct里内容清空

 `$ct.empty()`

- 在$ct 里设置 html `<div class="btn"></div>`

 `$ct.html('<div class="btn"></div>')`

- 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)

```javascript
不包括内边距
 $node.height()
 $node.width()
包括内边距
 $node.innerHeight()
 $node.innerWidth()
 包括边框
 $node.outerHeight()
 $node.outerWidth()
包括外边距
 $node.outerHeight(true)
 $node.outerWidth(true)

```

- 获取窗口滚动条垂直滚动距离

 `$(document).scrollTop()`

- 获取$node 到根节点水平、垂直偏移距离

```javascript
$node.offset().top()
 $node.offset().left()
```

- 修改$node 的样式，字体颜色设置红色，字体大小设置14px

 `$node.css({'color' : 'red' , 'font-size': '14px'})`

- 遍历节点，把每个节点里面的文本内容重复一遍

```javascript
$('.list').each(function(){
   var $this = $(this)
  var $thisText = $this.text()
  $this.text($thisText + $thisText)
 })

```

- 从$ct 里查找 class 为 .item的子元素

 `$ct.children('.item')`

- 获取$ct 里面的所有孩子

` $ct.children()
`

- 对于$node，向上找到 clascs 为'.ct'的父亲，在从该父亲找到'.panel'的孩子

` $node.parents('.ct').find('.panel')
`

- 获取选择元素的数量

`$node.length()
`

- 获取当前元素在兄弟中的排行

` $node.index()
`

## 题目7：

- 用jQuery实现以下操作
  - 当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色
  - 当窗口滚动时，获取垂直滚动距离
  - 当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色
  - 当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字
  - 当选择 select 后，获取用户选择的内容

  [预览](https://gl09025.github.io/mission-start/advance-15_jQuery%E5%8A%A8%E7%94%BB%E4%B8%8EAJAX/subject_7/index.html)

## 题目8： 用 jQuery ajax 实现如下效果。`当点击加载更多会加载数据展示到页面[效果预览](http://jrgzuoye.applinzi.com/%E4%BD%9C%E4%B8%9A%E5%AE%89%E6%8E%92/jscode/JS9-jqueryajax/1.html)

本地mock数据成功
[代码](https://github.com/gl09025/mission-start/tree/master/advance-15_jQuery%E5%8A%A8%E7%94%BB%E4%B8%8EAJAX/subject_8)


## 题目9(选做)： 实现一个天气预报页面，UI 如下图所示(仅供参考，可自由发挥)。数据接口：

获取天气
接口：http(s)://weixin.jirengu.com/weather
服务端支持 CORS 跨域调用，前端可直接使用 ajax 获取数据，返回数据以及使用方式参考 http://api.jirengu.com
更多接口
参考 http://api.jirengu.com

![](https://jscode.me/uploads/default/optimized/2X/2/2e655f75f6b0e5b18d0ffd3ce1f780b03be21297_1_690x492.jpg)

练习使用ajax，css部分等有时间完成

[预览](https://gl09025.github.io/mission-start/advance-15_jQuery%E5%8A%A8%E7%94%BB%E4%B8%8EAJAX/subject_9/index.html)