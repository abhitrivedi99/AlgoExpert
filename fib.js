function fib(n) {
	const fibArr = [0, 1];

	if (n > 1) {
		for (let i = 2; i <= n; i++) {
			fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
		}
	}
	return fibArr[n];
}

console.log(fib(1000));

function fibRecursive(n) {
	if (n <= 1) return n;
	return fibRecursive(n - 1) + fibRecursive(n - 2);
}
