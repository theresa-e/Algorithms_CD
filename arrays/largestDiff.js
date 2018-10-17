/* ------------------------------------
Given an array arr[] of integers, find out the
maximum difference between any two elements such
that larger element appears after the smaller number.

https://www.geeksforgeeks.org/maximum-difference-between-two-elements/
------------------------------------ */

function findMaxDifference(arr) {
    var maxDiff = arr[1] - arr[0];
    // iterate through the array and compare difference
    for (var i=0; i<arr.length; i++) {
        for (var j = i+1; j<arr.length; j++) {
            if(arr[j] - arr[i] > maxDiff) {
                maxDiff = arr[j] - arr[i];
            }
        }
    }
    return maxDiff
}