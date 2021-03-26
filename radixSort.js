function radixSort(arr) {
    const mostDigitsForLoop = mostDigits(arr);
    
    for (let k=0; k<mostDigitsForLoop;k++) {
        let digitBuckets = [...Array(10)].map(() => []);
        for (let i=0; i< arr.length; i++) {
            const dropIntoBucket = getDigit(arr[i],k);
            digitBuckets[dropIntoBucket].push(arr[i])
        }
        console.log(digitBuckets);
        arr = [].concat(...digitBuckets);
        console.log(arr)
    }
    return arr
}
/*
[12,91,8,1]

[]
*/

radixSort([10012,5,13,28,12,78,45,52,1898])










function getDigit(num, power) {
    return Math.floor(Math.abs(num) / Math.pow(10, power)) % 10;
}

function digitCount(num) {
    if (num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let most = 1;
    for (let i=0; i< arr.length;i++) {
        const thisCount = digitCount(arr[i]);
        if (thisCount > most) {
            most = thisCount;
        }        
    }
    return most;
}