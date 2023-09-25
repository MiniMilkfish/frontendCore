# 2 - state 和 props 有什么区别

## state 

setState 变更数据 -> render

```javascript
class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    updateCount(){
        this.setState((preState, props) => {
            return {
                count: prestate.count + 1,
            }
        })
    }

    render(){
        return <button onClick={() => this.updateCount()}>Clicked {this.state.count} times</button>
    }
}
```

setState 接收第二个参数 函数

```javascript
this.setState({
    {
        name: 'button',
    },
    () => {
        console.log('setState finished')
    }
})

```

## props

可以是字符串、对象、数组、回调函数

```javascript
class Welcome extends React.Component {
    render (){
        return <div>Welcome {this.props.name}</div>
    }
}

const element = <Welcome name="encode" onNameChanged={this.handleName}>
```

props 在内部是不可变的，必须通过外部组件传入新的 props -> 单项数据流

## 区别

### 相同点

- 都是JS 对象
- 都是用来传递数据
- 都能触发render

### 不同点

-  props 外部方式传递给组件； state 组件内自己管理维护
-  props 组件内不可以修改； state 组件内可以修改
-  state 是多变的