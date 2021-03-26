function merge(ar1, ar2) {
    const result = [];
    let i=0;
    let j=0;

    while(i<ar1.length && j<ar2.length) {
        if (ar2[j]>ar1[i]) {
            result.push(ar1[i]); 
            i++;
        } else {
            result.push(ar2[j]);
            j++
        }
        
    }
    while(i < ar1.length) {
            result.push(ar1[i]);
            i++
        }
        
        while(j < ar2.length) {
            result.push(ar1[i]);
            j++
        }
    return result
}

merge([1,2,4,8,989,9999999],[2,3,5,6,7,101,10002])  