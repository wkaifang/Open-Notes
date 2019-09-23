# Ajax和Comet

## HTTP头部信息

默认情况下，在发送Ajax请求的同时，还会发送下列头部信息：

* Accept：浏览器能够处理的内容类型。
* Accept-Charset：浏览器能够显示的字符集。
* Accept-Encoding：浏览器能够处理的压缩编码。
* Accept-Language：浏览器当前设置的语言。
* Connection：浏览器与服务器之间连接的类型。
* Cookie：当前页面设置的任何Cookie。
* Host：发出请求的页面所在的域。
* Referer：发出请求的页面的URI。
* User-Agent：浏览器的用户代理字符串。

## 小结

Ajax是无需刷新页面就能够从服务器取得数据的一中方法。负责Ajax运作的核心对象是XMLHttpRequest（XHR）对象。

同源策略是对XHR的一个主要约束，它为通信设置了“相同的域、相同的端口、相同的协议”这一限制。试图访问上述限制之外的资源，都会引发安全错误，除非采用被认可的跨域解决方案。

* CORS
* JSONP


