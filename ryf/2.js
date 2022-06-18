// 面向对象oop的基本任务是封装， 属性和方法，成为实例们的模板
// 猫  name  color  
// js 对象与其他语言不一样，对象字面量 
// 猫  模板
let Cat = {
    name: '',
    color: ''
}
// 实例
// js 本没有类， 不需要，{}
let tom = {
    nemw:'Tom',
    color:'black'
} 

let cafai = {
    name:'加菲猫',
    color:'brown'
}
// 有什么缺点？
//     1. 写起来麻烦，没有构造函数，可以把实例化属性的过程封装一下
//     2. 实例与原型没有联系