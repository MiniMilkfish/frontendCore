# 8 - Node 的 Stream

Stream 数据传输手段 端到端信息交互方式

Buffer 单位

完整读、写 逐块读取

source dest pipe

## Steam 种类

- 可写流 fs.createWriteStream、HTTP response
- 可读流 fs.createReadStream、HTTP request
- 双工流 net.Socket
- 转换流 在数据写入/读取 时修改数据的流

```javascript
const {Duplex} = require('stream');
```

## 使用场景

IO操作 http fs

大文件分批次的读写（分段的IO操作） 水管一样 流动 pipe

返回文件给客户端

```js
const server = http.createServer((req, res) => {
    const = req.method;
})
```