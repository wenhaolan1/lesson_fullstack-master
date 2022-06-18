// 本身 内部暗流涌动
// 两个世界 函数 [call] 构造函数[constructor]
// [call] 指向全局
// 
'use strict';
function Dog (type) {
    console.log(this);
    this.type = type;
}
// 心流时刻
// 函数都有this, 不管他是以什么方式运行
// this是一个指针， 和运行方式相关
Dog();  // 普通函数 this?  运行环相关  node后端 global
// new 关键字 运算符
let dog = new Dog(); // this指向 实例化后的对象 作为构造函数