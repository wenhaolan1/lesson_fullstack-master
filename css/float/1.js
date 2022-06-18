// 好大， 超出计算范围
let a = 11111111111111111111111111112222222222222222222222222222222222223n;  // number?  
// console.log(a + 1); // 数字太大 超过计算范围，
// console.log(0.1 + 0.2); // 小数相加 js number 没有特定的 数值类型 二进制位
// console.log(typeof a); // bigint
let b = BigInt("11111111111111111111111111112222222222222222222222222222222222222");
// console.log(b);
// console.log(a + b);
console.log(1n + 2n);
// console.log(5n/2n);
console.log(Number(5n) + 1); // 强制类型转换 不能混用  类型转换
// console.log(+ new Date()); // 类型转换  隐式类型转换
// console.log(true + 1);
// console.log("1" + 1);
console.log(typeof String (true), String(123));
console.log(+"1");
console.log(+ BigInt(1));