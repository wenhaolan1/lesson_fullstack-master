// 传统面向对象  
// 类是对象的属性和方法模板 抽象
// class Dog {
//     // 构造函数
//     constructor(type, color){
//         this.type = type;
//         this.color = color;
//     }
//     makeSound(){
//         console.log('汪汪汪');
//     }
//     eat (){
//         console.log('来一根骨头');
//     }
// }

// js 原型式的面向对象
// 构造函数
function Dog(type, color){
    this.type = type;
    this.color = color;
}
// 任何函数都有prototype对象
// Dog.prototype  xb  smy 什么关系？
// 共同的实例 共享的方法
// Dog.prototype {}
Dog.prototype={
    makeSound : function(){
    console.log(`${this.type} 汪汪汪`);
}
}

Dog.prototype.eat = function(){
    console.log('来一根骨头');
}

// 构造函数（属性）  原型对象（方法）  实例 
// 1. 把构造函数运行了一下
// 2. 以new de 方式运行的 this 指向 xb
const xb = new  Dog('土狗', '白色');
const smy = new Dog('萨摩耶', '白色');
console.log(xb.type);
console.log(xb instanceof Dog);
console.log(xb.__proto__.constructors);
// 私有属性 
// 实例对象都有一个__proto__ 指向构造函数的prototype对象
console.log(xb.__proto__);
// sb         Dog.prototype 之间有点关系。。。。。。
// xb 构造器有没有相应的属性，可以去原型（prototype）对象上查找
// xb.prototype.makeSound()
xb.makeSound();
// 相同的地方
console.log(xb.constructor == smy.constructor);