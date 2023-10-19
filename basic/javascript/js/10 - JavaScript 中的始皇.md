# 10 - JavaScript 中的始皇

> JavaScript 中先有 Object 还是先有 Function?

```javascript
// 思考到底是先有 Object 还是 现有Function？
Object instanceof Object;       // print: true
Function instanceof Object;     // print: true
Function instanceof Function;   // print: true
Object instanceof Function;     // print: true
```

![Object Layout](/static/v2-4ce4503cf382c98f127671e0c29694ed_r.jpg)

![原型链结构图](/static/dcd9f21f6457d284950b767e6f7bdea3_r.png)

> JavaScript引用数据类型里包含内置对象，这些内部对象是语言内部创建，且这些对象都是构造函数，存在的目的是让开发者少些代码
>
> 因为是构造函数，必然属于函数；因为函数，所以他们都是Function创建的；因为是Function创建的，所以都是Function 的实例

```javascript
String instanceof Function;     // print: true
Number instanceof Function;     // print: true
Array instanceof Function;      // print: true
Function instanceof Function;   // print: true
Object instanceof Function;     // print: true
```

![内置函数的原型链关系图](/static/v2-c8b8984d819b72bb249ed3e1b6c02563_r.jpg)

> `Function` 是函数，所以它有 `prototype` 属性；函数也是对象，所以 `Function` 也有 `constructor` 和 `[[Prototype]]`

![Function 关系图](/static/v2-03105229bc67fe42dad59f006fb19160_720w.webp)

> `Function.__proto__ === Function.prototype`

![`Function.__proto__ === Function.prototype`](/static/v2-a2b2aa161fa61dab1b788f64b4664409_r.jpg)

> 无论你是构造函数的原型，还是自定义对象的原型，都会先指向 Object.prototype，再由Object.prototype 指向 null

```javascript
String.prototype.__proto__ === Object.prototype;    // print: true
Number.prototype.__proto__ === Object.prototype;    // print: true
Array.prototype.__proto__ === Object.prototype;     // print: true
Function.prototype.__proto__ === Object.prototype;  // print: true
Object.prototype.__proto__ === null;                // print: true

var obj = {};
var arr = [];
function func() {}

obj.__proto__ === Object.prototype; // print: true
arr.__proto__.__proto__ === Object.prototype;   // print: true
func.__proto__.__proto__ === Object.prototype;   // print: true
```

![原型链关系图](/static/v2-5045ae51f1c7a138ed723ce3be796f6b_r.jpg)

![原型链关系图](/static/v2-f22f0d71f0bc946a7439b75f5fb11210_r.jpg)

> 所有原型的继承的源头都在 Object.prototype， Object.prototype 对象上的属性，会被任何值使用，所以判断类型最准确的办法是 `Object.prototype.toString.call(source)`

![构造函数的源头和原型的源头 结合](/static/v2-d8d8d7aa9f080968061fcba814908ca7_r.jpg)

> Object.prototype 是原型之母，任何类型都源自它
>
> Function.prototype 是构造函数之母，任何构造函数都由它创建，包括它自己

```javascript
/**
 * Object 由Function.prototype 创建，Function.prototype 的原型对象指向 Object.prototype
 */
Object instanceof Object;       // print: true

/**
 * Function 由Function.prototype 创建，Function.prototype 的原型对象指向 Object.prototype
 */
Function instanceof Object;     // print: true

/**
 * Function 由Function.prototype 创建
 */
Function instanceof Function;   // print: true

/**
 * Object 由Function.prototype 创建
 */
Object instanceof Function;     // print: true

```

## 总结

Object.prototype 才是真正的始皇,任何原型都源自它

而Function.prototype 仅此于 Object.prototype 的存在，它是内置构造函数的创建者，任何函数都源于它