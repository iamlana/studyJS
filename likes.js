function likes(names) {
  const [a, b, c, d] = names
  if (!a) {
    return "no one likes this"
  } else if (!b) {
    return `${a} likes this`
  } else if (!c) {
    return `${a} and ${b} like this`
  } else if (!d) {
    return `${a}, ${b} and ${c} like this`
  } else {
    return `${a}, ${b} and ${names.length - 2} others like this`
  }
}
