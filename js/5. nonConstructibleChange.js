const coins = [5, 7, 2, 1, 1, 3, 22];

// Time Complexity O(N * log(N))
// Space Complexity O(1)

function nonConstrctibleChange(coins) {
	coins = coins.sort((a, b) => a - b);

	let change = 0;

	for (let coin of coins) {
		if (coin > change + 1) {
			return change + 1;
		}

		change = change + coin;
	}
}

nonConstrctibleChange(coins);
