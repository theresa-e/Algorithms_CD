/* ------------------------------------

You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair.The results string should not contain any parentheses.

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

from codesignal.com
------------------------------------ */

function reverseParentheses(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ")") {
            // Find where closing parenthesis is and reverse contents
            console.log('s.substring(0, i) --> ', s.substring(0, i))
            console.log('s.substring(0, i) --> ', s.substring(i + 1))
            s = s.substring(0, i) + s.substring(i + 1);
            // decrement i to go to content inside of parantheses
            i--;
            var reversed = "";
            // condition is met when we reach the opening parantheses
            while (s[i] !== "(") {
                reversed += s[i];
                s = s.substring(0, i) + s.substring(i + 1);
                i--;
            }
            s = s.substring(0, i) + reversed + s.substring(i + 1);
            i += reversed.length - 1;
        }
    }
    return s;
}