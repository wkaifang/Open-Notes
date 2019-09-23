# 理解对象

## 属性类型

ECMAScript中有两种属性：数据属性和访问器属性：

### 数据属性

数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有4个描述其行为的特性：

* [[Configurable]]：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。直接在对象上定义的属性，它们的这个特性默认值为true。
* [[Enumerable]]：表示能否通过for-in循环返回属性。直接在对象上定义的属性，它们的这个特性默认值为true。
* [[Writable]]：表示能否修改属性的值。直接在对象上定义的属性，它们的这个特性默认值为true。
* [[Value]]：包含这个属性的数据值读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。这个特性的默认值为undefined。

> 直接在对象上定义的属性，它们的[[Configurable]]、[[Enumerable]]和[[Writable]]特性都被设置为true，而[[Value]]特性被设置为指定的值。

要修改属性默认的特性，必须使用ECMAScript 5的```Object.defineProperty()```方法。该方法接收三个参数：属性所在的对象、属性名和一个描述符对象。其中描述符对象的属性必须是configurable、enumerable、writable和value。设置其中的一个或多个值，可以修改对应的特性值。

```javascript
var obj = {
    name: 'Domy',
    age: 26
};

Object.defineProperty(obj, 'name', {
    writable: false
});
obj.name = 'kaifang';
obj.name
// "Domy"

Object.defineProperty(obj, 'name', {
    writable: true
});
obj.name = 'kaifang';
obj.name
// "kaifang"
```

```javascript
var obj = {
    name: 'Domy',
    age: 26
};

Object.defineProperty(obj, 'name', {
    configurable: false,
    value: 'kaifang'
});
// Object {name: "kaifang", age: 26}

delete obj.name
// false

obj.name
// "kaifang"
```

> 可多次调用Object.defineProperty()方法修改同一个属性，但在把configurable特性设置为false之后就会有限制了。

### 访问器属性

访问器属性不包含数据值；它们包含一对儿getter和setter函数。**在读取访问器属性时，会调用getter函数，这个函数负责返回有效的值；在写入访问器属性时，会调用setter函数并传入新值，这个函数负责决定如何处理数据。**访问器属性有如下4个特性：

* [[Configurable]]：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。这个特性的默认值为true。
*  [[Enumerable]]：表示能否通过for-in循环返回属性。对于直接在对象上丁一的属性，这个特性的默认值为true。
* [[Get]]：在读取属性时调用的函数。默认值是undefined。
* [[Set]]：在写入属性时调用的函数。默认值是undefined。

必须使用Object.defineProperty()来定义访问器属性。

```javascript
var obj = {
    name: 'kaifang',
    age: 26
}

Object.defineProperty(obj, 'log', {
    get: function() {
        console.log(this.age)
    },
    set: function() {
        console.log(this.name)
    }
})

obj.log
// 26
// undefined
// 
obj.log = 1
// kaifang
// 1
```

```javascript
obj.__defineGetter__()
obj.__defineSetter__()
```

## 定义多个属性

使用```Object.defineProperties()```方法可以通过描述符一次定义多个属性。这个方法接收两个对象参数：第一个对象是要添加和修改其属性的对象，第二个对象的属性与第一个对象中要添加或修改的属性一一对应。

```javascript
var obj = {};

Object.defineProperties(obj, {
    name: {
        value: 'kaifang'
    },
    age: {
        value: 26
    },
    log: {
        get: function() {
            console.log(this.name)
        },
        set: function() {
            console.log(this.age)
        }
    }
})
Object {
    name: "kaifang",
    age: 26
}
obj.log
// kaifang
// undefined

obj.log = 1
// 26
// 1
```

## 读取属性的特性

使用```Object.getOwnPropertyDescriptor()```方法可以取得给定属性的描述符。这个方法接收两个参数：属性所在的对象和要读取其描述符的属性名。

返回值是一个对象，如果是访问器属性，这个对象的属性有configurable、enumerable、get和set；如果是数据属性，这个对象的属性有configurable、enumerable、writable和value。

```javascript
var obj = {};
undefined
Object.defineProperties(obj, {
    name: {
        value: 'kaifang'
    },
    age: {
        value: 26
    },
    log: {
        get: function() {
            console.log(this.name)
        },
        set: function() {
            console.log(this.age)
        }
    }
})

Object.getOwnPropertyDescriptor(obj, 'log')
// 返回给定属性的描述符

Object.getOwnPropertyNames(obj)
// ["name", "age", "log"]
```

> 在JavaScript中，可以针对任何对象——包括DOM和BOM对象，使用```Object.getOwnPropertyDescriptor()```方法。