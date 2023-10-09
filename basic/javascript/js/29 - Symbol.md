# 29 - Symbol

## 是什么

ES6 引入的一种新的原始数据类型，表示独一无二的值，被划分到了基本数据类型

基本数据类型
- 字符串
- 数值
- 布尔
- undefined
- null
- Symbol

引用数据类型
- Object

## 如何使用

- 通过调用全局函数来创建

```javascript
const sym = Symbol();
```

- Symbol() 函数接收一个参数，一个字符串（只是一个标记，方便我们阅读，没有任何意义）

```javascript
const sym = Symbol('my description');
console.log(sym);   // print: Symbol('my description')
```

- 只能类型转换为字符串或布尔值
- 不能做任何运算
- Symbol 生成的值作为属性或者方法的时候，一定要保存下来，否则后续无法使用
- for 循环遍历对象的时候是无法遍历出 Symbol 的属性和方法的

## 特征

- 独一无二性
  - 没有两个Symbols永远相等。即使两个Symbols具有相同的描述，他们也不相等
- 不可变性
  - Symbol值一旦创建，就不能被修改
- 作为属性键
  - 对象键可以是Symbols。通常对象键只能是Symbols或字符串
  - 用于创建对象的私有属性或隐藏属性，以避免命名冲突
- 隐藏性
  - 使用Symbol 作为属性键，这些属性对于常规的对象遍历和操作是不可见的

```javascript
const test = Symbol('test');
const obj = {};
obj.test = 'hello';
obj[test] = 'world';

console.log(obj.test);  // print: hello
console.log(obj[test]); // print: world
```

```javascript
function addSymbol(obj) {
    const sym = Symbol('test');
    obj[sym] = 'my hidden value';
    return obj;
}

const obj = addSymbol({});

console.log(Symbol('test')); // print: undefined
console.log(Object.getOwnPropertySymbols(obj)); // print: [Symbol('text')]
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // print: my hidden value
```

## 适用场景

- 存储最终用户不应该看到的纯程序数据（因为Symbol被排除在JSON.stringify()）；
- 作为对象属性的key，key 为Symbol的属性只能使用中括号（[]）访问；
  - JavaScript模块化后，模块作者可以自信的认为该属性不会覆写对象上已有的属性。同样，如果模块中使用Symbol key的对象属性，只要不把Symbol 值导出，就可以确信其他模块不会不经意地覆写该属性；
  - 应用引用第三方代码对象使用Symbol key，既能确信不会和已有属性冲突，也能确信第三方代码不会意外的修改你设置地属性
- 消除魔术字符串；

```javascript
const gender = {
    //这样就说明man就是一个独一无二的值，不用再man:'man'       
    man: Symbol(),
    woman: Symbol(),
}

function isMan(sex) {
    switch (sex) {
        case gender.man:
            console.log('男性');
            break;
        case gender.woman:
            console.log('女性');
            break
        default:
            console.log('123')  
            break
    }
}
isMan(gender.man)   // print: 男性
```
- 为对象定义一些非私有的、但又希望只用于内部的方法；

```javascript
const MY_KEY = Symbol();
const FOO = Symbol();
let obj = {
    [MY_KEY]: 123,
    [FOO](){
        return 'bar';
    }
}
```

## 遍历并获取Symbols
- Object.getOwnPropertySymbols(): 返回对象中只包含 Symbol类型key 的数组
- Reflect.ownKeys():  返回对象中所有类型的key 的数组（包含 Symbol）

```javascript
let _password = Symbol('password');
const obj = {    
        name: 'Echa',    
        gender: 'male',    
        [_password]: '123456'
    };
for (let item in obj) {    
    console.log(item); // print: name gender
}

console.log(Object.keys(obj));  // print: ['name', 'gender']
console.log(Object.values(obj));    // print: ['Echa', 'male']
console.log(Object.getOwnPropertyNames(obj));   // print: ['name', 'gender']
console.log(Object.getOwnPropertySymbols(obj)); // print: [Symbol(password)]
console.log(Reflect.ownKeys(obj));  // print: ['name', 'gender', Symbol(password)]
```

## Symbol 属性

- Symbol.iterator 定义一个对象默认的迭代器，使之通过for...of 循环进行遍历

```javascript
class Song {  
    constructor(name, artist, duration) {    
        this.name = name;    
        this.artist = artist;    
        this.duration = duration;  
    }
}

class Playlist {  
    constructor() {    
        this.songs = []; 
    }  
    
    ddSong(song) {    
        this.songs.push(song);  
    }  
    
    [Symbol.iterator]() {    
        let index = 0;     
        const songs = this.songs;     
        return {       
            next: () => ({         
                value: songs[index++],         
                done: index > songs.length      
                 })     
        }   
    }
} 

const playlist = new Playlist(); 
playlist.addSong(new Song('Song 1', 'Artist 1', '3:45')); 
playlist.addSong(new Song('Song 2', 'Artist 2', '4:20')); 
playlist.addSong(new Song('Song 3', 'Artist 3', '5:10')); 

for (const song of playlist) {   
    console.log(song.name); // print：  Song 1  Song 2  Song 3
} 
```

- Symbol.toStringTag 用来自定义对象的 toString 方法的返回值（注意不是重写 toString 方法）

```javascript
class People {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
    }

    get [Symbol.toStringTag](){
        return 'People';
    }
}

const people = new People('jack', 17);

console.log(people.toString()); // print: [object People]
```

- Symbol.toPrimitive 用来自定义对象类型转换时的行为

```javascript
class MyDateTime {
    constructor(year, month, day, hour = 0, minute = 0, second = 0) {
        this._datetime = new Date(year, month - 1, day, hour, minute, second);
    }

    [Symbol.toPrimitive](hint) {
        switch(hint){
            case 'number':
                return this._datetime.getTime();
            case 'string':
                return this._datetime.toLocaleString();
            default:        
                return this._datetime.toString();
        }
    }
}

const myDate = new MyDateTime(2023, 4, 8, 15, 30, 0);

console.log(myDate); // print: MyDateTime {_datetime: Sat Apr 08 2023 15:30:00 GMT+0800 (中国标准时间)}
console.log(myDate + 10000);    // print: Sat Apr 08 2023 15:30:00 GMT+0800 (中国标准时间)10000
console.log(`${myDate}`);   // print: 2023/4/8 15:30:00
```

- Symbol.asyncIterator 用来实现一个对象的异步迭代器，用于遍历异步数据流

```javascript
class AsyncDataSource {
    constructor(data) {
        this._data = data;
    }

    async *[Symbol.asyncIterator]() {
        for (const item of this._data) {
            const result = await this._processAsyncData(item);
            yield result;
        }
    }

    async _processAsyncData(item) {
        // 模拟异步处理数据的过程    
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(item.toUpperCase());
            }, Math.random() * 1000);
        });
    }
}

async function processData() {
    const dataSource = new AsyncDataSource(['a', 'b', 'c', 'd', 'e']);
    for await (const data of dataSource) {
        console.log(data);
    }
}

processData();  // print: A B C D E
```
- Symbol.hasInstance    用于确定一个对象是否是某个构造函数的实例，它可以用来改变 instanceof 的行为

```javascript
class MyArray {  
    static [Symbol.hasInstance](instance) {    
        return Array.isArray(instance);  
    }
}

const arr = [1, 2, 3];
console.log(arr instanceof MyArray); // print: true
```

- Symbol.species 用于指定创建派生对象时要使用的构造函数

```javascript
class MyArray extends Array {  
    static get [Symbol.species]() {    
        return Array;  
    }  
    
    test(){    
        console.log('test');  
    }
}

const myArray = new MyArray(1, 2, 3);
const mappedArray = myArray.map(x => x * 2);
myArray.test();

console.log(mappedArray instanceof MyArray); // print: false
console.log(mappedArray instanceof Array); // print: true
```

- Symbol.match 用来确定使用 String.prototype.match 方法时要搜索的值，它可用于更改 match 类 RegExp 对象的方法行为

```javascript
class CustomRegExp extends RegExp {  
    [Symbol.match](str) {    
        const matches = super[Symbol.match](str);    
        if (matches) {      
            return matches.map(match => {        
                return `匹配到了: ${match}`;      
            });     
        }    
        
        return matches;  
    }
}

const regex = new CustomRegExp('hello', 'g'); 
const result = 'hello world'.match(regex);
console.log(result);  // print:  ["匹配到了: hello"]
```

- Symbol.replace 可以帮我们更灵活的处理 String.prototype.replace 方法，比如我们可以自定义字符串的替换行为

```javascript
// 有一个字符串处理库，我们想自定义它的 replace 方法，让它可以替换一个字符串的所有元音字母
const vowels = ['a', 'e', 'i', 'o', 'u'];
const customReplace = str => {  
    let result = '';  
    for (let i = 0; i < str.length; i++) {    
        if (vowels.includes(str[i])) {      
            result += '*';    
        } else {      
            result += str[i];    
        }  
    }  
    
    return result;
};

const customString = {  
    [Symbol.replace]: customReplace
};

const originalString = "hello world";
const result = originalString.replace(customString, '');
console.log(result); // print: "h*ll* w*rld"
```

- Symbol.split 用来确定使用 String.prototype.split 方法执行时具体要拆分的值

```javascript
const customSplit = str => str.split(/[\s$¥€]+/);
const customRegExp = {  
    [Symbol.split]: customSplit
};
const string = "100$200¥300€400 500";
console.log(string.split(customRegExp)); // print: [ '100', '200', '300', '400', '500' ]
```

- Symbol.unscopables 用来避免在使用 with 语句时访问对象中不希望被访问的属性

```javascript
const globalVars = {  
    a: 10,  
    b: 20,  
    [Symbol.unscopables]: {    
        b: true  
    }
};

with (globalVars) {  
    console.log(a); // print: 10  
    console.log(b); // print: Uncaught ReferenceError: b is not defined
}
```
