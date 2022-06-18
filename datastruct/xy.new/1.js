// 怎么创建数组？
// - 数据结构 代码的优化是有意义的
// - 平时开发中， 算法用的少一些
// - 面试？ 针对面试 去学习就可以的？
// - 算法导论， 学校数据结构书  效率低
// - 算题 leetcode js

// 基本数据结构 访问第几个元素（行为）时间复杂度O(1)
// const arr = []; // easy way lenth 没定， items类型也没有定？ 随意
// 使用构造函数， 可不是为了创建空数组这么无聊
// 数组比较易用，相对于链表 默认用数组来实现
// const arr = new Array(7) // <7 empty items> item 类型？
// console.log(arr);
const arr = (new Array(7)).fill(1);
console.log(arr);