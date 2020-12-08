const arr1 = [1, 4, 7, 9, 12, 30]
const arr2 = [2, 5, 8, 13, 48]

// function mergeNSort(arrayOne, arrayTwo) {
//     let result = arrayOne.concat(arrayTwo).sort((el1, el2) => el1 - el2)
//     return result
// }



function mergeNSort2(arrayOne, arrayTwo) {
    const result = []
    let i = 1
    let j = 1
    let item1One = arrayOne[0]
    let item1Two = arrayTwo[0]
    if (arrayOne.length === 0) {
        return arrayTwo
    }
    if (arrayTwo.length === 0) {
        return arrayOne
    }
    while (arrayOne || arrayTwo) {
        if (!item1Two || item1One < item1Two) {
            result.push(item1One)
            item1One = arrayOne[i]
            i++
        } else { 
            result.push(item1Two)
            item1Two = arrayTwo[j]
            j++
        }
    }
    return result

}
console.log(mergeNSort2(arr1, arr2))