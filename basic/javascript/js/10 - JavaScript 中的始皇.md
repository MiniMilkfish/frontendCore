# 10 - JavaScript 中的始皇

> JavaScript 中现有 Object 还是现有 Function?

![Object Layout](/static/v2-4ce4503cf382c98f127671e0c29694ed_r.jpg)

![原型链结构图](/static/dcd9f21f6457d284950b767e6f7bdea3_r.png)

```javascript
Object instanceof Object;       // print: true
Function instanceof Function;   // print: true
Object instanceof Function;     // print: true
Function instanceof Object;     // print: true
String instanceof Function;     // print: true
Array instanceof Function;      // print: true
```

![内置函数的原型链关系图](/static/v2-c8b8984d819b72bb249ed3e1b6c02563_r.jpg)

> `Function` 是函数，所以有 `prototype` 属性；函数也是对象，所以 `Function` 也有 `constructor` 和 `[[Prototype]]`

![Function 关系图](/static/v2-03105229bc67fe42dad59f006fb19160_720w.webp)

> `Function.__proto__ === Function.prototype`

![`Function.__proto__ === Function.prototype`](/static/v2-a2b2aa161fa61dab1b788f64b4664409_r.jpg)