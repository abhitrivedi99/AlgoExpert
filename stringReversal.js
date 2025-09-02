// My version
function reversev1(str) {
	const arr = str.split('');

	let reversedString = '';

	for (i = arr.length - 1; i >= 0; i--) {
		reversedString += arr[i];
	}

	return reversedString;
}

// Improved version
function reversev2(str) {
	let reversedString = '';

	for (let char of str) {
		reversedString = char + reversedString;
	}

	return reversedString;
}

function reversev3(str) {}

console.log(reversev2('abhi'));
