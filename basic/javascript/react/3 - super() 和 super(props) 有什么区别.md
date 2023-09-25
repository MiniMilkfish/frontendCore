# 3 - super() 和 super(props) 有什么区别

## ES6 类

``` javascript
class Sup(){
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(this.name)
    }
}

class Sub extends Sup {
    construtor(name, age) {
        // super 调用父类的构造函数来实例化子类本身 => 初始化this的
        super(name) // Sup.prototype.construtor.call(this, name)
        this.age = age
    }

    printAge(){
        console.log(this.age)
    }
}

let jack = new Sub('jack', 18);
jack.printName()    /// jack
jack.printAge() // 18
```

### 类组件

基于ES6 规范实现

```javascript
// React 内部
const instace = new YourComponent(props);
instance.props = props
```

```javascript
class HelloMessage extends React.Component {
    constructor(props) {
        // super();
        // console.log(props) // print: {}
        // console.log(this.props) // print: undefined

        super(props)
        console.log(props) // print: {}
        console.log(this.props) // print: {}
    }
    
    render {
        return <div>Hello {this.props.name}</div>
    }
}
```


### 总结

### super() 和 super(props) 区别

- 类组件基于ES6，所以 constructor 中必须使用 super 继承父类获取this 对象
- 类组件如果只调用super() 则缺少this 对象， 即 this.props == undefined