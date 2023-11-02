# 16 - IIFE (立即执行函数)

立即执行函数（IIFE. immediately invoked function expression）可以创建一个独立的作用域，这个作用域里面的变量，外面访问不到（即避免“变量污染”）

### 是什么

立即执行函数就是声明一个匿名函数，并马上调用这个匿名函数 

> MDN: IIFE（立即调用函数表达式）是一个在定义是就会立即执行的Javascript 函数

```javascript
(function(){
    // 块级作用域
})()
```

### IIFE的延展形态

```javascript
;(function(window){
    // 块级作用域
})(window)
```

### 为什么要有 IIFE

保证每一个IIFE中的代码变量不会在全局作用域下被访问，也就起到了变量保护的作用

### 适用场景

- UMD 打包

```javascript
(function(root, factory){
    if(typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object'){
        module.exports = factory;
    } else {
        root.MYMODULE = factory();
    }
})(this, function(){
    // do something
});
```

### 源码中的立即执行函数

- jQuery

```javascript
(function(window, undefined){ 
    // do something
})(window);
```

- underscore

```javascript
(function(global, factory){
    // do something
})();
```


### 立即执行函数不是闭包

***立即执行函数不是闭包，但是它可以做出闭包效果***

IIFE 是立即执行函数，执行完就被垃圾回收了；而闭包是要利用作用域机制把控私有变量

两者都能起到隔离变量的作用

```javascript
var Module = (function(){
    var private = "私有变量";
    var foo = function(){
        console.log(private);
    }

    return {
        foo: foo
    }
})();

Module.foo();   // print: 私有变量
console.log(Module.private); // print: undefined
```

### 实例

#### 题 1

```javascript
(function(){
    if(typeof name === 'undefined') {
        console.log("Goodbye " + name);
    } else {
        var name = "Jack";
        console.log('Hello ' + name);
    }
})();

// print: Goodbye undefined

/**
 * 函数内有变量提升，即var name 被提升到函数顶部，且未赋值默认为 undefined，所以 typeof name === 'undefined' 成立
 */
```

#### 题 2

```javascript
var _fn = function(){
    console.log(1)
}

(function(){
    var _fn = function(){
        console.log(2)
    }

    var fn1 = function(){
        this._fn.apply(this);
    }

    var obj = {
        _fn: function(){
            console.log(3)
        },
        fn2: fn1.bind({
            _fn: function(){
                console.log(4)
            }
        }),
        fn3: fn1
    };

    var fn4 = obj.fn3;
    var fn5 = obj.fn2;

    fn1();
    obj.fn2();
    obj.fn3();
    fn4();
    this.fn5();
})();
```

#### 题 3

```javascript
```