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

***<font color="#FF0000">立即执行函数不是闭包，但是它可以做出闭包效果</font>***

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

    if(typeof sex === 'undefined') {
        console.log("Goodbye " + sex);
    } else {
        let sex = "male";
        console.log('Hello ' + sex);
    }
})();

// print: Goodbye undefined
// print: Hello male

/**
 * 函数内有变量提升，即var name 被提升到函数顶部，且未赋值默认为 undefined，所以 typeof name === 'undefined' 成立
 */
```

#### 题 2

```javascript
var _fn = function(){
    console.log(1)
}

var _func = (function(){
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

    fn1();          // print: 1
    obj.fn2();      // print: 4
    obj.fn3();      // print: 3
    fn4();          // print: 1
    this.fn5();     // print: this.fn5 is not a function
})();
```

#### 题 3

```javascript
var liList = ul.getElementsByTagName('li');
for (var i = 0; i < 6; i ++){
    liList[i].onclick = function(){
        alert(i);   // 为什么 alert 出来的总是 6，而不是0，1，2，3，4，5
    };
}

/**
 * 答案： 因为 i 是贯穿整个作用域的，而不是给每个 li 分配一个 i 
 * 解决： 用 let 代替 var。或者是用 IIFES
 */
```

## 参考资料

- [深入理解JavaScript——立即执行函数（IIFE）](https://zhuanlan.zhihu.com/p/572900581) [知乎 @Johan 约翰]