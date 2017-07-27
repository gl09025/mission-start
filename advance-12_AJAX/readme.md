## 题目1： ajax 是什么？有什么作用？

  （异步JavaScript和XML）Asynchronous JavaScript + XML,其本身不是一种新技术，而是一个在 2005年被Jesse James Garrett提出的新术语，用来描述一种使用现有技术集合的‘新’方法, 包括: HTML or XHTML, Cascading Style Sheets, JavaScript, The Document Object Model, XML, XSLT, 以及最重要的 XMLHttpRequest object.
  当使用结合了这些技术的AJAX模型以后， 网页程序能够逐步快速地将更新呈现在用户界面上，不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。
  
## 题目2： 前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？

约定好数据和接口。后端将数据放在模板里，前端可以写页面，不影响。接口的参数，名称，请求和响应的格式。
在本地模拟一个服务器，可以使用nodejs模拟服务器，例如server-mock。按照约定的格式来填充伪数据。

## 题目3：点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?

设置一个状态变量来防止重复发送请求

```javascript
 btn.addEventListener('click', function(e) {
      e.preventDefault();

      if (!isDataArrive) {
          return;          //数据没有到达，不执行操作
      }

      var xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function() {

//do things。。。
     isDataArrive = true //获取到数据，将状态设置为true。
          }
      }

      xhr.open('get', '/loadMore?index=' + pageIndex + '&length=5', true)
      xhr.send()
      isDataArrive = false  //发送请求后，将状态设置为false
  })
```

## 题目4：实现加载更多的功能，后端在本地使用server-mock来模拟数据

前端代码

```markup
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>
      加载更多
    </title>
    <style>
      ul,li{
      margin: 0;
      padding: 0
    }
    #ct {
      margin-left: 100px;
      width: 500px;
      height: 500px;
      overflow: auto;
    }
    #ct li{
      list-style:none;
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 10px;
      cursor:pointer;
    }
    #load-more{
      display: block;
      margin: 10px auto;
      text-align: center;
      cursor: pointer;
    }
    #load-more img{
      width: 40px;
      height: 40px;
    }
    .btn{
      position: fixed;
      top: 20px;
      left: 10px;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      width: 80px;
      border: 1px solid #E27272;
      border-radius: 3px;
      text-align: center;
      text-decoration: none;
      color: #E27272;
    }
    .btn:hover{
      background: green;
      color: #fff;
    }
      </style>
  </head>
  <body>
    <ul id="ct">
    </ul>
    <a id="load-more" class="btn" href="#">
      加载更多
    </a>
  </body>

  <script>
  
  var ct = document.querySelector('#ct')
  var btn = document.querySelector('#load-more')

  var pageIndex = 0  
  var isDataArrive = true;

  btn.addEventListener('click', function(e) {
      e.preventDefault();

      if (!isDataArrive) {
          return; 
      }

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {

          if (xhr.readyState == '4') {
              if (xhr.status === 200 || xhr.status === 304) {
                  var result = JSON.parse(xhr.responseText);
                  console.log(result);
                  var fragment = document.createDocumentFragment();

                  for (var i = 0; i < result.length; i++) {
                      var node = document.createElement('li');
                      node.innerText = result[i];
                      fragment.appendChild(node);

                  }
                  ct.appendChild(fragment);
                  pageIndex += 5;

              } else {
                  console.log('出错了');

              }
              isDataArrive = true;  
          }
      }

      xhr.open('get', '/loadMore?index=' + pageIndex + '&length=5', true);
      xhr.send();
      isDataArrive = false;
  })
      
    </script>
</html>
```

server-mock代码

```javascript
// 服务端 router.js


app.get('/loadMore', function(req, res) {
	var curIdx = req.query.index
	var len = req.query.length
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	res.send(data);
});


```