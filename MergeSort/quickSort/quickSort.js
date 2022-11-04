//1) implementing the pivot and swap

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    var pivot = arr[start];
    var swapIndex = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    console.log(arr);
    return swapIndex;
}
pivot([3, 1, 6, 7, 2, 1, 8, 9]);