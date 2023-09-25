# 10 - Node 的 eventEmitter

eventEmitter Node 事件驱动

fs.readSteam -> eventEmitter.on()

## 基本使用

观察者模式

主体 被观察者 其他对象派发 观察者

```javascript
const EventEmitter = require('events')

class DemoEventEmitter extends EventEmitter

const demoEmitter = new DemoEventEmitter()

function cb(){}

demoEmitter.on('event', function)
demoEmitter.emit('event')
```

## 如何实现