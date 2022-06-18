function f1(callback) {
    // console.log('f1');
    setTimeout(() => {
        console.log('f1');
        callback();
    },2000)
}

function f2() {
    console.log('f2');
}
// 单线程的JS 设计了异步任务机制来解决阻塞及程序僵持问题
// 代码编写顺序和执行顺序有差异，有损可读性
// f1();// 花比较多的时间。 settimeout 异步
// f2();
// 解决异步任务同步化问题
f1(f2) // 高阶函数