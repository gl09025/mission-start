# 要点

## 问题1： OOP 指什么？有哪些特性

面向对象程序设计（英语：Object-oriented programming，缩写：OOP）是种具有对象概念的程序编程典范，同时也是一种程序开发的抽象方针。它可能包含数据、属性、代码与方法。对象则指的是类的实例。它将对象作为程序的基本单元，将程序和数据封装其中，以提高软件的重用性、灵活性和扩展性，对象里的程序可以访问及经常修改对象相关连的数据。在面向对象程序编程里，计算机程序会被设计成彼此相关的对象。

特性：

- 封装

具备封装性（Encapsulation）的面向对象程序设计隐藏了某一方法的具体运行步骤，取而代之的是通过消息传递机制发送消息给它。封装是通过限制只有特定类的对象可以访问这一特定类的成员，而它们通常利用接口实现消息的传入传出。

- 继承

继承性（Inheritance）是指，在某种情况下，一个类会有“子类”。子类比原本的类（称为父类）要更加具体化。例如，“狗”这个类可能会有它的子类“牧羊犬”和“吉娃娃犬”。在这种情况下，“莱丝”可能就是牧羊犬的一个实例。子类会继承父类的属性和行为，并且也可包含它们自己的。我们假设“狗”这个类有一个方法（行为）叫做“吠叫()”和一个属性叫做“毛皮颜色”。它的子类（前例中的牧羊犬和吉娃娃犬）会继承这些成员。这意味着程序员只需要将相同的代码写一次。

- 多态

多态（Polymorphism）是指由继承而产生的相关的不同的类，其对象对同一消息会做出不同的响应。例如，狗和鸡都有“叫()”这一方法，但是调用狗的“叫()”，狗会吠叫；调用鸡的“叫()”，鸡则会啼叫。

- 抽象性

抽象（Abstraction）是简化复杂的现实问题的途径，它可以为具体问题找到最恰当的类定义，并且可以在最恰当的继承级别解释问题。举例说明，莱丝在大多数时候都被当作一条狗，但是如果想要让它做牧羊犬做的事，你完全可以调用牧羊犬的方法。如果狗这个类还有动物的父类，那么你完全可以视莱丝为一个动物。

## 问题2： 如何通过构造函数的方式创建一个拥有属性和方法的对象？

创建一个函数，赋予一些自己特有的属性或方法。对于公共的属性和方法写在`prototype` 中。

代码举例：

```javascript
function People(name,age){
    this.name = name
    this.age = age
}

People.prototype = {
  sayHello: function(){
    console.log('hello')
}
}

var xiaoming = new People('xiaoming','18')
```

## 问题3： prototype 是什么？有什么特性

prototype就是原型，公共的属性和方法。
比如我们获取一个数组的长度 `[1,2,3].length` 我们并没有给 `[1,2,3]` 这个数组添加 `length` 这个属性，但是它可以获取到这个属性。
是因为 `[1,2,3]`是`Array` 的一个实例化，
而`[1,2,3]` 这个实例化的`__proto__`属性指向了`Array`的`prototype`,
也就是`[1,2,3]`和 `Array`拥有公共的属性，所以`[1,2,3]`也有`length`这个属性。

共享原型链，`[1,2,3]`和`[4,5,6]`会拥有`Array`共有是属性和方法。但这两个数组又是不同的，存在差异化。
共享原型链和差异化就是prototype的特性。

## 问题4：画出如下代码的原型图

```javascript
function People (name){
  this.name = name;
  this.sayName = function(){
    console.log('my name is:' + this.name);
  }
}

People.prototype.walk = function(){
  console.log(this.name + ' is walking');  
}

var p1 = new People('饥人谷');
var p2 = new People('前端');
```

![图片](https://raw.githubusercontent.com/gl09025/image_respository/master/2018%E5%B9%B402%E6%9C%8803%E6%97%A5/2018-02-03%2014.09.16.jpg)

## 问题5： 创建一个 Car 对象，拥有属性name、color、status；拥有方法run，stop，getStatus

```javascript
function Car(name,color,status) {
    this.name = name
    this.color = color
    this.status = status
}

Car.prototype = {
    run: function(){
        //run
    }
    stop: function(){
        //stop
    }
    getStatus: function(){
        return this.status
    }
}
```

## 问题6： 创建一个 GoTop 对象，当 new 一个 GotTop 对象则会在页面上创建一个回到顶部的元素，点击页面滚动到顶部。拥有以下属性和方法

1. `ct`属性，GoTop 对应的 DOM 元素的容器
2. `target`属性， GoTop 对应的 DOM 元素
3. `bindEvent` 方法， 用于绑定事件
4. `createNode` 方法， 用于在容器内创建节点

[预览](https://gl09025.github.io/mission-start/epert-1_%E5%AF%B9%E8%B1%A1%26%E5%8E%9F%E5%9E%8B/index.html)

## 问题7： 使用木桶布局实现一个图片墙

[面向对象的木桶布局结合懒加载](https://gl09025.github.io/mission-start/epert-1_%E5%AF%B9%E8%B1%A1%26%E5%8E%9F%E5%9E%8B/waterfall/index.html)