// index.html
// js单点入口
// require 属于node 后端运行环境关键字， 不支持浏览器前端运行环境
// JS  不同运行环境下有差异
// 模块module化方案
// js 在早期没有模块化方案  早期任务比较简单， 不需要模块化
// commonJS 模块化方案 require + module。export
// es 模块化方案 import form + export default       react   vue 1.5:1
// 在输出后就结束了

var mod = require('./lib'); //  require 关键字
console.log(mod.counter);
mod.incCounter();
console.log(mod.counter);