// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// examples
// Input: nums = [-4,-1,0,3,10] // Output: [0,1,9,16,100]
// Input: nums = [-7,-3,2,3,11] // Output: [4,9,9,49,121]

let sortedSquares = function (nums) {
	let squared = [];

	nums.forEach((num, index) => {
		squared.push(nums[index] * nums[index]);
	});

	squared.sort(function (a, b) {
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});

	return console.log(squared);
};


sortedSquares([-7,-3,2,3,11])