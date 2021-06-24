function containsDuplicate(nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
};
// containsDuplicate()

// console.log(containsDuplicate([1, 2, 3, 4]))

function containsDuplicate2(nums) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = nums[i];

        if (map.has(complement)) {
            return true
        }
        map.set(nums[i], i);
    }
    return false
}

console.log(containsDuplicate2([1, 2, 3, 4]))

function duplicateCount(text) {
    let map = new Map;
    let result = 0
    for (const char of text.toLowerCase()) {
        let count = map.get(char) || 0
        map.set(char, count + 1)
    }

    for (let value of map.values()) {
        if (value > 1) {
            result++
        }
    }
    return result
}


