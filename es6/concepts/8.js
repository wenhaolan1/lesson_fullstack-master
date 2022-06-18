const obj = {
    name : '杨zz',
    food : '粑粑',
    sex : '男'
}
// const food = obj.food;
// es6 提供了优雅的api 解构
const { name,food } = obj;
console.log(name, food);
// const name = '123';

function introduce({name, food}) {
    console.log(`${name},旅梦的好盆友， 大佬， 最喜欢的食物是${food}`);
}

introduce(obj);