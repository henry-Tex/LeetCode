/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = String(x).split('').reverse().join('');
    if(String(x)===result) return true;
    return false
};
