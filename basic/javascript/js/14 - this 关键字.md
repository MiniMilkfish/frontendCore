# 14 - this 关键字

> 谁调用它，this 就指向谁

```javascript
function identify(){
    return this.name.toUpperCase();
}

function speak(){
    var greeting = "Hello, i'm " + identify.call(this);
    console.log(greeting);
}

var me = {name: "John"};
var you = { name: "elaine" };

identify.call(me);  // print: JOHN
identify.call(you); // print: ELAINE

speek.call(me); // print: Hello, i'm JOHN
speek.call(you); // print: Hello, i'm ELAINE
```

```javascript
// 如果不使用 this， 那就需要给 identify() speak() 显式传入一个上下文对象
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, i'm " + identify(context);
    console.log(greeting);
}

var me = {name: "John"};
var you = { name: "elaine" };

identify(you); // print: ELAINE
speek(me); // print: Hello, i'm JOHN
```

this 是一种更为优雅的 “传递” 对象引用的方式

当遇到n 个函数（或叫方法）之间的调用时，显式传值无疑会变得混乱。除此之外，在原型中，构造函数会自动引入合适的上下文对象是极其重要的

## 是什么

- this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件；
- this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式；
- 当一个函数被调用是，JavaScript 会创建一执行上下文，携带所有的信息（包括this、词法环境、变量环境）。this就是执行上下文（context）中的一条信息，它代表是谁调用它

## 调用方式

this 是在运行时绑定的，它的上下文取决于函数调用时的各个条件。在JavaScript中函数的调用有以下几种方式：

- 作为对象方法调用
- 作为函数调用
- 作为构造函数调用
- 使用 call/ apply/ bind 调用

### 作为对象方法调用

this 自然绑定到该对象

```javascript
var people = {
    name: 'John',
    age: 21,
    sayName: function(){
        console.log(this.name)
    }
};
people.sayName();   // print: John
```

### 作为函数调用

函数也可以直接被调用，此时 this 绑定到全局对象。

在浏览器中，window 就是该全局对象。

```javascript
function sayAge(age) { this.age = age};
sayAge(5);

// age 已经成为一个值为 5 的全局变量
console.log(age, window.age, this.age); // print: 5 5 5
```

```javascript
var people = {
    name: 'elaine',
    age: 21,
    sayName: function(age){
        var sayAge = function(age){
            this.age = age;
        };

        sayAge(age);
    }
};

people.sayName(5);

console.log(people.age, age);   // print: 21 5
```

```javascript
var people = {
    name: 'elaine',
    age: 21,
    sayName: function(age){
        let _this = this;
        var sayAge = function(age){
            _this.age = age;
        };

        sayAge(age);
    }
};

people.sayName(5);

console.log(people.age, age);   // print: 5 undefined
```

### 作为箭头函数调用

```javascript
var people = {
    name: 'elaine',
    age: 21,
    sayName: (age) => {
        console.log(this)
        var sayAge = function(age){
            this.age = age;
        };

        sayAge(age);
    }
};

people.sayName(5);
console.log(people.age, age);   // print: 21 5
```

> this 本身的机制和动态作用域很像，而箭头函数的出现，某种程度上规避了JavaScript 的设计缺陷（理想中的设计方式应该是内部函数的 this 应该绑定到其外层函数对应的对象上）

```javascript
var people = {
    name: 'John',
    age: 21,
    sayName: () => console.log(this.name, this),
    sayName2: function(){
        console.log(this.name, this);
    },
    sayName3: function(age){
        var sayAge = (age) => {
            console.log(this);
            this.age = age
        }

        sayAge(age);
    }
};

people.sayName();       // print: '' window
people.sayName2();      // print: Johan { name: 'Johan', age: 21}
people.sayName3(5);     // print: { name: 'Johan', age: 21}
console.log(people.age);    // print: 5
console.log(age);       // print: undefined
```

> 使用箭头函数后，就不用管调用者是谁，它只关心在哪里定义

```javascript
var foo = {
    bar: {
        a: () => console.log(this)
    }
}
foo.bar.a();    // print: window
```

### 作为构造函数调用

JavaScript 支持面向对象编程，与主流的面向对象编程语言不同，JavaScript 并没有类（Class） 的概念，而是使用基于原型（prototype-base）的继承方式。同样约定俗称的，首字母大写的函数被称为构造函数，我们使用 `new` 调用时， this 会绑定到实例对象上

```javascript
function People(name, age){ 
    this.name = name;
    this.age = age;
}
var elaine = new People('elaine', 21);
console.log(elaine);    // print: {name: 'elaine', age: 21}
```

### 使用 call / apply / bind 调用

在JavaScript中函数也是对象，对象则有方法，call 、 apply 、 bind 就是函数对象的方法

这三个方法异常强大，他们允许切换函数执行的上下文环境（context），即 this 绑定的对象。很多 JavaScript 中的技巧以及类库都用到了该方法。

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function(name, age) {
        this.name = name;
        this.age = age;
    }
}

var elaine = new Person('elaine', 28);
var johan = {name: 'johan', age: 28};
elaine.sayName('elaine1', 281);
elaine.sayName.apply(johan, ['johan1', 281]); // or -> elaine.sayName.call(johan, 'johan1', 281)

console.log(elaine.name);   // print: elaine1
console.log(elaine.age);    // print: 281
cosnole.log(johan); // print: { name: 'johan1', age: 281}
```

call、apply 、bind 具有掰弯 this 指向的能力

## 函数的执行环境

## this 有什么作用

- 全局执行上下文中：this 指向了 window 对象，方便我们来调用全局 window 对象
- 函数执行上下文中：this 指向了调用该函数的对象，减少的参数的传递，原来如何需要在函数内部操作被调用对象，当然还需要将对象作为参数传递进去，而又了 this，就不需要了，直接拿 this 就可以操作该调用对象的属性

## 总结

构造函数就是个模板，this未来会指向 new 出来的对象。创建 Person 的实例时，this.name 将引用新拆功能键的对象，并讲一个名为name 的属性放入新对象中

## 参考资料

- [深入理解JavaScript——this关键字](https://zhuanlan.zhihu.com/p/568731211) [知乎 @Johan 约翰]