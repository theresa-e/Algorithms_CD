/* ------------------------------------
Two arrays are called similar
if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.
For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

from codesignal.com
------------------------------------ */

function areSimilar(a, b) {
    var itemsArr1 = [],
        itemsArr2 = []

    if (a.length != b.length) {
        return false
    } else {
        for (var i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                itemsArr1.push(a[i])
                itemsArr2.push(b[i])
            }
        }
    }
    // arrays cannot be similar if there are more than 2 differences
    if (itemsArr1.length > 2) {
        return false;
    }
    // if we have 2 items in each array, we'll check to see if they're similar
    if (itemsArr1.reverse().toString() == itemsArr2.toString()) {
        return true
    } else {
        for (var j = 0; j < itemsArr1.length; j++) {
            if (itemsArr1[j] != itemsArr2[j]) {
                return false
            }
        }
        return true
    }
}