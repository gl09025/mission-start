# 题目

题目

## 题目1： 轮播的实现原理是怎样的？如果让你来实现，你会抽象出哪些函数(or接口)供使用？（比如 play()）

1.用一个容器将所有的图片都包裹起来，外层再包裹一个容器。
2.利用浮动`float: left`或其他CSS,比如`display: flex`将图片都排成一排。
3.对最外层的容器设置宽度，利用`overflow: hidden`设置显示的部分，这样其他部分就不会显示出来。
4.对包裹图片的容器进行绝对定位`position: absolute`，设置左移`left`或者右移`right`属性，滚动距离为图片的宽度，来使整个图片容器滚动，从而展现图片。

抽象出：1.设置动画时间 `setAnimateTime(string)` 2.是否自动轮播 `autoPlay()`

## 题目2： 实现视频中的左右滚动无限循环轮播效果

[预览](https://gl09025.github.io/mission-start/advance-17_%E8%BD%AE%E6%92%AD/index.html)

## 题目3： 实现一个渐变轮播效果, [效果范例](http://book.jirengu.com/jirengu-inc/js-works/carousel/carousel-fade-jquery.html#)

[预览](https://gl09025.github.io/mission-start/advance-17_%E8%BD%AE%E6%92%AD/shadow.html)