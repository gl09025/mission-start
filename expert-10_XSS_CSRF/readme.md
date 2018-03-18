## XSS 是什么？如何防范

XSS(Cross Site Scripting)
跨站脚本攻击，它指的是恶意攻击者往Web页面里插入恶意html代码，当用户浏览该页之时，嵌入其中Web里面的html代码会被执行，从而达到恶意攻击用户的特殊目的。
由于有的服务器并没有对用户的输入进行安全方面的验证，攻击者就可以很容易地通过正常的输入手段，夹带进一些恶意的HTML脚本代码。当受害者的浏览器访问目标服务器上被注入恶意脚本的页面后，由于它对目标服务器的信任，这段恶意脚本的执行不会受到什么阻碍。而此时，攻击者的目的就已经达到了。

### 举例说明

假设我们有一个评论系统。
用户 A 提交评论「小谷你好」到服务器，然后用户 B 来访问网站，看到了 A 的评论「小谷你好」，这里没有 XSS。

恶意用户 H 提交评论`<script>console.log(document.cookie)</script>`，然后用户 B 来访问网站，这段脚本在 B 的浏览器直接执行，恶意用户 H 的脚本就可以任意操作 B 的 cookie，而 B 对此毫无察觉。有了 cookie，恶意用户 H 就可以伪造 B 的登录信息，随意访问 B 的隐私了。而 B 始终被蒙在鼓里。

### 防范

1. 后台模板问题

```javascript
<p>
评论内容：<?php echo $content; ?>
</p>
```

$content 的内容，没有经过任何过滤，原样输出。

**解决办法**只需要后台输出的时候，将可疑的符号 < 符号变成 &lt; （HTML实体）就行。

2. 前端代码问题

$p.html(content)
或者

$p = $('<p>'+ content +'</p>')
content 内容又被原样输出了。
**解决办法**就是不要自己拼 HTML，尽量使用 text 方法。如果一定要使用 HTML，就把可疑符号变成 HTML 实体。

## CSRF是什么？如何防范

CSRF(Cross Site Request Forgery)
一种劫持受信任用户向服务器发送非预期请求的攻击方式。例如，这些非预期请求可能在url后加入一些恶意的参数，从而达到攻击者的目的。

### 举例说明

一个网站的送礼物接口是：
`https://xxxx.com/gift/send?target=someone&giftId=ab231`
只要用户在登录状态下请求这个地址，就能给名为someone的用户赠送礼品ab231。

- 初步的攻击方法：攻击者利用办法让用户访问一个伪造的网页来执行脚本。但诱导用户点击效果并不明显，所以有了更经一步的攻击方法。
- 进一步攻击：比如在评论区可以上传外链图片，「如果把这个 url 作为图片填进去，上传后会在评论区创建一个img 标签，src 对应的就是这个地址。当用户打开页面后这个 img 就会自动加载图片也就是发送这个请求，这样一来凡是打开这个页面的人不论是不是点击这个链接都会给赠送礼物」

再比如攻击者找到该网站的删除礼物赠送记录的地址为：
`https://xxxx.com/gift/deleteRecord`
 接口类型为POST，请求参数为 { giftId:"ab231"}。 用户无法通过点击一个链接在不知情的情况下发送 POST 请求，攻击者可能会伪造一个页面来实现请求链接：

 ```javascript
<body>
哈哈，给你开了个玩笑，莫生气~
<iframe name="hiddenIframe"  style="display:none"></iframe>
<form action="https://xxxx.com/gift/deleteRecord" id="form" method="post" style="visibility:hidden" target="hiddenIframe">
    <input type="text" name="giftId" value="ab231">
</form>
<script>
    document.getElementById('form').submit();
    location.href = "http://xxxx.com";
</script>
</body>
 ```

### 原理

 攻击者构造网站后台某个功能接口的请求地址，诱导用户去点击或者用特殊方法让该请求地址自动加载。用户在登录状态下这个请求被服务端接收后会被误以为是用户合法的操作。对于 GET 形式的接口地址可轻易被攻击，对于 POST 形式的接口地址也不是百分百安全，攻击者可诱导用户进入带 Form 表单可用POST方式提交参数的页面。

### 防范

#### anti-csrf-token的方案

1.服务端在收到路由请求时，生成一个随机数，在渲染请求页面时把随机数埋入页面（一般埋入 form 表单内，`<input type="hidden" name="_csrf_token" value="xxxx">`）
2.服务端设置setCookie，把该随机数作为cookie或者session种入用户浏览器
3.当用户发送 GET 或者 POST 请求时带上_csrf_token参数（对于 Form 表单直接提交即可，因为会自动把当前表单内所有的 input 提交给后台，包括_csrf_token）
4.后台在接受到请求后解析请求的cookie获取_csrf_token的值，然后和用户请求提交的_csrf_token做个比较，如果相等表示请求是合法的。

这个方案还是有以下两个缺点:

1.Token 保存在 Session 中。假如 Token 保存在 Cookie 中，用户浏览器开了很多页面。在一些页面 Token 被使用消耗掉后新的Token 会被重新种入，但那些老的 Tab 页面对应的 HTML 里还是老 Token。这会让用户觉得为啥几分钟前打开的页面不能正常提交？
2.尽量少用 GET。假如攻击者在我们的网站上传了一张图片，用户在加载图片的时候实际上是向攻击者的服务器发送了请求，这个请求会带有referer表示当前图片所在的页面的 url。 而如果使用 GET 方式接口的话这个 URL 就形如：`https://xxxx.com/gift?giftId=aabbcc&_csrf_token=xxxxx`，那相当于攻击者就获取了_csrf_token，短时间内可以使用这个 token 来操作其他 GET 接口。