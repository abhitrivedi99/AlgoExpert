function reverseInt(n) {
	const str = n.toString();
	const reversedString = str.split('').reverse().join('');
	return parseInt(reversedString) * Math.sign(n);
}

console.log(reverseInt(500)); // 321
console.log(reverseInt(-123)); // -321
