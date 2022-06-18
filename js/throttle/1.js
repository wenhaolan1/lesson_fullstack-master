// - 异步相关
//     sleep 函数，可以让程序等一段事件， 再往下执行
//     单线程 + 同步任务 + 异步任务

//     promise 通用的异步同步化解决方案
//     + then able
// function sleep(t) {

// }

// 同步任务 + 耗时， js 单线程 sleep
// js 通过同步任务的耗时 阻塞式的sleep
// Java PHP 等语言都有内置sleep函数，js 有吗？
// sleep(3000)  js 单线程 脆弱 不允许他有
const t1 = + new Date()
while((+ new Date()) - t1 <= 3000) {
    console.log('---------------')
}
console.log(+ new Date);