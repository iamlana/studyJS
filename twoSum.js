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


// public int[] twoSum(int[] nums, int target) {
//     Map<Integer, Integer> map = new HashMap<>();
//     for (int i = 0; i < nums.length; i++) {
//         map.put(nums[i], i);
//     }
//     for (int i = 0; i < nums.length; i++) {
//         int complement = target - nums[i];
//         if (map.containsKey(complement) && map.get(complement) != i) {
//             return new int[] { i, map.get(complement) };
//         }
//     }
//     throw new IllegalArgumentException("No two sum solution");
// }
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
