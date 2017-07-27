1. CSS和JS在网页中的放置顺序是怎样的？
  css放在head标签中。如果将css样式放在底部的话会造成浏览器先加载html然后再渲染css，会造成闪屏现象。
  js放在`</body>` 之前。如果将js放在页面前面，会阻塞页面的加载，会造成页面白屏。

2. 解释白屏和FOUC
  浏览器在处理HTML和CSS的方式有些不同。一类是会等HTML和CSS都加载完了，再展示到页面上，等待时间就是白屏。一类是先展示HTML，等CSS加载完之后再展示样式，出现FOUC（无样式内容闪烁）。还有一些原因会造成白屏和FOUC。
  
 - 白屏：当我们将css放在底部或者使用@import标签会造成白屏。脚本放在页面顶部会阻塞页面的加载，导致白屏。例如chrome浏览器会等css和js都加载解析完之后再展示页面，会产生白屏。

 - FOUC：当把CSS放在底部,对于IE浏览器,在某些场景下(点击链接,输入URL,使用书签进入等),会出现 FOUC 现象。firfox会一直表现出FOUC，因为firfox首先加载html，等CSS加载后再重绘一次。

3. async和defer的作用是什么？有什么区别
  让脚本能和HTML同时下载。
  async会加载完后就执行，不会按照顺序执行。
  defer会在HTML加载结束后再执行，并且会按照声明的顺序来执行。

4. 简述网页的渲染机制
 - 解析 HTML 标签, 构建 DOM 树
 - 解析 CSS 标签, 构建 CSSOM 树
 - 把 DOM 和 CSSOM 组合成 渲染树 (render tree)
 - 在渲染树的基础上进行布局, 计算每个节点的几何结构
 - 把每个节点绘制到屏幕上 (painting)