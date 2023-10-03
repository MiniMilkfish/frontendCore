# 6 - Object.create

## 是什么

2006年，Douglas Grockford 《JavaScript 中的原型式继承》（“Prototypal Inheritance JavaScript”） 介绍了一种不涉及严格意义上构造函数的继承方法

```javascript
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
```
于是乎，《JavaScript 高级程序设计》中的 JavaScript 就多了一种 ———— 原型式继承
于是乎，ECMAScript 5 新增了 Object.create() 方法将原型式继承的概念规范化

## 用法

```javascript
var obj = Object.create({name: 'johan', age: 23});  // obj 继承了属性name 和 age
var obj2 = Object.create(null); // obj2 不继承任何属性和方法
var obj3 = Object.create(Object.prototype); // 与 {} 和 new Object() 一个意思
var obj4 = Object.create({}, {
    property1: {
        value: true,
        writable: true
    }
}); // 第二个参数与Object.defineProperties() 一致
```

## Object.create 实现分解

```javascript
function object(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}
```

### 第一步： function F() {}

创建一个构造函数（约定首字母大写），创建函数F 时，F构造函数与和它的原型对象就有了这一层关系：

```javascript
F.prototype === F.prototype;    // 假设你把 F.prototype 当作一个值
F.prototype.constructor === F;
```

F - (prototype) -> F.prototype - (constructor) -> F

### 第二步： F.prototype = proto;

将F.prototype 赋值为传入的proto

F - (prototype) -> proto

### 第三步： return new F();

new 创建一个对象，并将这个对象的隐式原型（__proto__）指向构造函数的原型对象，并初始化构造函数，如果值则返回值

（new 是隐式原型继承， Object.create() 是显式原型继承）

F - (prototype) -> proto <- __proto__ - new F()，即：new F().__proto__ = proto

```javascript
var obj = Object.create({name: 'foo'});
```

F - (prototype) -> {name: 'foo'} <- __proto__ - obj

obj 继承自 {name: 'foo'} 这个对象，至于F.prototype = {name: 'foo'}，在调用完 Object.create 之后，也因为没人使用 F 函数而被引擎当作垃圾回收了，遂成了 obj.__proto__ = {name: 'foo'}

如此「原型式继承」就被传承下来了

简单来说，就是差u你更加爱你空（构造）函数，关联它的原型（实现继承）

## Object.create(null)

创建一个没有任何继承痕迹的对象