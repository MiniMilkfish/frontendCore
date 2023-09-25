# 15 - 说说对 React refs 的理解？ 应用场景？

## 是什么

允许我们访问原生 dom 节点

## 如何使用

- 传入字符串
```javascript
class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return <div ref="myRef"/>;
    }
}
```
- 传入对象
```javascript
class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return <div ref={this.myRef}/>;
    }
}

console.log(this.myRef.current.value)
```
- 传入函数
```javascript
class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return <div ref={e => this.myref = e}/>;
    }
}
console.log(this.myRef.current.value)
```
- 传入hook
```javascript
function App(){
    const myref = useRef();
    console.log(this.myRef.current)

    return (
        <div ref={myref}></div>
    )
}
```

## 应用场景

- dom 焦点控制 内容选择
- dom 元素的内容设置以及媒体播放
- 继承第三方dom 库