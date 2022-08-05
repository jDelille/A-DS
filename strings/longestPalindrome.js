// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// examples 
// Input: s = "abccccdd" // 7
// Input: s = "a" // 1

let longestPalindrome = function(s) {
 // if only one letter return s
 if (s.length === 1) return s.length;
 
 let longest = 0;
 let keys = {};
 
 for (const char of s) {
     // keep track of char count in the keys obj
     keys[char] = (keys[char] || 0) + 1;
     // if add 2 to the longest var everytime we hit an even number count
     if (keys[char] % 2 == 0) longest += 2;
 }

 return console.log(s.length > longest ? longest + 1 : longest);
};

longestPalindrome("abccccdd")