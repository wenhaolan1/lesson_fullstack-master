// 重复了  违反了DRY原则
const name = 'snickers';
const age =2;
// console.log('My dog '+ name +' is ' + age + ' years old ');
const name2 = 'xx';
const age2 = 1;
// console.log('My dog '+ name2 +' is ' + age2 + ' years old ');
// 函数表达式
// 首字符大写
// 匿名函数
// 箭头函数  不需要 function 关键字  return关键字也可以不要
// 如果函数体只有一句代码，应且是返回值的话， 连花括号都省掉
// 学习成本，
const sayMyDog = (name, age) =>  `MY dog ${name} is ${age} years old`;
    // es6  字符串模板
    // return 'my dog' + name2 + 'is' + age2 + ' years old';
console.log(sayMyDog(name, age));