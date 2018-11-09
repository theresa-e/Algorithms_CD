/* ------------------------------------
https://leetcode.com/problems/jewels-and-stones/
------------------------------------ */

// Create object with the key being each value in J 

var numJewelsInStones = function (J, S) {
    var jewelKey = {}
    var amtOfStones = 0
    // Create hash of keys with starting value at 0.
    for (var i = 0; i < J.length; i++) {
        jewelKey[J[i]] = 0;
    }
    // Loop through second string and increment with each occurence.
    for (var j = 0; j < S.length; j++) {
        if (jewelKey[S[j]] != null) {
            console.log('ha')
            jewelKey[S[j]]++;
        }
    }
    // Add up the total occurences
    for (key in jewelKey) {
        if (jewelKey[key] != 0) {
            amtOfStones += jewelKey[key]
        }
    }
    return amtOfStones;
}
