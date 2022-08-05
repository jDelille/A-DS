// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// examples
// Input: prices = [7,1,5,3,6,4] // 5
// Input: prices = [7,6,4,3,1] // 0

let maxProfit = function (prices) {
	// original price
	let buyPrice = prices[0];

	// keep track of profit
	let profit = 0;

	// Go through the array and see if there is profit
	for (let i = 0; i < prices.length - 1; i++) {
		let tempProfit = prices[i + 1] - prices[i];
		if (tempProfit > 0) {
			if (prices[i] < buyPrice) buyPrice = prices[i];
			if (prices[i + 1] - buyPrice > profit) profit = prices[i + 1] - buyPrice;
		}
	}
	return console.log(profit);
};

maxProfit([7,1,5,3,6,4])
