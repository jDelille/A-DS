// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// examples
// Input: s = "egg", t = "add" // Output: true
// Input: s = "foo", t = "bar" // Output: false
// Input: s = "paper", t = "title" // Output: true

let isIsomorphic = function (s, t) {
	let obj1 = {},
		obj2 = {};
	for (let i = 0; i < s.length; i++) {
		if (obj1[s[i]] !== obj2[t[i]]) {
			return console.log(false);
		} else {
			(obj1[s[i]] = i), (obj2[t[i]] = i);
		}
	}
	return console.log(true);
};

isIsomorphic('egg', 'add');
