// Given a string s, return the longest palindromic substring in s.

// examples
// Input: s = "babad" // Output: "bab"
// Input: s = "cbbd" // Output: "bb"

let longestPalindrome = function (s) {
	if (s.length < 1 || s === null) return '';

	let str = '';

	for (let i = 0; i < s.length; i++) {
		let odd = expandFromCenter(s, i, i);
		let even = expandFromCenter(s, i - 1, i);

		if (odd?.length > str.length) {
			str = odd;
		}
		if (even?.length > str.length) {
			str = even;
		}
	}
	return console.log(str);
};

function expandFromCenter(s, left, right) {
	let i = 0;
	while (s[left - i] && s[left - i] === s[right + i]) {
		i++;
	}
	i--;

	return s.slice(left - i, right + i + 1);
}

longestPalindrome('babad');
