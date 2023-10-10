# 2 - JavaScript 由什么组成

JavaScript = ECMAScript + DOM + BOM

ECMAScript:

- 语法
- 变量和数据类型
- 关键字和保留字
- 操作符
- 语句
- 对象

## 数据类型

- 基本类型
  - undefined
  - null
  - string
  - number
  - boolean
  - symbol (es6)
  - bigint (es10)
- 引用类型
  - object (一组属性的集合)

## 基本类型 VS 引用类型

### 区别

- 基本类型
  - 存储在栈内存中
  - 花销内存小，拷贝值
- 引用类型
  - 存储在堆内存中
  - 花销内存大，拷贝引用地址

```javascript
var string1 = 'foo'
var string2 = string1;
string1 = 'bar';
console.log(string1, string2);  // print: bar, foo

var object1 = {
    name: 'johan',
    age: 23
}

var object2 = object1;
object1.name = 'elaine'
object2.age = 22;
console.log(object1, object2); // print: {name: 'elaine', age: 22} {name: 'elaine', age: 22}

var obj1 = {};
var obj2 = obj1;

obj1.name = 'elaine';
obj2.age = 22;
console.log(obj1);  // print: {name: 'elaine', age: 22}
console.log(obj2);  // print: {name: 'elaine', age: 22}
```

## 类型判断

- typeof
- instanceof
- constructor
- Object.prototype.toString.call()

### typeof

返回正在使用值的基本类型

- null 会返回 object
- new Function 会返回 function

```javascript
// 基本类型
var null1 = null;
var undefined1 = undefined;
var string1 = 'foo';
var number1 = Number(1);
var boolean1 = Boolean(true);
var symbol1 = Symbol('foo');

console.log(typeof null1); // print:object
console.log(typeof undefined1); // print:undefined
console.log(typeof string1); // print: string
console.log(typeof number1); // print: number
console.log(typeof boolean1); // print: boolean
console.log(typeof symbol1); // print: symbol

// 引用类型
var myString = new String('male');
var myNumber = new Number(23);
var myBoolean = new Boolean(false);
var myObject = new Object()
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x * y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('error');

console.log(typeof myString); // print: object
console.log(typeof myNumber); // print: object
console.log(typeof myBoolean); // print: object
console.log(typeof myObject); // print: object
console.log(typeof myArray); // print: object
console.log(typeof myFunction);    // print: function
console.log(typeof myDate) // print: object
console.log(typeof myRegExp)   // print: object
console.log(typeof myError)    // print: object
```

### instanceof

用于检测构造函数的prototype 属性是否出现在某个实例对象的原型链上

```javascript
function People(name, age) {
    this.name = name;
    this.age = age;
}

const elaine = new People('elaine', 23)
console.log(elaine instanceof People) // print: true
console.log(elaine instanceof Object) // print: true
```

### constructor

用于创建和初始化 class 创建的对象的特殊方法

请注意： 它是函数（方法）

它是Object原型上的方法，即 Object.prototype.constructor

所有对象都会有 constructor 属性，它指向该对象的构造函数

constructor 对 undefined 和 null 无效（因为他们不是对象， 不能从 Object.prototype 上继承 constructor 属性）

```javascript
// 基本类型
var null1 = null;
var undefined1 = undefined;
var string1 = 'foo';
var number1 = Number(1);
var boolean1 = Boolean(true);
var symbol1 = Symbol('foo');

console.log(typeof null1, null1.constructor); // print:object, cannot read properties of null
console.log(typeof undefined1, undefined1.constructor); // print:undefined, cannot read properties of null
console.log(typeof string1, string1.constructor); // print: string, String(){[native code]}
console.log(typeof number1, number1.constructor); // print: number, Number(){ [native code]}
console.log(typeof boolean1, boolean1.constructor); // print: boolean, Boolean(){ [native code]}
console.log(typeof symbol1, symbol1.constructor); // print: symbol, Symbol(){[native code]}

// 引用类型
var myString = new String('male');
var myNumber = new Number(23);
var myBoolean = new Boolean(false);
var myObject = new Object()
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x * y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('error');

console.log(typeof myString, myString.constructor); // print: object, String(){ [native code]}
console.log(typeof myNumber, myNumber.constructor); // print: object, Number(){ [native code]}
console.log(typeof myBoolean, myBoolean.constructor); // print: object, Boolean(){ [native code]}
console.log(typeof myObject, myObject.constructor); // print: object, Object(){ [native code]}
console.log(typeof myArray, myArray.constructor); // print: object, Array(){ [native code]}
console.log(typeof myFunction, myFunction.constructor);    // print: function，Function(){ [native code]}
console.log(typeof myDate, myDate.constructor) // print: object, Date(){[native code]}
console.log(typeof myRegExp, myRegExp.constructor)   // print: object, RegExp(){ [native code]}
console.log(typeof myError, myError.constructor)    // print: object, Error(){[native code]}
```

### Object.prototype.toString.call(source)

toString() 方法返回一个表示该对象的字符串

每个对戏那个都有一个 toString() 方法（继承自 Object.prototype 老祖），用它能真正做到对类型的监测

```javascript
// 基本类型
var null1 = null;
var undefined1 = undefined;
var string1 = 'foo';
var number1 = Number(1);
var boolean1 = Boolean(true);
var symbol1 = Symbol('foo');

console.log(Object.prototype.toString.call(null1));  // print: [object Null]
console.log(Object.prototype.toString.call(undefined1));  // print: [object Undefined]
console.log(Object.prototype.toString.call(string1));  // print: [object String]
console.log(Object.prototype.toString.call(number1));  // print: [object Number]
console.log(Object.prototype.toString.call(boolean1));  // print: [object Boolean]
console.log(Object.prototype.toString.call(symbol1));  // print: [object Symbol]

// 引用类型
var myString = new String('male');
var myNumber = new Number(23);
var myBoolean = new Boolean(false);
var myObject = new Object()
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x * y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('error');

console.log(Object.prototype.toString.call(myString));  // print: [object String]
console.log(Object.prototype.toString.call(myNumber));  // print: [object Number]
console.log(Object.prototype.toString.call(myBoolean));  // print: [object Boolean]
console.log(Object.prototype.toString.call(myObject));  // print: [object Object]
console.log(Object.prototype.toString.call(myArray));  // print: [object Array]
console.log(Object.prototype.toString.call(myFunction));  // print: [object Function]
console.log(Object.prototype.toString.call(myDate));  // print: [object Date]
console.log(Object.prototype.toString.call(myRegExp));  // print: [object RegExp]
console.log(Object.prototype.toString.call(myError));  // print: [object Error]
```

Object.prototype.toString.call() 返回 [object NativeConstructorName] 格式的字符串，它能清晰的判断我们所需要的原生构造函数。同样，它的缺点是不能检测非原生构造函数

```javascript
// jQuery $.type()

function isType(source){
  const target = Object.prototype.toString.call(source);
  switch (target){
    case '[object Null]': return 'null';
    case '[object Number]': return 'number';
    case '[object Boolean]': return 'boolean';
    case '[object Date]': return 'date';
    case '[object Array]': return 'array';
    case '[object Object]': return 'object';
    case '[object Array]': return 'array';
    case '[object Undefined]': return 'undefined';
    case '[object Function]': return 'function';
    case '[object Error]': return 'error';
    case '[object RegExp]': return 'regexp';
  }

  // or
  // return Object.prototype.toString.call(source).slice(8, -1).toLowerCase();
}

function getType(target){
  return Object.prototype.toString.call(target);
}
```

