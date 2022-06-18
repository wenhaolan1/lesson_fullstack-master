const arr = [1, 2, 3, 4, 5, 6];
// math.round 四舍五入
// let ret = 0;
// for (let num of arr){
//     ret += num;
// }
// console.log(ret);
console.log(arr.reduce((total, currentValue) => {
    console.log(total, currentValue)
    return total + currentValue
}, 0));