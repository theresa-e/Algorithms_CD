/* -------- Balance Point -------- */
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

/* -------- Balance Index -------- */
function balanceIndex(arr) {
    if (arr.length < 3) {
        return -1;
    }
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    var leftSum = arr[0];
    var j = 1;
    while (j < arr.length - 1) {
        if (leftSum == ((sum - arr[j] / 2))) {
            return j;
        }
        console.log('j is', j);
        console.log('leftSum is', leftSum);
        leftSum += arr[j];
        j++;
    }
    return -1;
}