# 11 - React 中组件之间时如何通信？

## 是什么

## 如何通信

- 父组件 -> 子组件
  - 单项数据流 最常见的方式
    - props

```javascript
// 子组件
function EmailInput(props) {
    return (
        <lable> Email: <input value={props.email}></lable>
    )
}

// 父组件
const element = <EmailInput email="123@qq.com" />
```

- 子组件 -> 父组件
```javascript
// 父组件
class Parents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        }
    }

    getPrice(e) {
        this.setState({
            price: e
        })
    }

    render(){
        return (
            <div>
                <div> Price: {this.state.price}</div>
                <Child getPrice={this.getPrice.bind(this)} />
            </div>
        )
    }
}
```

- 兄弟组件间通信（通过父组件传递）
```javascript
// 父组件
class Parents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div>
                <SiblingA count={this.state.count} />
                <SiblingB onClick={this.setCount} />
            </div>
        )
    }
}
```
- 父组件 -> 孙组件 的跨代通信

```javascript
// context

const PriceContext = React.createContext('price')

<PriceContext.Provider value={100}> </PriceContext.Provider>

// 子组件
class MyClass extends React.Component {
    static contextType = PriceContext;

    render(){
        let price = this.context;
    }
}

```
- 非关系组件传递
  - 建议通过全局的资源管理进行通信
  - redux 状态管理库

##  总结