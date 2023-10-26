# 12 - Fuction

Function 的重要性

Object > Function - Function.prototype > Array/String/Nuber/……

## 是什么

函数（Function） 是由事件驱动的或者当它被调用时执行的可重复使用的代码块

## 属性和方法

```javascript
// 函数声明的形式创建一个普通的函数，打印查看自带的各种属性
function func(){}
console.dir(func);  // 没有静态方法，只有实例属性和实例方法，都继承自 Function.prototype
```
![Function 的属性和方法](/static/WX_20231026112841.png)

### 实例属性

- Function.prototype.arguments 对应传递给函数的参数数组
- Function.prototype.constructor 指向构造函数
- Function.prototype.length 参数数量

### 实例方法

- Function.prototype.apply(thisArg [, argsArray])
  - 调用一个函数并将其 this 值设置为提供的传参，第二个函数以数组对象传入
- Function.prototype.call(thisArg [, arg1, arg2, ...argN])
  - 调用一个函数并将其 this 值设置为提供的传参，也可以选择传输新参数
- Function.prototype.bind(thisArg [, arg1 [, arg2 [, ...argN]]])
  - 创建一个新函数，该函数在调用时，会将 this 设置为提供的thisArg。在调用新绑定的函数时，可选的参数序列（[, arg1[, arg2[, ...argN]]]）会被提前添加到参数序列中
- Function.prototype.toString()
  - 返回表示函数源码的字符串。覆盖了 Object.prototype.toString 方法

## 创建函数

- 函数构建函数
  - `var add = new Function('x', 'y', 'return x + y');`
- 函数声明
  - `function add2(x, y) { return x + y; }`
- 函数表达式
  - `var add3 = function(x, y) { return x + y };`
- 箭头函数
  - `var add4 = (x, y) => x + y;`

## 调用函数

## 函数为什么是一等公民

## 函数的其他特性

## 总结




















## 参考资料

- [深入理解JavaScript](https://zhuanlan.zhihu.com/p/552619710) [知乎 @Johan 约翰]