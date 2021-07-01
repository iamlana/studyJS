function dirReduc(arr) {
    let result = []
    for (const dir of arr) {
        let last = result[result.length - 1]
        if (last !== OPPOSITE[dir]) {
            result.push(dir)
        } else {
            result.pop()
        }
    }
    return result
}

const OPPOSITE = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
}