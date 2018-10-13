/* ------------------------------------
Given a string, determine if it is a palindrome,
considering only alphanumeric characters and
ignoring cases.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false

from leetcode.com
------------------------------------ */

var isPalindrome = function(str) {
    var regex =/[\W_]/g
    var newStr = s.toLowerCase().replace(regex, "");
    var reversedStr = newStr.split("").reverse().join("");
    if (reversedStr == newStr) {
        return true;
    } else {
        return false;
    }
}

// Alternate solution (faster runtime)
var isPalindrome = function (s) {
    var regex = /[\W_]/g
    var newStr = s.toLowerCase().replace(regex, "");
    for (var i = 0; i < Math.floor(newStr.length / 2); i++) {
        if (newStr[i] != newStr[newStr.length - 1 - i]) {
            return false
        }
    }
    return true
}