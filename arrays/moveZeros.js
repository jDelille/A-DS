// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// example
// Input: nums = [0,1,0,3,12] // Output: [1,3,12,0,0]
// Input: nums = [0] // Output: [0]

const moveZeros = (nums) => {
 for (let i = nums.length - 1; i >= 0; i--) {
  nums[i] === 0 && nums.splice(i, 1) && nums.push(0)
 }
 return console.log(nums)
}

moveZeros([0,1,0,3,12])