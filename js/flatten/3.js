function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        console.log(arr, '////')
        arr = [].concat(...arr);
    }
    return arr
}

console.log(flatten([1, 2, [3, [4, 5]]]));
// let arr = [1, 2, [3, [4, 5]]];
// console.log(arr.some(item => Array.isArray(item))) 
// console.log(arr.every(item => Array.isArray(item)))