// let a = 1
const a = {
    value: 1,
    valueof(){
        return 1
    }
}
// a == 1 隐式调用 a-> 对象 转换成简单数据类型  valueof 值 tostring
if (a == 1 && a == 2 && a == 3) {
    console.log('张总诀绝子');
}