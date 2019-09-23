# 基本对象


### 引用类型

每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

JavaScript中基于原型的继承机制是动态的：对象从其原型继承属性，如果创建对象之后原型的属性发生改变，也会影响到继承这个原型的所有实例对象。

### Object.prototype

在JavaScript中，所有的对象都是基于Object；所有的对象都继承了```Object.prototype```的属性和方法，它们可以被覆盖（除了以null为原型的对象）。可以给```Object.prototype```添加新方法，从而使所有的对象都可以调用这些方法。

* ```Object.prototype.constructor```：返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，而不是一个包含函数名称的字符串。
* ```Object.prototype.hasOwnProperty()```：返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。用来判断某个对象是否含有指定的自身属性。
* ```Object.prototype.isPrototypeOf()```：返回一个布尔值，表示指定的对象是否在本对象的原型链中。测试一个对象是否存在于另一个对象的原型链上。
* ```Object.prototype.propertyIsEnumerable()```：判断指定属性是否可枚举。返回一个布尔值，表明指定的属性名是否是当前对象可枚举的自身属性。
* Object.toLocaleString()：直接调用 ```toString()```方法。返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖。
* ```Object.prototype.toString()```：返回对象的字符串表示。返回一个代表该对象的字符串。
* ```Object.prototype.valueOf()```：返回指定对象的原始值。

### Array.prototype

所有的数组实例都继承于 ```Array.prototype```。所有的数组方法都定义在 ```Array.prototype``` 身上，和其他的构造函数一样，你可以通过扩展 Array 的 prototype 属性上的方法来给所有数组实例增加方法。


### Function.prototype

```Function.prototype``` 属性存储了 Function 的原型对象。Function对象继承自 ```Function.prototype``` 属性。因此，```Function.prototype``` 不能被修改。

