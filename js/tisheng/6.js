// 'use strict';    编译阶段 a 没有定义
// console.log(a);// error 
// 变量提升的是变量声明， 赋值操作还是在执行阶段
// console.log(b); // 报错  undefined
// var b = 2;

var b ;
console.log(b);
b = 2;