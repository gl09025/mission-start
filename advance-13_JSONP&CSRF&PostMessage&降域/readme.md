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

## 题目4： CORS是什么

客户端在使用XMLHttpRequest来跨域访问时会在请求中带一个origin字段。
服务器在检测到请求头重包含origin时也增加一个 HTTP 首部字段`Access-Control-Allow-Origin` ，声明哪些源站有权限访问哪些资源。

## 题目5： 根据视频里的讲解演示三种以上跨域的解决方式 ，写成博客

[跨域](https://github.com/gl09025/mission-start/issues/1)