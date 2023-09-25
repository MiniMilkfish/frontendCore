# 7 - React 事件绑定的方式有哪些？区别？ 

## 是什么

事件名通过小驼峰书写 onClick

```javascript
class ShowAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    showAlert() {
        console.log('hi')   // print: hi
        console.log(this);  // print: undefined
    }

    render(){
        return (
            <div>
                <button onClick={this.showAlert}>show</button>
            </div>
        )
    }
}
```

## 如何绑定

- render 方法中使用bind, 每次render 都要重新绑定 比较影响性能
```javascript
class ShowAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    showAlert() {
        console.log('hi')   // print: hi
        console.log(this);  // print: {}
    }

    render(){
        return (
            <div>
                <button onClick={this.showAlert.bind(this)}>show</button>
            </div>
        )
    }
}
```
- render 方法中使用箭头函数, 避免render 时的重复绑定（ => 没有自己的作用域，指向父层的作用域）
```js
class ShowAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    showAlert() {
        console.log('hi')   // print: hi
        console.log(this);  // print: {}
    }

    render(){
        return (
            <div>
                <button onClick={ e=> this.showAlert(e)} >show</button>
            </div>
        )
    }
}
```
- constructor 中 bind, 避免render 时的重复绑定
```js
class ShowAlert extends React.Component {
    constructor(props) {
        super(props);
        
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert() {
        console.log('hi')   // print: hi
        console.log(this);  // print: {}
    }

    render(){
        return (
            <div>
                <button onClick={ this.showAlert}>show</button>
            </div>
        )
    }
}
```
- 定义阶段使用箭头函数绑定, 避免render 时的重复绑定
```js
class ShowAlert extends React.Component {
    constructor(props) {
        super(props);
        
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert = () => {
        console.log('hi')   // print: hi
        console.log(this);  // print: {}
    }

    render(){
        return (
            <div>
                <button onClick={ this.showAlert}>show</button>
            </div>
        )
    }
}
```