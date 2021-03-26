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


pivotHelper([7,2,1,4,2,1,19,22,5,6],0) //5
/* 
[2, 1, 4, 7, 19,22,5, 6]
*/

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}