function vowels(string) {
	const vowelString = 'aeiou';
	let count = 0;
	for (let element of string.split('')) {
		if (vowelString.includes(element)) count++;
	}

	return count;
}

console.log(vowels('abhishekaeiou?'));
