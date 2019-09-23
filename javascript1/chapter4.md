# 引用类型

引用类型的值（对象）是引用类型的一个实例。

对象是某个特定引用类型的实例。新对象是使用new操作符后跟一个构造函数来创建的。构造函数本身就是一个函数，只不过该函数是出于创建新对象的目的而定义的。

### Object 类型

* 创建Object实例的方式有两种：第一种是使用new操作符后跟Object构造函数；另一种方式是使用对象字面量表示法。
* 访问对象属性时可以使用点表示法，也可以使用方括号表示法。在使用方括号语法时，应该将要访问的属性以字符串的形式放在方括号中。

### Array 类型

* ECMAScript数组的每一项可以保存任何类型的数据。ECMAScript数组的大小是可以动态调整的，即可以随时随着数据的添加自动增长以容纳新增数据。
* 创建数组的基本方式有两种：第一种是使用Array构造函数；第二种是事哟过数组字面量表示法。
* 在读取和设置数组的值时，要使用方括号并提供相应值的基于0的数字索引。数组最后一项的索引始终是length-1。

#### 检测数组

```javascript
if (Array.isArray(value)) {

}
```

#### 转换方法

* toString\(\)、valueOf\(\)方法会返回相同的值，即由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串。
* join\(\)方法接收一个参数，即用作分隔符的字符串，饭后返回包含所有数组项的字符串。如果数组中某一项的值是null或undefined，那么该值在返回的结果中以空字符串表示。

```javascript
var arr = [1, 2, 3, 4, 5, 6];
arr;
[1, 2, 3, 4, 5, 6]
arr.join('-');
"1-2-3-4-5-6"
```

#### 栈方法与队列方法

* 栈是一种LIFO（Last-In-First-Out，后进先出）的数据结构，最新添加的项最早被移除。栈中项的插入或移除只发生在顶部。
* `push()`、`pop()`可以实现类似栈的行为：push\(\)方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。pop\(\)方法则从数组末尾移除最后一项，减少数组的length值，然后返回移除的项。
* 队列数据结构的访问规则是（First-In-First-Out，先进先出）。队列在列表的末端添加项，从列表的前端移除项。
* 结合使用`shift()`、`push()`可以像使用队列一样使用数组：shift\(\)能够移除数组中的第一个项并返回该项，同时将数组长度减1。
* `unshift()`与shift\(\)相反：它能在数组前端添加任意个项并返回新数组的长度。

> push\(\)在数组末尾添加任意个项；unshift\(\)在数组前端添加任意个项；pop\(\)移除数组的最后一项；shift\(\)移除数组的第一个项。

#### 重排序方法

* `reverse()`：反转数组项的顺序。
* `sort()`：默认按生序排列数组项，即最小的值位于最前面，最大的值排在最后面。sort\(\)函数可以接收一个比较函数作为参数。

#### 操作方法

* `concat()`：创建当前数组的一个副本，将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。
* `slice()`：接收一或两个参数，即要返回项的起始和结束位置。
* `splice()`：万能方法

#### 位置方法

* `indexOf()`：从数组的开头（位置0）开始向后查找，并返回该项在数组中的位置，若没找到则返回-1。
* `lastIndexOf()`：从数组的末尾开始向前查找该项，并返回该项在数组中的位置，若没找到则返回-1。

这两个方法都接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。采用的是全等操作符。

```javascript
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

console.log(arr.indexOf(3));
// 2

console.log(arr.lastIndexOf(3));
// 6

console.log(arr.lastIndexOf(32));
// -1

console.log(arr.indexOf(3, 2));
// 2

console.log(arr.indexOf(3, 3));
// 6

console.log(arr.lastIndexOf(3, 2));
// 2

console.log(arr.lastIndexOf(3));
// 6，和下面的例子相等

console.log(arr.lastIndexOf(3, arr.length-1));
// 6
```

#### 迭代方法

以下每个方法都接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用域对象——影响this的值。

传入这些方法中的函数会接收三个参数：数组项的值、该项在数组中的位置和数组对象本身。

* `every()`：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。

```javascript
var arr = [1, 2, 3, 4, 5];
var result = arr.every(function(item, index, array){
    return item == 5;
});

result
// false
```

* `filter()`：对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。

```javascript
var arr = [1, 2, 3, 4, 5];
var result = arr.filter(function(item, index, array){
    return item > 2;
});

result
// [3, 4, 5]
```

* `forEach()`：对数组中的每一项运行给定函数，本质上与使用for循环迭代数组一样。这个方法没有返回值。

```javascript
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(item, index, array){
    alert(item);
});
```

* `map()`：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

```javascript
var arr = [1, 2, 3, 4, 5];
var result = arr.map(function(item, index, array){
    return item * 2;
});

console.log(result);
// [2, 4, 6, 8, 10]
```

* `some()`：对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。

```javascript
var arr = [1, 2, 3, 4, 5];
var result = arr.some(function(item, index, array){
    return item == 5;
});

result
// true
```

> 以上方法都不会修改数组中包含的值。

#### 缩小方法

以下两个方法都会迭代数组的所有项，然后构建一个最终返回的值。

这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为缩小基础的初始值。

传给reduce\(\)和reduceRight\(\)的函数接收4哥参数：前一个值、当前值、项的索引和数组对象。

* `reduce()`：从数组的第一项开始，逐个遍历到最后。

```javascript
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(prev, cur, index, array){
    return prev - cur;
});

result
// -13
```

* `reduceRight()`：从数组的最后一项开始，向前遍历到第一项。

```javascript
var arr = [1, 2, 3, 4, 5];
var result = arr.reduceRight(function(prev, cur, index, array){
    return prev - cur;
});

result
// -5
```

### Date 类型

Date类型使用自UTC 1970年1月1日午夜零时开始经过的毫秒数来保存日期。

### RegExp 类型

### Function 类型

函数实际上是对象，每个函数都是Function类型的实例，与其它引用类型一样具有属性和方法。函数名是一个指向函数对象的指针，不会与某个对象绑定。

#### 函数声明与函数表达式

解析器在向执行环境中加载数据时，对函数声明和函数表达式并非一视同仁。解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行。

#### 作为值的函数

因为函数名本身就是变量，所以函数也可以作为值来使用。也就是说，不仅可以像传递参数一样把一个函数传递给另一个函数，而且可以将一个函数作为另一个函数的结果返回。

```javascript
function funA(funB, arg){
  return funB(arg)
}

function funC(num){
  return num + 10;
}

var result = funA(funC, 8);
result
// 18

function funD(str){
  return str + ' Domy';
}

var result = funA(funD, 'Hello,');
result
// "Hello, Domy"
```

> 要访问函数的指针而不执行函数，必须去掉函数名后面的圆括号。

#### 函数内部的属性

##### arguments

类数组对象，包含着传入函数中的所有参数。

arguments.callee == functionName

> 当函数在严格模式下运行时，访问arguments.callee会导致错误。

##### this

this引用的是函数据以执行的环境对象——或者也可以说是this值（当在网页的全局作用域中调用函数时，this对象引用的就是window）。

#### 函数属性和方法

每个函数都包含两个属性：length和prototype。

length属性表示函数希望接收的命名参数的个数：

```javascript
(function funA() {
  console.log(funA.length)
})()
// 0

(function funA(a, b) {
  console.log(funA.length)
})()
// 2

(function funA(a, b, c) {
  console.log(funA.length)
})()
// 3
```

对于ECMAScript中的引用类型而言，prototype是保存它们所有实例方法的真正所在。诸如toString\(\)和valueOf\(\)等方法实际上都保存在prototype名下，只不过是通过各自对象的实例访问罢了。

> prototype属性是不可枚举的，因此使用for-in无法实现。

每个函数都包含两个非继承而来的方法：apply\(\)和call\(\)。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。

```javascript
function sum(num1, num2){
  return num1 + num2;
}

function applySum1(num1, num2){
  return sum.apply(this, arguments);
}

applySum1(5, 10);
// 15

function applySum2(num1, num2){
  return sum.apply(this, [num1, num2]);
}

applySum2(5, 10);
// 15
```

```javascript
function sum(num1, num2){
  return num1 + num2;
}

function callSum(num1, num2){
  return sum.call(this, num1, num2);
}

callSum(5, 10);
// 15
```

```javascript
function sum(){
  return this.num1 + this.num2;
}

function callSum(){
  return sum.call({num1:2, num2:3});
}

callSum();
// 15
```

扩充函数赖以运行的作用域

```javascript
var color = 'red';
var obj = {color: 'blue'};

function sayColor(){
  return this.color;
}

sayColor();
// "red"

sayColor.call(this);
// "red"

sayColor.call(window);
// "red"

sayColor.call(obj);
// "blue"
```

bing\(\)：创建一个函数的实例，其this值会被绑定到传给bing\(\)函数的值。

### 基本包装类型

#### Boolean\(\)

Boolean类型是与布尔值对应的引用类型。不建议使用。

#### Number\(\)

Number是与数字值对应的引用类型，除了继承的方法之外，还提供了一些用于将数值格式化为字符串的方法：

* `toFixed()`：按照指定的小数位返回数值的字符串表示。
* `toExponential()`：该方法返回以指数表示法（也称e表示法）表示的数值的字符串形式。
* `toPrecision()`：可能返回固定大小（fixed）格式，也可能返回指数（exponential）格式；具体规则是看哪种格式最合适。

#### String\(\)

String类型是字符串的对象包装类型。String类型提供了很多方法，用于辅助完成对ECMAScript中字符串的解析和操作。

##### 字符方法

##### 字符串操作方法

> 引用类型和基本包装类型的主要区别就是对象的生存期。使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法。

### 单体内置对象

#### Global\(\)

#### Math\(\)

### 小结

对象在JavaScript中被称为引用类型的值而且有一些内置的引用类型可以用来创建特定的对象：

* Object是一个基础类型，其它所有类型都从Object继承了基本的行为；
* Array类型是一组值的有序列表，同时还提供了操作和转换这些值的功能；
* Date类型提供了有关日期和时间的信息，包括当前日期和时间以及相关的计算功能；
* RedExp类型是ECMAScript支持正则表达式的一个接口，提供了最基本的和一些高级的正则表达式功能。

函数实际上是Function类型的实例，因此函数也是对象；由于函数也是对象，所以函数也拥有方法，可以用来增强其行为。

三种基本包装类型分别是：Boolean\(\)、Number\(\)和String\(\)。它们的共同特征是：

* 每个包装类型都映射到同名的基本类型；
* 在读取模式下访问基本类型值时，就会创建对应的基本包装类型的一个对象，从而方便数据操作；
* 操作基本类型值的语句一经执行完毕，就会里脊销毁新创建的包装对象。

在所有代码执行之前，作用域中就已经存在两个内置对象：Global\(\)和Math\(\)。Web浏览器中window对象承担了Global对象的角色。全局变量和函数都是Global对象的属性。Math对象提供了很多属性和方法，用于辅助完成一些复杂的数学计算任务。

