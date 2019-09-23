# 表单脚本

## 表单的基础知识

在HTML中，表单是由```<form>```元素来表示的，而在JavaScript中，表单对应的则是HTMLFormElement类型。HTMLFormElement继承了HTMLElement，因而与其他HTML元素具有相同的默认属性。不过，HTMLFormElement也有它自己独有的属性和方法：

* acceptCharset：服务器能够处理的字符集；等价于HTML中accept-charset的特性。
* action：接受请求的URL；等价于HTML中的action特性。
* elements：表单中所有控件的集合（HTMLCollection）。
* enctype：请求的编码类型；等价于HTML中的enctype特性。
* length：表单中控件的数量。
* method：要发送的HTTP请求类型，通常是“get”或“post”；等价于HTML中的method特性。
* name：表单的名称；等价于HTML中的name特性。
* reset()：将所有表单域重置为默认值。
* submit()：提交表单。
* target：用于发送请求和接收响应的窗口名称；等价于HTML中的target特性。


通过document.forms可以取得页面中所有的表单，在这个集合中，可以通过数值索引或name值来取得特定的表单。

### 提交表单

### 重置表单

### 表单字段

