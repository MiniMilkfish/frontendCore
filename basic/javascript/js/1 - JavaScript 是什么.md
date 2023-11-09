# 1 - JavaScript 是什么

## 是什么

Brendan Eich 花了10天设计完成的一门语言，大杂烩，借鉴并参考多个语言

 - 基本语法： C、Java
 - 数据结构： Java - 将值分为原始值和对象两大类
 - 函数的用法： Scheme、Awk 将函数作为第一等公民，并引入闭包
 - 原型继承模型： Self
 - 正则表达式： Perl
 - 字符串和数组处理： Python

它是一门动态、弱类型的编程语言，非常适合面向对象和函数式编程风格
    - 动态语言： 运行时确定数据类型
      - 静态语言： 编译时变量的数据类型就已经确定
    - 弱类型：变量类型由应用上下文确定
      - 强类型：变量的类型一旦确定就不能被转化

## Javascript 定位是什么？

- Javascript 是脚本编程语言
- Javascript 是弱类型语言
```javascript
consoel.log(1 + '2' === '12') // print: true
console.log('3' - '1' === 2) // print: true
console.log( +'1' === 1) // print: true
console.log( -'1' === -1) // print: true
```
- Javascript 是动态类型的
- Javascript 是单线程的
  - Javascript 需要和页面进行交互，操作DOM等，如果是多线程的话，会带来很复杂的同步问题
- Javascript 是解释型语言
- Javascript 具有良好的跨平台特性
  - Windows
  - Linux
  - Mac
  - Android
  - IOS

## 特点

- 基于原型继承
- 函数是一等公民
- 函数作用域 为词法作用域，可形成闭包

## 由什么组成

Javascript = ECMAScript + DOM + BOM

### ECMAScript

语言本身，由语法、类型、语句、关键字、保留字、操作符、全剧对象组成

### DOM

DOM 文档对象模型，操作HTML的API (提供了与网页内容交互的方法和接口)

将整个页面抽象为一组分层节点

### BOM

BOM 浏览器对象模型，操作浏览器的API，如Window、Screen、Location、History、Navigator……

BOM 主要针对浏览器窗口和子窗口

## ECMAScript 版本

- 1997.7
  - ECMAScript 1.0 发布
- 1998.6
  - ECMAScript 2.0 发布
- 1999.12
  - ECMAScript 3.0 发布
- 2007.10
  - ECMAScript 4.0 草案发布，发生分歧
- 2008.7
  - ECMAScript 3.1 发布，改善一部分4.0 功能
- 2009.12
  - ECMAScript 5.0 发布
- 2011.6
  - ECMAScript 5.1 发布
- 2013.12
  - ECMAScript 6 草案发布
- 2015.6
  - ECMAScript 6 正式发布，并且更名为 ECMAScript 2015

## 参考资料

- [深入理解JavaScript——JavaScript 是什么](https://zhuanlan.zhihu.com/p/554435963) [知乎 @Johan 约翰]