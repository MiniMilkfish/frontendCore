# 9 - 说说React 中引入css 的方式有哪几种？ 区别？

## 是什么

CSS 遵循以下规则

- 编写局部（动态）CSS 不能污染其他组件CSS
- 支持动态CSS
- 支持CSS所有特性， 伪类、动画、媒体查询等
- 编写起来比较方便

vue css 特点

- style 编写样式
- scoped 局部有效
- lang 指定预处理器
- 内联样式风格

## React 引入CSS

- 在组件中直接使用
```javascript
import React, { Component } from 'react'

const div1 = {
    width: "300px",
    margin: "30px auto",
    backgroundColor: "#44014c",
    minHeight: "200px",
    boxSizing: "border-box"
};

class Test extends Component {
    construtor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div style={div1}>123</div>
                <div style={{backgoundColod: "red"}}>234</div>
            </div>
        );
    }
}

export default Test;
```
- 在组件中引入css 文件
```css App.css
/* App.css */
.title {
    color: red;
    font-size: 20px;
}

.desc {
    color: green;
    text-decoration: underline;
}
```

```js
import React, {PureComponent} from 'react'
import './App.css'

export default class App extends PureComponent {
    render(){
        return (
            <div className="app">
                <h2 className="title">Title</h2>
                <p className="desc">Desc</p>
            </div>
        )
    }
}
```
- .module.css 文件 模块引入，仅作用于当前组件 webpack modules: true, 文件命名 驼峰命名法
```js
import React, {PureComponent} from 'react'
import './App.module.css'

export default class App extends PureComponent {
    render(){
        return (
            <div className="app">
                <h2 className="title">Title</h2>
                <p className="desc">Desc</p>
            </div>
        )
    }
}
```
- css-in-js

### css-in-js

- styled-components

```javascript
export const SelfLink = styled.div`
    height: 100px;
    border: 1px solid red;
    color: red;
`;

export const SelfButton = styled.div`
    height: 160px;
    width: 160px;
    color: ${props => props.color};
    background-image: url(${props => props.src});
    background-size: 160px 160px;
`;

// app.js
import React, {PureComponent} from 'react'
import {SelfLink, SelfButton} from './style'

export default class Test extends PureComponent {
    render(){
        return (
            <div className="app">
                <SelfLink title="People's Republic of china">app.js</SelfLink>
                <SelfButton color="palevioletred" style={{color: 'pink'}} src={fist}>SelfButton</SelfButton>
            </div>
        )
    }
}

export default Test;
```
- emotion
- glamorous

### 区别

- 组件内编写css 编写方式简单，但是大量编写容易导致代码混乱
- 组件引入 .css 文件符合日常编写习惯，但是作用域是全局的， 样式之间会层叠
- 引入 .module.css 能够解决局部作用域的问题，但是需要注意写法
- css-in-js 能满足大部分使用场景