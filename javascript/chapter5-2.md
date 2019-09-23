# 创建对象

## 工厂模式

```javascript
function creatPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}

var domy = creatPerson('kaifang', 26, 'it');

var qbaty = creatPerson('yuheng', 29, 'it');
```

## 构造函数模式

```javascript
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

var domy = new Person('domy', 26, 'it');

var qbaty = new Person('qbaty', 29, 'it');
```

**使用new操作符调用构造函数会经历以下4个步骤：**

1. 创建一个新对象；
2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
3. 执行构造函数中的代码（为这个新对象添加属性）；
4. 返回新对象。

创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型；而这正是构造函数模式胜过工厂模式的地方。

### 将构造函数当作函数

构造函数与其他函数的唯一区别，就在于调用它们的方式不同。不过，构造函数也是函数，不存在丁一构造函数的特殊语法。任何函数，之遥通过new操作符来调用，那它就可以作为构造函数；而任何函数，如果不通过new操作符来调用，那它跟普通函数也不会有什么两样。

### 构造函数的问题

使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。说明白些，以这种方式创建函数，会导致不同的作用域链和标识符解析，但创建Function新实例的机制仍然是相同的。不同实例上的同名函数是不相等的。然而，创建两个完成同样任务的Function实例完全没有必要；况且有this对象在，根本不用在执行代码前就把函数绑定到特定对象上面。

```javascript
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name);
}

var domy = new Person('domy', 26, 'it');

var qbaty = new Person('qbaty', 29, 'it');
```

## 原型模式

我们创建的每一个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。

```javascript
function Person() {};
Person.prototype.name = 'kaifang';
Person.prototype.age = 26;
Person.prototype.sayName = function() {
    console.log(this.name);
};
var Domy = new Person();

Domy.name

Domy.sayName()
```

### 理解原型对象

无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象。在默认情况下，所有原型对象都会自动获得一个constructor（构造函数）属性，这个属性包含一个指向prototype属性所在函数的指针。

创建了自定义的构造函数之后，其原型对象默认只会取得constructor属性；至于其他方法，则都是从Object继承而来的。当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象。这个指针叫[[Prototype]]，要明确的真正重要的一点是，这个连接存在于实例与构造函数的原型对象之间，而不是存在于实例与构造函数之间。

虽然在所有实现中都无法访问到[[Prototype]]，但可以通过isPrototypeOf()方法来确定对象之间是否存在这种关系。如果[[Prototype]]指向调用isPrototypeOf()方法的对象，那么这个方法就会返回true。

```javascript
function Person() {};
Person.prototype.name = 'kaifang';
Person.prototype.age = 26;
Person.prototype.sayName = function() {
    console.log(this.name);
};

var Domy = new Person();

Person.prototype.isPrototypeOf(Domy)
// true
```

ECMAScript 5增加了一个新方法，叫Object.getPrototypeOf()，这个方法返回[[Prototype]]的值。

```javascript
Object.getPrototypeOf(Domy)
```
用```Object.getPrototypeOf()```可以方便地取得一个对象的原型，而这在利用原型实现继承的情况下是非常重要的。

虽然可以通过对象实例访问保存在原型中的值，但却不能通过对象实例重写原型中的值。如果我们在实例中添加了一个属性，而该属性与实例原型中的一个属性同名，那我们就在实例中创建该属性，该属性将会屏蔽原型中的那个属性。

当为对象实例添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性；换句话说，添加这个属性只会阻止我们访问原型中的那个属性，但不会修改那个属性。即使将这个属性设置为null，也只会在实例中设置这个属性，而不会恢复其指向原型的连接。不过，使用delete 操作符则可以完全删除实例属性，从而让我们能够重新访问原型中的属性。

使用```Object.hasOwnProperty()```方法可以检测一个属性是存在于实例中，还是存在于原型中。这个方法只在给定属性存在于对象实例中时，才会返回true。

## 组合使用构造函数模式和原型模式

创建自定义类型的最常见方式，就是组合使用构造函数模式与原型模式。构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。另外，这种混成模式还支持向构造函数传递参数；可谓是集两种模式之长。





















