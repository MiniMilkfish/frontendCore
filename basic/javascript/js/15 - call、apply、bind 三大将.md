# 15 - call、apply、bind 三大将

call、apply 和 bind 都拥有"掰弯" this 指向的能力

## Call

> MDN: call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数

```javascript
let bar = {
    name: 'johnny'
}
function foo(){
    console.log(this.name)
}
foo.call(bar); // print: johnny
```

call 是原型方法，所以每个函数能很自然的使用此方法，即foo 的call 方法继承自 Function.prototype.call。其次，call 方法中传入的值会成为foo 函数的this 未来指向的对象

其本质是改变this 指向，将 this 指向了（call的） 传入值

### 实现 Call

```javascript
// Function.prototype.call(thisArg [, arg1, arg2, ...argN])
Function.prototype.mycall = function(context, ...args) {
    context = context || window;    // 防御性代码
    if(this === Function.prototype) {
        return undefined;   // 防止Function.prototype.mycall 直接调用
    }

    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}
```

## Apply

> MDN: apply() 方法调用一个具有给定this值的函数，以及一个数组（或一个类数组对象的形式提供的参数）

```javascript
let bar = {
    name: 'johnny'
}
function foo(age, hobby){
    console.log(this.name, age, hobby)
}
foo.apply(bar, [28, 'sleep']); // print: johnny 28 sleep
```

### 实现 Apply

```javascript
// Function.prototype.apply(thisArg [, argsArray])
Function.prototype.myapply = function (context, ...args){
    context = context || window;
    if(this === Function.prototype)  return undefined;

    const fn = Symbol();
    context[fn] = this;

    let result;
    if (!Array.isArray(args)) {
        result = context[fn]();
    } else {
        result = context[fn](...args);
    }

    delete context[fn];
    return result;
}
```

## Bind

> MDN: bind() 方法创建一个新的函数，在bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用

```javascript
let bar = {
    name: 'johnny'
}
function foo(age, hobby){
    console.log(this.name, age, hobby)
}
let bindBar = foo.bind(bar, 28);
bindBar('sleep');  // print: johnny 28 sleep
```

### 实现 Bind

```javascript
// Function.prototype.bind(thisArg [, arg1 [, arg2 [, ...argN]]])
Function.prototype.mybind = function(context, ...args1){
    context = context || window;
    if(this === Function.prototype) {
        throw new TypeError('Error');
    }

    const _this = this;
    return function F(...args2){
        /**
         * bind 特性
         * 一个绑定函数也能使用 new 操作符操作对象：这种行为就像把原函数当作构造器。提供的this 值被忽略，同时调用时的参数被提供给模拟函数
         */
        if(this instanceof F) {
            return new _this(...args1, ...args2);
        }

        return _this.apply(context, args1.concat(...args2))
    }
}
```

## 总结

call、apply、bind 三者都能修改 this 指向，其中 call、apply 在 ECMAScript 3 时定义，bind 则是在 ECMAScript 5 出现

bind 的三个特点：

- 返回的是一个函数
- 可以传入参数（使用 bind 和经 bind 生成的函数都可以传参）
- 使用bind 生成的函数作为构造函数时，bind 时的指定 this 会失效，但传入的参数依然生效

## 参考资料

- [深入理解JavaScript](https://zhuanlan.zhihu.com/p/552619710) [知乎 @Johan 约翰]