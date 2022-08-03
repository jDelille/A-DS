// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

let addTwoNumbers = function (l1, l2) {
	let carry = 0;
	let prevNode = new ListNode();
	const headNode = prevNode;
	while (l1 || l2 || carry) {
		let val1 = 0;
		let val2 = 0;
  
		if (l1) {
			val1 = l1.val;
			l1 = l1.next;
		}
		if (l2) {
			val2 = l2.val;
			l2 = l2.next;
		}

		let sum = val1 + val2 + carry;
		carry = sum > 9 ? 1 : 0;
		let digit = sum % 10;
  
		const currNode = new ListNode(digit);
		prevNode.next = currNode;
		prevNode = currNode;
	}
	return headNode.next;
};
