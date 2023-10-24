# 11 - instanceof 找祖籍

## 是什么

> [MAN] instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

```javascript
function Resume(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

const johan = new Resume('johan', 18, 'swim');
console.log(johan instanceof Resume);   // print: true
console.log(johan instanceof Object); // print: true
```

## 手撸instanceof

```javascript
function muInstanceof(left, right){
    if(typeof left !== 'object' || left === null) return false;

    if(left.__proto__ === right.prototype) return true;
    else {
        if(left === null || left.__proto__ === null) return false;
        
        return muInstanceof(left.__proto__, right);
    }
}
```

```javascript
function myInstanceof(left, right) {
    // 基本数据类型直接返回 false
    if (typeof left !== 'object' || left === null) return false;
    // getPrototype是Object对象自带的一个方法，等效于__proto__
    let proto = Object.getPrototypeOf(left);
    while (true) {
        // 循环往下寻找，知道找到相同的对象
        if (proto == null) return false;
        // 找到相同的原型对象
        if (proto == right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
```