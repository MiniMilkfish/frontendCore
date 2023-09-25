# 5 - Node 的 buffer 文件方法

 二进制 Buffer 内存

 ```js
 const buffer = Buffer.form('123')

 '123' => 16进制 -> buffer 1 字节
 ```

 ## 使用方法

 ```javascript
 const b1 = Buffer.form('10').toString()
 const b2 = Buffer.alloc(10, 1)    // 大小是10的缓冲区, 值为1

 utf8
 ascii
 base64
 hex
 ```