# 4 - React 中类组件和函数组件的理解？有什么区别？

### 类组件

- 通过使用ES6 类的编写方式编写组件
- 继承React.Component
- this.props 访问父组件参数
- render() { return ReactEle() }

```javascript
// 类组件实例
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return <div>Hello, {this.props.name}</div>
    }
}

const element = <Welcome name="encode" />
```

### 函数组件

- 编写函数的方式实现组件，即纯函数组件
- 无声明周期

```javascript
// 简单的函数组件实例
function Welcome (props) {
    return <div>Hello, {props.name}</div>
}

const element = <Welcome name="encode" />
```

### 区别

- 编写方式

```javascript
// 函数组件
function Hello (props) {
    return <div>Hello,{props.name}</div>
}

// 类组件
class Hello extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return <div>Hello,{this.props.name}</div>
    }
}
```
- 状态管理
  - react V16 hooks 出来之前，函数组件是无状态的
  ```js
  const FunctionalComponent = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
  }
  ```
- 生命周期
  - 函数组件本身不存在声明周期（声明周期钩子都是继承自 React.Component） 或者使用 hooks useEffect
  
  ```javascript
  const FunctionalComponent = () => {
    useEffect(() => {   
        // componentDidMount() 组件挂载时直行
        console.log('Hello');

        return () => { 
            // componentWillUnmount() 组件卸载时直行
            console.log('bye');
        }
    }, [])

    return <h1>Hello, World</h1>
  }
  ```
- 调用方式
  - 函数组件直接调用，类组件需要实例化
  ```js
  // 函数组件
  function Sayhi(){
    return <p>Hello</p>
  }

  // 函数组件 - React 内部调用
  const sayhi = Sayhi(props);

  // -----------------------------

  // 类组件
  class Sayhi extends React.Component{
    render() {
        return <p>Hello</p>
    }
  }

  // 类组件 - React 内部调用
  const sayhi = new Sayhi(props, );
  const result = sayhi.render();
  ```
- 获取渲染的值
  ```js
  // 函数组件
  function ProfilePage(props) {
    const showMessage = () => {
        alert('fllow', props.username)
    }
    const handleClick = () => {
        setTimeout(showMessage, 3000)
    }

    return <button onClick={handleClick}>Fllow</button>
  }

  // 类组件
  class ProfilePage extends React.Component{
    constructor(props){
        super(props);
    }

    showMessage(){
        alert('fllow', this.props.username)
    }
    handleClick(){
        setTimeout(showMessage, 3000)
    }

    render(){
        return <button onClick={this.handleClick.bind(this)}>Fllow</button>
    }
  }
  ```