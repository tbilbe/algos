// function getDigit(num, pos) {
//     const stringNum = num.toString().split('').reverse().join('');
//     if(pos >= stringNum.length) return 0;
//     for(let i=0;i<stringNum.length;i++) {
//         if(i === pos){
//             return parseInt(stringNum[i],10);
//         }
//     }
// }

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

// getDigit(12345,3)
// getDigit(12345, 2)

// digitCount(1234)
mostDigits([1,123,1234,12345678,444])