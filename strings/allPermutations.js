/* ------------------------------------
Given a string, return an array that contains
all permutations of it.

Example 1:
Input: 'abc'
Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
------------------------------------ */

var getAllPermutations = function(string) {
    // An empty array to store all permutations!
    var results = [];
    if (string.length == 1) {
        results.push(string);
        return results;
    }
    for (var i=0; i<string.length; i++) {
        var firstChar = string[i];
        var allOtherChars = string.substring(0, i) + string.substring(i + 1);
        // .substring() will exclude the char we're currently on
        // .substring(i+1) will continue to the end of the string
        var innerPermutations = getAllPermutations(allOtherChars);
    }
}