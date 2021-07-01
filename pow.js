function findNb(m) {
    let i = 0
    while (m > 0) {
        m -= ++i ** 3
    }
    return m < 0 ? -1 : i
}
