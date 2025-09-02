const arr = [1, 2, 3, 6, 4, 2, 5, 6, 1];
// Output: [1,2,3,4,5,6]

function removeDuplicateAndSort(arr) {
	return [...new Set(arr)].sort();
}

function removeDuplicateAndSort2(arr) {
	return arr
		.filter((item, index) => {
			console.log({ item, index });
			return arr.indexOf(item) === index;
		})
		.sort();
}

function removeDuplicateAndSort3(arr) {
	const set = [];

	for (let item of arr) {
		if (set.includes(item)) {
			continue;
		} else {
			set.push(item);
		}
	}

	return set;
}

console.log(removeDuplicateAndSort3(arr));
