function twoSum(nums, target) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }

        numIndices.set(nums[i], i);
    }

    return [];
}


