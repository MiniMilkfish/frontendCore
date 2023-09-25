# 18 - 说说 Real DOM 和 Virtual DOM 的区别？优缺点？

## 是什么？

Real DOM 文档对象模型

Virtual DOM 模拟Real DOM 的 JS 对象

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

React.createElement

- 标签名 h1 span div ...
- 属性 id class style ...
- children

React.createElement  返回的内容 vDom

- key
- props
- type


## 区别

- vDom 不会进行重排、重绘； rDom会进行重排、重绘
- 消耗
  - vDom vDom增删改 -> rDom 差异增删改 -> 重排、重绘
  - rDom rDom完全的增删改 重排 重绘

## 优缺点

- rDom
  - 优势
    - 易用
  - 缺点
    - 效率低
    - 性能差
- vDom
  - 优势
    - 简单方便
    - 性能提升
    - 跨平台
  - 缺点
    - 针对性能极高的场景没法做到极致的优化
    - 首次渲染大量DOM 速度稍慢