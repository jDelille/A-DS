// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// examples
// Input: s = "Let's take LeetCode contest" // "s'teL ekat edoCteeL tsetnoc"
// Input: s = "God Ding" // "doG gniD"

const reverseWords = (s) => {
	let split = s.split(' ');
	let reversed = split.map((elem) => elem.split('').reverse().join(''));
	return console.log(reversed.join(' '));
};

reverseWords("Let's take LeetCode contest");
