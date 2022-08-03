// Given a string s, find the length of the longest substring without repeating characters.

// examples
// Input: s = "abcabcbb" // Output: 3
// Input: s = "bbbbb" // Output: 1
// Input: s = "pwwkew" // Output: 3

let lengthOfLongestSubstring = function (s) {
	let max = 0;
	let begin = 0;
	let set = new Set();
	for (let end = 0; end < s.length; end++) {
		while (set.has(s[end])) {
			set.delete(s[begin]);
			begin = begin + 1;
		}
		set.add(s[end]);
		max = Math.max(max, end - begin + 1);
	}
	return console.log(max);
};

lengthOfLongestSubstring('bbbbb');
