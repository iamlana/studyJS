

function moveZeroes(nums) {
    let insertAt = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            [nums[insertAt], nums[i]] = [nums[i], nums[insertAt]]
            insertAt++
        }
    }
    for (let i = insertAt; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[insertAt] ] = [ nums[insertAt], nums[i]]
            // let temp = nums[nonZeroCount]
            // nums[nonZeroCount] = nums[i]
            // nums[i] = temp
            insertAt++
        }
    }
 
    return nums
}

console.log(moveZeroes([0, 5, 7, -6, 0, 0, 8, -20]))

