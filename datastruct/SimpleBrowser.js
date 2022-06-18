// js 早期版本没有class关键字
// es6 提供了， 但是class只是语法糖， 底层原型式的面向对象并没有改变
// class 传统的面向对象， Java 一样来写js

class  SimpleBrowser {
    constructor(){
        this.x = 1;
    }
    push (){

    }
}

const browser = new SimpleBrowser();
for (let key in browser){
    console.log(key);
}
console.log("push" in browser); // ?
// console.log(browser.constructor)
// console.log(browser.__proto__.__proto__);
// console.log(browser.__proto__.constructor.prototype);
// browser.push();