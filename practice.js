// 🧠 Question1:
// Given an array of integers, return the indices of the two numbers such that they add up to a specific target.

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i++; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(nums.indexOf(nums[i]), nums.indexOf(nums[j]));
            }
        }
    }
}

twoSum([11, 2, 7, 15,48,55,3,8], 9);




