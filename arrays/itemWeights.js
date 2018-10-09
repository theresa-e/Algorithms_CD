function getIndicesOfItemWeights(arr, limit) {
    var indices = []
    // isolate each element in the array
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = i - 1; j >= 0; j--) {
            // if arr[i] + arr[j] = limit
            // determine if the add up to the limit.
            if (arr[i] + arr[j] == limit) {
                indices.push(i)
                indices.push(j)
                return indices
            }
        }
    }
    return indices
}