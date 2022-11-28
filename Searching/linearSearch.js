//linear Search
//ONE element at a time

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}
linearSearch([1, 2, 3, 4, 5, 6, 7], 6);

//6 is at position 5 Hence 5 is returned

//Binary linearSearch
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}
binarySearch([1, 2, 5, 6, 7, 9, 11, 34], 11);


// Naive Search
function naiveSearch(long, short) {
    var count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}
naiveSearch("lorie loled", "lo");

// returns a count of 2
