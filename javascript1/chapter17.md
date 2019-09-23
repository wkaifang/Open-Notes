# 离线应用和客户端存储

## 离线检测

```javascript
if (navigator.onLine) {
  // 正常工作
} else {
  // 执行离线状态时的任务
}
```

## 应用缓存

## 数据存储

### Web存储机制

Web Storage的目的是克服由cookie带来的一些限制，当数据需要被严格控制在客户端上时，无须持续地将数据发回服务器。Web Storage的两个主要目标是：

* 提供一种在cookie之外存储会话数据的途径；
* 提供一种存储大量可以跨会话存在的数据的机制。

最初的Web Storage规范包含了两种对象的定义：sessionStorage和globalStorage。这两个对象在支持的浏览器中都是以window对象属性的形式存在的。

## 小结

Web Storage定义了两种用于存储数据的对象：sessionStorage和localStorage。前者严格用于在一个浏览器会话中存储数据，因为数据在浏览器关闭后会立即删除；后者用于跨会话持久化数据并遵循跨域安全策略。
