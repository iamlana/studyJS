function alphabetPosition(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = text.toLowerCase().split('')
    console.log(result)
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (text[j] === alphabet[i]) {
                result += alphabet[i] + 1 + ' '
            }
        }
    }
    result += charCodeAt

    let difference = result.filter(x => !alphabet.includes(x));
    return difference
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))