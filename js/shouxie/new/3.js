function add (a, b, c, d) {
    return a + b + c + d;
}
// 三个参数每次只能给一个
// add(1)(2)(3)
// let result = add (1, 2 ,3);
// 函数的柯里化
/**
 * 
 * @param {function} fn
 * @return function
 */
function curry(fn) {
    // 函数嵌套函数，内部函数会被返回的外部， 并得以执行
    // 闭包空间中
    // fn
    // 慢慢的收集拿到的参数
    // fn 等在闭包空间里的永生变量在北壁薄函数申明时已经存在
    // 申明时
    let judge = (...args) => {
        if(args.length == fn.length) return fn(...args)
        return (...arg) => judge(...args, ...arg)
    }
    return judge
    // let arr = [];
    // return (args) => {
        // 函数运行时可以访问到申明时的变量
        // fn?
    // }
}

// console.log(add.length)
// 得到被闭包的函数
let addCurry = curry(add)  // 返回值 函数
// 执行函数

console.log(addCurry(1)(2)(3)(4)) ; // 一次接收一个函数， ....., 直到接受的参数等于
// add需要的参数数量， 执行， 并返回结果