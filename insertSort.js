function insertSort(arr) {

    for (let i=1;i<arr.length;i++) {
        let currentVal = arr[i];
        for (let j=i-1;j>=0 && arr[j]>currentVal;j--) {
            arr[j + 1] = arr[j]
            arr[j] = currentVal;   
        }

    }

    return arr;
}

insertSort([2,6,4,34,72,12,8,19,22,28,3]);

function swap(arr, id1, id2) {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
}