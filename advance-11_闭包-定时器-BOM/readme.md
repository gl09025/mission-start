## 题目1: 下面的代码输出多少？修改代码让 fnArr[i]() 输出 i。使用 两种以上的方法

```
    var fnArr = [];
    for (var i = 0; i < 10; i ++) {
        fnArr[i] =  function(){
    	    return i;
        };
    }
    console.log( fnArr[3]() );  //10
```
修改代码
创建作用域
```
    var fnArr = []
    for (var i = 0; i < 10; i ++) {
        !function(i){
        fnArr[i] =  function(){
            return i;
        };
        }(i)
        
    }
console.log( fnArr[3]() ); 
```
跟上面方法差不多
```
var fnArr = []
for (var i = 0; i < 10; i ++) {
    fnArr[i] =  function(i){
        return function(){
            return i 
        }
    }(i)
    
}
console.log( fnArr[3]());  
```
使用let
```
    var fnArr = [];
    for (let i = 0; i < 10; i ++) {
        fnArr[i] =  function(){
    	    return i;
        };
    }
    console.log( fnArr[3]() );
```

## 题目2： 封装一个汽车对象，可以通过如下方式获取汽车状态

```
var Car = (function(){
   var speed = 0;
   function setSpeed(s){
       speed = s
   }
    function getSpeed() {
        return speed
    }
    function accelerate() {
        return speed += 10
    }
    function decelerate() {
        return speed -= 10
    }
    function getStatus() {
        if (speed > 0) {
            return 'running'
        }else if (speed === 0) {
            return 'stop'
        }
    }
   return {
      setSpeed: setSpeed,
      getSpeed: getSpeed,
      accelerate: accelerate,
      decelerate: decelerate,
      getStatus: getStatus,
   }
})()
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate(); 
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error
```


## 题目3：下面这段代码输出结果是? 为什么?

```
var a = 1;
setTimeout(function(){
    a = 2;
    console.log(a);
}, 0);
var a ;
console.log(a);
a = 3;
console.log(a);
```
输出 1 3 2
首先变量提升，相当于下面代码：
```
var a = 1;
var a ; //重复声明a，还是一样
console.log(a);
a = 3;
console.log(a);
setTimeout(function(){//定时器不管时间设置多少都会在后面执行，在函数作用域内a为2
    a = 2;
    console.log(a);
}, 0);
```

## 题目4：下面这段代码输出结果是? 为什么?

```
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
```
结果:没有输出
定时器会在后面执行，相当于下面的代码
```
var flag = true;
while(flag){}
console.log(flag);
setTimeout(function(){
    flag = false;
},0)
```
while循环会一直执行下去，后面的代码就执行不到了。

## 题目5： 下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）

```
for(var i=0;i<5;i++){
	setTimeout(function(){
         console.log('delayer:' + i );
	}, 0);
	console.log(i);
}
```
放在立即执行函数里面
```
for(var i=0;i<5;i++){
    !function (i) {
	setTimeout(function(){
         console.log('delayer:' + i );
	}, 0);
        
    }(i)
	console.log(i);
}
```

## 题目6： 如何获取元素的真实宽高

```
function getStyle(el) { 
  if(window.getComputedStyle) { 
    return window.getComputedStyle(el, null); 
  }else{ 
    return el.currentStyle; 
  } 
} 
var trueWidth = getStyle(el).width;
var trueHeight = getStyle(el).height;
```

## 题目7： URL 如何编码解码？为什么要编码？

JavaScript提供四个URL的编码/解码方法。

1.decodeURI()
2.decodeURIComponent()
3.encodeURI()
4.encodeURIComponent()

区别

encodeURI方法不会对下列字符编码

ASCII字母
数字
~!@#$&*()=:/,;?+'

encodeURIComponent方法不会对下列字符编码

ASCII字母
数字
~!*()'

所以encodeURIComponent比encodeURI编码的范围更大。

实际例子来说，encodeURIComponent会把 http:// 编码成 http%3A%2F%2F 而encodeURI却不会。


 - URL 的编码格式采用的是 ASCII 码，而不是 Unicode，也就是说 URL 中不能包含任何非 ASCII 字符，比如中文（如果客户端浏览器和服务器端浏览器支持的字符集不同，中文可能会造成问题，现在一般默认都使用 UTF-8）。
 - 使用安全的字符去（没有特殊用途和特殊意义的可打印字符）表示那些不安全的字符。
 - 有些字符会引起歧义。比如参数中的key=value键值对，当value里含有= & ? 等，就会造成 URL 服务器的解析错误。所以必须将引起歧义的符号进行转义，也就是对其进行编码。

## 题目8： 补全如下函数，判断用户的浏览器类型

```
var u = navigator.userAgent
function isAndroid(){
    if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
        return 'Android'
    } else {
        return 'Not Android'
    }
}
function isIphone(){
    if (u.indexOf('iPhone') > -1) {
        return 'Iphone'
    } else {
        return 'Not Iphone'
    }
}
function isIpad(){
    if (u.indexOf('iPad') > -1) {
        return 'iPad'
    } else {
        return 'Not iPad'
    }
}
function isIOS(){
    if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        return 'IOS'
    } else {
        return 'Not IOS'
    }
}
```