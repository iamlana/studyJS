function persistence(num) {
    let newNum = num.toString().split('').map(Number)
    if (newNum.length === 1) {
        return newNum[0]
    } else {
        return persistence(newNum.reduce((prev, curr) => prev * curr))
    }
}

console.log(persistence(39))