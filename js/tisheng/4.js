// 4.js 运行  readme.md  硬盘  
// 调入 内存中来 交给 CPU 运行
// I/O
// require 关键字， 引入一个模块 Stack Browser
// 4.js 执行权 内存中
// 去硬盘找 等 路程
// 异步
const fs = require('fs'); // fs filesystem  硬盘 node 内置的模块
fs.readFile('./1.js', function (err, data){
    console.log(data.toString());
}) // 耗时的
console.log('22222222222222222222222222') // 同步