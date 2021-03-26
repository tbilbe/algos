function anna(ara, arb) {
    if (ara.length !== arb.length) {
        return false
    }

    const obj = {}
    const obj2 = {}

    for (let letter of ara.split('')) {
        if (!obj[letter]) {
            obj[letter] = 1;
        } else {
            obj[letter]++
        }
    }

        for (let letter of ara.split('')) {
        if (!obj2[letter]) {
            obj2[letter] = 1;
        } else {
            obj2[letter]++
        }
    }

console.log('obj',obj)
console.log('obj2',obj2)
}

anna(['abcdef'], ['abcdef'])