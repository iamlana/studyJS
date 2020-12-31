function rotate(nums, k) {
    
    console.log(k)
    let prev
    
    let curr
    // console.log("curr" + curr)
    for (let i = 0; i < k; i++) {
        prev = nums[nums.length - 1]
        console.log("prev " + prev)
        for (let j = 0; j < nums.length; j++) {
            curr = nums[j]
            nums[j] = prev
            prev = curr
        }
    }
    return nums
};


console.log(rotate([1, 2, 3, 6, 44, 87, 0, 43], 3))