# 基本概念

* 区分大小写，ECMAScript中的一切（变量、函数名和操作符）都区分大小写。
* 标识符，指变量、函数、属性的名字，或者函数的参数。标识符可以是按照下列格式规则组合起来的一或多个字符：
* 第一个字符必须是一个字母、下划线（\_）或一个美元符号（$）；其他字符可以是字母、下划线、美元符号或数字。
* 不能把关键字、保留字、true、false和null用作标识符。
* 严格模式，ECMAScript5引入了严格模式（strict mode）的概念。要在整个脚本中启用严格模式，可以在顶部添加代码：“use strict”;。在函数内部的上方包含这条编译指示，也可以指定函数在严格模式下执行。
  ```javascript
  function doSomething(){
    'use strict';
    // 函数体
  }
  ```
* 语句，ECMAScript中语句以一个分号结尾；如果省略分号，则由解析器确定语句的结尾。在控制语句中使用代码块可以让编码意图更加清晰，而且也能降低修改代码时出错的几率。
* 变量，ECMAScript的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。换句话说，每个变量仅仅是一个用于保存值的占位符而已。使用var操作符定义的变量将成为定义该变量的作用域中的局部变量。也就是说，如果在函数中使用var定义一个变量，那么这个变量在函数退出后会被销毁。
* ECMAScript中有5种简单数据类型（也称为基本数据类型）：Undefined、Null、Boolean、Number和String。还有一种复杂数据类型－Object。
* Undefined：在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined。
* Null：表示一个空对象指针。如果定义的变量准备在将来用于保存对象，就应该将该变量初始化为null。

### 布尔操作符

* 非（NOT）、与（AND）和或（OR）。
* 逻辑非操作符由一个叹号（!）表示，可以用于ECMAScript中的任何值。
* 逻辑与操作符由两个和号（&&）表示，有两个操作数。逻辑与操作属于短路操作，即如果第一个操作数能够决定结果，那么就不会对第二个操作数求值。如果第一个操作数是false，则无论第二个操作数是什么值，结果都不再可能是true了。
* 逻辑或操作符由两个竖线（\|\|）表示，有两个操作数。逻辑或也属于短路操作，也就是说如果第一个操作数的求值结果为true，就不会对第二个操作数求值了。

### 乘性操作符

* 乘法（\*）、除法（/）和求模（%）。

### 关系操作符

* 小于（&lt;）、大于（&gt;）、小于等于（&lt;=）和大于等于（&gt;=）。
* 在比较字符串时，实际比较的是两个字符串中对应位置的每个自负的字符编码值。经过一番比较之后，再返回一个布尔值。

### 相等操作符

* 相等（==）和不想等（!=）——先转换再比较。
* 全等（===）和不全等（!==）——仅比较不转换。

### 赋值操作符

* 乘／赋值（\*=）
* 除／赋值（/=）
* 模／赋值（%=）
* 加／赋值（+=）
* 减／赋值（-=）
* 左移／赋值（&lt;&lt;=）
* 有符号右移／赋值（&gt;&gt;=）
* 无符号右移／赋值（&gt;&gt;&gt;=）

### Boolean布尔值

* true、false。
* 要将一个值转换为其对应的boolean值，可以调用转型函数Boolean\(\)。
* false、0、空字符串\(''\)、NaN、null 和 undefined 被转换为 false，其他值被转换为 true。
* 各种数据类型及其对应的转换规则：

| 数据类型 | 转换为true的值 | 转换为false的值 |
| --- | :---: | ---: |
| Boolean | true | false |
| String | 任何非空字符串 | 空字符串 |
| Number | 任何非零数值 | 0和NaN |
| Object | 任何对象 | null |

### Number数值

* 使用IEEE754格式来表示整数和浮点数（双精度数值）。
* 十六进制字面值的前两位必须是0x，后跟任何十六进制数字（0～9及A～F）。其中，字母A～F可以大写，也可以小写。在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。
* 用e表示法表示的数值等于e前面的数值乘以10的指数次幂。
* 最小数值保存在Number.MIN\_VALUE中，最大数值保存在Number.MAX\_VALUE中，超过这个范围的值自动转换为Infinity。要想确定一个数值是不是有穷的，可以用isFinite\(\)函数。

```javascript
if (Number.isFinite(value)) {

}
```

* NaN：非数值（Not a Number）。NaN与任何值都不相等，包括NaN本身。用isNaN\(\)函数判断。在基于对象调用isNaN\(\)函数时，会首先调用函数的valueOf\(\)，然后确定该方法返回的值是否可以转换为数值。如果不能，则基于这个返回值再调用toString\(\)方法，再测试返回值。这个过程是ECMAScript中内置函数和操作符的一般执行流程。

```javascript
if (Number.isNaN(value)) {

}
```

* Number\(\)：转型函数，可以用于任何数据类型。Number\(\)转换空字符串返回0。一元加操作符的操作与Number\(\)函数相同。
* 把非数值转换为数值：Number\(\)、parseInt\(\)、parseFloat\(\)。
* parseInt\(\)、parseFloat\(\)：用于把字符串转换成数值。parseInt\(\)转换空字符串返回NaN。parseInt\(‘’, 10\)。parseFloat\(\)只解释十进制值。

```javascript
parseInt('123domy');
// 123

parseInt('');
// NaN

parseInt('0xA');
// 10

parseInt(22.5);
// 22

parseInt('28');
// 28

parseInt('0xF');
// 15

parseInt('10', 2);
// 2

parseInt('10', 10);
// 10

parseInt('10', 16);
// 16
```

### String字符串

* toUpperCase\(\)：字符串变为大写。

```javascript
var str = 'Hello';
str.toUpperCase();
// "HELLO"
```

* toLowerCase\(\)：字符串变为小写。

```javascript
var str = 'Hello';
str.toLowerCase();
// "hello"
```

* indexOf\(\)：搜索指定字符串出现的位置。

```javascript

```

* substring\(\)：返回指定索引区间的子串。

```javascript

```

* 转换为字符串：toString\(\)。数值、布尔值、对象和字符串值都有toString\(\)方法，但null和undefined没有这个方法。在调用数值的toString\(\)方法时，可以传递一个参数，输出数值的基数，toString\(10\)。
* String\(\)：转型函数，将任何类型的值转换为字符串。
* 要把某个值转换为字符串，可以使用加号操作符，把它与一个字符串（''）加起来。

| 字面量 | 含义 |
| --- | :---: |
| \n | 换行 |
| \b | 空格 |
| \r | 回车 |
| \ | 斜杠 \ |
| \\ | 斜杠 \ |

### Array数组

* indexOf\(\)：搜索一个指定元素的位置
* slice\(\)：对应String的substring\(\)版本，它截取Array的部分元素，然后返回一个新的Array
* push\(\)、unshift\(\)：push\(\)向Array的末尾添加若干元素，unshift\(\)向Array的开头添加若干元素。
* pop\(\)、shift\(\)：pop\(\)则把Array的最后一个元素删除掉，shift\(\)则把Array的第一个元素删除掉。
* reverse\(\)：把Array的元素顺序进行反转
* splice\(\)：可以实现在指定位置添加或删除元素
* join\(\)：把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
* concat\(\)：把当前的Array和另一个Array连接起来，并返回一个新的Array

### Object对象

由于ECMAScript中Object是所有对象的基础，因此所有对象都具有以下基本的属性和方法：

* Object.constructor：保存着用于创建当前对象的函数。
* Object.hasOwnProperty\(\)：判断一个属性是否是该对象自身拥有的，而不是继承得到的。
* Object.isPrototypeOf\(\)：用于检查传入的对象是否是另一个对象的原型。
* Object.propertyIsEnumerable\(\)：用于检查给定的属性是否能够用for-in语句来枚举。
* Object.toLocaleString\(\)：返回对象的字符串表示，该字符串与执行环境的地区对应。
* Object.toString\(\)：返回对象的字符串表示。
* Object.valueOf\(\)：返回对象的字符串、数值或布尔值表示，通常与toString\(\)方法的返回值相同。

### 函数

#### 理解参数 arguments

ECMAScript中的参数在内部是用一个数组来表示的。在函数体内可以通过arguments对象来访问这个参数数组，从而获取传递给函数的每一个参数。使用arguments.length属性来确定传递进来多少个参数。命名的参数只提供便利，但不是必须。ECMAScript中所有参数传递的都是值，不可能通过引用传递参数。

### 语句

```javascript
if (true) {

} else {

}
```

```javascript
for (var i = 0; i < array.length; i++) {
  array[i]
}
```

```javascript
while (true) {

}
```

```javascript
do {

} while (true);
```

```javascript
for (var variable in object) {
  if (object.hasOwnProperty(variable)) {

  }
}
```

```javascript
for (variable of iterable) {

}
```

```javascript
switch (expression) {
  case expression:

    break;
  default:

}
```

> switch语句在比较值时使用的是全等操作符，因此不会发生类型转换（例如：字符串’10'不等于数值10）。

Map：初始化Map需要一个二维数组，或者直接初始化一个空Map。Map具有以下方法：

* Map.set\(key, value\)
* Map.has\(key\)
* Map.get\(key\)
* Map.delete\(key\)

Set：Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：

* Set.add\(key\)
* Set.delete\(key\)



