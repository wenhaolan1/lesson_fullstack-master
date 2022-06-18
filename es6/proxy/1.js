let obj = {
    age: 18
}

obj.age // get
obj.age = 'ssss'; // set 赋值的同时， 监听， 介入一下
// p 代理
let p = new Proxy(target, handler);