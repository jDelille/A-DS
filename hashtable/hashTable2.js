// Create a HashTable class with table and size initial properties
// Add a hash() function to transform keys into indices
// Add the set() and get() methods for adding and retrieving key/value pairs from the table.

// Create the HashTable class with 127 buckets.
class HashTable {
	constructor() {
		this.table = new Array(127);
		this.size = 0;
	}

	// Write the hash() method that will accept a key value and transform it into an index.
	// Use the "_" method to indicate a private class.
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		// Since the HashTable has 127 buckets, return a number between 0 and 127. (use %)
		return hash % this.table.length;
	}

	// Write the set() method that will call the _hash() method to get the index value;
	set(key, value) {
		const index = this._hash(key);
		// Assign the [key, value] pair to the table at the specified index.
		this.table[index] = [key, value];
		// Increment the size property by 1.
		this.size++;
	}

	// Write the get() method to retrieve a value by its key.
	// Accept key as a parameter.
	get(key) {
		// Call the _hash() method to get the table index.
		const index = this._hash(key);
		// Return the value stored at table[index]
		return this.table[index];
	}

	// Write the remove() method to delete a key/value pair from the HashTable.
	// Accept key as a parameter.
	remove(key) {
		// Get the correct index using _hash() method.
		const index = this._hash(key);
		// Check if the table[index] has a truthy value and the length is greater than 0.
		if (this.table[index] && this.table[index].length) {
			// Assign the undefined value to the right index and decrease size by 1 if it is.
			this.table[index] = undefined;
			this.size--;
			return true;
		} else {
			// If not undefined return false.
			return false;
		}
	}
}

const ht = new HashTable();
ht.set('Canada', 300);
ht.set('France', 100);
ht.set('Spain', 110);

console.log(ht.get('Canada')); // [ 'Canada', 300 ]
console.log(ht.get('France')); // [ 'France', 100 ]
console.log(ht.get('Spain')); // [ 'Spain', 110 ]
