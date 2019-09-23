# JSON

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于JavaScript的一个子集。

## JSON建构于两种结构：

* “名称/值”对的集合（A collection of name/value pairs）。在JavaScript语言中，它被理解为对象（object）。
* 值的有序列表（An ordered list of values）。在JavaScript语言中，它被理解为数组（array）。

## JSON具有以下这些形式：

对象是一个无序的“名称/值”对集合。一个对象以“{”左花括号开始，“}”右花括号结束。每个“名称”后跟一个“:”冒号；“名称/值”对之间使用“,”逗号分隔。

![Object](object.gif)

数组是值（value）的有序集合。一个数组以“[”左中括号开始，“]”右中括号结束。值之间使用“,”（逗号）分隔。

![Array](array.gif)

值（value）可以是双引号括起来的字符串（string）、数值(number)、true、false、 null、对象（object）或者数组（array）。这些结构可以嵌套。

![Value](value.gif)

空白可以加入到任何符号之间。JSON不支持变量、函数、对象实例，它只是一种表示结构化数据的格式。

> JavaScript值与JSON 字符串最大的区别在于，JSON字符串必须使用双引号（单引号会导致语法错误）。

## 解析与序列化

* 将JSON字符串解析为JavaScript值：[JSON.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)。
* 将JavaScript值序列化为JSON字符串：[JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)。