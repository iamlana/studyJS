function tribonacci(signature, n) {
    let answer = []
    if (n === 0) {
        return answer
    }else{
        answer.push(...signature)
        for (let i = 0; i < n - 3; i++) {
            answer.push(answer[i]+answer[i+1]+answer[i+2])
        }
        return answer
    }
    
}

console.log(tribonacci([0, 0, 0], 10))