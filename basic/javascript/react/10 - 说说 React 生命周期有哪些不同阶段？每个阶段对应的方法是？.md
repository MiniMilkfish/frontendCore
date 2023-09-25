# 10 - 说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？

## 是什么？

流程 react v16.4

- 创建阶段
  - constructor
    - 初始化 state 状态 或者 this 上挂在方法
  - getDeriveStateFromProps
    - 静态方法 不能访问到组件实例
    - 时机： 创建或者更新阶段
      - props 或者 state 变更时
      - render 方法前调用
    - 返回新的对象作为新的 state 或者返回 null
  - render
    - 用于渲染DOM结构
  - componentDidMount
    - 挂载到真实DOM节点（render之后）之后执行  
    - 数据获取或者事件监听的操作
   
- 更新阶段
  - getDerivedStateFromProps
  - shouldComponentUpdate
    - 默认状态返回 true
    - 执行时机
      - 新的 state
      - props 变更
  - render
  - getSnapshotBeforeUpdate
    - render 后执行
    - 获取组件更新前的一些信息
  - componentDidUpdate
    - 执行时机
      - 组件更新结束后触发


- 卸载阶段 
  - componentWillUnMount
    - 组件卸载前
      - 清理一些注册监听事件、订阅或者网络请求