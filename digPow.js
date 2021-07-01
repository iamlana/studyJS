function digPow(n, p) {
   const sum = n.toString()
      .split('')
      .map((digit, i) => Number(digit) ** (p + i))
      .reduce((a, b) => a + b, 0)
   let result = sum / n
   return Number.isInteger(result) ? result : -1
}
