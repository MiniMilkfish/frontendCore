# 4 - Object

## 属性与方法

JavaScript 对象可以从一个称为原型的对象里继承属性。对象的方法通常是继承的属性。

这种“原型式继承”（prototypal inheritance）是JavaScript的核心特征

```javascript
var johan = {name: 'johan'}
console.dir(johan)
```

- 字面量的方法创建对象实例，隐式继承 ，等同于 new Object({name: 'johan'})
- new Object 会进行原型继承 [[prototype]] 正是继承Object的原型，即Object.prototype

![Object的属性与方法](/static/WX20231001-105102@2x.png)

## Object的属性和方法 说明注解

- 静态方法
  - Object.assign() 通过复制一个或多个对象来创建一个新的对象
  - Object.create() 使用指定的原型对象和属性创建一个新对象
  - Object.defineProperty() 给对象添加一个属性并指定该属性的配置
  - Object.defineProperties() 给对象添加多个属性并分别指定它们的配置
  - Object.entries() 返回给定对象自身可枚举属性的 [key, value] 数组
  - Object.keys() 返回一个包含所有给定对象自身可枚举属性名称的数组
  - Object.values() 返回给定对象自身可枚举值的数组
- 实例属性
  - Object.prototype.constructor 一个引用值，指向Object 构造函数
  - Object.prototype.__proto__ 指向一个对象，当一个object 实例化时，使用该对象作为实例化对象的原型
- 实例方法
  - Obejct.prototype.hasOwnProperty() 
    - 返回一个布尔值，用于表示一个对象自身是否包含指定的属性，该方法并不会查找原型链上继承来的属性
    - 用 hasOwnProperty 就能检测出，它能区别自身属性与继承属性
  - Object.prototype.isPrototypeOf() 
    - 返回一个布尔值，用于表示该方法所调用的对象是否在指定对象的原型链中
  - Object.prototype.toString()
    - 返回一个代表该对象的字符串
  - Object.prototype.valueOf()   
    - 返回指定对象的原始值

## 创建对象

- 对象直接量（又叫：对象字面量）
  - var obj = {};
- 关键字new
  - 使用new 创建新对象，一般要跟随一个函数调用
  - 此处函数称为构造函数（constructor），构造函数用以初始化一个新创建的对象
  - var obj = new Object()
- Object.create 函数
  - ECMAScript 5 定义的，牵扯原型、继承等方面的知识
  - 两个参数
    - 第一个 对象的原型
    - 第二个 可选参数，对其属性的更多描述

```javascript
var obj = Object.create({name: 'johan', age: 23});
var obj2 = Object.create(null); // 不继承任何属性
var obj3 = Object.create(Object.prototype)  // 等同 {} 和 new Object()
```

## 如何拷贝对象

赋值是简单的，但是赋值后的再赋值，就会引起源对象被修改

```javascript
var o1 = {name: 'johan'}
var o2 = o1;
o2.name = 'elaine';
console.log(o1.name); // print: elaine
console.log(o2.name);   // print: elaine8240
```

Object  是引用类型，引用类型的拷贝拷贝的是引用地址，所以o2 被修改时，o1 也随之被修改

## 对象继承的秘密 ———— 原型

Javascript 是一门基于原型的语言 ———— 每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性

原型也可能拥有原型，并从中继承方法和属性，一层一层，以此类推。这种关系常被称为原型链

## 继承

- 原型链继承
- 盗用构造函数
- 组合继承（原型链 + 盗用构造函数）
- 原型式继承
  - Object.create
  - Object.setPrototypeOf
- 寄生式继承
- 寄生式组合继承
  - Object.create + 盗用构造函数
  - Object.setPrototypeOf + 盗用构造函数
- 类继承

## 总结

## 参考资料

- [深入理解JavaScript](https://zhuanlan.zhihu.com/p/552619710) [知乎 @Johan 约翰]