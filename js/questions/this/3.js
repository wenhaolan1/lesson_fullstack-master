var obj = {
    // es6 对象字面量的简写方式
    hi: function () {
        // this 对象的方法调用 obj
        // 
        console.log(this, '-------------');
        // 返回值是函数 ， 高阶函数
        // 是个箭头函数
        return () => {
            console.log(this , '-------');
        }
    },
    sayHi() {
        return function () {
            console.log(this);

            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}

const func = obj.hi; // 赋值
// func(); // 调用方式是普通函数
const innerFunc = func();
innerFunc(); 