# 11 - Node 的中间件

## 是什么

 middleware 衔接 涵盖 其他的部分

 http

 express koa -> 回调函数

 开始 -> node模块 -> middleware(ctx) -> middleware2(ctx) -> 业务逻辑

 ## 使用

 koa: request response
 next: 执行下一次中间件的函数

 ```javascript
 // koa 中间件的封装
 app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
 })
 ```

 ```javascript
 // 在http 模块中封装 token 校验
 module.exports = (options) => async()
 ```

 ## 中间件如何添加日志模块