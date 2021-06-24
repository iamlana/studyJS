function order(words) {
  return words
    .split(' ')
    .map(word => ({ word, number: getNumber(word) }))
    // .map(function (word) {
    //   return {
    //     word: word,
    //     number: getNumber(word)
    //   }
    // })
    .sort((a, b) => a.number - b.number)
    .map(x => x.word)
    .join(' ')
}

const getNumber = str => parseInt(str.split('').find(isDigit))
const isDigit = char => '0123456789'.includes(char)

console.log(order("is2 Thi1s T4est 3a"))