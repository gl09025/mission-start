# CSS常见样式


1. 块级元素和行内元素分别有哪些？动手测试并列出4条以上的特性区别

块级元素
```
h1 h2 h3 h4 h5 h6 div p ul li table hr form ol dl pre dd dt tr td th
```
行内元素
```
span em img strong br a button input label select textarea script code
```
内容
  行内元素只能包含数据和其他行内元素。
  块级元素可以包含行内元素和其他块级元素。
格式
  默认情况下，行内元素不会以新行开始，块级元素会以新行开始。
宽高
  块级元素默认占整行，行内元素自适应大小。行内元素无法设置宽高。
上下距离
  行内元素设置了上下的margin并不会将高度撑开。padding都可设置。

2. 什么是 CSS 继承? 哪些属性能继承，哪些不能？

从父元素那里继承的样式。
可以继承的属性：
```
azimuth、border-collapse、border-spacing、caption-side、color、cursor、direction、elevation、empty-cells、font-family、font-size、font-style、font-variant、font-weight、font、letter-spacing、line-height、list-style-image、list-style-position、list-style-type、list-style、orphans、pitch-range、pitch、quotes、richness、speak-header、speak-numeral、speak-punctuation、speak、speech-rate、stress、text-align、text-indent、text-transform、visibility、voice-family、volume、white-space、widows、word-spacing、
```

不可继承
```
display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi
```

3. 如何让块级元素水平居中？如何让行内元素水平居中?

块级元素水平居中,设置自身左右margin为auto
```
margin: 0 auto;
```
行内元素水平居中，在父元素中添加如下CSS属性
```
text-align: center;
```
4. 用 CSS 实现一个三角形
  ![](https://ooo.0o0.ooo/2017/06/20/5949075db152f.png)

5. 单行文本溢出加 `...`如何实现?
  比如为类名为card的p中的内容设置文本溢出
```css
.card p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
6. px, em, rem 有什么区别
  px为固定尺寸，相对于屏幕的分辨率。
  em相对单位，相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸
  rem相对单位，相对于HTML的根元素。

7. 解释下面代码的作用?为什么要加引号? 字体里`\5b8b\4f53`代表什么?
```
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```
  作用：设置body的字体大小和字体类型。字体大小为12px，行高为1.5倍字体大小。字体为tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif中选择。
  加引号是因为是一个整体，中间有空格，不加浏览器会以空格分开。
  `\5b8b\4f53`是Unicode码，代表`黑体`

  一些CSS代码

>1.
>https://jsbin.com/bivoverefu
>2.
>https://jsbin.com/yobexitise
>3.
>http://jsbin.com/mezeqoxacu
>4.
>http://jsbin.com/rofajatavo
>5.
>http://jsbin.com/mimimaqati
