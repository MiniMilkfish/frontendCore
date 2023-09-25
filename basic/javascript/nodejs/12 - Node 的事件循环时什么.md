# 12 - Node 的事件循环时什么

node libuv multiple platform async IO

EVENT_QUEUE

## EVENT_LOOP 事件循环机制 先进先出

- timers: setTimeout setInterval
- timers 检查阶段： setTimeout setInterval cb
- IO cb
- 闲置时间： idle 系统内部
- poll: 轮询阶段
- check: setImmediate
- close cb: socket.on('close)

## 事件循环流程

每个阶段都会执行对应的队列

process.nextTick 事件循环上、下阶段的中间过渡，插队

宏任务

time queue: setTimeout setInterval

poll queue: IO

check queue: setImmediate

close queue: close

- nextTick microtask queue
- other microtask queue
- timer queue
- poll queue
- check queue
- close queue

## 常见面试题

```javascript
async function async1(){
    console.log('async1 start')                     // 2
    await async2()
    console.log('async1 end')                       // 4
}

async function async2(){
    console.log('async2')                           // 3
}

console.log('script satrt')                         //  1 同步任务 最先执行

setTimeout(function(){
    console.log('setTimeout0')                      // 11 timer queue
}, 0)

setTimeout(function(){
    console.log('setTimeout2')                      // 13 timer queue 200ms
}, 200)

setImmediate(() => console.log('setImmediate'))     // 12 check queue

process.next(() => console.log('nextTick1'))        // 8 当前回调函数完成之后执行

async1()

process.nextTick(() => console.log('nextTick2'))    // 9

new Promise(resolve => {
    console.log('promise1')                         // 5
    resolve()
    console.log('promise2')                         // 6
}).then(() => {
    console.log('promise3')                         // 10
})

console.log('script end')                           // 7

执行结果：
1 script satrt
2 async1 start
3 async2
4 promise1
5 promise2
6 script end
7 nextTick1
8 nextTick2
9 async1 end
10 promise3
11 setTimeout0
12 setImmediate
13 setTimeout2
```