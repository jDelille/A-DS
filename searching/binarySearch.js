// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// examples
// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2

function binarySearch(arr, elem) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (arr[middle] !== elem) {
		if (!arr.includes(elem)) {
			return console.log(-1);
		}
		if (elem < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return console.log(middle);
}

binarySearch([1,2,3,4,5],3);
