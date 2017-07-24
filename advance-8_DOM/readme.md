## **题目1：** dom对象的`innerText`和`innerHTML`有什么区别？

innerText是一个可写属性，返回元素内包含的文本内容，在多层次的时候会按照元素由浅到深的顺序拼接其内容。

```
<div>123</div>
<script>
  var xDiv = document.querySelector('div')
  console.log(xDiv.innerText) //123
</script>
```

innerHTML属性作用和innerText类似，但是不是返回元素的文本内容，而是返回元素的HTML结构，在写入的时候也会自动构建DOM

```
<div><span>123</span></div>
<script>
  var xDiv = document.querySelector('div')
  console.log(xDiv.innerHTML) //<span>123</span>
</script>
```


## 题目2： elem.children和elem.childNodes的区别？

elem.children：子元素列表（HTMLCollectio），是element的属性，包含的都是element类型节点。
elem.childNodes：子元素列表（NodeList），是node的一个属性，可以包换任何类型节点。
>HTMLCollection与NodeList有很大部分相似性

> - 都是类数组对象，都有length属性，可以通过for循环迭代都是只读的

> - 都是实时的，即文档的更改会立即反映到相关对象上面(有一个例外,document.querySelectorAll返回的NodeList不是实时的)

> - 都有item()方法，可以通过item(index)或item("id")获取元素

>不同点在于

> - HTMLCollection对象具有namedItem()方法，可以传递id或name获得元素

> - HTMLCollection的item()方法和通过属性获取元素(document.forms.f1)可以支持id和name，而NodeList对象只支持id

children是Element的属性，childNodes是Node的属性
```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Demo</title>
</head>
<body>
    <div id="test">
        <p>One</p>
        <P>Two</p>
    </div>
    <script>
        var oDiv=document.getElementById("test");
        console.log(oDiv.children[0] instanceof Node);        //true
        console.log(oDiv.children[0] instanceof Element);    //true

        console.log(oDiv.childNodes[0] instanceof Node);    //true
        console.log(oDiv.childNodes[0] instanceof Element);    //false

        console.log(typeof oDiv.childNodes[0].children);    //undefined
        console.log(typeof oDiv.childNodes[0].childNodes);    //object
    </script>
</body>
</html>
```
以上代码得知，Element的children[0]仍为Element，是Node和Element的实例，Node的childNdoes[0]为Node，只是Node的实例，不是Element的实例。

## 题目3：查询元素有几种常见的方法？ES5的元素选择方法是什么?

查询元素方法
```
getElementById()
getElementsByClassName()
getElementsByTagName()
getElementsByName()
querySelector()
querySelectorAll()
elementFromPoint()
```

ES5方法
```
querySelector()
querySelectorAll()
```

## 题目4：如何创建一个元素？如何给元素设置属性？如何删除属性

 - 创建元素：
createElement().生成HTML元素节点。
```
var newDiv = document.createElement("div");
```
createTextNode().生成文本节点
```
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
```
createDocumentFragment().生成一个DocumentFragment对象
```
var docFragment = document.createDocumentFragment();
```
DocumentFragment对象是一个存在于内存的DOM片段，但是不属于当前文档，常常用来生成较复杂的DOM结构，然后插入当前文档。这样做的好处在于，因为DocumentFragment不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的DOM有更好的性能表现。

 - 元素设置属性
setAttribute()
```
var node = document.getElementById("div1");
node.setAttribute("my_attrib", "newVal");
```

 - 删除属性
romoveAttribute()
```
node.removeAttribute('id');
```


## 题目5：如何给页面元素添加子元素？如何删除页面元素下的子元素?

 - 添加子元素
appendChild(), 在元素末尾添加元素
```
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
newDiv.appendChild(newContent);
```
insertBefore(), 在某个元素之前插入元素
```
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
newDiv.insertBefore(newContent, newDiv.firstChild);
```
 - 删除子元素
removeChild()
```
parentNode.removeChild(childNode);
```

## 题目6： element.classList有哪些方法？如何判断一个元素的 class 列表中是包含某个 class？如何添加一个class？如何删除一个class?

element.classList有
```
add( String [, String] ) //添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略。
remove( String [,String] ) //删除指定的类值。
item ( Number ) //按集合中的索引返回类值。
toggle ( String [, force] )//当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true。当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它
contains( String )//检查元素的类属性中是否存在指定的类值
```
判断是否包含class为xxx
```
<body>
    <div id="test" class="xxx">
        <p>One</p>
        <P>Two</p>
    </div>
    <script>
      var oDiv=document.getElementById("test");
      console.log(oDiv.classList.contains("xxx")) //true
    </script>
</body>
```

添加class
```
oDiv.classList.add("yyy") //上面代码中div会添加yyy的class
```

删除class
```
oDiv.classList.remove("yyy") //会删除div的yyy
```

## 题目7： 如何选中如下代码所有的li元素？ 如何选中btn元素？

```
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>
```
代码：
```
    var allLi = document.querySelectorAll('li')
    var myBtn = document.querySelector('.btn')
```