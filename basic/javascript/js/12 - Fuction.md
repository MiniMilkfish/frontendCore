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
    - 基本用不到
- 函数声明
  - `function add2(x, y) { return x + y; }`
    - 会引起函数提升，且优先级高于变量提升
- 函数表达式
  - `var add3 = function(x, y) { return x + y };`
- 箭头函数
  - `var add4 = (x, y) => x + y;`
    - 没有 `this`（函数体内的 `this` 需在外部词法环境中查找）
    - 没有 `arguments`
    - 不可以当作构造函数
      - 不能使用 `new` 命令，否则会抛出一个错误
    - 没有 super
    - 不可以使用 yield 命令，因此建构函数不能用作 Generator 函数
    - 返回对象时必须外面加上括号

## 调用函数

- 作为函数
- 作为方法
- 作为构造函数
- 使用 call/ apply
- 自调用函数

```javascript
// 作为函数
var func1 = function(){ return 'foo'};
console.log(func1());   // print: foo

// 作为方法，即对象中的函数被成为方法
var obj1 = {
    func2: function(){ return 'foo'}
};
console.log(obj1.func2());  // print: foo

// 作为构造函数
function Person(){
    this.name = 'foo';
    this.age = 28;
    this.gender = "female";
    this.getName = function(){ return this.name; }
}
var person = new Person();
console.log(person.getName());  // print: foo

// 使用 call/ apply
var obj2 = {
    sayHello: function(){
        console.log(this.name, arguments[0], arguments[1]);
    }
};
var johan = {name: 'johan'};
var elaine = {name: 'elaine'};
obj2.sayHello.call(johan, 'foo', 'bar');    // print: johan foo bar
obj2.sayHello.apply(elaine, ['foo', 'bar']);    // print: elaine foo bar

// 自调用函数
(function(){console.log('foo')})()  // print: foo
```

## 函数为什么是一等公民

- 函数是对象
  - 函数可以存储在一个变量、数组或对象中
- 拥有对象的特性
  - 拥有属性
- 作为函数本身，可以作为参数传递，也可以作为返回值返回 (作为函数式编程的基础)

```javascript
// 作为变量保存变量、数组、对象
var funcA = function(){}  // 作为变量
var funcB = [function(){}]  // 作为数组变量
var funcC = {method:function(){}} // 作为对象方法

// 函数也是对象, 意味着可以拥有属性
var funcD = function(){}
funcD.foo = 'bar';
console.log(funcD.foo); // print: bar

// 作为参数
var funcE = function(func){ func();}
funcE(function(){console.log('函数作为参数传递')}); // print: 函数作为参数传递

// 作为函数返回值
var funcF = function(x, y) {
  return x + y; // 函数特性， 有返回值
}
console.log(funcF(1, 2)); // print: 3
```

## 函数的其他特性

- 函数作用域
- this

## 总结

## 参考资料

- [深入理解JavaScript](https://zhuanlan.zhihu.com/p/552619710) [知乎 @Johan 约翰]