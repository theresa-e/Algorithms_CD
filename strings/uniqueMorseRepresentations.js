/* ------------------------------------

International Morse Code defines a standard encoding
where each letter is mapped to a series of dots and
dashes, as follows: "a" maps to ".-", "b" maps to "-...",
"c" maps to "-.-.", and so on.

Now, given a list of words, each word can be written
as a concatenation of the Morse code of each letter.F
or example,"cab" can be written as "-.-.-....-", (which
    is the concatenation "-.-." + "-..." + ".-"). We 'll
    call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
    Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation:
    The transformation of each word is:
    "gin" - > "--...-."
    "zen" - > "--...-."
    "gig" - > "--...--."
    "msg" - > "--...--."

There are 2 different transformations, "--...-."
and "--...--.".

from leetcode.com
------------------------------------ */

// note: function expression vs function declaration

var uniqueMorseRepresentations = function (words) {
    // get the key value pairs
    var morseKey = getMorseKey()
    // this object will store how many times each transformation occurs.
    var transformed = {}
    var count = 0
    for (var i = 0; i < words.length; i++) {
        var transformedWord = ""
        for (var j = 0; j < words[i].length; j++) {
            transformedWord += (morseKey[words[i][j]])
        }
        if (!transformed[transformedWord]) {
            count++
            transformed[transformedWord] = 1;
        } else {
            continue
        }
    }
    return count
}

// Helper function: Generates a hash table with key value pairs of 
// letters and morsecode. 
function getMorseKey() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    var morseKey = {}
    for (var i = 0; i < alphabet.length; i++) {
        morseKey[alphabet[i]] = morseCode[i]
    }
    return morseKey;
}