# BOM

## window对象

BOM的核心对象是window，它表示浏览器的一个实例。在浏览器环境下，window对象有双重角色，它既是通过JavaScript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象。

### 全局作用域

由于window对象同时扮演着ECMAScript中Global对象的角色，因此所有在全局作用域中声明的变量、函数都会变成window对象的属性和方法。

> 抛开全局作用域会成为window对象的属性不谈，定义全局变量与在window对象上直接定义属性还是有一点差别：全局变量不能通过delete操作符删除，而直接在window对象上定义的属性可以。尝试访问未声明的变量会抛出错误，但是通过查询window对象，可以知道某个可能未声明的变量是否存在。

#### 窗口关系及框架

* top对象始终指向最高（最外）层的框架，也就是浏览器窗口。
* parent对象始终指向当前框架的直接上层框架。
* self对象始终指向window。

> 在某些情况下，parent有可能等于top；但在没有框架的前提下，parent一定等于top（此时它们都等于window）。所有这些对象都是window对象的属性，可以通过window.top、window.parent、window.self等形式来访问。

### 窗口位置

```javascript
window.screenLeft
window.screenTop
window.screenX
window.screenY

window.moveBy(x, y)
window.moveTo(x, y)
```

### 窗口大小

```javascript
window.innerWidth
window.innerHeight
window.outerWidth
window.outerHeight

document.documentElement.clientWidth
document.documentElement.clientHeight

window.resizeTo(w, h)
window.resizeBy(w, h)
```

### 导航和打开窗口

使用window.open()方法既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。这个方法接收4个参数：要加载的URL、窗口目标、一个特性字符串以及一个表示新页面是否取代浏览器历史纪录中当前家在页面的布尔值。通常只须传递第一个参数，最后一个参数只在不打开新窗口的情况下使用。



### 超时调用和间歇调用

JavaScript是单线程语言，但它允许通过设置超时值和间歇时间值来调度代码在特定的时刻执行。前者在制订的时间过后执行代码，而后者则是每隔指定的时间就执行一次代码。

```javascript
setTimeout(function, 1000)
clearTimeout(id)

setInterval(function, 1000)
clearInterval(id)
```

### 系统对话框

```javascript
alert()
confirm()
prompt()
```

## location对象

location对象是最有用的BOM对象之一，它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。它既是window对象的属性，也是document对象的属性，window.location和document.location引用的是同一个对象。

```javascript
location.hash
// 返回URL中的hash（#号后跟零或多个字符）。
location.host
// 返回服务器名称和端口号（如果有）。
location.hostname
// 返回不带端口号的服务器名称。
location.href
// 返回当前加载页面的完整URL。
location.pathname
// 返回URL中的目录和（或）文件名。
location.port
// 返回URL中置顶的端口号。
location.protocol
// 返回页面使用的协议。
location.search
// 返回URL的查询字符串。字符串以问号开头。
```

### 位置操作

```javascript
location.assign('http://kaifang.name');
location.href = 'http://kaifang.name';

location.replace('http://kaifang.name');
// 导航到新的URL，但不会在历史纪录中生成新记录。
```

```javascript
location.reload();
// 重新加载（有可能从缓存中加载）
location.reload(true);
// 重新加载（从服务器重新加载）
```

## history对象

history对象保存着用户上网的历史记录，从窗口被打开的那一刻算起。

```javascript
history.go(-2)
// 后退两页
history.go(1)
// 前进一页

history.back()
// 后退一页

history.forward()
// 前进一页

history.length
// 保存着历史纪录的数量
```

## navigator对象

识别客户端浏览器的事实标准。

## screen对象

浏览器窗口外部的显示器的信息。











