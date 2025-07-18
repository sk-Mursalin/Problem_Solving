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

twoSum([11, 2, 7, 15, 48, 55, 3, 8], 9);


// 🧠 Question 2:
// Write a function that checks if a string is a valid palindrome. Ignore non-alphanumeric characters and case.

function isPalindrome(str) {
    const primaryString = str.split("").join("").replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();
    const seconDaryString = str.split("").reverse().join("").replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();
    console.log(primaryString === seconDaryString)
}

isPalindrome("Doc, note, I dissent. A fast never prevents a fatness. I diet on cod."); // output : true
isPalindrome("race a car") //output : false

// 🧠 Question 3:
// Write a function that returns the first non-repeating character in a string. If there’s no non-repeating character, return null.

function firstNonRepeatingChar(str) {
    const strToArr = str.split("");
    console.log(strToArr);
    const result = strToArr.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] = ++acc[curr]
        }
        else {
            acc[curr] = 1
        }
        return acc
    }, {});
    for (let char of str) {
        if (result[char] === 1) {
            return char
        }
        return null
    }
}

console.log(firstNonRepeatingChar("leetcode"));


// 🧠 Question 4:
// Write a function that returns the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(str) {
    let nonRepeatingArray = [];
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (nonRepeatingArray.indexOf(str[i]) === -1) {
            nonRepeatingArray.push(str[i]);
        }
    }
    console.log(nonRepeatingArray);
}

lengthOfLongestSubstring("skmursalin");

// # 🧠 Question 5:
// Given an array of integers nums, find the maximum product of any three numbers.

function maximumProduct(array) {
    let compareResult = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                let product = array[i] * array[j] * array[k]
                if (product > compareResult) {
                    compareResult = product
                }
            }
        }
    }
    return compareResult
};

console.log(maximumProduct([10, 10, 5, 2, 8, 6, 9])); // Output: 900

// or this approach ⬇

function maximumProduct(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;

    const case1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const case2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(case1, case2);
}

console.log(maximumProduct([10, 10, 5, 2, 8, 6, 9])); // Output: 900


// 🧠 Question 6:
// Given a list of daily temperatures, return a new list such that, for each day in the input, it tells you how many days you would have to wait until a warmer temperature.
// If there is no future day for which this is possible, put 0 instead.

function dailyTemperatures(temperatures) {
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                console.log(j - i);
                break;
            }
            continue;

        }
    }
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

// # 🧠 Question 7:
// You are given an integer array nums. You are also given an integer k.

// Your task is to return true if there are two distinct indices i and j in the array such that:

// nums[i] === nums[j], and

// the absolute difference between i and j is at most k.

// Otherwise, return false.

function containsNearbyDuplicate(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] === nums[j]) && (j - i <= k)) {
                return true
            }
        }
    }
    return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

// 🧠 Question 8:
// Given an array of integers nums, return all unique triplets in the array which sum up to zero.

function threeSum(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k] === 0)) {
                    output.push([nums[i], nums[j], nums[k]]);
                    break;
                }
            }
        }
    }
    return output;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));