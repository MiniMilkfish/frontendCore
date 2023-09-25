# 16 - React 中的 setState 执行机制

## 是什么

```javascript
import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello'};
    }

    changeText = () => {
        this.setState({ message: 'Hello Encode' });
    }

    render() {
        return (
            <div>
                <h2>: { this.state.message }</h2>
                <button onClick={() => this.changeText() }>update</button>
            </div>
        )
    }
}
```

## setState

- 第一个参数 是一个对象或者是一个函数； 第二个参数是一个回调函数 获取更新之后的数据

## 更新类型

- 异步的更新

```javascript
changeText(){
    this.setState({
        message: 'world'
    }, ()=>{
        console.log(this.state.message) // print: world
    })

    console.log(this.state.message) // print: hello
}
```
- 同步的更新
```javascript
changeText(){
    setTimeout(() => {
        this.setState({
            message: 'world'
        })
        
        console.log(this.state.message) // print: world
    }, 0)
}
```

```javascript
componentDidMount(){
    const btnEle = document.getElementById('btn')

    btnEle.addEventListener('click', ()=> {
        this.setState({ message: 'world'})

        console.log(this.state.message) // print: world
    })
}
```

### 总结

- 在组件声明周期或React 合成事件中 setState 是异步
- 在 setTimeout 或者原生事件中 setState 是同步

## 批量更新

```javascript
handleClick = () => {
    // count = 0
    this.setState({ count: this.state.count + 1})
    console.log(this.state.count) // print: 1

    this.setState({ count: this.state.count + 1})
    console.log(this.state.count) // print: 1

    this.setState({ count: this.state.count + 1})
    console.log(this.state.count) // print: 1

    this.setState({ count: this.state.count + 1})
    console.log(this.state.count) // print: 1

    this.setState({ count: this.state.count + 1})
    console.log(this.state.count) // print: 1

    // page view: 2
}


// 等价于
Object.assign(previousState, {
    {count: this.state.count + 1},
    {count: this.state.count + 1},
    {count: this.state.count + 1},
    {count: this.state.count + 1}
})
```

setState 批量更新 覆盖操作 取最后一次执行的结果

```javascript
onClick = () => {
    this.setState((prevState, props) => {
        return {count: prevState.count + 1}
    })

    this.setState((prevState, props) => {
        return {count: prevState.count + 1}
    })
}
```