/* ------------------------------------
Write a function that returns whether 
the given array has a balance point 
between indices, where one side’s sum
is equal to the other’s.

Input:
    - Array of numbers
Output:
    - If point exist, return its index.
    - If point does not exist, return -1.
------------------------------------ */

function balanceIndex(arr) {
    if (arr.length < 3) {
        return -1;
    }
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log('---- Sum of all values: ', sum);
    var leftSum = arr[0];
    var j = 1;
    while (j < arr.length - 1) {
        if (leftSum == ((sum - arr[j] / 2))) {
            return j;
        }
        console.log('---- Value of j is: ', j);
        console.log('---- Value of leftSum is: ', leftSum);
        leftSum += arr[j];
        j++;
    }
    return -1;
}