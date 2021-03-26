class HashTable {
    constructor(size=5) { // give a default size that is a prime
        this.keyMap = new Array(size);
    }

    _hash(key) { 
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let val = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + val) % this.keyMap.length;
        }
        return Math.abs(total);
    }

    set(key, value) {
        const arrayIdx = this._hash(key);
        if(this.keyMap[arrayIdx] === undefined) {
            this.keyMap[arrayIdx] = [[key, value]]
        } else {
            this.keyMap[arrayIdx].push([key, value])
        }
        return this.keyMap
     }

     get(key) {
         const arrayIdx = this._hash(key);
         if (!this.keyMap[arrayIdx]) {
             return undefined;
         } else {
            const setted = this.keyMap[arrayIdx].find(subA => {return subA[0] === key});
            return setted ? setted[1] : undefined;
         }
     }

     keys() {
         return this.keyMap.map(el => {
             if(el.length === 1) {
                 return el[0][0]
             } else if(el.length > 1) {
                  return el.map(subA => subA[0]);
                   
             }
         }).flat()
     }
     values() {
         let valuesArr = [];
         for (let i=0; i<this.keyMap.length; i++) {
             if (this.keyMap[i]) {
                 for(let j=0; j <this.keyMap[i].length; j++) {
                     if (!valuesArr.includes(this.keyMap[i][j][1]))
                     valuesArr.push(this.keyMap[i][j][1])
                 }
             }
         }
         return valuesArr;
     }
}

var HT = new HashTable();
HT.set('hi', 999);
HT.set('thomas', 'the best');
HT.set('french fries', 9);
HT.set('man', 'utd' );
HT.set('manldvabs', 'utd' );


