# 30 - WeakMap

## 是什么

WeakMap 对象是一组键/值对的集合，其中键是弱引用的。其键必须是对象，而值可以是任意的。

WeakMap 的 key 只能是 Object 类型。 原始数据类型 是不能作为 key 的（比如 Symbol）。

## 核心

WeakMap 可以把一个对象所关联的数据和该对象的生命周期关联起来。当对象被销毁，其关联的数据也被释放

## 方法

- get()
  - 返回 WeakMap 中与 key 相关联的值，如果 key 不存在则返回 undefined
- set()
  - 给 WeakMap 中的 key 设置一个 value。该方法返回一个 WeakMap 对象
- has()
  - 返回一个布尔值，断言一个值是否已经与 WeakMap 对象中的 key 关联
- delete()
  - 删除 WeakMap 中与 key 相关联的值。删除之后， WeakMap.prototype.has(key) 将会返回 false

## 应用

- 通过 WeakMap 缓存计算结果
- 在 WeakMap 中保留私有数据
- 以 DOM节点作为键名