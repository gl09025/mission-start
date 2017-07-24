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

