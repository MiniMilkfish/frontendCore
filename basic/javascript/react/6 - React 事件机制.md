# 6 - React 事件机制

## 是什么

事件注册、事件合成、事件冒泡、事件派发 -> 合成事件

模拟DOM事件所有能力的一个事件对象

```javascript
const button = <button onClick={handleClick}>按钮</button>

const handleClick = e => {
    // 获取原生DOM 事件
    console.log(e.nativeEvent)
}
```

## 区别

- 事件名称命名方式不同
```javascript
// 原生事件绑定方式
<button onclick="handleClick()">button</button>

// react 合成事件绑定方式
const button = <button onClick={handleClick}>button</button>
```
- 事件处理函数书写不同

## 执行顺序

合成事件 原生事件执行顺序

```javascript
import React, {Component} from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.parentRef = React.createRef()
        this.childRef = React.createRef()
    }

    componentDidMount() {
        console.log('React componentDidMount')

        this.parentRef.current?.addEventListener('click', ()=>{
            console.log("原生事件：父元素DOM 事件监听！")           // 2
        });

        this.childRef.current?.addEventListener("click", ()=> {
            console.log("原生事件：子元素DOM 事件监听！")           // 1
        })
        document.addEventListener("click", ()=> {
            console.log("原生事件：document DOM 事件监听！")        // 5
        })
    }

    parentClickFun = () => {
        console.log("React 事件：父元素事件监听！");                // 4
    }

    childClickFun = () => {
        console.log("React 事件：子元素事件监听！");                // 3
    }

    render(){
        return (
            <div ref={this.parendRef} onClick={this.parentClickFun}>
                <div ref={this.childRef} onClick={this.childClickFun}>
                    分析事件直行顺序
                </div>
            </div>
        )
    }
}

export default App;
```

总结

- React 所有事件都是挂载在document 对象上
- 先触发真实DOM事件，再触发React 事件，最后执行document 上挂在的事件

阻止冒泡行为

- 阻止合成事件间的冒泡 
  - e.stopPropagation()
- 阻止合成事件与document 之间的冒泡
  - e.nativeEvent.stopImmediatePropagation()
- 阻止合成事件与原生事件的冒泡
  - e.target
```javascript
document.body.addEventListener('click', ()=>{
    if(e.target && e.target.matchs('div.code')) {
        return;
    }

    this.setState({ active: false})
})
``` 

## Event 事件机制总结

- React 注册的事件最终绑定在 document 这个DOM 上，减少了内存开销
- React 有一套自己的合成事件（实现了一套完整的冒泡机制，队列机制从出发组件到父组件回溯）