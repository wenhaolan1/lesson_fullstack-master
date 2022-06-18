// 创建单例  Singleton
// 立即执行函数是创建闭包的手段之一
let CreatSingleton = (function () {
    console.log('创建单例');
    // 多了一层作用域 作用域链
    let instance;//实例
    return function(name) { // constructor
        if (instance) { // 之前实例化过
            return instance;
        }
        this.name = name;
        return instance = this;
        // instance = this;
        // return this
    }
})()

CreatSingleton.prototype.getName = function() {
    console.log(this.name);
}

// 惰性
let singleton = new CreatSingleton('胡国斌');
let dalao = new CreatSingleton('大佬');

// console.log(Singleton.name);
console.log(singleton === dalao);
console.log(singleton.getName());// 胡国斌
console.log(dalao.getName());// 胡国斌