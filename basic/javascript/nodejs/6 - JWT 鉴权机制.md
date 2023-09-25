# 6 - JWT 鉴权机制

## 是什么

JWT json-web-token 字符串规范

- 服务器当验证用户身份没问题 -> token
- token access

token 头部 header 负载 payload 签名 signature 通过.关联

- header
- payload 实际存放的数据
```js
{
    sub: '123123'
    time: 1236
}
```
- signature 针对header 和 payload 进行签名

secretKey

Signature = HMAC256(base64(header)+.+base64(payload), secretKey)

## 如何实现

token

- 生成 token
  - json-web-tokne
  ```js
  const crypto =require('crypto'),
    jwt = require('jsonwebtoken');

    // 
  ```
- 验证 token

## JWT 鉴权机制如何验证 token

koa-jwt