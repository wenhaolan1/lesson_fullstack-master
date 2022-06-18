// 给定一个非空的字符串s，最多删除一个字符。判断能否成为回文字符串
// 'aba' 本身就是回文
// 'abca' 删除 b 或 c 回文串
// 递归
// 1. 本身是回文 true
// 2. 不是回文 双指针 遍历字符串 递归
const validPalindromeOneC = function(s) {
    const len = s.length;
    let i = 0, j = len - 1;
    // 左右指针均满足对称时， 一起向中间进发
    while (i < j && s[i] === s[j]) {
        i++;
        j--;
    }

    if (isPalindrome(i + 1, j)) {
        return true
    }

    if (isPalindrome(i, j - 1)) {
        return true
    }

    function isPalindrome(st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false;
            }
            st++;
            ed--;
        }
        return true
    }
    return false
}