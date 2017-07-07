# async和defer的作用？区别？


## 为什么要有async和defer
在html中加载脚本我们通常这么写
```
<script src="script.js"></script>
```
浏览器加载效果
![图示例](./images/图示例.png)

![script](./images/script.png)
  这样写浏览器会立即加载并执行指定的脚本，缺点就是会阻塞html的加载来加载脚本，如果脚本很多的话，页面空白时间比较长，体验就很差。
  所以我们需要想办法能不能避免这个情况，就有了async和defer。



## 概念

`async` 和`defer` 都是script标签的属性。
带async
```
<script async src="script.js"></script>
```
浏览器会将HTML和脚本并行执行（异步）
![图示例](./images/图示例.png)
![async](./images/async.png)

带defer
```
<script defer src="myscript.js"></script>
```

脚本和HTML并行执行，但在HTML整个解析结束后才会去执行脚本
![图示例](./images/图示例.png)
![defer](./images/defer.png)

在实际使用过程中我们都会将脚本标签放在`</script>` 之前，来保证其他元素的优先加载。

## 区别

    1. 下载都是和HTML同步的。
    2. async在下载完后就执行，defer在HTML解析完后再执行。
    3. defer是按照加载顺序来执行脚本。
    4. async不管声明的顺序，加载完就执行。


### 建议
在使用过程中要加载多个脚本文件的话，建议根据依赖关系来整理脚本的声明顺序。





> 参考
>
> [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
>
> [defer和async的区别](https://segmentfault.com/q/1010000000640869)
>
> [script的defer和async](http://ued.ctrip.com/blog/script-defer-and-async.html)