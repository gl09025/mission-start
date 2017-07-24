## 题目1： DOM0 事件和DOM2级在事件监听使用方式上有什么区别？

DOM0是把一个方法赋值给一个元素的事件处理程序属性。删除事件处理程序，只需把元素的onclick属性赋为null即可。在冒泡阶段处理事件。
```
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    btnClick.onclick = function showMessage() {
        alert(this.id); //btnClick
    };
</script>
```
DOM2级事件定义了两个方法用于处理指定和删除事件处理程序的操作addEventListener,removeEventListener。这两种方法都接受三个参数1.事件类型2.事件处理方法3.布尔，为true时在捕获阶段，为false时在冒泡阶段。
该方法可以添加多个处理程序，会按照顺序依次执行。
通过addEventListener添加的事件处理程序只能通过removeEventListener移除。

```
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    btnClick.addEventListener('click', function() {
        alert(this.id);
    }, false);
    
    btnClick.addEventListener('click', function() {
        alert('Hello!');
    }, false);
</script>
```

移除事件
```
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');

    var handler=function() {
        alert(this.id);
    }

    btnClick.addEventListener('click', handler, false);
    btnClick.removeEventListener('click', handler, false);
</script>
```

## 题目2： attachEvent与addEventListener的区别？

 - 参数个数不相同，这个最直观，addEventListener有三个参数，attachEvent只有两个，attachEvent添加的事件处理程序只能发生在冒泡阶段，addEventListener第三个参数可以决定添加的事件处理程序是在捕获阶段还是冒泡阶段处理（我们一般为了浏览器兼容性都设置为冒泡阶段）

 - 第一个参数意义不同，addEventListener第一个参数是事件类型（比如click，load），而attachEvent第一个参数指明的是事件处理函数名称（onclick，onload）

 - 事件处理程序的作用域不相同，addEventListener的作用域是元素本身，this是指的触发元素，而attachEvent事件处理程序会在全局变量内运行，this是window，所以刚才例子才会返回undefined，而不是元素id

 - 为一个事件添加多个事件处理程序时，执行顺序不同，addEventListener添加会按照添加顺序执行，而attachEvent添加多个事件处理程序时顺序无规律(添加的方法少的时候大多是按添加顺序的反顺序执行的，但是添加的多了就无规律了)，所以添加多个的时候，不依赖执行顺序的还好，若是依赖于函数执行顺序，最好自己处理，不要指望浏览器

## 题目3： 解释IE事件冒泡和DOM2事件传播机制？

IE的事件冒泡：事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的元素
DOM事件流：DOM2级事件规定事件流包括三个阶段，事件捕获阶段，处于目标阶段，事件冒泡阶段，首先发生的是事件捕获，为截取事件提供机会，然后是实际目标接收事件，最后是冒泡阶段

## 题目4：如何阻止事件冒泡？ 如何阻止默认事件？

### 阻止事件冒泡
DOM事件对象：.stopPropagation();可以停止事件在DOM层次的传播，即取消进一步的事件捕获或冒泡。
IE事件对象：.cancelBubble = true; 该属性默认为false，设置为true后可以取消事件冒泡。

### 阻止默认事件
DOM事件对象：.preventDefault();当cancelable属性为true时，可以使用
IE事件对象：.returnValue = false; 该属性默认为true，设为false可以取消事件默认行为。

## 题目5：有如下代码，要求当点击每一个元素li时控制台展示该元素的文本内容。不考虑兼容

```
<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
    <li>前端6班</li>
</ul>
<script>
//todo
var ct = document.querySelector(".ct")
ct.addEventListener("click",function(e) {
  if(e.target && e.target.nodeName == "LI") {
    console.log(e.target.innerText);
  }else {
    console.log('fuck')
  }
})
</script>
```

## 题目6： 补全代码，要求：

 - 当点击按钮开头添加时在<li>这里是</li>元素前添加一个新元素，内容为用户输入的非空字符串；当点击结尾添加时在最后一个 li 元素后添加用户输入的非空字符串.
 - 当点击每一个元素li时控制台展示该元素的文本内容。

```
<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
    <li>任务班</li>
</ul>
<input class="ipt-add-content" placeholder="添加内容"/>
<button id="btn-add-start">开头添加</button>
<button id="btn-add-end">结尾添加</button>
<script>
//你的代码
var startBtn = document.getElementById('btn-add-start')
var endBtn = document.getElementById('btn-add-end')
var cunstomContent = document.querySelector('.ipt-add-content')
var ct = document.querySelector('.ct')

startBtn.addEventListener('click', function (e) {
    //创建li元素，获取input中的值赋值给li，再将li插入相应位置
    var li = document.createElement('li')
    var inputText = cunstomContent.value
    if (inputText) {
        li.innerText = inputText
        ct.prepend(li)
        console.log(cunstomContent.value)
    } else {
        alert('不要输入空字符串')
    }
})
endBtn.addEventListener('click', function (e) {
    var li = document.createElement('li')
    var inputText = cunstomContent.value
    if (inputText) {
        li.innerText = cunstomContent.value
        ct.appendChild(li)
        console.log(cunstomContent.value)
    } else {
        alert('不要输入空字符串')
    }
})
</script>
```

## 题目7： 补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前li元素的data-img对应的图片。

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            width: 400px;
            height: 300px;
        }
    </style>
</head>

<body>
    <ul class="ct">
        <li data-img="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/mantpl/img/base/loading_72b1da62.gif">鼠标放置查看图片1</li>
        <li data-img="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png">鼠标放置查看图片2</li>
        <li data-img="http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png">鼠标放置查看图片3</li>
    </ul>
    <div class="img-preview"></div>
    <script>
      var ct = document.querySelector('.ct')
      var imageView = document.querySelector('.img-preview')

      ct.addEventListener('mouseover', function (e) {
        //获取li对应的图片属性
        var dataContent = e.target.getAttribute('data-img')
        //展示图片先清除原来的图片
        imageView.innerHTML = ''
        //创建img标签，图片链接为上面获取到的，插入展示区
        var imgElement = document.createElement('img')
        imgElement.src = dataContent
        imageView.appendChild(imgElement)
      })
    </script>
</body>

</html>
```