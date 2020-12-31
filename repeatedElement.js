function findDuplicate(array) {
    const values = {}
    for (const el of array) {
        if (values[el] === 2) {
            return el
        } else if (values[el] === 1) {
            values[el] = 2
        } else {
            values[el] = 1
        }
    }
}

const array = [7, 2, 1, 5,5, 2, 4, 3, 2]
console.log(findDuplicate(array))
