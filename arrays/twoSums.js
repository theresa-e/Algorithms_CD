/* ------------------------------------
Question: Given an array of integers and a target sum, find all pairs that add up to the target sum.Write a
function twoSum that solves this.

const arr = [7, 0, -4, 5, 2, 3];

twoSum(arr, 5); // [[0, 5], [2, 3]]
------------------------------------ */

// Brute force solution: 
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        // isolate each number and add it with the remaining
        // values in the array to find the sum. 
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};


// More effective / lower runtime:
// By sorting the array, we can implement binary search.

var twoSumV2 = function (nums, target) {
    var sortedArr = nums.sort();
    var results = [];cd 
    for (var i=0; i<sortedArr.length; i++) {
        var difference = target - sortedArr[i];
        differenceFound = binarySearch(sortedArr, difference);
        if (differenceFound) {
            results.push([sortedArr[i], differenceFound]);
        }
    }
    return results;
}

// helper function
function binarySearch(arr, value) {
    var left = 0;
    var right = arr.length-1
    while (left <= right) {
        var midpoint = Math.floor(right-left)/2
        if (arr[midpoint] == value) {
            // return the value because we want to use it!
            return value; 
        } else {
            if (value > arr[midpoint]) {
                left = midpoint + 1;
            } else {
                right = midpoint -1;
            }
        }
    }
    return false;
}