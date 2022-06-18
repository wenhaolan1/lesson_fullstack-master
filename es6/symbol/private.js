// 立即执行函数 + 闭包
var PClass = (function() {
    var a = '私有变量';
    var getA = function() {
        console.log(a , '私有方法')
    }
    var setA = function(val) {
        a = val
    }
    //  闭包区域 变量永生
    function P () {
        // 闭包空间里的a 最为私有属性提供给类
        this.b = 1; // public
    }
    P.prototype = {
        // 私有属性
        getType: function(type) {
            if (type == 'a') {
                getA();
            }
        },
        setType: function(type, val) {
            if (type == 'a') {
                setA(val)
            }
        }
    }
    return P
})()
// public  门户开放性的
// private 按规矩来
const pclass = new PClass();
console.log(pclass.a);
pclass.getType('a')
pclass.setType('a', '11111111122222222')
pclass.getType('a')