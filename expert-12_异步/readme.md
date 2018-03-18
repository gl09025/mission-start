# promise

promise

## 处理异步有几种常见的方式

### 回调函数

读取A文件之后再读取文件B

```javascript
fs.readFile(fileA, 'utf-8', function (err, data) {
  fs.readFile(fileB, 'utf-8', function (err, data) {
    // ...
  });
});
```

如果这种操作多了，嵌套就比较多了。其中一个要修改，那么它上下层的回调函数可能都要修改。
为了解决这个，有了Promise

### Promise


```javascript
var readFile = require('fs-readfile-promise');

readFile(fileA)
.then(function (data) {
  console.log(data.toString());
})
.then(function () {
  return readFile(fileB);
})
.then(function (data) {
  console.log(data.toString());
})
.catch(function (err) {
  console.log(err);
});
```

`fs-readfile-promise`模块,作用就是返回一个promise版本的`readfile`函数。Promise的then方法加载回调函数，catch方法捕捉执行过程中抛出的错误。
Promise的问题是代码冗余，语义不清楚。
然后又有了Generator

### Generator

Generator 函数可以暂停执行和恢复执行。还有函数体内外的数据交换和错误处理机制
next返回值的 value 属性，是 Generator 函数向外输出数据；next方法还可以接受参数，向 Generator 函数体内输入数据。

```javascript
var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});
```

fetch模块返回的是Promise对象，使用then方法调用next方法。

### co模块

co 可以自动执行 Generator 函数

```javascript
var gen = function* () {
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

co 模块可以让你不用编写 Generator 函数的执行器。

```javascript
var co = require('co');
co(gen);
```

co函数返回一个Promise对象，因此可以用then方法添加回调函数。

```javascript
co(gen).then(function (){
  console.log('Generator 函数执行完成');
});
```

### async/await

async就是Generator函数的语法糖

下面的Generator读取文件的函数

```javascript
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

```

改写成async如下

```javascript
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```