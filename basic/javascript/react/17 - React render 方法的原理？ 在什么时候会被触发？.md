# 17 - React render 方法的原理？ 在什么时候会被触发？

## 原理

- 类组件 render 方法

```javascript
class Foo extends React.Component {
    render() {
        return <div>Hello</div>
    }
}
```
- 函数组件 值函数组件本身

```javascript
function Foo() {
    return <div>Hello</div>
}
```

jsx => babel 插件 => 编译转化为 JS对象

```javascript
return (
    <div className="cn">
        <Header>Hello</Header>
        <Title>Hello</Title>
        <div>Hello</div>
        Right Reserve
    </div>
)

return React.createElement(
    'div',
    {
        className: 'cn'
    },
    React.createElement({
        Header,
        null,
        'hello'
    }),
    React.createElement({
        Title,
        null,
        'hello'
    }),
    React.createElement({
        'div',
        null,
        'hello'
    }),
    'Right Reserve'
)
```

React.createElement => vDom => ReactDom.render(vDom, root)

## 触发时机

```javascript
// 类组件
class Foo extends React.Component{
    state = {count: 0}

    increment = () => {
        const {count} = this.state
        const newCount = count <  10 ? count + 1: count

        this.setState({count: newCount})
    }

    render(){
        const {count} = this.state
        console.log('Foo Render')

        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

// 函数组件
function Foo(){
    const [count, setCount] = useState(0)

    function increment(){
        const newCount = count <  10 ? count + 1: count

        setCount(newCount)
    }

    console.log('Foo Render')


    return (
            <div>
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
            </div>
        )
}
```

## 总结

- jsx => React.createElement => vDom => ReactDom.render(vDom, root)

- 类组件 setState render

- 函数组件 useState 更改状态