- question 1
    -Promise    理解
        1. Promise 是一个类， es6 提供的异步代码同步化的解决方案
        2. new  Promise 构造函数执行过程都是同步任务 state pending
        3. p1.then()  一个异步任务  进入到 event loop
        4. resolve fulfilled 执行完成
        5. 原来的单线程执行栈 同步代码， 执行完后   程序进入idle
        6. 去event loop 去找 pending？ 不执行then : 执行fulfilled

- question2
    js 执行 看成是任务 event 时间 loop 循环 任务有先后
    1. 全局作用域 最外层的 宏任务 没有必要event loop 程序会进入idle 状态 js 会自动轮询
    2. promise.then 进入event loop
        微任务的身份
        稍后的新的队列中
    3. event loop中
        微任务先执行
        宏任务后执行
    4. js 就是依靠 单线程(好学， 简单) + 同步任务(快速)|异步任务(复杂) + event loop 运行的简单且高效(后台)
        (单线程快速运行， 进入idle 状态 event loop 里找下有没有到了要执行)