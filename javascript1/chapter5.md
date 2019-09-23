# 面向对象的程序设计

ECMA-262把对象定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数。”对象是一组没有特定顺序的值。对象的每个属性或方法都有一个名字，而每个名字都映射到一个值。

创建一个自定义对象：

```javascript
var obj = new Object();
obj.name = 'Domy';
obj.age = 26;
obj.sayName = function() {
    console.log(this.name);
}
```

对象字面量是创建对象的首选模式：

```javascript
var obj = {
    name: 'Domy',
    age: 26,
    sayName: function() {
        console.log(this.name);
    }
}
```