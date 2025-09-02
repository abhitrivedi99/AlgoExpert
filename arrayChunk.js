function arrayChunk(arr, size) {
	const chunked = [];
	for (let i = 0; i < arr.length; i += size) {
		chunked.push(arr.slice(i, i + size));
	}
	return chunked;
}

arrayChunkv3([1, 2, 3, 4, 5], 2);

function arrayChunkv2(arr, size) {
	return arr.reduce((acc, _, i) => {
		if (i % size === 0) {
			acc.push(arr.slice(i, i + size));
		}
		return acc;
	}, []);
}

function arrayChunkv3(arr, size) {
	const chunkedArr = [];

	for (let element of arr) {
		const lastChunk = chunkedArr[chunkedArr.length - 1];

		if (!lastChunk || lastChunk.length === size) {
			chunkedArr.push([element]);
		} else {
			lastChunk.push(element);
		}
	}
	return chunkedArr;
}

function arrayChunkv4(arr, size) {
	const chunked = [];

	for (let element of arr) {
		const last = chunked[chunked.length - 1];
		console.log({ last });

		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	console.log({ chunked });
	return chunked;
}

arrayChunkv4([1, 2, 2, 2, 34], 2);
