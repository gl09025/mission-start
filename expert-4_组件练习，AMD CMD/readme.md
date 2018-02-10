## 题目1： 为什么要使用模块化？

在团队协作中，每个人写的变量名多多少少会有冲突。
在html中加载JS，每个JS的或多或少的会依赖其他的JS文件，如果都写在html文件中要注意先后加载的问题，而且不利于管理。
使用模块化可以解决以上两个问题
1.命名冲突的问题。
2.解决依赖的问题。
使用模块化可以提高代码的可读性，实现代码的解耦，让代码能够更好的复用。

## 题目2： CMD、AMD、CommonJS 规范分别指什么？有哪些应用

### AMD (Asynchronous Module Definition, 异步模块定义) 指定一种机制，在该机制下模块和依赖可以异步加载。这对浏览器端的异步加载尤其适用。
AMD是 RequireJS 在推广过程中对模块定义的规范化的产出。

语法
`define(id?, dependencies?, factory);`

- id: 定义中模块的名字，可选；如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字。。

- 依赖dependencies：是一个当前模块依赖的，已被模块定义的模块标识的数组字面量。 依赖参数是可选的，如果忽略此参数，它应该默认为["require", "exports", "module"]。然而，如果工厂方法的长度属性小于3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法。

- 工厂方法factory，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块的输出值。

示例:

```javascript
define('modal', ['jQuery', 'dialog'], function($, Dialog){
    $('.modal').show();
    Dialog.open();
});
```

实现AMD的库有｀RequireJS｀ 、｀curl｀ 、｀Dojo｀ 等。

### CMD 规范

CMD（Common Module Definition）是 SeaJS推广过程中产生的。
就像AMD有个requireJS，CMD有个浏览器的实现SeaJS，SeaJS要解决的问题requireJS⼀样，只不过在模块定义⽅式和模块加载（可以说运⾏、解析）时机上有所不同。

示例

```javascript

define(function(require, exports, module) {
var $ = require('./jquery.js')
var _ = require('./underscore');

function a(){};
function b(){};
function c(){};

exports={
    b: b,
    c: c
}
});
```

//判断当前环境为CMD AMD 或 浏览器

```javascript
(function (name, definition, context) {
    if (typeof module != 'undefined' && module.exports) {
        // 在 CMD 规范下 (node)
        module.exports = definition();
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])  ) {
        //在 AMD 规范下(RequireJS) 或者 CMD 规范下(SeaJS)
        define(definition);
    } else {
        //在浏览器环境下
        context[name] = definition();
    }
})('sample', function () {

    var sample = (function () {
        "use strict";

        var a = 1;

        function inc(){
            a++;
        }

        function get(){
            return a;
        }

        return {
            inc: inc,
            get: get
        }

    })();

    return sample;

}, this);
```