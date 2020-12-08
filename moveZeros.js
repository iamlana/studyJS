//  function moveZeroes(nums) {
//     let length = nums.length
//     for (let i = 0; i < length; i++) {
//       if (nums[i] === 0) {
//         nums.splice(i, 1)
//         nums.push(0)
//         length--
//         i--
//       }
//     }
//     return nums
//   }

function moveZeroes(nums) {
    let nonZeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nonZeroCount], nums[i]] = [nums[i], nums[nonZeroCount]]
            // let temp = nums[zeroCount]
            // nums[zeroCount] = nums[i]
            // nums[i] = temp
            nonZeroCount++
        }
    }
    return nums
}

console.log(moveZeroes([5,7,0,0,8]))

