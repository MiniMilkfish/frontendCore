# 8 - React 构建组件的方式有哪些？区别？

## 是什么？

组件就是把图形和非图形的各种逻辑均抽象为一个统一的概念，来实现这样的一种开发方式

组件低耦合 职责单一
提高可维护性

## 如何构建组件

 - 函数式
 - React.createClass
 - 继承React.Component

### 函数式创建组件
React hooks 出现之前 函数式组件为无状态组件

```js
function HelloComponent(props) {
    return <div>{props.name}</div>
}
```

### React.createClass 创建组件 - 不常用

bable 转化成 React.createClass

```js
function HelloComponent(props) {
    return React.createElement(
        'div',
        null,
        'Hello',
        props.name
    )
}
```

### 继承 React.Component 创建组件

```js
class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            second: 0
        }
    }

    tick(){
        this.setState({ second: this.state.second+ 1})
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 100)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return (
            <div>seconds: {this.state.second}<div>
        )
    }
}
```

### 区别

- React.createClass 比较复杂，低频率使用
- 建议使用函数式方式创建组件

