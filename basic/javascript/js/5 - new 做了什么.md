# 5 - new 做了什么

## 是什么

new 的本质是让开发者少些几行代码的对象自动继承该 Constructor 的 prototype，底层这样做是为了方便开发使用

new 属于隐式原型继承

隐式原型继承，即语言底层帮我们做了继承，开发者只用调用 new Constructor，就能让实例后

### new 关键字的意义

- 1 在内存中创建一个新对象
- 2 将新对象的[[Prototype]] 被赋值为构造函数的 prototype 属性
- 3 将构造函数中的this 指向新对象
- 4 执行构造函数中的代码
- 5 如果构造函数返回非空对象，则返回该对象；狗否则返回刚创建的新对象

以上过程即完成创建对象、原型继承和属性初始化，被称为隐式原型继承。

对象字面量也是隐式继承。知识对象字面量是为Object 构造函数服务，而new 则是对任意构造函数服务

### 隐式继承的两层隐式行为：

- 隐式的通过 new Object()/ Object.create() 来创建对象
- 隐式的进行原型继承

## 实现 new

```javascript
// Base ES5 Object.create
function new2(Constructor, ...args) {
    // 1、创建一个新对象
    var obj = Object.create(null);

    // 2、新对象的[[Prototype]]特性被赋值为构造函数的 prototype 属性
    obj.__proto__ = Constructor.prototype;

    // 3、构造函数内部的 this 被赋值为这个新对象
    // 4、执行构造函数内部的代码
    var result = Constructor.apply(obj, args);

    // 5、如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象
    return typeof result === 'object' ? result : obj;
}

// Base ES3 new Object
function new3(){
    // 基于 new Object 创建实例
    var obj = new Object();

    // 获取外部传入的构造器
    var Constructor = Array.prototype.shift.call(arguments);

    // 手写 Object.create() 核心
    var F = function(){}
    F.prototype = Constructor.prototype;

    // 指向正确的原型
    obj = new F();

    // 借用外部传入的构造函数给 obj 设置属性
    var result = Constructor.apply(obj, arguments)

    // 执行结果如果是非空对象，则返回该对象；否则，返回刚创建的新对象
    return typeof result === 'object' ? result: obj;
}

// result test
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const user2 = new2(User, 'johnny', 'joestar');
const user3 = new3(User, 'johnny', 'joestar');
```

