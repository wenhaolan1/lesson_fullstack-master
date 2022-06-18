let a = 1.239;
// 奇怪的地方？ js 比较复杂， 
// a number 简单数据类型  不是对象
// a.toFixed 对象
// 在js 中， 基于对象（object-base）的语言
// toFixed(a)
// 你遇到的所有东西都是对象，编程风格  
// console.log(a.toFixed(2)); // 取两位小数
var n1 = new Number(2);// 
console.log(n1, typeof n1, n1.valueOf());
// console.log(typeof null); // bug  32位  前三位 000
// console.log(typeof a, 0.1+0.2);