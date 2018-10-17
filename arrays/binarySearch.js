// Array must be sorted for binary search algorithm to work.
// Can be implemented recursively or iteratively

// Recursive
function binarySearchRecursive (array, val, left, right) {
    // We've searched the entire array and value was not found.
    if (left > right) {
        return false;
    }
    var mid = left + right / 2;
    // We found the value!
    if (array[mid] == val) {
        return true;
    } else if (val < array[mid]) {
        // If val is less than midpoint, we'll look on the left side
        return binarySearchRecursive(array, val, left, mid - 1);

    } else {
        // Val is bigger than midpoint, so we look on the right. 
        return binarySearchRecursive(array, val, mid + 1, right)
    }
}

// Iterative
function binarySearchIterative(array, val) {
    var left = 0;
    var right = array.length - 1;
    while (left <= right) {
        var mid = Math.floor(right - left) / 2;
        if (array[mid] == val) {
            // We found the value! 
            return true;
        } else if (val > array[mid]) {
            left = mid - 1;
        } else {
            right = mid + 1;
        }
    }
    // if we exit the while loop without returning true then
    // we know the value is not in our array.
    return false;
}