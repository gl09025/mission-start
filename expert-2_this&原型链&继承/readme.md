## 问题1： apply、call 、bind有什么作用，什么区别

apply、call、bind都可以改变函数体内部的this。

bind语法

```javascript
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```
apply语法

```javascript
fun.apply(thisArg, [argsArray])
```

call语法

```javascript
fun.call(thisArg,arg1,arg2)
```

- apply、call、bind三者都是用来改变函数的this指向的。
- apply、call、bind三者第一个参数都是this要指定的对象。
- apply、call、bind三者都可以利用后续参数传参。
- bind是返回对应函数，等待以后调用。apply、call则是立即调用。


## 问题2： 以下代码输出什么?

```javascript
var john = { 
  firstName: "John" 
}
function func() { 
  alert(this.firstName + ": hi!")
}
john.sayHi = func
john.sayHi()
```

John : hi!

## 问题3： 下面代码输出什么，为什么

```javascript
func() 
function func() { 
  alert(this)
}
```

[object window]

首先func会提升。
在函数func中并没有定义this，func执行的环境就是window，所以是window调用了func

```javascript
function func() {
    alert(this)
}
window.func()
```

## 问题4：下面代码输出什么

```javascript
document.addEventListener('click', function(e){
    console.log(this);
    setTimeout(function(){
        console.log(this);
    }, 200);
}, false);
```

document
window

## 问题5：下面代码输出什么，why

```javascript
var john = { 
  firstName: "John" 
}

function func() { 
  alert( this.firstName )
}
func.call(john)
```

John,使用call改变了函数内部的this为john这个对象。所以函数内部就读取john的属性了。

## 问题6： 以下代码有什么问题，如何修改

```javascript
var module= {
  bind: function(){
    $btn.on('click', function(){
      console.log(this) //this指什么
      this.showMsg();
    })
  },

  showMsg: function(){
    console.log('饥人谷');
  }
}
```

bind方法里面的this改变了，是$btn,所以获取不到showMsg这个方法

1.先保存外面的this

```javascript
var module= {
  var _this = this
  bind: function(){
    $btn.on('click', function(){
      _this.showMsg();
    })
  },

  showMsg: function(){
    console.log('饥人谷');
  }
}
```

2.利用bind

```javascript
var module= {
  bind: function(){
    $btn.on('click', function(){
      this.showMsg();
    }.bind(this))
  },

  showMsg: function(){
    console.log('饥人谷');
  }
}
```

## 问题7：有如下代码，解释Person、 prototype、__proto__、p、constructor之间的关联。

```javascript
function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log('My name is :' + this.name);
}
var p = new Person("若愚")
p.sayName();
```

Person的__proto__指向prototype，这个prototype里有constructor,constructor指向了Person本身。
p的__proto__指向了Person的prototype

## 问题8： 上例中，对对象 p可以这样调用 p.toString()。toString是哪里来的? 画出原型图?并解释什么是原型链。

是Object上的方法。

![图片](https://raw.githubusercontent.com/gl09025/image_respository/master/2018%E5%B9%B402%E6%9C%8806%E6%97%A5/IMG_20180206_152945_01.jpg)

原型链就是对象上的`__proto__`属性一直相连，在对象本身找不到对应方法时会去`__proto__`链接的上一层去找，如果找不到还有上一层就一层一层的往上找。

## 问题9：对String做扩展，实现如下方式获取字符串中频率最高的字符

```javascript
var str = 'ahbbccdeddddfg';
var ch = str.getMostOften();
console.log(ch); //d , 因为d 出现了5次
```

```javascript
str.__proto__.getMostOften = function (){
    var newArray = this.split('')
    var counts = {};
    newArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    var min = Infinity, max = -Infinity 
    for (var key in counts){
        if (counts[key] > max) {max = counts[key]}
    }
    // return maxCountCharater
    var resultString = ''
    for (var key in counts){
        if (counts[key] === max){
            resultString += key+ ','
        }
    }
    return resultString
}
```

## 问题10： instanceof有什么作用？内部逻辑是如何实现的？

instanceof用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

语法
`object instanceof constructor`
检测constructor.prototype是否存在于参数object的原型链上。

```javascript
function C(){} 
function D(){} 

var o = new C();


o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype


o instanceof D; // false，因为 D.prototype不在o的原型链上
```

## 问题11：继承有什么作用?

继承可以共享一些共有的属性或方法，这样就不用每次都去重新写。节省空间，提高效率。

## 问题12： 下面两种写法有什么区别?

```javascript
//方法1
function People(name, sex){
    this.name = name;
    this.sex = sex;
    this.printName = function(){
        console.log(this.name);
    }
}
var p1 = new People('饥人谷', 2)

//方法2
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}

Person.prototype.printName = function(){
    console.log(this.name);
}
var p1 = new Person('若愚', 27);
```

第一种方法每次生成一个实例都会将所有属性都赋值一遍，当实例很多的时候会占据更多的空间，但其实每个实例的方法都是一样的。
第二种方法将一个公用的方法写入原型链中，这样在生成实例的时候就不会重复的赋值这个公共的方法，节省了空间，提高了效率。

## 问题13： Object.create 有什么作用？兼容性如何？

方法会使用指定的原型对象及其属性去创建一个新的对象。
下面是一个继承的例子：

```javascript
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// 因为使用“.prototype =...”后,constructor会改变为“=...”的那个
// constructor，所以要重新指定.constructor 为自身。
```

最低支持ES5
浏览器兼容：支持IE9及以上版本,chrome5及以上,火狐4及以上。

## 问题14： hasOwnProperty有什么作用？ 如何使用？

指示对象自身属性中是否具有指定的属性，返回一个布尔值。
语法：
`obj.hasOwnProperty(prop)`
下面例子展示了自身属性和继承属性的区别

```javascript
o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // 返回 true
o.hasOwnProperty('toString');         // 返回 false
o.hasOwnProperty('hasOwnProperty');   // 返回 false
```

## 问题15：如下代码中call的作用是什么?

```javascript
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}
function Male(name, sex, age){
    Person.call(this, name, sex);    //这里的 call 有什么作用
    this.age = age;
}
```

call的作用是将Person中的属性赋值到当前Male函数中。

## 问题16： 补全代码，实现继承

```javascript
function Person(name, sex){
    // todo ...
}

Person.prototype.getName = function(){
    // todo ...
};    

function Male(name, sex, age){
   //todo ...
}

//todo ...
Male.prototype.getAge = function(){
    //todo ...
};

var ruoyu = new Male('若愚', '男', 27);
ruoyu.getName();
```



```javascript
function Person(name, sex){
    this.name = name
    this.sex = sex
}

Person.prototype.getName = function(){
    console.log(this.name)
};

function Male(name, sex, age){
   Person.call(this,name,sex)
   this.age = age
}
Male.prototype = Object.create(Person.prototype)
Male.prototype.constructor = Male
Male.prototype.getAge = function(){
    console.log(this.age)
};

var ruoyu = new Male('若愚', '男', 27);
ruoyu.getName();
```