function tickets(peopleInLine) {
    let twentyFives = 0
    let fifties = 0
    for (const person of peopleInLine) {
        if (person === 25) {
            twentyFives++
        } else if (person === 50) {
            fifties++
            if (twentyFives === 0) {
                return 'NO'
            }
            twentyFives--
        } else if (person === 100) {
            if (fifties > 0 && twentyFives > 0) {
                fifties--
                twentyFives--
            } else if (twentyFives > 2) {
                twentyFives -= 3
            } else {
                return 'NO'
            }
        }
    }
    return "YES"
}
