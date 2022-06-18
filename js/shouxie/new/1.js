// 血缘 extends
function objectfactory() { // new
    // Person 普通函数运行一下 apply (p?) 
    let obj = {} // 没有血缘关系 原型式的面向对象 
    // 伪数组 把shift 方法借给arguments 用
    // call 手动指定函数运行时this的指向
    var Constructor = [].shift.call(arguments);
    // console.log(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments); 
    return  typeof ret === 'object' ? ret || obj : obj;
    
}

function Person(name, age) {   //编程风格， 遵守
    this.name = name;
    this.age = age;
    // return 1;
    return null; // 忽略
    // return {
    //     name,
    //     age,
    //     bb: '11'
    // }
}

// const p = new person ('利民', 18);
// console.log(p.name);
let p = objectfactory(Person, '利民', 18); // 引用式赋值
console.log(p.bb)