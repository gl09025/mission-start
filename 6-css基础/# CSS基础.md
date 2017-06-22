# CSS基础

### CSS介绍
  层叠样式表 (Cascading Style Sheets，常缩写记作 CSS）， 是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

###  CSS的引入方式
  #### 外部样式引入
```html
    <link rel="stylesheet" href="style.css">
```
在html中使用link标签来添加，href属性表示路径。

```html
<style>
  @import url("hello.css");
  @import "world.css";
</style>
```
在html中使用style标签，在其中使用@import来引入其他CSS。也可在外部css文件中使用@import引入其他css。

#### 内部样式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }
    
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```
在html头部添加style标签

### 内联样式
**不要这么做**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```
直接在标签中添加style属性并添加响应css属性。**不要这么做**这样很难维护

###link 和@import
1.老祖宗的差别。`@import`是使用CSS机制来加载样式表，`link`是用HTML机制。
2.加载顺序的差别。`link`是和页面一起加载的，而`@import`会在页面加载完再被加载。
3.兼容性的差别。`@import`是CSS2.1提出，在IE5上才能识别。`link`无此问题。
4.使用dom控制样式时的差别。jsvaScript去控制样式时，只能操作link。
所以通常都是使用`link`来加载。

### 文件路径分别用在什么地方，代表什么意思?
```javascript
//相对路径
`css/a.css` // 当前的同级目录css下的a.css
`./css/a.css` // 当前的同级目录css下的a.css
`b.css` // 当前目录下的b.css
`../imgs/a.png` // 上级目录中的imgs目录下的a.png
//绝对路径
`/Users/hunger/project/css/a.css` // 服务器绝对路径/Users/hunger/project/css下的a.css

//网站路径
`/static/css/a.css` //网站中同级目录static下css目录中的a.css文件
`http://cdn.jirengu.com/kejian1/8-1.png` //网站的路径，网址的形式
```
### 如果我想在网站上展示一个图片，需要怎么操作?
  1.如果能够操作服务器，我们可以上传到网站服务器上，然后在页面中引入图片路径。
  2.找一个图床上传，获取对应的网址路径。（比如这个图床http://jiantuku.com/#/）

### 列出5条以上html和 css 的书写规范
#### html
1.语法.
对于属性的定义，确保全部使用双引号，绝不要使用单引号。不要省略可选的结束标签（closing tag）（例如，</li> 或 </body>）。
2.HTML5 doctype.
为每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。
3.语言属性.
强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。更多关于 lang 属性的知识可以从 [此规范](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element) 中了解

这里列出了[语言代码表](http://reference.sitepoint.com/html/lang-codes)。
4.字符编码
通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。
5.减少标签的数量
编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。

#### CSS
1.不要使用 @import.
2. 如无必要，不得为 id、class 选择器添加类型选择器进行限定。
3. 在可以使用缩写的情况下，尽量使用属性缩写。
4. 对于通用元素使用 class ，这样利于渲染性能的优化。
5. 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。
6. 
  [规范参考](http://codeguide.bootcss.com)
  [CSS规范参考](https://github.com/fex-team/styleguide/blob/master/css.md)



### 截图介绍 chrome 开发者工具的功能区

![](https://ooo.0o0.ooo/2017/06/20/5948850c2f455.png)
#### Elements
  在Elements面板中你可以通过DOM树的形式查看所有页面元素，并且可以对其进行所见即所得的编辑。
#### Console
  JavaScript 控制台主要为开发者在测试web页面和应用的过程中提供两方面的功能：
1.在开发过程中，记录代码诊断信息。
2.作为shell提示窗口用来和页面文档以及DevTools进行交互。
#### Sources
  随着JavaScript程序复杂度的增加，开发者需要更加强大的debug工具来快速的发现问题并高效的修复。
#### Network
  在网络面板中可以看到网络请求资源的实时信息。
#### Performance
  从整体上看到在web页面加载和被使用的过程中时间消耗在哪里了。
#### Memory
  内存相关
#### Application
  记录网站加载的所有资源信息，包括存储数据（Local Storage、Session Storage、IndexedDB、Web SQL、Cookies）、缓存数据、字体、图片、脚本、样式表等。
#### Security
  判断当前网页是否安全
#### Audits
  监听面板会在页面加载的时候对其进行分析，然后提供优化和建议来降低页面加载时间，并提提高响应灵敏性。
  
[小技巧](http://coolshell.cn/articles/17634.html)


>参考链接
>[CSS介绍](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS)
>[CSS参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)