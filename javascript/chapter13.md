# 错误处理与调试

```javascript
try {
  // 可能会导致错误的代码
} catch (error) {
  // 在错误发生时会怎么处理
}

throw
```

## 错误类型

* Error：Error是基类型，其他错误类型都继承自该类型。这个类基类型的主要作用是供开发者抛出自定义错误。
* RangeError：RangeError类型的错误会在数值超出相应范围时触发。
* ReferenceError：在找不到对象的情况下，会发生ReferenceError。通常，在访问不存在的变量时，就会发生这种错误。
* SyntaxError：当语法错误时抛出。
* TypeError：当执行特定类型的操作时，变量的类型并不符合要求时抛出。
* EvalError：EvalError类型的错误会在使用eval()函数而发生异常时被抛出。
* URIError：当URI格式不正确时，就会导致URIError错误。

## 调试技术

通过console对象向JavaScript控制台中写入消息，这个对象具有下列方法：

```javascript
console.log(message)
// 将日志消息记录到控制台

console.error(message)
// 将错误消息纪录到控制台

console.warn(message)
// 将警告消息记录到控制台

console.info(message)
// 将信息性消息记录到控制台
```
