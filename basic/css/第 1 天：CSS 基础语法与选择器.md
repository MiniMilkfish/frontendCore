# 第 1 天：CSS 基础语法与选择器

## 学习目标
- 了解 CSS 基本结构：选择器 + 声明块
- 掌握常用选择器：元素、类、ID、通配符、后代、组合
- 学会在 HTML 中通过内联、内嵌、外部样式表应用样式
- 通过练习巩固选择器与基础语法

## 基础语法
- CSS 基本结构：选择器 + 声明块
- 选择器：告诉浏览器哪些 HTML 元素应用样式
- 声明块：包含属性和值，以 `property: value;` 形式；多个声明用分号分隔

```css
p {
  color: blue;
  font-size: 16px;
}
```

- 示例说明：
  - `p` 是元素选择器，匹配所有 `p` 标签
  - `{ color: blue; font-size: 16px; }` 是声明块，包含两个样式属性

## 常用选择器
- 元素选择器：`p { ... }` 选择所有 `p` 标签
- 类选择器：`.button { ... }` 选择 `class="button"` 的元素
- ID 选择器：`#header { ... }` 选择 `id="header"` 的元素
- 通配符选择器：`* { ... }` 选择页面上的所有元素
- 后代选择器：`div p { ... }` 选择所有 `div` 内部的 `p` 标签
- 组合选择器：`h1, h2 { ... }` 同时选择多个元素

## 在 HTML 中应用 CSS
- 内联样式：`style` 属性直接写在元素上
- 内嵌样式：在 `head` 中使用 `style` 标签
- 外部样式表：使用 `link` 标签引入 `.css` 文件

## 练习
目标：通过实践巩固选择器与基础语法。

示例页面（内嵌样式）：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>第一个网页</title>
  <style>
    h1 {
      color: red;
      font-size: 32px;
    }
    .btn {
      background-color: green;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
    }
    #intro {
      font-size: 18px;
      color: darkgray;
    }
  </style>
  <!-- 如使用外部样式：<link rel="stylesheet" href="styles.css" /> -->
</head>
<body>
  <h1>欢迎来到我的第一个网页</h1>
  <p id="intro">这是我的第一个网页</p>
  <button class="btn">点击我</button>
</body>
</html>
```

## 扩展练习
- 为按钮 `.btn` 添加悬停效果：`background-color: darkgreen`
- 将段落 `#intro` 设置为加粗或倾斜

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>交互增强</title>
  <style>
    h1 {
      color: red;
      font-size: 32px;
    }
    .btn {
      background-color: green;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    .btn:hover {
      background-color: darkgreen;
    }
    #intro {
      font-size: 18px;
      color: darkgray;
      font-weight: bold;     /* 可选：加粗 */
      font-style: italic;    /* 可选：倾斜 */
    }
  </style>
</head>
<body>
  <h1>欢迎来到我的第一个网页</h1>
  <p id="intro">这是我的第一个网页</p>
  <button class="btn" onclick="alert('你点击了按钮')">点击我</button>
</body>
</html>
```

## 学习总结与反思
- 回顾 CSS 基础语法与选择器的使用
- 尝试将样式应用到已有页面，形成编写习惯
- 整理今天笔记，下一步深入学习盒子模型
- 每周末复习，巩固所学