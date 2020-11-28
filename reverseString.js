function reverse(str) {
    let reversed = []
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i])
    }
    return reversed.join('');
}

let newString = "Hello i am";
console.log(reverse(newString))

// splitrevesejoin