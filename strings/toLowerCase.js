/* ------------------------------------
Implement
function ToLowerCase() that has a string 
parameter str, and returns the same string
in lowercase.

Input: "Hello"
Output: "hello"

Input: "here"
Output: "here"

Input: "LOVELY"
Output: "lovely"


from leetcode.com
------------------------------------ */

var toLowerCase = function (str) {
    var splitStr = str.split()
    var lowercaseStr = ""
    for (var i = 0; i < splitStr.length; i++) {
        lowercaseStr += splitStr[i].toLowerCase()
    }
    return lowercaseStr
};