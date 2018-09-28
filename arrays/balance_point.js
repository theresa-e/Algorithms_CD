/* ------------------------------------
Here, a balance point is on an index, not
between indices.Return the balance index
where sums are equal on either side(exclude
its own value).

Input:
    - Array of integers
Output:
    - If balance point exists, return true
    - If point does not exists, return false.
------------------------------------ */ 

function balancePoint(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return false;
    }
    var sum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    var leftSum = arr[0];
    var j = 1;
    while (j < arr.length - 1) {
        if (leftSum == sum / 2) {
            return true;
        }
        leftSum += arr[j];
        j++;
    }
    return false;
}
