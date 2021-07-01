function comp(array1, array2) {
    let a = array1.sort((a, b) => b - a).map(el => el * el)
    let b = array2.sort((a, b) => b - a)
    if (a === b) {
        return true
    }
    return false
}