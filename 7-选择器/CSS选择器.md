# CSS选择器

1.class 和 id 的使用场景?
.class类选择器,一类的样式。标签可以拥有多个类。
`#id` 特定的样式，唯一。
2.CSS选择器常见的有几种?
- 基础选择器


| 选择器     | 含义                             |
| :------ | :----------------------------- |
| *       | 通用元素选择器，匹配页面任何元素（这也就决定了我们很少使用） |
| #id     | id选择器，匹配特定id的元素                |
| .class  | 类选择器，匹配class包含（不是等于）特定类的元素     |
| element | 标签选择器                          |

- 组合选择器

| 选择器            | 含义|
| :------------- | :--------------------------------------- |
| E,F            | 多元素选择器，用,分隔，同时匹配元素E或元素F                  |
| E F            | 后代选择器，用空格分隔，匹配E元素所有的后代（不只是子元素、子元素向下递归）元素F |
| E>F            | 子元素选择器，用>分隔，匹配E元素的所有直接子元素                |
| E+F            | 直接相邻选择器，匹配E元素之后的相邻的同级元素F                 |
| E~F            | 普通相邻选择器（弟弟选择器），匹配E元素之后的同级元素F（无论直接相邻与否）   |
| .class1.class2 | id和class选择器和选择器连写的时候中间没有分隔符，. 和 # 本身充当分隔符的元素 |
| element#id     | id和class选择器和选择器连写的时候中间没有分隔符，. 和 # 本身充当分隔符的元素 |

- 属性选择器

| 选择器           | 含义                            |
| :------------ | :---------------------------- |
| [attr]        | 表示带有以attr命名的属性的元素             |
| [attr=value]  | 以attr命名，且值为“value”的属性的元素      |
| [attr~=value] | 有attr属性并具有多个空格分隔，其中一个的值为value |
| [attr         | =value]                       |
| [attr^=value] | 有attr属性且值是以value开头            |
| [attr$=value] | 有arrt属性且值是以value结尾            |
| [attr*=value] | 有attr属性且包含value               |

- 伪类选择器
  [详细参考MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

| 选择器            | 含义                            |
| :------------- | :---------------------------- |
| :hover         | 鼠标悬停时                         |
| :active        | 元素被激活。使用鼠标时，用户按下按键和松开按键之间的时间。 |
| :first-child() | 匹配长子元素                        |
| :last-child()  | 父元素的最后一个元素                    |
| :focus         | 获取当前焦点的元素                     |
| :checked       | 被选中的radio或checkbox元素          |
| :nth-child(n)  | 匹配第n个子元素                      |

n的取值：
- an+b：n为正值或零值，a和b必须为整数。
- even：奇数行
- odd：偶数行

- 伪元素选择器

| 选择器            | 含义          |
| :------------- | :---------- |
| ::after        | 元素之后        |
| ::before       | 元素之前        |
| ::first-letter | 元素内容的第一个字母  |
| ::first-line   | 元素内容的第一行    |
| ::selection    | 文档中被用户高亮的部分 |

3.选择器的优先级是怎样的?对于复杂场景如何计算优先级？
  1.`!important` 优先级最高
  2.内联样式
  3.id选择器
  4.类选择器
  5.伪类选择器
  6.属性选择器
  7.标签选择器
  8.通配符选择器
  9.浏览器自定义
在复杂场景中计算优先级我们先给选择器一个权重数字（初始都为0）
- 行内样式 ==>a
- ID选择器==>b
- 类，属性选择器和伪类选择器==>c
- 标签选择器、伪元素==>d

小例子
```CSS
#test p.class1{...}/*a=0,b=1,c=1,d=0*/
#test .class1.class2{...}/*a=0,b=1,c=2,d=0*/
```
在上面例子中得到两个数字`0110` 和`0120`，显然`0120`的优先级更高。
一般情况下，选择器写的越具体，优先级就越高。

4.a:link, a:hover, a:active, a:visited 的顺序是怎样的？ 为什么？
正确的使用顺序，a:link->a:visited->a:hover->a:active
优先级相同的选择器，写在后面的会覆盖前面的。
1. 在使用过程中，鼠标经过a标签时，有hover和link属性，我们需要显示hover，所以hover在link后。
2. 鼠标在已访问过a标签时，有hover和active属性，需要显示active，所以active在hover之后。
3. visited是已访问过的，如果写在最后，当鼠标不悬停在a标签上时，也会有visited属性，所以visited需要在hover和active之前。
4. link和visited是顺序可以随意放置。
---
5.以下选择器分别是什么意思?
```CSS
#header{}/*id是header的标签*/
.header{}/*类名为header的标签*/
.header .logo{}/*类名为header的后代元素中类名为logo的元素*/
.header.mobile{}/*类名为header和mobile的元素*/
.header p, .header h3{}/*类名为header元素下的所有p标签和类名为header元素下的所有h3标签*/
#header .nav>li{}/*id为header元素下的类名为nav的元素下的li子元素，不往下递归*/
#header a:hover{}/*id为header元素下的a标签且事件状态为悬停*/
#header .logo~p{}/*id为header元素下，所有类名为logo元素之后的同级p标签*/
#header input[type="text"]{}/*id为header的元素下，以type命名属性值为tex的input标签*/
```
6. 列出你知道的伪类选择器
   `:link` `:visted` `:hover` `:active` `:nth-child()` `:first`
7. div.:irst-child、div:first-of-type、div :first-child和div :first-of-type的作用和区别 （注意空格的作用）
  `div:first-child` :兄弟元素中第一个子元素，且同为div
  ```html
  <div><!--整个div都选中-->
    <span>This span is limed!</span>
    <span>This span is not. :(</span>
  </div>
  ```
  `div:first-of-type` :匹配父元素中的第一个div类型的元素
  ```html
  <div><!--整个div都选中-->
  <span>This span is first!</span>
  <span>This span is not. :(</span>
  <span>what about this <em>nested element</em>?</span>
  <strike>This is another type</strike>
  <span>Sadly, this one is not...</span>
  </div>
  ```
  `div :first-child` :（有空格，后代选择器）div标签下的所有第一个子元素
  ```html
  <div>
    <span>This span is limed!</span><!--选中-->
    <span>This span is not. :(</span>
  </div>
  ```

  `div :first-of-type`（有空格，后代选择器）div标签下的所有第一个新种类元素
  ```html
  <div>
    <span>This span is first!</span><!--选中-->
    <span>This span is not. :(</span>
    <span>what about this
    <em>nested element</em><!--选中-->
    ?</span>
    <strike>This is another type</strike><!--选中-->
  <span>Sadly, this one is not...</span>
  </div>
  ```

8. 运行如下代码，解析下输出样式的原因。
```html
  <style>
  .item1:first-child{
  color: red;
  }
  .item1:first-of-type{
  background: blue;
  }
  </style>
   <div class="ct">
   <p class="item1">aa</p>
   <h3 class="item1">bb</h3>
   <h3 class="item1">ccc</h3>
   </div>
```
aa样式有`color:red`和`background:blue`
bb样式有`background:blue`
ccc为默认属性
![](http://upload-images.jianshu.io/upload_images/4122870-870e4eab95523d14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
`.item1:first-child`，选择类名为item1的兄弟元素中的第一个。
故选中的为内容aa所在的标签。
`.item1:first-of-type`，选择类名为item1的兄弟元素中的第一个新种类元素。
故选中的是内容为aa和内容为bb的标签。