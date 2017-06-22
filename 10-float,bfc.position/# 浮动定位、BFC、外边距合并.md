# 浮动定位、BFC、外边距合并

## 1. 浮动元素有什么特征？对父容器、其他浮动元素、普通元素、文字分别有什么影响?
  浮动元素脱离了普通文档流。如果父元素没有高度会使父元素高度塌陷，和其他浮动元素依次排列，如果和普通元素在一个位置会覆盖普通元素，文字会受浮动元素的影响

## 2. 清除浮动指什么? 如何清除浮动? 两种以上方法
 > 让元素左边或右边没有向左或向右浮动的元素，保持周围的普通文档流不受浮动元素影响。
  清除浮动方法：
>- 添加一个清除浮动的元素，
```
.clearfloat {
  clear: both;
}
```
>- 利用伪元素
```
.clearfloat {
  content: '';
  display: block;
  clear: both;
}
```
>- 父元素定义overflow:auto
```
.over-flow{
  overflow: auto; 
  zoom: 1; //zoom: 1; 是在处理兼容性问题
}
```

## 3. 有几种定位方式，分别是如何实现定位的，参考点是什么，使用场景是什么？

| 定位方式     | 参考点                        | 使用场景                                     |
| :------- | :------------------------- | ---------------------------------------- |
| inherit  | 从父元素继承position属性的值                    | 一般不用                                     |
| static   | 默认值，没有定位                   | 默认值                                      |
| relative | 相对元素自身定位                   | 不影响原文档流的情况下，做细微调整。子元素需要以自身为参考来做绝对定位      |
| absolute | 绝对定位，相对于static定位以外的第一个祖先元素 | 不需要占用原文档流的位置                             |
| fixed    | 绝对定位，相对于浏览器窗口              | 需要在视口中一直保留这个元素                           |
| sticky   | 混合了relative和fixed定位        | 在有滚动条的页面中，可见时是relative定位，当滚动到不可见时，变为fixed定位 |

## 4. z-index 有什么作用? 如何使用?
  让元素按规定的层级来显示，当元素重叠的时候，用z-index来决定哪一个元素在上方显示。只作用在有定位属性为relative/absolute/fixed中的一个的元素上。
  语法：

```
/* Keyword value */
z-index: auto;

/* <integer> values */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1;/* 使用负值降低优先级 */

/* Global values */
z-index: inherit;
z-index: initial;
z-index: unset;
```
### 示例
HTML
```html
<div class="dashed-box">Dashed box
  <span class="gold-box">Gold box</span>
  <span class="green-box">Green box</span>
</div>
```
CSS
```CSS
.dashed-box { 
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box { 
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box { 
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```
结果
![](http://upload-images.jianshu.io/upload_images/4122870-27f73c9d29a3396e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 5. `position:relative`和负`margin`都可以使元素位置发生偏移?二者有什么区别
  position:relative 不会影响原文档流，还占用原来的位置。
  负margin会影响到其他元素的位置。

## 6. BFC 是什么？如何生成 BFC？BFC 有什么作用？举例说明
  块格式化上下文（block formatting context）是Web页面的可视化CSS渲染的一部分。它是块盒子的布局发生，浮动互相交互的区域。

  生成条件：
- 根元素或其它包含它的元素
- 浮动 (元素的 float 不是 none)
- 绝对定位的元素 (元素具有 position 为 absolute 或 fixed)
- 内联块 inline-blocks (元素具有 display: inline-block)
- 表格单元格 (元素具有 display: table-cell，HTML表格单元格默认属性)
- 表格标题 (元素具有 display: table-caption, HTML表格标题默认属性)
- 块元素具有overflow ，且值不是 visible
- display: flow-root

作用：
#### BFC不会重叠浮动元素。
#### 清除浮动：
```html
<style>
.bfc{
  border: 1px solid;
  overflow: hidden;
}

.box1 {
  width: 50px;
  height: 50px;
  border: 3px solid #ddd;
  float: left;
}

.box2 {
  width: 50px;
  height: 50px;
  border: 3px solid #ddd;
  float: left;
}

</style>
<div class="bfc">
  <div class="box1"></div>
  <div class="box2"></div>
</div>
```
结果

![](http://upload-images.jianshu.io/upload_images/4122870-b694775f7f5798c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 消除外边距重叠：
```html

<style>  
.box1 {
  width: 50px;
  height: 50px;
  border: 3px solid #ddd;
  margin-top:100px;
  margin-bottom: 20px;
}

.box2 {
  width: 50px;
  height: 50px;
  border: 3px solid #ddd;
  margin-top: 10px;
}
</style>

  <div class="box1"></div>
  <div class="box2"></div>
```
结果

![](http://upload-images.jianshu.io/upload_images/4122870-535e3121c2cc7d1a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

下面我们将box2包起来,有包含box2的元素就生成了BFC
```html
<style>
.bfc{
  border: 1px solid;
}

.box1 {
  width: 50px;
  height: 50px;
  border: 3px solid #ddd;
  margin-top:100px;
  margin-bottom: 20px;
}

.box2 {
  width: 50px;
  height: 50px;
  border: 3px solid #ddd;
  margin-top: 10px;
}
</style>
<div class="box1"></div>
<div class="bfc">
  <div class="box2"></div>
</div>
```
结果

![](http://upload-images.jianshu.io/upload_images/4122870-c49f0049a501abe8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




## 7. 在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例

相邻的兄弟元素之间、块级父元素与其第一个/最后一个子元素、空块元素。
合并方式：
- 当两个外边距都是正数时，取两者中较大者
- 当两个外边距一个为正数，一个为负数时，取两者之和
- 当两个外边距都是负数时，取两者绝对值较大者

创建BFC来不让相邻元素外边距合并。

父子外边距合并示例：
```html
<style>
.parent {
  width: 300px;
  height: 300px;
  background: red;
  border: 1px solid;
}

.child {
   width: 300px;
  height: 200px;
  background: blue;
  margin-top: 20px;
}

.grandson {
  width: 200px;
  height: 100px;
  background: green;
  margin-top: 50px;
}
</style>
<body>
<div class="parent">
  <div class="child">
    <div class="grandson">grandson</div>
    child
  </div>
parent
</div>
</body>
```
结果
![](http://upload-images.jianshu.io/upload_images/4122870-ef07baf2882e9381.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

child和grandson的外边距合并起来为50px。


### 小例子

http://jsbin.com/xemizahihu

http://output.jsbin.com/lesipikuno

http://output.jsbin.com/gebaqutoja

http://output.jsbin.com/mosehesexe