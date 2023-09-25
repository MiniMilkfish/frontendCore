# 4 - Node 的fs 模块

fs -> filesystem

node 操作文档、文件夹

```js
const fs = require('fs');
```

## 基础知识

权限位 mode

rm -rf node_modules/

r read 读取文件 不存在 异常
r+ 读取并写入文件 文件不存在 抛出异常
rs
w 写入文件
wx
w+ 读取并写入；不存在 创建，存在清空后写入
a 追加写入
a+ 不存在，支持创建

## 文件读取

```javascript
fs.readFileSync

// 同步
let buf = fs.readFileSync('1.txt', encoding, 'utf8')

// 异步
fs.readFile('1.txt', null, (err, data) => {
    // 
})
```

## 文件方法

- 写入
```javascript
const fs = require('fs')
fs.writeFileSync('2.txt', 'hello')
let data = fs.readFileSync('2.txt')
console.log(data)

encoding utf8 flag w mode

fs.writeFile('2.txt', 'hello', err => {
    if(!err){
        fs.readFile('2.txt', 'utf8', (err, data) => {
            // handle
        })
    }
})
```
- 追加写入

```javascript
appendFile

const fs = require('fs')
fs.appendFileSync('3.txt', 'world') // String buffer options
fs.readFileSync('3.txt')    // data


fs.appendfile('3.txt', 'world', err => {
    if(!err) {
        fs.readFile('3.txt', 'utf8', (err, data) => {
            // 
        })
    }
})
```

- 文件拷贝
  - copyFile
  - copyFileSync