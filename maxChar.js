function maxChar(str) {
	const charCount = {};

	for (const char of str) {
		if (charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}
	return findMaxChar(charCount);
}

function findMaxChar(charCount) {
	console.log({ charCount });
	let maxChar = '';
	let maxCount = 0;

	for (const char in charCount) {
		if (charCount[char] > maxCount) {
			maxCount = charCount[char];
			maxChar = char;
		}
	}
	console.log({ maxChar, maxCount });
	return maxChar;
}

maxChar('abcccccccd');
