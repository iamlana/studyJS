function twoSum(nums, target) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                newArr.push(i)
                return newArr
            }
        }
    }
    return newArr
};

// twoSum()


function twoSum2(nums, target) {

    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum2([0, 2, 5], 3))
