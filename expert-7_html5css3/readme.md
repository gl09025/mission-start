## 题目1： HTML5是什么？有哪些新特性？有哪些新增标签？如何让低版本的 IE 支持 HTML5新标签

HTML5是超文本标记语言的第五次重大修改，2014年10月29日标准规范制定完成

### 特性

#### 语义特性

HTML5赋予网页更好的意义和结构。更加丰富的标签将随着对RDFa的，微数据与微格式等方面的支持，构建对程序、对用户都更有价值的数据驱动的Web。

#### 本地存储特性

基于HTML5开发的网页APP拥有更短的启动时间，更快的联网速度，这些全得益于HTML5 APP Cache，以及本地存储功能。Indexed DB（html5本地存储最重要的技术之一）和API说明文档。

#### 设备兼容特性

从Geolocation功能的API文档公开以来，HTML5为网页应用开发者们提供了更多功能上的优化选择，带来了更多体验功能的优势。HTML5提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，例如视频影音可直接与microphones及摄像头相联。

#### 连接特性

更有效的连接工作效率，使得基于页面的实时聊天，更快速的网页游戏体验，更优化的在线交流得到了实现。HTML5拥有更有效的服务器推送技术，Server-Sent Event和WebSockets就是其中的两个特性，这两个特性能够帮助我们实现服务器将数据“推送”到客户端的功能。

#### 网页多媒体特性

支持网页端的Audio、Video等多媒体功能， 与网站自带的APPS，摄像头，影音功能相得益彰。

三维、图形及特效特性（Class: 3D, Graphics & Effects）

基于SVG、Canvas、WebGL及CSS3的3D功能，用户会惊叹于在浏览器中，所呈现的惊人视觉效果。

#### 性能与集成特性

没有用户会永远等待你的Loading——HTML5会通过XMLHttpRequest2等技术，解决以前的跨域等问题，帮助您的Web应用和网站在多样化的环境中更快速的工作。

#### CSS3特性

在不牺牲性能和语义结构的前提下，CSS3中提供了更多的风格和更强的效果。此外，较之以前的Web排版，Web的开放字体格式（WOFF）也提供了更高的灵活性和控制性。

### 新增标签
|Element|Description|
|---|---|
|`<template>`|通过 JavaScript 在运行时实例化内容的容器。|
|`<section>`|定义文档中的一个章节。|
|`<nav>`| 这个元素在 HTML5 中加入	定义只包含导航链接的章节。|
|`<article>`| 这个元素在 HTML5 中加入	定义可以独立于内容其余部分的完整独立内容块。|
|`<aside>`| 这个元素在 HTML5 中加入	定义和页面内容关联度较低的内容——如果被删除，剩下的内容仍然很合理。|
|`<header>`| 这个元素在 HTML5 中加入	定义页面或章节的头部。它经常包含 logo、页面标题和导航性的目录。|
|`<footer>`| 这个元素在 HTML5 中加入	定义页面或章节的尾部。它经常包含版权信息、法律信息链接和反馈建议用的地址。|
|`<figure> `|这个元素在 HTML5 中加入	代表一个和文档有关的图例。|
|`<figcaption>` |这个元素在 HTML5 中加入	代表一个图例的说明。|
|`<main>`|这个元素在 HTML5 中加入	定义文档中主要或重要的内容。|
|`<data>`| 这个元素在 HTML5 中加入	关联一个内容的机器可读的等价形式 （该元素只在 WHATWG 版本的 HTML 标准中，不在 W3C 版本的 HTML5 标准中）。|
|`<time>`| 这个元素在 HTML5 中加入	代表日期 和时间 值；机器可读的等价形式通过 datetime 属性指定。|
|`<mark>` |这个元素在 HTML5 中加入	代表一段需要被高亮的引用 文字。|
|`<ruby>` |这个元素在 HTML5 中加入	代表被ruby 注释 标记的文本，如中文汉字和它的拼音。|
|`<rt>`| 这个元素在 HTML5 中加入	代表ruby 注释 ，如中文拼音。|
|`<rp>`| 这个元素在 HTML5 中加入	代表 ruby 注释两边的额外插入文本 ，用于在不支持 ruby 注释显示的浏览器中提供友好的注释显示。|
|`<bdi>` |这个元素在 HTML5 中加入	代表需要脱离 父元素文本方向的一段文本。它允许嵌入一段不同或未知文本方向格式的文本。|
|`<wbr>`| 这个元素在 HTML5 中加入	代表建议换行 (Word Break Opportunity) ，当文本太长需要换行时将会在此处添加换行符。|
|`<embed>`| 这个元素在 HTML5 中加入	代表一个嵌入 的外部资源，如应用程序或交互内容。|
|`<video>`| 这个元素在 HTML5 中加入	代表一段视频 及其视频文件和字幕，并提供了播放视频的用户界面。|
|`<audio>`| 这个元素在 HTML5 中加入	代表一段声音 ，或音频流 。|
|`<source>`| 这个元素在 HTML5 中加入	为 `<video>` 或 `<audio>` 这类媒体元素指定媒体源 。|
|`<track>` |这个元素在 HTML5 中加入	为 `<video>` 或 `<audio>` 这类媒体元素指定文本轨道（字幕） 。|
|`<canvas>` |这个元素在 HTML5 中加入	代表位图区域 ，可以通过脚本在它上面实时呈现图形，如图表、游戏绘图等。|
|`<svg>` |这个元素在 HTML5 中加入	定义一个嵌入式矢量图 。|
|`<math> `|这个元素在 HTML5 中加入	定义一段数学公式 。|
|`<datalist>`| 这个元素在 HTML5 中加入	代表提供给其他控件的一组预定义选项 。|
|`<keygen>` |这个元素在 HTML5 中加入	代表一个密钥对生成器 控件。|
|`<output>` |这个元素在 HTML5 中加入	代表计算值 。|
|`<progress>`| 这个元素在 HTML5 中加入	代表进度条 。|
|`<meter>` |这个元素在 HTML5 中加入	代表滑动条 。|
|`<details>`| 这个元素在 HTML5 中加入	代表一个用户可以(点击)获取额外信息或控件的小部件 。|
|`<summary>` |这个元素在 HTML5 中加入	代表 <details> 元素的综述 或标题 。|
|`<menuitem>` |这个元素在 HTML5 中加入	代表一个用户可以点击的菜单项。|
|`<menu>` |这个元素在 HTML5 中加入	代表菜单。|

### 低版本兼容

1.为网站创建多套模板，通过程序对User-Agent的判断给不同的浏览器用户显示不同的页面，比如优酷网就是采用的这种模式。
2.使用Javascript来使不支持HTML5的浏览器支持HTML标签。目前很多网站采用的这种方式。
针对IE浏览器比较好的解决方案是html5shiv。htnl5shiv主要解决HTML5提出的新的元素不被IE6-8识别，这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。让CSS 样式应用在未知元素上只需执行 document.createElement(elementName) 即可实现。html5shiv就是根据这个原理创建的。
因为IE9是兼容HTML5的，所以加如下注释

```javascript
<!--[if lt IE 9]>
    <script>https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js</script>
<![endif]—>
```

## 题目2： input 有哪些新增类型？

1.color：HTML5 用于指定颜色的控件。

2.date：HTML5 用于输入日期的控件（年，月，日，不包括时间）。

3.datetime：HTML5 基于 UTC 时区的日期时间输入控件（时，分，秒及几分之一秒）。

4.datetime-local：HTML5 用于输入日期时间控件，不包含时区。

5.email：HTML5 用于编辑 e-mail 的字段。 合适的时候可以使用 :valid 和 :invalid CSS 伪类。

6.month：HTML5 用于输入年月的控件，不带时区。

7.number: HTML5 用于输入浮点数的控件。

8.range：HTML5 用于输入不精确值控件。如果未指定相应的属性，控件使用如下缺省值：
 - min：0
 - max：100
 - value：min + (max-min)/2，或当 max 小于 min 时使用 min
 - step：1

 9.search：HTML5用于输入搜索字符串的单行文本字段。换行会被从输入的值中自动移除。

 10.tel：HTML5 用于输入电话号码的控件；换行会被自动从输入的值中移除A，但不会执行其他语法。可以使用属性，比如 pattern 和 maxlength 来约束控件输入的值。恰当的时候，可以应用 :valid 和 :invalid CSS 伪类。

11.time：HTML5 用于输入不含时区的时间控件。

12.url：HTML5 用于编辑URL的字段。 The user may enter a blank or invalid address. 换行会被自动从输入值中移队。可以使用如：pattern 和 maxlength 样的属性来约束输入的值。 恰当的时候使可以应用 :valid 和 :invalid CSS 伪类。

13.week：HTML5 用于输入一个由星期-年组成的日期，日期不包括时区。

## 题目3： 浏览器本地存储中 cookie 和 localStorage 有什么区别？ localStorage 如何存储删除数据。

|特性|cookie|localStorage|
|---|---|---|
|数据的生命期|一般由服务器生成，可设置失效时间。如果是由浏览器生成cookie，默认是关闭浏览器后失效。|除非被清除，否则永久保存。|
|存放数据大小|4K左右|一般为5MB。|
|与服务器端通信|每次都会携带在HTTP头中，如果用cookie存储太多内容会带来性能问题。|仅在客户端（即浏览器）中保存，不参与和服务器的通信。|
|易用性|需要程序员自己封装，原生的cookie接口不友好。|源生接口可以接受。也可封装来对OBject和Array有更好的支持。|

存储 localStorage 项，如下：

```javascript
localStorage.setItem('myCat', 'Tom');
```

读取 localStorage 项，如下:

```javascript
var cat = localStorage.getItem("myCat");
```

移除 localStorage 项，如下:

```javascript
localStorage.removeItem("myCat");
```

## 题目4： 写出如下 CSS3效果的简单事例

1. 圆角， 圆形
2. div 阴影
3. 2D 转换：放大、缩小、偏移、旋转
4. 3D 转换：移动、旋转
5. 背景色渐变
6. 过渡效果
7. 动画

http://js.jirengu.com/ropewekucu

## 题目5： 实现如下全屏图加过渡色的效果（具体效果随意）DEMO

http://js.jirengu.com/wikogapewe

## 题目6： 写出如下 loading 动画效果 DEMO1 DEMO2

http://js.jirengu.com/piwihofeye

http://js.jirengu.com/fujevojizu

http://js.jirengu.com/tehilunotu