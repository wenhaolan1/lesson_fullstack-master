// 数组在leetcode 题目 两数相加 
// 数组相关，算法？ 排序（冒泡 两重for，插入）， 二分算法（有效的提升效率），动态规划
// 冒泡 暴力解决 淳朴  两重for 循环 i j  nums 

// 1. 基本思路？ 两重循环
// 2. 反思？
//      算法超时？O(n)  直觉？用空间（软盘？廉价）换时间（值钱），把他优化成一重循环
// [] O(1)   {} Key:val O(1)
const nums = [2,7,11,15]
const target = 9;
let obj = {}; // key  cal
for (let i = 0; i < nums.length; i++) {
    // nums[i] 2 7 11 15  停下来？
    // target nums[i] + obj val = target
    // 差的算法
    
    // 下标 i 
}