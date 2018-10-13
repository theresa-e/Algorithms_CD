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