# 14 - 说说你在React 项目是如何捕获错误的？

## 是什么？


## 如何处理？

react v16 引入错误边界的概念 -> 组件，捕获并监听发生在其子组件任何位置的JS错误，并打印错误、降级子组件，从而避免影响渲染

条件（渲染层面，触发声明周期）

- 使用了 static getDerivedStateFromError()  // UI 降级
- 使用了 componentDidCatch()    // 打印错误信息

```javascript
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {hasError: false}
    }

    static getDerivedStateFromError (error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报到服务器
        logErrorToMyService(error, errorInfo);
    }

    render(){
        if(this.state.hasError) {
            // 你可以自定义降级后的UI 并渲染
            return <h1>Something went wrong.</h1>
        }

        return this.props.children;
    }
}

// 使用
<ErrorBoundary>
    <App />
</ErrorBoundary>
```

渲染层面无法捕获以下异常，只能通过JS tra-catch 捕获
- 事件处理
- 异步代码
- 自身抛出的错误
- 服务端渲染

```js
class MyComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = { error: null}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        try {
            // 执行操作，如果有错误则会抛出
        }  catch (error) {
            this.setState({ error })
        }
    }

    render(){
        if(this.state.error) {
            return <h1>Caught an error.</h1>
        }

        return <button onClick={this.handleClick}>Click Me</button>
    }
}
```

监听 onerror 事件
```js
window.addEventListener('error', function(error){...})
```