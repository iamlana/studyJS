function queueTime(customers, n) {
    let result = 0
    if (customers.length === 0) {
        return result
    }
    if (n > customers.length) {
        return Math.max(...customers)
    }
    if (n === 1) {
        return customers.reduce((a, b) => a + b)
    }
    let group = customers.slice(0, n)
    for (let i = n; i < customers.length; i++) {
        let fastestQueue = Math.min(...group)
        let qq = group.indexOf(fastestQueue)
        group[qq] += customers[i]
    }
    return Math.max(...group)
}
console.log(queueTime([2, 7, 3, 3, 4, 4], 4))