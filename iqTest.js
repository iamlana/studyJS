function iqTest(numbers) {
    let num = numbers.split(' ').map(Number)
    let result = 0
    let odd = []
    let even = []
    num.map((x, i) => {
            if (x % 2 === 0) {
                even.push(x)

            }else{
              odd.push(x) 
            }
        })
  
  if(even.length === 1){
    result = num.findIndex(numb => numb === even[0])
  }else{
    result = num.findIndex(odd[0])
  }
  
    return result

}

console.log(iqTest('1 2 4 2'))