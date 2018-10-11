
/* ------------------------------------

Given an array A of non - negative integers,
return an array consisting of all the even
elements of A, followed by all the odd 
elements of A.

You may return any answer array that 
satisfies this condition.

Example 1:
Input: [3, 1, 2, 4]
Output: [2, 4, 3, 1]
The outputs[4, 2, 3, 1], [2, 4, 1, 3], and[4, 2, 1, 3] would also be accepted.

from leetcode.com
------------------------------------ */

var sortArrayByParity = function (A) {
    var even = []
    var odd = []
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
            odd.push(A[i])
        } else {
            even.push(A[i])
        }
    }
    var result = even.concat(odd)
    return result
};


// Note: .concat() merges two arrays and returns the merged array.