# 1、OSI（Open system interconnect）开放式通信互联系统

在世界范围内将计算机链接为网络的框架

OSI七层模型，每层相连有对应的协议
- 应用层
  - APP交互 特定的网络应用 进程交互规则
  - HTTP DNS SMTP 报文
- 表示层
  - 数据处理、优化
    - 数据压缩
    - 数据加密
    - 数据内容的描述
- 会话层
  - 建立表示层的管理和终止的会话
  - 负责用户通信
- 传输层
  - 不同主机进程间的通信
  - 数据传输的稳定性 TCP/UDP
- 网络层
  - 终端A->B 路由/交换节点 传输层的报文按照用户数据的标准进行分组/分包
  - IP层面
- 数据链路层
  - IP保温包拆解 -> 帧，包含head、data
- 物理层
  - 硬件相关内容，光纤

# 2、OSI 传输过程
- 终端 A
- 应用层 DATA
- 表示层 aHead DATA
- 会话层 head aHead DATA
- 传输层 TCP/UDP head aHead DATA
- 网络层 IP TCP/UDP head aHead DATA
- 数据链路层 MAC IP TCP/UDP head aHead DATA
- 物理层 BIT MAC IP TCP/UDP head aHead DATA
- 终端 B


# 3、TCP/ IP 协议簇

在多个不同网络间实现信息传输的规范

TCP 传输控制协议
- 面向链接、可靠的、基于BIT
  
IP 网络层报文包

OSI TCP/IP protocols 五层协议
- 应用层
  - OSI 应用层、表示层、会话层 合并到一个应用层
- 传输层
  - OSI 传输层 源端口 -> 目标端口 的通信方式 TCP/UDP
- 网络层
  - 未分组网络提供通信方式
- 网络接口层
  - OSI 数据链路层、物理层

# 4、TCP/IP 与 OSI

相同点:
- 层次结构类似
- 通信方式：面向连接、无连接
  
不同点：
- 协议层数差异
  - OSI 7层；TCP/IP 5层
- 协议层细分，明确的声明

# 5、TCP UDP

## UDP （User datagram protocol）

用户数据报协议，面向数据包的通信协议，针对应用层交付的数据没有任何处理，不整合不拆分，之在前面加上首部

UDP 4个字段，每个字段对应16bite
- 源端口、目标端口、长度、校验和
- UDP 首部 + 数据部分

## TCP（Tasnsimission control protocol）

传输控制协议，面向字节流/连接的通信协议，可以控制流量大小

字节流：流水形式，发送方TCP 缓存区、网络是否拥塞，适用于稳定性传输

丢包 -> 重发

发送顺序乱 -> 排序

IP 重发控制、连接管理、窗口管理

## 区别

- 可靠性 TCP > UDP 
- 连接性
  - TCP 面向连接
  - UDP 无连接
- 效率 TCP（需要各类数据校验） < UDP
- 流量控制 TCP 滑动窗口做流量控制， UDP没有
- 拥塞控制： TCP有，UDP没有

# 6、GET POST

HTTP 发送请求的方法

GET 获取指定资源的表示方式，只适用于获取数据

POST 数据传输到指定的资源位，有副作用

## 区别

- GET 在浏览器可以回退，POST 不可以
- GET cache 在浏览器， POST 不可以
- GET URL编码，POST 多种编码方式
- GET 数据类型只接受 ASCII， POST都可以
- POST 更适合传输安全数据

## 具体实际开发区别
- 参数位置
  - GET /index.html?name=xxx HTTP/1.1
  - POST /index.html HTTP/1.1
    - name=xxx
- 参数长度
  - HTTP没有对Body 和 URL 长度限制 2000字节
  - encodeURL
- 安全性
  - GET 参数在地址栏可见
  - POST 参数不可见

# 7、TCP的三次握手：建立连接

# 8、TCP的四次挥手：停止连接

# 9、TCP的握手、挥手的常见问题

- 为什么不是两次握手

# 10、TCP常见的请求头

# 11、HTTP常见的请求头

- Cache-Control no-cache
- Connection: keep-alive Upgrade
- Cookie: set-cookie
- Content-Length
- Content-Type text/plain application/x-www-form-urlencoded
- Date: Date()
- Expect
- Host
- IF-Match
- If-Modified-Since
- IF-None-Match
- User-Agent

# 12、HTTP常见的请求头使用场景

## 协商缓存

- Last-Modified、If-Modified-Since
- ETag、If-None-Match

## 强缓存

- expires
- cache-control

## 会话状态

- cookie set-cookie <4k
- K=V

# 13、HTTP 状态码（Http Status Code）

用以表示网页服务器超文本传输协议响应状态的 3 位数数字代码

所有状态码的第一个数字代表了响应的五种状态之一

- 1xx 请求被接收，但是需要继续处理
  - 100 continue 
    - 临时响应，且未被拒绝，客户端需要继续发送
  - 101 switching protocols
    - HTTP/1.1 =》 HTTP/1.2
  - 102 processing
    - 处理将被继续执行 

- 2XX 服务端接收
  - 200 ok
    - 请求成功
  - 201 created
  - 202 Accepted
  - 203 Non-Authoritative Information
  - 204 No Content
  - 205 Reset Content
  - 206 Partial Content
  - 207 207 Multi-Status

- 3XX 要完成请求但需要进一步操作，适用于重定向
  - 300 Multiple Choices
  - 301 Moved Permanently
  - 302 Move Temporarily
  - 303 See Other
  - 304 Not Modified
  - 305 Use Proxy
  - 306 Switch Proxy
  - 307 Temporary Redirect

- 4xx 请求错误
  - 400 Bad Request
  - 401 Unauthorized
  - 402 Payment Required
  - 403 Forbidden
  - 404 Not Found
  - 405 Method Not Allowed
  - 406 Not Acceptable
  - 407 Proxy Authentication Required
  - 408 Request Timeout
  - 409 Conflict
  - 410 Gone

- 5xx/ 6xx 服务器错误
  - 500 Internal Server Error
  - 501 Not Implemented
  - 502 Bad Gateway
  - 503 Service Unavailable
  - 504 Gateway Timeout
  - 505 HTTP Version Not Supported
  - 506 Variant Also Negotiates
  - 507 Insufficient Storage
  - 509
  - 510
  - 600

# 14、状态码使用场景

- 100


# DNS（Domain names system） 域名系统
负责讲域名翻译成IP