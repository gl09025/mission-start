# 作业

作业

## 题目1：如何判断一个元素是否出现在窗口可视范围（浏览器的上边缘和下边缘之间，肉眼可视）。写一个函数 isVisible实现

![元素可视区域图解](https://raw.githubusercontent.com/gl09025/image_respository/master/2018%E5%B9%B401%E6%9C%8823%E6%97%A5/%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%86.png)

以下HTML

```html
<body>
  <div class="test" style="height: 1000px;border: 1px solid;"></div>
  <div class="element"></div>
</body>
```


```javascript
function isVisible($node) {
    var scrollTop = $node.scrollTop()
    var windowHeight = $(window).height()
    var offsetTop = $node.offset().top
    if ( offsetTop > scrollTop && offsetTop < (scrollTop + windowHeight)) {
        return true
    }
    return false
}
```

## 题目2：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。每次出现都在控制台打印 true 。用代码实现

在window的scroll事件中来判断，这里使用setTimeout来防止滚动过程中事件的多次触发。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cat.net/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>Document</title>
    <style>
        .place {
            height: 1000px;
            border: 1px solid;
        }
    </style>
</head>

<body>
    <div class="place"></div>
    <div class="node">我在这里</div>
    <div class="place"></div>

    <script>
        function isVisible($node) {
            var scrollTop = $(window).scrollTop()
            var windowHeight = $(window).height()
            var offsetTop = $node.offset().top
            if (offsetTop > scrollTop && offsetTop < (scrollTop + windowHeight)) {
                return true
            }
            return false
        }
        var clock
        $(window).on('scroll', function () {
            //清除时钟
            if (clock) {
                clearTimeout(clock)
            }
            //设置时钟
            clock = setTimeout(function () {
                console.log(isVisible($('.node')))
            }, 500)
        })
    </script>
</body>

</html>
```

## 题目3：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。在元素第一次出现时在控制台打印 true，以后再次出现不做任何处理。用代码实现

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cat.net/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>Document</title>
    <style>
        .place {
            height: 1000px;
            border: 1px solid;
        }
    </style>
</head>

<body>
    <div class="place"></div>
    <div class="node">我在这里</div>
    <div class="place"></div>

    <script>
        function isVisible($node) {
            var scrollTop = $(window).scrollTop()
            var windowHeight = $(window).height()
            var offsetTop = $node.offset().top
            if (offsetTop > scrollTop && offsetTop < (scrollTop + windowHeight)) {
                return true
            }
            return false
        }
        var clock
        var showed = false
        $(window).on('scroll', function () {
            if (clock) {
                clearTimeout(clock)
            }
            clock = setTimeout(function () {
                //判断是否出现过并且是否视口可见
                if ( !showed && isVisible($('.node')) ){
                    console.log(true)
                    showed = true
                }
            }, 500)
        })
    </script>
</body>

</html>
```

## 题目4： 图片懒加载的原理是什么？

懒加载通过判断，达到是否加载网络资源，比如图片较多的网站,没有浏览到的图片就不加载，等浏览到了再加载。减少网络的拥堵，提升体验。
对于图片：

- 设置一个默认的src，来充当占位图片，这个占位图片十分的小。
- 添加一个自定义的属性`data-src` 来存放真正的图片地址。自定义的属性不会发请求。
- 当滚动到浏览器视口时再将图片的`src` 替换为自定义属性`data-src` 里的地址。

## 题目5： 实现视频中的图片懒加载效果

[预览](https://gl09025.github.io/mission-start/advance-16_%E6%87%92%E5%8A%A0%E8%BD%BD/index.html)