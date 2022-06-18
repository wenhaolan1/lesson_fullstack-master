// 字符串里的算法 
// 判断一个字符串是否是回文字符串
// 正着读倒着读都一样

function isPalindrom(str) {
    const reversedStr = str.split('').reverse().join('')
    return reversedStr = str
}

// console.log(isPalindrom(srr));
// 对称性
// 从中间位置劈开 两边的两个字符串在内容上是全对称的
function isPalindrom(str) {
    const len = str.length;
    for (elt i = 0, i < len/2 ; i++) {
        if (str[i] == str[len -i -1]) { // 对称点
            return false;
        }
    }
    return true;
}