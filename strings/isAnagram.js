/* ------------------------------------
Given two strings s and t, write a function
to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
------------------------------------ */

var isAnagram = function(s, t) {
    // If the parameters have diff lengths,
    // they cannot be an anagram of each other.
    if (s.length != t.length) {
        return false;
    } else {
        var str1 = s.toLowerCase().split('').sort().join('').trim();
        var str2 = s.toLowerCase().split('').sort().join('').trim();
        if (str1 == str2) {
            return true;
        } else {
            return false;
        }
    }
}