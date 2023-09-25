# 19 - 说说 React Jsx 转换成真实 DOM 过程？

## 是什么

jsx => babel => React.createElement => vDom => RenderDom.render => rDom

```javascript
const  vDom = <h1>Hello World</h1>
console.log(vDom)

const root = document.getElementById('root')
ReactDOM.render(vDom, root)
```

```javascript
const vDom = React.createElement(
    'h1',
    {
        className: 'hClass', id: 'hId'
    },
    'Hello World'
)
```

- 首字母小写 原生DOM标签 编译成字符串
- 首字母大写 自定义组件 编译成对象

## 过程（细节）

- 节点分为四类
  - 原生标签节点
  - 文本节点
  - 函数组件
  - 类组件

```javascript
function createElement(type, config, ...children) {
    if(config) {
        delete config.__self
        delete config.__source
    }

    // 源码中做了详细的处理，比如过滤掉 key、ref 等
    const props = {
        ...config,
        children: children.map((child) => {
            typeof child === 'object' ? child: createTextNode(child)
        })
    }

    return {type, props}
}

function createTextNode(text) {
    return {
        type: TEXT,
        props: {
            children: [],
            nodeValue: text
        }
    }
}

export default {createElement,}
```

ReactDom.render(element, container)


## 总结

