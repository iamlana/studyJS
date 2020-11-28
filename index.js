// const table = [3, 6, 98, 1, 66, 9]
// let result = []
// for (let i = 0; i < table.length; i++) {
//     result[i] = table[i] * 2
// }
// console.log(table, result)

let firstArray = ['a', 'b', 'c', 'd']
let secondArray = ['e', 'f', 'c']

function commonLettersInTwoArrays(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true
            }
        }
    }
    return false
}

console.log(commonLettersInTwoArrays(firstArray, secondArray))