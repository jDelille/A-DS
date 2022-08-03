// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// examples
// numbers = [2,7,11,15], target = 9 // [1,2]
// numbers = [2,3,4], target = 6 // [1,3]
// numbers = [-1,0], target = -1 // [1,2]

const twoSum = (numbers, target) => {
	let lower = 0;
	let upper = numbers.length - 1;
	while (upper > lower) {
		let sum = numbers[lower] + numbers[upper];
		if (sum < target) {
			lower += 1;
		} else if (sum > target) {
			upper -= 1;
		} else {
			return console.log([lower + 1, upper + 1]);
		}
	}
};

twoSum([2,7,11,15], 9)
