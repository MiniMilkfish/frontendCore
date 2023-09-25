# 1 - 说说对React 的理解？ 有哪些特性？

JS库，提供了UI层面的解决方案

单向数据流

- 数据流：数据在组件之间的传递
- 单项数据流：数据在某个节点被改动后，只会影响一个方向上的其他节点
- 数据只会影响到写一个层级的节点，不会影响上一个层级的节点
- 规范数据的流向，数据由外层向内层组件进行传递和更新
- 框架本身对数据流向的一个限制
- 保证数据的可控性

组件可以组合嵌套 构成整体页面

```javascript
class HelloMessage extends React.Component {
    render (){
        return <div>Hello {this.props.name}</div>
    }
}

ReactDOM.render(<HelloMessage name="encode" />, document.getElementById('HelloMessage'));
```

## 特性
- JSX语法
- 单项数据流
- 虚拟DOM
- 声明式编程
- Component

### 声明式编程 VS 命名式编程

编程规范

#### 命名式编程 流程

```javascript 命名式编程 流程
// 创建地图
const map = new Map.map(docuemnt.getElementById(map), {
    zoom: 4,
    center: {lat, lng}
});

// 创建标记
 const marker = new Map.marker({
    position: {lat, lan},
    titile: "Hello World"
 });

// 地图上添加标记
 marker.setMap(map);
```

#### 声明式编程 流程
``` javascript
<Map zoom={4} center{(lat, lng)}>
    <Marker position={(lat, lng)} title={'Hello World'} />
</Map>
```


### Component  
一切皆为组件， 可以是一个函数或者是一个类

```javascript
// 函数式组件
const Header = () => {
    return (
        <Jumbotron style=({backgroundColor: 'orange'})>
            <h1>TODO APP</h1>
        </Jumbotron>
    );
}

// 类组件
class Dashboard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){ 
        return (<div>
                <Header />
                <TodoList />
            </div>)
    }
}
```

特点
- 可组合
- 组件化 - 可复用
- 可维护、开发效率高

优势
- 高效：虚拟DOM 不直接操作DOM，减少交互
- 灵活：很少的第三方依赖
- 跨浏览器的兼容：标准化的API、IE8
- 声明式设计
- 组件式开发：一切皆是Component 提高代码复用率
- 单项数据流