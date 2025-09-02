function mergeIntervals(arr) {
	if (arr.length <= 0) return [];

	// arr.sort((a,b)=> a[0] - b[0])
	// console.log({arr})
	const returnArr = [];

	for (let i = 0; i < arr.length; i += 2) {
		if (i + 1 < arr.length) {
			console.log(arr[i], arr[i + 1]);
			returnArr.push([arr[i][0], arr[i + 1][1]]);
		} else {
			returnArr.push(arr[i]);
		}
	}

	return returnArr;
}

console.log(
	mergeIntervals([
		[1, 3],
		[2, 6],
		[8, 10],
		[9, 14],
		[15, 18],
	]),
);
