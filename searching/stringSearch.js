// Accept two strings, (long, short) and loop over them to see if the short string exists in the long string. If it exists increment the count by 1.

// examples
// stringSearch('doggy', 'do') // 1
// stringSearch('doggy dog', 'do') // 2

function stringSearch(long, short) {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}
	return console.log(count);
}

stringSearch('doggy dog', 'do');
