## 题目1： 什么是同源策略

浏览器出于安全方面的考虑，只允许与本域下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。

本域指的是？

同协议：如都是http或者https
同域名：如都是http://jirengu.com/a 和http://jirengu.com/b
同端口：如都是80端口

## 题目2： 什么是跨域？跨域有几种实现形式

允许不同域的接口进行交互。
跨域的方式：
1.JSONP
2.CORS
3.降域
4.postMessage

## 题目3： JSONP 的原理是什么

利用<script>标签不受同源策略的影响，服务器返回约定格式的JavaScript代码片段。比如

```
<script src="htttp://b.example.com?key1=value1&callback=fn"></script>
```

这个script标签向不同域发送了一个请求，服务器获取到请求时返回约定的json格式的数据，函数名可通过通过地址参数传递
比如返回的格式为 fn(["string1","string2"])。在前端声明一个同名的fn函数做相应处理。


## 题目4： CORS是什么

  CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。
  整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。
因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

### 两种请求

  浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。
  只要同时满足以下两大条件，就属于简单请求。
  >1) 请求方法是以下三种方法之一：
  >HEAD
  >GET
  >POST
  >（2）HTTP的头信息不超出以下几种字段：
  >Accept
  >Accept-Language
  >Content-Language
  >Last-Event-ID
  >Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

凡是不同时满足上面两个条件，就属于非简单请求。
这两种请求，发送请求中的origin和回应请求中的Access-Control-Allow-Origin都是必须包含的字段。

#### 简单请求 

  对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。
  Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。
  如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个Access-Control-开头的头信息字段。
  如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。
请求过程如下图
![](https://raw.githubusercontent.com/gl09025/image_respository/master/2017%E5%B9%B47%E6%9C%8827%E6%97%A5/%E8%B7%A8%E5%9F%9F/simple_req.png)

#### 非简单请求

  非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。
  非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
  浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。
  请求过程如下图
![](https://raw.githubusercontent.com/gl09025/image_respository/master/2017%E5%B9%B47%E6%9C%8827%E6%97%A5/%E8%B7%A8%E5%9F%9F/%E9%A2%84%E6%A3%80%E8%AF%B7%E6%B1%82.png)

#### 与JSONP比较

  与JSONP的不同在于，JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

## 题目5： 根据视频里的讲解演示三种以上跨域的解决方式 ，写成博客

[跨域](https://github.com/gl09025/mission-start/issues/1)