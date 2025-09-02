function palindrom(str) {
	const reversedString = str.split('').reverse().join('');

	return str === reversedString;
}

function palindromv2(str) {
	return str.split('').every((char, i) => {
		console.log({ char, i });
		return char === str[str.length - 1 - i];
	});
}

console.log(palindromv2('racecar'));
console.log(palindromv2('abhi'));
