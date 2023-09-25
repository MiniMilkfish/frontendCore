/**
 * 变量提升
 * 
 * 通过var / let / const 关键字声明的变量，在声明前就可以访问到，只不过该变量的值是 undefined
 * */ 

// var a = 1;

// function fn(){
//     // scene 1: 全局变量输出
//     // console.log(a); // output: 1

//     // scene 2：全局变量赋值及输出
//     // console.log(a);     // output: 1
//     // a = 2;
//     // console.log(a);     // output: 2

//     // scene 3: 变量提升：声明前可以访问但值为undefined
//     // console.log(a);         // output: undefined
//     // var a = 4
//     // console.log(a)          // output: 4
// }

// fn();



// ---------------------------------------
/**
 * 函数提升
 * 函数声明 function(){} 有函数提升
 * 函数表达式var fn = function(){} 不能函数提升
 */

// fn();       // output: fn 函数
// function fn(){
//     console.log('fn 函数');
// }

// console.log(fn2)    // output: TypeError: fn2 is not a function

// var fn2 = function(){
//     console.log('fn2 函数')
// }


// 函数提升优先级大于变量提升
// console.log(a)  // output: [Funciton: a]

// var a;

// function a(){
//     console.log('a fun')
// }

// a = 123;

// -----------------------------------------------

// class Sup{
//     constructor(name){
//         this.name = name;
//     }

//     printName(){
//         console.log(this.name);
//     }
// }

// class Sub extends Sup{
//     constructor(name, age){
//         // super 调用父类的构造函数来实例化子类本身
//         super(name);         //Sup.prototype.constructor.call(this, name);
//         this.age = age;
//     }

//     printAge(){
//         console.log(this.age);
//     }
// }

// let jack = new Sub('jack', 18);
// jack.printName()
// jack.printAge()


// -----------------------------------------------  
// // 构造函数  会默认生成一个原型对象
// function Person(name, ){
//     this.name = name;
// }

// console.log(Person)             // print: [Function: Person] 构造函数本身
// console.log(Person.prototype)   // print: {} 指向原型对象
// console.log(Person.prototype.constructor)   // print: [Function: Person] 指向 构造函数本身



// // 子类继承父类的属性： 需要使用super() 继承父类的属性，同时创建 this 子类本身没有this；
// // 所以 super(props) 的作用就是在父类的构造函数中给 props 赋值一个对象 this.props = props 这样就能再它的下面定义你要用到的属性了，然而其他的由于没有传参就直接赋值为 undefined
// class People {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayName (){
//         return '我的名字是： ' + this.name;
//     }
// }

// // 子类没有自己的this 对象，只能继承自父类的 this 对象， 然后对其进行加工
// // 而super() 就是将父类中的this 对象继承给子类
// class har extends People {
//     constructor(name, age, sex) {
//         super(name, age);
//         this.sex = sex;
//     }

//     haha(){
//         return this.sex + ' ' + super.sayName();
//     }
// }

