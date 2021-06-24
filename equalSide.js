function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let arrLeft = [0]
        let arrRight = [0]
        for (let j = i + 1; j < arr.length; j++) {
            arrRight.push(...[arr[j]])
        }
        for (let k = i - 1; k >= 0; k--) {
            arrLeft.push(arr[k])
        }
        let sumRight = arrRight.reduce((a, b) => a + b)
        let sumLeft = arrLeft.reduce((a, b) => a + b)
        if (sumLeft === sumRight) {
            return i
        }
    }
    return -1
}