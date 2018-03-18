## 移动端开发和 PC 端开发有哪些区别

PC端:
开发主要是兼容各种浏览器客户端，比如chrome，firefox，safri。
设备的屏幕尺寸大，有更多的空间，加载的资源较多。用户可以更改浏览器窗口尺寸大小，需要适当考虑适应不同窗口尺寸的布局。
PC端网速较移动端快，优化较移动端少。
需要实现的效果多。
调试比较容易。
使用鼠标来操作

移动端:
主要分
1.Native原生APP（Java/Objective-C/Swift）
2.WebAPP,手机浏览器上展示的页面
3.Hybird(Native+html)混合应用
前端工程师主要是后两者部分。

移动端主要还是适配webkit内核的浏览器，比如chrome，uc，qq浏览器。
屏幕尺寸较小，加载的资源相对较少，用户无法改变浏览器的窗口尺寸大小，布局相对比较简单。
受限于移动网络的速度，需要优化资源的加载。
需要实现的效果少。
真机比较难调试，需要额外的工具支持(比如brower-sync)。
使用手势来操作，与PC端使用的事件不同，移动端为触摸事件。

## 如何做移动端页面适配

### 响应式

1.meta:vp 禁止缩放
2.尽量不要写width/height，用max/min
3.flex布局
4.媒体查询 media query

使用阿里的flexible库:https://github.com/amfe/lib-flexible

### 动态rem方案

针对不同手机屏幕尺寸和dpr动态的改变根节点html的font-size大小(基准值)。
概念：
1.实际页面的宽度 == html的font-size
2.1rem == 实际页面的宽度

实现思路：
假设这里设计稿的页面宽度为320px
1.移动端浏览器禁止980像素的缩放
`<meta name="viewport" content="initial-scale=1,maximum-scale=1">`
2.设置html font-size: 设备真实宽度 /10 px
3.那么10rem == 真实宽度
4.所有单位都用rem,元素以页面宽度为基准。那么最后得出的rem单位是：
`设计稿中的尺寸 / 设计稿页面宽度（320）rem`

```javascript
var width = document.documentElement.clientWidth
var css = `{font-size: width / 10 px}`
document.write(`<style>${css}</style>`) //js设置页面的font-size
```

## 移动端开发有哪些常见的坑

### 300ms delay

点击链接后等300ms才会跳转.因为一开始手机上浏览器模拟宽像素来浏览pc上的网页，所以有双击缩放功能，所以浏览器会等待下一步动作，没有下一步动作才跳转。
解决延迟方案：
1.meta禁止缩放

```html
<meta name="viewport" content="user-scalable=no">   不让用户缩放
<meta name="viewport" content="initial-scale=1,maximum-scale=1">   给出合适的缩放比例
```

2.width=device-width meta 标签

```html
<meta name="viewport" content="width=device-width">
```

3.FastClick库

```javascript
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
```

### 1像素问题

苹果设备的Retina屏会将1px显示成两个物理像素。
可以使用阿里的flexible库:https://github.com/amfe/lib-flexible
现在由于viewport得到了众多浏览器的兼容，可以使用viewport方案：https://www.w3cplus.com/mobile/vw-layout-in-vue.html

参考：
添加手势到webapp http://hammerjs.github.io/
smooth scrolling for the web http://iscrolljs.com/
移动端开发技巧 https://github.com/jtyjty99999/mobileTech
fastclick 300ms  https://github.com/ftlabs/fastclick
可伸缩布局 https://github.com/amfe/lib-flexible