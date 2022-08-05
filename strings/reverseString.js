// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place 

// examples
// Input: s = ["h","e","l","l","o"] // ["o","l","l","e","h"]
// Input: s = ["H","a","n","n","a","h"] // ["h","a","n","n","a","H"]

let reverseString = function(s) {
   
 let first = 0;
 let last = s.length - 1;
 
 while(first <= last) {
     let temp = s[first];
     s[first] = s[last]
     s[last] = temp
     first++
     last--
 }
 
 return console.log(s);
};


reverseString(["h","e","l","l","o"])