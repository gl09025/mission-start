## 1.OSI 七层模型指什么


一个试图使各种计算机在世界范围内互连为网络的标准框架

![](https://i.loli.net/2018/03/04/5a9bb2c5e8015.jpg)

## 2.HTTP 的工作原理是什么？


![](https://i.loli.net/2018/03/04/5a9bb43e2b41d.png)


1.首先客户机与服务器需要建立连接。

2.建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是MIME信息包括请求修饰符、客户机信息和可能的内容。

3.服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。

4.客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。

如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。

## 3.URI 的格式是什么？常见的协议有哪些

![URI.png](https://i.loli.net/2018/03/04/5a9bb4e1b4cdd.png)

常见的协议：
`http`
`ftp`

## 4.HTTP 协议有几种和服务器交互的方法

- GET
    GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.
- HEAD
    HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体.
- POST
    POST方法用于将实体提交到指定的资源，通常导致状态或服务器上的副作用的更改. 
- PUT
    PUT方法用请求有效载荷替换目标资源的所有当前表示。
- DELETE
    DELETE方法删除指定的资源。
- CONNECT
    CONNECT方法建立一个到由目标资源标识的服务器的隧道。
- OPTIONS
    OPTIONS方法用于描述目标资源的通信选项。
- TRACE
    TRACE方法沿着到目标资源的路径执行一个消息环回测试。
- PATCH
    PATCH方法用于对资源应用部分修改。

## 5.状态码200，301， 304，403,404,500，503分别代表什么意思

|状态码|状态码简述|说明|
| --- | --- | --- |
|200|OK |请求成功|
|301|Moved Permanently| 被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一|
|304|Not Modified |如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。|
|403|Forbidden|服务器已经理解请求，但是拒绝执行它。|
|404|Not Found|请求失败，请求所希望得到的资源未被在服务器上发现。|
|500|Internal Server Error|服务器遇到了不知道如何处理的情况。|
|503|Service Unavailable|服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个 Retry-After头。|

## 6.报文有哪几部分组成？

1.对报文进行描述的起始行 —— start line
2.包含属性的首部块 —— headers
3.空行 -- CR+LF
3.可选的包含数据的主体部分 —— body

![请求示例（上）和响应示例（下）](https://i.loli.net/2018/03/04/5a9bb92cdb488.png)

## 7.请求头的格式和作用是什么？给个范例截图说明

包含用于请求的方法，请求 URI 和 HTTP 版本。

![request-baidu.png](https://i.loli.net/2018/03/04/5a9bbabf01608.png)

上图是向百度发送请求的示例，第一行是请求头

GET 这个字段为请求方法
/ 这个表示向服务器请求的路径
HTTP/1.1 这个代表了使用的HTTP协议版本

## 8.首部的格式和作用是什么？给个范例截图说明

包含表示请求和响应的各种条件和属性的各类首部。
首部主要有通用首部，请求首部和响应首部。

1.通用首部

|首部|描述|
|---|---|
|Connection|客户端和服务器是否保持连接|
|Date|日期，报文创建时间|
|Update|给出了发送端可能想要升级使用新版本或协议|
|Via|显示了报文经过的中间节点（代理、网关）|
|Trailer|如果报文采用分块传输编码方式，可以利用这个首部列出位于报文trailer部分的首部集合|
|Trailer-Encoding|告诉接收端对报文采用什么编码格式|
|Cache-Control|随报文传送缓存指示|
|Pragma|早期的随报文传送指示方式|

2.响应首部

|首部|描述|
|---|---|
|Age|响应持续时间|
|Server|服务器应用软件名称和版本|
|Allow|列出了可用的请求方法|
|Location|告诉客户端实在在哪里，用于定向|
|Content-Base|解析主体中相对URL的基础URL|
|Content-Encoding|主体编码格式|
|Content-Language|解析主体时适用的语言|
|Content-Length|主体的长度或尺寸|
|Content-Location|资源实际位置|
|Content-MD5|主体的MD5校验和|
|Content-Range|在整个资源中此实体部分的字节范围|
|Content-Type|主体的MIME|
|ETag|主体的实体标记|
|Expires|过期时间|
|Last-Modified|实体最后一次修改时间|

3.请求首部

|首部|描述|
|---|---|
|Client-IP|客户端IP|
|From|客户端邮件地址|
|Host|接收请求的服务器的主机名和端口号|
|Referer|提供了包含当前请求URI的文档的URL，告诉服务器自己来源|
|User—Agent|发起请求的客户端应用程序|
|Accept|告诉服务器能够发送那些媒体类型|
|Accept-Charset|告诉服务器能够发送那些字符集|
|Accept-Encoding|告诉服务器能够发送那些编码|
|Accept-Language|告诉服务器能够发送那些语言|
|Expect|允许客户端列出请求所要求的服务器行为|
|If-Match|如果ETag和文档当前ETag匹配，就获取文档|
|If-Modified-Since|除非在某个指定日期之后修改过，否则限制这个请求|
|If-None-Match|如果ETag和当前文档ETag不符合，获取资源|
|If-Range|允许对文档否个范围内的条件请求|
|If-Unmodified-Since|在某个指定日期之后没有修改过，否则现在请求|
|Cookie|客户端字符串|

图为向百度的请求首部。

![request-headers.png](https://i.loli.net/2018/03/04/5a9bbc5f29374.png)


上图字段解释

|||
|---|---|
|Host|客户端请求的地址|
|Connection|客户端和服务器是否保持连接|
|Upgrade-Insecure-Requests|用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应，并且它可以成功处理 upgrade-insecure-requests CSP 指令。|
|User—Agent|发起请求的客户端应用程序|
|Accept|告诉服务器能够发送那些媒体类型|
|Accept-Encoding|告诉服务器能够发送那些编码|
|Accept-Language|告诉服务器能够发送那些语言|
|Cookie|客户端字符串|

## 9.主体的作用是什么？给个范例

主体是一个可选的数据块，可能是文本、二进制或者空。

![reponse-body.png](https://i.loli.net/2018/03/04/5a9bc0a38669b.png)

上图中是请求百度的响应，空行下面的内容就是响应的主体，主要是向服务器请求的资源，然后服务器返回的内容。

## 10.简述浏览器缓存是如何控制的

当请求资源时，服务器端会在响应首部添加字段，来让浏览器判断是否对资源进行缓存。

### 强制缓存

1.Expris
`Expires: Wed, 21 Oct 2015 07:28:00 GMT`
value为过期的时间。
这样可以控制缓存，但方式太单一，而且时间格式也十分容易写错。所以有了`Cache-Control`

2.Cache-Control
`Cache-Control: max-age=300；`
这个value表示资源缓存300秒,如果是在300秒以内发起的请求则直接使用缓存(200, from xx cache)，否则重新发起网络请求(200)。

下面是Cache-Control常见的几个值：

- Public表示响应可被任何中间节点缓存，如 Browser <-- proxy1 <-- proxy2 <-- Server，中间的proxy可以缓存资源，比如下次再请求同一资源proxy1直接把自己缓存的东西给 Browser 而不再向proxy2要。
- Private表示中间节点不允许缓存，对于Browser <-- proxy1 <-- proxy2 <-- Server，proxy 会老老实实把Server 返回的数据发送给proxy1,自己不缓存任何数据。当下次Browser再次请求时proxy会做好请求转发而不是自作主张给自己缓存的数据。
- no-cache表示不使用 Cache-Control的缓存控制方式做前置验证，而是使用 Etag 或者Last-Modified字段来控制缓存
- no-store ，真正的不缓存任何东西。浏览器会直接向服务器请求原始文件，并且请求中不附带 Etag 参数(服务器认为是新请求)。
- max-age，表示当前资源的有效时间，单位为秒。

`Cache-Control`功能虽然强大，但是如果过了设定的时间再请求时，资源并没有更新的话，那么还是浪费带宽的。
所以需要下面的`Etag`字段来更新。
`Cache-Control`的优先级要大于`Expris`

### 协商缓存

`Etag`

```javascript
Cache-Control: max-age=300；
ETag:W/"e-cbxLFQW5zapn79tQwb/g6Q"
```

当浏览器请求资源时，浏览器会加一个`If-None-Match：W/"e-cbxLFQW5zapn79tQwb/g6Q"` ，服务器拿到这个值后和服务器上的Etag值进行比较，如果一样那么就不更新。

与 ETag 类似功能的是Last-Modified/If-Modified-Since。当资源过期时（max-age超时），发现资源具有Last-Modified声明，则再次向web服务器请求时带上头 If-Modified-Since，表示请求时间。web服务器收到请求后发现有头If-Modified-Since 则与被请求资源的最后修改时间进行比对。若最后修改时间较新，说明资源又被改动过，则响应整片资源内容（200）；若最后修改时间较旧，说明资源无新修改，则响应HTTP 304 ，告知浏览器继续使用所保存的cache。

