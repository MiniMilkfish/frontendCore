# 13 - Node 的性能时什么

## CPU

- 负载
  - 某个时间段内占用和等待CUP的进程总数
- 使用率
  - CPU idle time / CPU 总时间

## 内存

```javascript
const os = require('os');

const {rss, heapUsed, heapTotal} = precess.messageUsage();

const sysFree = os.freemem()
const sysTotal = os.totalmem()

heapUsed / heapTotal node堆内存的占用率
rss / sysTotal 内存系统比例
```

## 磁盘IO

磁盘IO 花费的时间周期是内存IO 的 16.4w 倍

内存IO 比 磁盘 IO快很多倍

缓存
- redis
- memcached

## 监控

- Easy-Monitor 2.0 Node 内核性能监控 + 分析工具

```javascript
const easyMonitor = require('easy-monitor')
```

## 性能优化

- 使用Nodejs 最新版本
  - V8
  - Core代码优化
- Stream
- 代码层面
- 内存管理