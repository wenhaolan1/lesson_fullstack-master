// == 类型转换 ===  简单数据类型
console.log(0 == 0);// true
console.log(-0 == +0);// true
console.log(-0 === +0);// true
console.log( 1 == '1');// true 相等判断的同时， 先去做了类型转换
console.log( 1 === '1');// false 相等判断的同时， 不会去做类型转换
console.log( 3 == true);// 谁转谁？规则
if(3){
    console.log('--------------------')
}
console.log( 0 == false);
console.log(null == undefined);
console.log(null === undefined);
console.log({} == {});//false