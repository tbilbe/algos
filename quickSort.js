function pivotHelper(arr, startIndex=0, endIndex=arr.length-1) {



    let pivotIndex = startIndex;
    const pivot = arr[startIndex];

    for (let i=pivotIndex + 1;i<arr.length;i++) {
        if(pivot > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex,i)
        }
    }

    swap(arr, pivotIndex, startIndex)

return pivotIndex;
}
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function quickSort(arr, left=0, right=arr.length -1) {
    if (left<right) {
        let pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

quickSort([1,4,8,6,23,45,100,6,2,3,5])