# 1 - 动态执行JS

```js
var a = 1;

function exec(code) {}

exec('console.log(a)');
```

# 方案

 - eval
   - 同步代码、局部作用域
   - ```js
    eval(code);
   ```
 - new Function
   - 同步代码、全局作用域
   - ```js
    new Function(code)();
   ```
 - setTimeout
   - 异步代码、全局作用域
   - ```js
    setTimeout(code, 0);
   ```
 - 脚本标签 <script>
   - ```js
    var a = 1;
    function exec(code) {
      var script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
    }
    exec('console.log(a)');
   ```
   - 同步代码、全局作用域