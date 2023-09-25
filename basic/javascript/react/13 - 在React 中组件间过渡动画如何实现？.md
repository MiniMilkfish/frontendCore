# 13 - 在React 中组件间过渡动画如何实现？

## 是什么

## 如何实现

react-transition-group 

- enter enter-active
- exit exit-active

## 组件进场和离场动画组件

- CssTransition 过渡的动画效果
  - in -> true
    - xxx-enter
    - xxx-enter-active
  - in -> false
    - xxx-exit
    - xxx-exit-active
  ```javascript
  export default class App2 extends React.Component {
    state = {show: true}

    onToggle = () => this.setState({show: !this.state.show})

    render(){
        const {show} = this.state

        return {
            <div className={'container'}>
                <div className={'square-wrapper'}>
                    <CssTransition
                        in={show}
                        timeout={500}
                        className={'fade'}
                        unmountOnExit={true}
                    >
                        <div className={'square'}></div>
                    </CssTransition>
                </div>
                <Button onClick={this.onToggle}>Toggle</Button>
            </div>
        }
    }
  }
  ```

- SwitchTransaction 组件状态切换
- TransitionGroup 动画组
