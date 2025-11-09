# 第 2 天：CSS 盒子模型（Box Model）

## 学习目标
- 理解盒子模型四部分：Content、Padding、Border、Margin
- 掌握 `box-sizing` 的两种模式及差异
- 能用 `width`/`height`、`padding`、`border`、`margin` 控制布局
- 通过示例与练习巩固概念与实操

## 盒子模型概念
- 盒子模型描述页面元素的内容与周围空间组织方式。
- 四个部分：
  - Content（内容）：元素实际内容区域，设置宽高作用于此（默认）。
  - Padding（内边距）：内容与边框之间的空白。
  - Border（边框）：围绕元素的框线。
  - Margin（外边距）：元素与外部其他元素的间距。

```text
[ Margin ]
  [ Border ]
    [ Padding ]
      [ Content ]
```

## box-sizing 属性
- 决定宽高计算的基准：
  - `content-box`（默认）：`width`/`height` 仅包含内容区域。
  - `border-box`：`width`/`height` 包含内容 + 内边距 + 边框。
- 示例：设置 `width: 100px`
  - `content-box`：内容 100px，实际占用会加上 `padding` 与 `border`
  - `border-box`：整体 100px，内容会被 `padding` 与 `border` 吃掉一部分

## 控制盒子模型的属性
- `width`、`height`：宽高
- `padding`：内边距（支持四向与简写）
- `border`：边框（粗细、样式、颜色）
- `margin`：外边距（支持四向与简写）

## 示例（对比两种 box-sizing）
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>盒子模型对比</title>
  <style>
    .demo {
      width: 200px;
      height: 200px;
      padding: 20px;
      border: 10px solid #000;
      margin: 20px;
      color: #fff;
      display: inline-block;
      vertical-align: top;
    }
    .content-box {
      background: #3b82f6; /* 蓝 */
      box-sizing: content-box; /* 默认 */
    }
    .border-box {
      background: #ef4444; /* 红 */
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <h1>CSS 盒子模型对比</h1>
  <div class="demo content-box">content-box</div>
  <div class="demo border-box">border-box</div>
</body>
<script>
  // 可选：在控制台打印两个盒子的 offset 尺寸对比
  console.log('content-box:', document.querySelector('.content-box').offsetWidth,
              document.querySelector('.content-box').offsetHeight);
  console.log('border-box:', document.querySelector('.border-box').offsetWidth,
              document.querySelector('.border-box').offsetHeight);
</script>
</html>
```

## 练习任务
- 创建一个 `div` 设置固定宽高，分别使用 `content-box` 与 `border-box`，观察差异。
- 修改 `padding`、`border`、`margin` 的数值与方向，观察对布局与占用空间的影响。
- 在页面中放置多个盒子，尝试不同 `margin` 布局组合（例如左右并排、上下间距）。

## 扩展与提示
- 常见布局经验：
  - 全局使用 `box-sizing: border-box` 可减少尺寸计算麻烦。
  - 大量水平排列元素时，优先考虑统一 `margin` 与 `padding` 策略。
- 额外概念（可自行探索）：
  - 外边距折叠（margin collapsing）：垂直方向相邻块级元素的 `margin` 可能合并为更大值。
  - `outline` 与 `border` 区别：`outline` 不占据空间，常用于强调焦点。

```css
/* 可选的全局设置：让所有元素更易于尺寸控制 */
*, *::before, *::after {
  box-sizing: border-box;
}
```

## 学习总结与反思
- 清晰理解四部分与 `box-sizing` 的区别，能根据需求选择模式。
- 通过调整 `padding`/`border`/`margin` 控制元素占用空间与布局。
- 记录练习中的观察与问题，持续优化布局与尺寸的思维模型。