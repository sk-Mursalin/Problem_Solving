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


// 🧠 Question 2:
// Write a function that checks if a string is a valid palindrome. Ignore non-alphanumeric characters and case.

function isPalindrome(str) {
    const primaryString = str.split("").join("").replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();
    const seconDaryString = str.split("").reverse().join("").replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();
    console.log(primaryString === seconDaryString)
}

isPalindrome("Doc, note, I dissent. A fast never prevents a fatness. I diet on cod."); // output : true
isPalindrome("race a car") //output : false

